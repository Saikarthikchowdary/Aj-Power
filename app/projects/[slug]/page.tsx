import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import { PROJECTS, slugify } from "@/lib/data";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: slugify(p.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => slugify(x.name) === slug);
  if (!p) return {};
  return { title: p.name, description: p.desc, alternates: { canonical: `/projects/${slug}` } };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => slugify(x.name) === slug);
  if (!p) return notFound();

  return (
    <div className="page active">
      <PageHero
        extraPaddingBottom
        crumbs={<>Home · Projects · <span>{p.name}</span></>}
        title={p.name}
        subtitle={`${p.sector} · ${p.count} ${p.count > 1 ? "projects delivered" : "project delivered"}`}
      />
      <div className="litepage"><div className="inwrap">
        <Link className="backlink" href="/projects">← All projects</Link>
        <div className="abgrid" style={{ gridTemplateColumns: "1.4fr 1fr", marginTop: 20 }}>
          <div className="txt">
            <p>{p.desc}</p>
            <p>Scope covered under this engagement includes HT &amp; LT electrification delivered to standard with dedicated EHS and QC oversight, testing, commissioning and handover.</p>
          </div>
          <aside className="sdside">
            <h4>Engagement</h4>
            <ul>
              <li>Sector: {p.sector}</li>
              <li>{p.count} {p.count > 1 ? "projects" : "project"} delivered</li>
              <li>HT &amp; LT electrification</li>
              <li>EHS &amp; QC supervised</li>
            </ul>
          </aside>
        </div>
        <h2 className="secthead">Our work on this project</h2>
        <div className="workph">
          {Array.from({ length: 6 }).map((_, i) => <div className="ph2" key={i}>Work photo — to be added</div>)}
        </div>
        <PageCta
          title="Planning something similar?"
          text="Talk to us about delivering the same quality on your facility."
          linkLabel="Start Your Project"
        />
      </div></div>
    </div>
  );
}