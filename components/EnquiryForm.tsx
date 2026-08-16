"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Design & Engineering", "HT & LT Works", "Internal Electrification",
  "Lighting Management", "Testing & Commissioning", "Maintenance & Service",
  "Other / General enquiry",
];

export default function EnquiryForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("website")) return;

    if (!form.checkValidity()) {
      setError("Please fill the required fields correctly.");
      return;
    }

    const data = {
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
    };

    setSending(true);
    setError("");
    try {
      const { db } = await import("@/lib/firebase");
      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      await addDoc(collection(db, "enquiries"), { ...data, status: "new", createdAt: serverTimestamp() });
      setSentName(data.name.split(" ")[0] || "");
      setSent(true);
    } catch {
      const body = encodeURIComponent(
        `Name: ${data.name}\nCompany: ${data.company || "-"}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\n\n${data.message}`
      );
      window.location.href = `mailto:hyd@ajpowersolutions.com?subject=${encodeURIComponent("Website Enquiry — " + data.service)}&body=${body}`;
      setSentName(data.name.split(" ")[0] || "");
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="thanksbox">
        <div className="thanksicon" aria-hidden="true">✓</div>
        <h3>Thank you{sentName ? `, ${sentName}` : ""}!</h3>
        <p>
          Your enquiry has reached us. An AJ Power Solutions specialist will review your
          requirement and get back to you shortly.
        </p>
        <p className="thankssub">Need to reach us sooner? Contact us directly:</p>
        <div className="thanksacts">
          <a className="btn btn-g" href="tel:+918197496989">Call +91 81974 96989</a>
          <a className="btn btn-o" href="mailto:hyd@ajpowersolutions.com">Email Us</a>
        </div>
        <p className="thanksalt">
          Or call <a href="tel:+917032901979">+91 70329 01979</a> · Mon–Sat, 24/7 service department
        </p>
        <button className="thanksagain" type="button" onClick={() => setSent(false)}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="eform" onSubmit={handleSubmit} noValidate>
      <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" />
      <div className="row2">
        <div><label htmlFor="f-name">Full name *</label><input id="f-name" name="name" required placeholder="Your name" /></div>
        <div><label htmlFor="f-company">Company</label><input id="f-company" name="company" placeholder="Company name" /></div>
      </div>
      <div className="row2">
        <div><label htmlFor="f-email">Email *</label><input id="f-email" name="email" type="email" required placeholder="you@company.com" /></div>
        <div><label htmlFor="f-phone">Phone *</label><input id="f-phone" name="phone" type="tel" required placeholder="+91" /></div>
      </div>
      <div>
        <label htmlFor="f-service">Service required</label>
        <select id="f-service" name="service" defaultValue={SERVICE_OPTIONS[0]}>
          {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="f-msg">Project details *</label>
        <textarea id="f-msg" name="message" required placeholder="Tell us about your requirement — location, scale, timeline…"></textarea>
      </div>
      <button className="btn btn-g" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Submit Enquiry"}
      </button>
      {error && <div className="formnote err">{error}</div>}
    </form>
  );
}