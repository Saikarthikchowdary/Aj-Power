"use client";

import { useEffect, useState } from "react";
import { GALLERY_STOCK } from "@/lib/data";

type Item = { url: string; caption?: string };

export default function GalleryGrid() {
  const [images, setImages] = useState<Item[]>(GALLERY_STOCK.map((url) => ({ url })));
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { db } = await import("@/lib/firebase");
        const { collection, getDocs, orderBy, query } = await import("firebase/firestore");
        const snap = await getDocs(query(collection(db, "gallery"), orderBy("order", "asc")));
        if (!snap.empty) {
          setImages(snap.docs.map((d) => ({ url: d.data().url, caption: d.data().caption })));
        }
      } catch {
        // Firebase not configured yet — keep the stock images.
      }
    })();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="ggrid">
        {images.map((img, i) => (
          <a href={img.url} key={i} onClick={(e) => { e.preventDefault(); setLightbox(img.url); }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.url} alt={img.caption || `AJ Power Solutions project site ${i + 1}`} loading="lazy" />
          </a>
        ))}
      </div>
      {lightbox && (
        <div className="lightbox open"
          onClick={(e) => { if ((e.target as HTMLElement).tagName !== "IMG") setLightbox(null); }}>
          <button className="x" aria-label="Close" onClick={() => setLightbox(null)}>×</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="Gallery preview" />
        </div>
      )}
    </>
  );
}