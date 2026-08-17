import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Specialised HT & LT contractors across commercial, industrial, residential and IT sectors — from design to 24/7 maintenance.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="page active">
      <PageHero
        crumbs="Home · Services"
        title={<>Everything electrical, <span className="g">under one team.</span></>}
        subtitle="Specialised HT & LT contractors across commercial, industrial, residential and IT sectors — from design to 24/7 maintenance. Select a service to see the full details."
      />
      <div className="litepage"><div className="inwrap">
        {/* Uniform, content-forward cards — photo strip on top (for context,
            not as a text backdrop) and everything else on a plain white
            body: title, description, key-highlight checklist and an
            always-visible "View details" link. Prioritises scannability
            over a mosaic layout so every service is equally easy to read. */}
        <div className="rv grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              className="group flex h-full flex-col overflow-hidden rounded-[28px] transition-transform duration-300 hover:-translate-y-1.5"
              href={`/services/${s.id}`}
              aria-label={`${s.t} details`}
              key={s.id}
              style={{ background: "var(--surface)", boxShadow: "0 20px 44px -22px rgba(5,26,33,.28)" }}
            >
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full text-[.82rem] font-bold text-white shadow-[0_8px_18px_-4px_rgba(0,0,0,.4)]" style={{ background: "linear-gradient(135deg,var(--teal-500),var(--navy-700))" }}>
                  {s.no}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.14rem]" style={{ color: "var(--ink)" }}>{s.t}</h3>
                <p className="mt-1.5 text-[.88rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>{s.s}</p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {s.k.slice(0, 3).map((k) => (
                    <li key={k} className="flex items-start gap-2 text-[.82rem] font-medium leading-snug" style={{ color: "var(--body-text)" }}>
                      <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--teal-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[.85rem] font-bold transition-transform duration-200 group-hover:translate-x-1" style={{ color: "var(--teal-700)" }}>
                  View details <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <PageCta
          title="Let's power your next project."
          text="Our expert team is ready to deliver design, execution, testing and round-the-clock support tailored to your electrical infrastructure needs."
          linkLabel="Get in Touch"
        />
      </div></div>
    </div>
  );
}