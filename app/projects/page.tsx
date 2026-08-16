import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import { PROJECTS, slugify } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Major HT & LT projects delivered across South India — Qualcomm, Sutherland, Verizon and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="page active">
      <PageHero
        crumbs="Home · Projects"
        title={<>Our <span className="g">Projects</span></>}
        subtitle="Major HT & LT projects delivered across South India — Qualcomm, Sutherland, Verizon and more."
      />
      <div className="litepage"><div className="inwrap">
        <div className="statrow">
          <div className="st"><b>13<i>M+</i></b><span>Sq Ft Executed</span></div>
          <div className="st"><b>250<i>+</i></b><span>Projects Delivered</span></div>
          <div className="st"><b>25<i>+</i></b><span>Marquee Clients</span></div>
          <div className="st"><b>3</b><span>Cities ·India</span></div>
        </div>
        <div className="pjfeat">
          <div>
            <h3>Trusted by leading enterprises — repeatedly</h3>
            <p>Major HT &amp; LT electrification delivered for marquee clients across South India — and it&apos;s the repeat orders that define us. Multi-phase campus programmes, follow-on packages and sustained engagements executed alongside leading PMCs.</p>
          </div>
          <div className="big">25+<small>REPEAT-ORDER CLIENTS</small></div>
        </div>
        <h2 className="secthead">Clients &amp; engagements</h2>
        <div className="pjgrid">
          {PROJECTS.map((p) => {
            const initials = p.name.split(/\s|\(/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
            return (
              <Link className="pj" href={`/projects/${slugify(p.name)}`} key={p.name}>
                <span className="cnt2">{p.count} {p.count > 1 ? "projects" : "project"}</span>
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="logoimg" src={p.logo} alt={`${p.name} logo`} loading="lazy" />
                ) : (
                  <div className="avv">{initials}</div>
                )}
                <span className="sect">{p.sector}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </Link>
            );
          })}
        </div>
        <PageCta
          title="Your project could be next."
          text="From single facilities to multi-phase campuses — we deliver HT & LT electrification end to end."
          linkLabel="Discuss Your Project"
        />
      </div></div>
    </div>
  );
}