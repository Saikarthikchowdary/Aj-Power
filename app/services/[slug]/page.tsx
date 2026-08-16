import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import { SERVICES } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.id === slug);
  if (!s) return {};
  return { title: s.t, description: s.s, alternates: { canonical: `/services/${s.id}` } };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.id === slug);
  if (!s) return notFound();

  return (
    <div className="page active">
      <PageHero
        extraPaddingBottom
        crumbs={<>Home · Services · <span>{s.t}</span></>}
        title={
          <>
            <div className="crumbs" style={{ display: "block", margin: "0 0 6px" }}>
              <span style={{ color: "var(--gold-300)" }}>SERVICE · {s.no}</span>
            </div>
            {s.t}
          </>
        }
      />
      <div className="litepage"><div className="inwrap">
        <Link className="backlink" href="/services">← All services</Link>
        <div className="sdhero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.img} alt={s.t} />
        </div>
        <div className="sdbody">
          <div className="txt">{s.d.map((p, i) => <p key={i}>{p}</p>)}</div>
          <aside className="sdside">
            <h4>Key highlights</h4>
            <ul>{s.k.map((k, i) => <li key={i}>{k}</li>)}</ul>
          </aside>
        </div>
        <PageCta
          title="Have a project that needs this service?"
          text="Talk to an AJ Power Solutions specialist about your requirement."
          linkLabel="Get in Touch"
        />
      </div></div>
    </div>
  );
}