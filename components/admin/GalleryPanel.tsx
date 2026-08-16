"use client";

import { useEffect, useRef, useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";

type GalleryDoc = { id: string; url: string; publicId?: string; caption?: string; order: number };

export default function GalleryPanel() {
  const [items, setItems] = useState<GalleryDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [busy, setBusy] = useState("");
  const dragIndex = useRef<number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { db } = await import("@/lib/firebase");
        const { collection, getDocs, orderBy, query } = await import("firebase/firestore");
        const snap = await getDocs(query(collection(db, "gallery"), orderBy("order", "asc")));
        setItems(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<GalleryDoc, "id">) })));
      } catch {
        setLoadError("Couldn't load the gallery. Check your Firestore rules and .env.local.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    e.target.value = "";

    for (const file of files) {
      setBusy(`Uploading ${file.name}…`);
      try {
        const { url, publicId } = await uploadToCloudinary(file);
        const { db } = await import("@/lib/firebase");
        const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
        const order = items.length ? Math.max(...items.map((i) => i.order)) + 1 : 0;
        const ref = await addDoc(collection(db, "gallery"), {
          url, publicId, caption: "", order, uploadedAt: serverTimestamp(),
        });
        setItems((prev) => [...prev, { id: ref.id, url, publicId, caption: "", order }]);
      } catch (err) {
        alert(err instanceof Error ? err.message : "Upload failed.");
      }
    }
    setBusy("");
  }

  async function remove(item: GalleryDoc) {
    if (!confirm("Remove this image from the gallery?")) return;
    const prev = items;
    setItems((list) => list.filter((i) => i.id !== item.id));
    try {
      const { db } = await import("@/lib/firebase");
      const { doc, deleteDoc } = await import("firebase/firestore");
      await deleteDoc(doc(db, "gallery", item.id));
    } catch {
      alert("Couldn't remove that image. Restoring it.");
      setItems(prev);
    }
  }

  async function onDrop(target: number) {
    const src = dragIndex.current;
    dragIndex.current = null;
    if (src === null || src === target) return;

    const next = [...items];
    const [moved] = next.splice(src, 1);
    next.splice(target, 0, moved);
    const reordered = next.map((item, idx) => ({ ...item, order: idx }));
    setItems(reordered);

    try {
      const { db } = await import("@/lib/firebase");
      const { doc, writeBatch } = await import("firebase/firestore");
      const batch = writeBatch(db);
      reordered.forEach((item) => batch.update(doc(db, "gallery", item.id), { order: item.order }));
      await batch.commit();
    } catch {
      alert("Reordered on screen, but couldn't save the new order. Refresh to see the stored order.");
    }
  }

  return (
    <section>
      <div className="adm-head">
        <h1>Gallery</h1>
        <span className="adm-count">{items.length} image{items.length === 1 ? "" : "s"}</span>
      </div>

      <div className="adm-filters">
        <label className="adm-btn adm-btn-primary adm-upload">
          Upload images
          <input type="file" accept="image/*" multiple onChange={handleUpload} hidden />
        </label>
        {busy && <span className="adm-busy">{busy}</span>}
      </div>

      <p className="adm-hint">Drag any image to reorder. This order is what shows on the public gallery page.</p>

      {loading && <div className="adm-empty">Loading gallery…</div>}
      {!loading && loadError && <div className="adm-empty adm-empty-err">{loadError}</div>}
      {!loading && !loadError && !items.length && (
        <div className="adm-empty">No images yet. Upload your first project photo to get started.</div>
      )}

      {!!items.length && (
        <div className="adm-gal">
          {items.map((item, i) => (
            <div className="adm-galcard" key={item.id} draggable
              onDragStart={() => { dragIndex.current = i; }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(i)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.url} alt={item.caption || `Gallery image ${i + 1}`} />
              <div className="adm-galbar">
                <span>#{i + 1}</span>
                <button className="adm-del" onClick={() => remove(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}