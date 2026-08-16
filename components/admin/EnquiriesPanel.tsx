"use client";

import { useEffect, useMemo, useState } from "react";

type Enquiry = {
  id: string; name: string; company?: string; email: string; phone: string;
  service: string; message: string; status?: "new" | "read";
  createdAt?: { seconds: number } | null;
};

const SERVICE_FILTERS = [
  "All services", "Design & Engineering", "HT & LT Works", "Internal Electrification",
  "Lighting Management", "Testing & Commissioning", "Maintenance & Service",
  "Other / General enquiry",
];

function toDate(e: Enquiry): Date | null {
  if (!e.createdAt?.seconds) return null;
  return new Date(e.createdAt.seconds * 1000);
}

export default function EnquiriesPanel() {
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [search, setSearch] = useState("");
  const [service, setService] = useState("All services");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { db } = await import("@/lib/firebase");
        const { collection, getDocs, orderBy, query } = await import("firebase/firestore");
        const snap = await getDocs(query(collection(db, "enquiries"), orderBy("createdAt", "desc")));
        setRows(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Enquiry, "id">) })));
      } catch {
        setLoadError("Couldn't load enquiries. Check your Firestore rules are published and .env.local is filled in.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => rows.filter((r) => {
    if (service !== "All services" && r.service !== service) return false;
    const d = toDate(r);
    if (from && d && d < new Date(from + "T00:00:00")) return false;
    if (to && d && d > new Date(to + "T23:59:59")) return false;
    if (search.trim()) {
      const hay = `${r.name} ${r.email} ${r.company || ""} ${r.phone}`.toLowerCase();
      if (!hay.includes(search.trim().toLowerCase())) return false;
    }
    return true;
  }), [rows, search, service, from, to]);

  async function markRead(id: string) {
    setExpanded(expanded === id ? null : id);
    const row = rows.find((r) => r.id === id);
    if (!row || row.status === "read") return;
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status: "read" } : r)));
    try {
      const { db } = await import("@/lib/firebase");
      const { doc, updateDoc } = await import("firebase/firestore");
      await updateDoc(doc(db, "enquiries", id), { status: "read" });
    } catch { /* non-critical */ }
  }

  async function remove(id: string, name: string) {
    if (!confirm(`Delete the enquiry from ${name}? This can't be undone.`)) return;
    const prev = rows;
    setRows((r) => r.filter((x) => x.id !== id));
    try {
      const { db } = await import("@/lib/firebase");
      const { doc, deleteDoc } = await import("firebase/firestore");
      await deleteDoc(doc(db, "enquiries", id));
    } catch {
      alert("Couldn't delete that enquiry. Restoring it to the list.");
      setRows(prev);
    }
  }

  function downloadCsv() {
    const header = ["Name", "Company", "Email", "Phone", "Service", "Message", "Date", "Status"];
    const esc = (v: string) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const lines = filtered.map((r) => {
      const d = toDate(r);
      return [r.name, r.company || "", r.email, r.phone, r.service, r.message,
        d ? d.toLocaleString("en-IN") : "", r.status || "new"].map(esc).join(",");
    });
    const blob = new Blob([[header.map(esc).join(","), ...lines].join("\n")], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `ajpower-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <section>
      <div className="adm-head">
        <h1>Enquiries</h1>
        <span className="adm-count">
          {filtered.length} of {rows.length}
          {rows.filter((r) => r.status !== "read").length > 0 &&
            ` · ${rows.filter((r) => r.status !== "read").length} new`}
        </span>
      </div>

      <div className="adm-filters">
        <input type="search" placeholder="Search name, email, company or phone"
          value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {SERVICE_FILTERS.map((s) => <option key={s}>{s}</option>)}
        </select>
        <label className="adm-date">From <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} /></label>
        <label className="adm-date">To <input type="date" value={to} onChange={(e) => setTo(e.target.value)} /></label>
        <button className="adm-btn adm-btn-primary" onClick={downloadCsv} disabled={!filtered.length}>
          Download CSV
        </button>
      </div>

      {loading && <div className="adm-empty">Loading enquiries…</div>}
      {!loading && loadError && <div className="adm-empty adm-empty-err">{loadError}</div>}
      {!loading && !loadError && !rows.length && (
        <div className="adm-empty">No enquiries yet. Submissions from the contact form will appear here.</div>
      )}
      {!loading && !loadError && rows.length > 0 && !filtered.length && (
        <div className="adm-empty">No enquiries match these filters.</div>
      )}

      {!!filtered.length && (
        <div className="adm-tablewrap">
          <table className="adm-table">
            <thead>
              <tr><th>Name</th><th>Company</th><th>Email</th><th>Phone</th>
                <th>Service</th><th>Message</th><th>Date</th><th></th></tr>
            </thead>
            <tbody>
              {filtered.map((r) => {
                const d = toDate(r);
                const isNew = r.status !== "read";
                const open = expanded === r.id;
                return (
                  <tr key={r.id} className={isNew ? "is-new" : ""} onClick={() => markRead(r.id)}>
                    <td>{isNew && <span className="adm-dot" aria-label="Unread" />}{r.name}</td>
                    <td>{r.company || "—"}</td>
                    <td><a href={`mailto:${r.email}`} onClick={(e) => e.stopPropagation()}>{r.email}</a></td>
                    <td><a href={`tel:${r.phone}`} onClick={(e) => e.stopPropagation()}>{r.phone}</a></td>
                    <td>{r.service}</td>
                    <td className="adm-msg">{open || r.message.length <= 60 ? r.message : r.message.slice(0, 60) + "…"}</td>
                    <td>{d ? d.toLocaleDateString("en-IN") : "—"}</td>
                    <td>
                      <button className="adm-del" aria-label={`Delete enquiry from ${r.name}`}
                        onClick={(e) => { e.stopPropagation(); remove(r.id, r.name); }}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}