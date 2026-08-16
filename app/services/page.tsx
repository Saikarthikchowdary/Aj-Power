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
        <div className="svgrid">
          {SERVICES.map((s) => (
            <Link className="svc rv" href={`/services/${s.id}`} aria-label={`${s.t} details`} key={s.id}>
              <span className="bar"></span>
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.t} loading="lazy" />
                <span className="no">SERVICE · {s.no}</span>
              </div>
              <div className="bd"><h3>{s.t}</h3><p>{s.s}</p></div>
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