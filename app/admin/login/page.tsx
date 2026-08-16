"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const { auth } = await import("@/lib/firebase");
      const { signInWithEmailAndPassword } = await import("firebase/auth");
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/admin");
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code || "";
      if (/invalid-credential|wrong-password|user-not-found/.test(code)) {
        setError("That email and password don't match an admin account.");
      } else if (/api-key/.test(code)) {
        setError("Firebase isn't configured yet — add your keys to .env.local and restart.");
      } else if (/too-many-requests/.test(code)) {
        setError("Too many attempts. Wait a moment and try again.");
      } else {
        setError("Couldn't sign in. Check your connection and try again.");
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="adm-login-wrap">
      <form className="adm-login-card" onSubmit={handleSubmit}>
        <div className="adm-login-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-icon.webp" alt="AJ Power Solutions" width={64} height={64} />
        </div>
        <h1>Admin Portal</h1>
        <p className="adm-login-sub">AJ Power Solutions</p>

        <label htmlFor="adm-email">Email</label>
        <input id="adm-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          required autoComplete="username" placeholder="admin@ajpowersolutions.com" />

        <label htmlFor="adm-pass">Password</label>
        <input id="adm-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          required autoComplete="current-password" placeholder="••••••••" />

        {error && <div className="adm-error">{error}</div>}

        <button className="adm-btn adm-btn-primary" type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}