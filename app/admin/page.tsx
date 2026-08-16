"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "firebase/auth";
import EnquiriesPanel from "@/components/admin/EnquiriesPanel";
import GalleryPanel from "@/components/admin/GalleryPanel";

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [tab, setTab] = useState<"enquiries" | "gallery">("enquiries");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    let unsub = () => {};
    (async () => {
      try {
        const { auth } = await import("@/lib/firebase");
        const { onAuthStateChanged } = await import("firebase/auth");
        unsub = onAuthStateChanged(auth, (u) => {
          setUser(u);
          setChecking(false);
          if (!u) router.replace("/admin/login");
        });
      } catch {
        setChecking(false);
        router.replace("/admin/login");
      }
    })();
    return () => unsub();
  }, [router]);

  async function logout() {
    const { auth } = await import("@/lib/firebase");
    const { signOut } = await import("firebase/auth");
    await signOut(auth);
    router.replace("/admin/login");
  }

  if (checking) return <div className="adm-loading">Checking your session…</div>;
  if (!user) return null;

  return (
    <div className="adm-wrap">
      <button className="adm-burger" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <aside className={"adm-side" + (navOpen ? " open" : "")}>
        <div className="adm-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-icon.webp" alt="AJ Power Solutions" width={40} height={40} />
          <div><b>AJ POWER</b><small>Admin Portal</small></div>
        </div>
        <nav className="adm-nav">
          <button className={tab === "enquiries" ? "on" : ""}
            onClick={() => { setTab("enquiries"); setNavOpen(false); }}>Enquiries</button>
          <button className={tab === "gallery" ? "on" : ""}
            onClick={() => { setTab("gallery"); setNavOpen(false); }}>Gallery</button>
        </nav>
        <button className="adm-logout" onClick={logout}>Log out</button>
      </aside>

      <main className="adm-main">
        {tab === "enquiries" ? <EnquiriesPanel /> : <GalleryPanel />}
      </main>
    </div>
  );
}