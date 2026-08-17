import Link from "next/link";
import HeroWall from "@/components/HeroWall";
import HomeFooter from "@/components/HomeFooter";
import ClientsMarquee from "@/components/ClientsMarquee";
import CountUp from "@/components/CountUp";
import ServicesShowcase from "@/components/ServicesShowcase";
import { SERVICES } from "@/lib/data";


export default function HomePage() {
  return (
    <>
      <section className="hero slideframe" id="top">
        <HeroWall />
        <div className="herocopy">
          <h1>Empowering South India&rsquo;s Infrastructure with Specialized HT &amp; LT Electrification</h1>
          <p>
            Specialized Electrical Contractors and Engineers — delivering design, execution, testing and 24/7
            maintenance across IT parks, data centres, industries and hospitals.
          </p>
          <div className="acts">
            <Link className="btn-pill" href="/services">Explore Our Services</Link>
            <Link className="textlink" href="/contact">Get in Touch →</Link>
          </div>
        </div>
      </section>

      {/* Non-sticky photo band (not .pinsec) — the sticky pinned-photo trick
          needs enough content height to release cleanly before the next
          section starts; a single content block alone isn't tall enough,
          which was bleeding the photo through into the Why Us section
          below. This plain band avoids that class of bug entirely. */}
      <section className="band tint-light bandsec">
        <div className="bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1764641812239-cbc54c442e5e?auto=format&fit=crop&crop=top&w=2400&h=945&q=85" alt="" />
        </div>

        <div className="pinsec-content" id="clients">
          <div className="shead rv">
            <div className="kicker">Trusted by industry leaders</div>
            <h2>Delivering excellence <span style={{ color: "var(--teal-300)" }}>nationwide.</span></h2>
            <div className="rule"></div>
          </div>
          <div className="statrow home rv" role="group" aria-label="Company statistics">
            <div className="st"><b><CountUp to={13} /><i>M+</i></b><span>Sq Ft Executed</span></div>
            <div className="st"><b><CountUp to={250} /><i>+</i></b><span>Projects Delivered</span></div>
            <div className="st"><b>₹<CountUp to={49} /><i>Cr</i></b><span>Group Turnover</span></div>
            <div className="st"><b><CountUp to={100} /><i>%</i></b><span>Satisfaction Focus</span></div>
          </div>
          <div className="rv" style={{ marginTop: 44 }}>
            <ClientsMarquee />
          </div>
        </div>
      </section>

      {/* Why Choose Us — sits on the same pinned-style photo band as every
          other section. Flat, evenly-sized cards in a plain row (no fan or
          overlap): a quiet number, an accent-tinted icon chip, and a
          colour-coded top edge that ties each card to its icon. */}
      <section id="why" className="band tint-light bandsec">
        <div className="bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1764641812239-cbc54c442e5e?auto=format&fit=crop&crop=top&w=2400&h=945&q=85" alt="" />
        </div>
        <div className="pinsec-content">
          <div className="shead rv">
            <div className="kicker">Why Choose Us</div>
            <h2>Engineering excellence, <span style={{ color: "var(--teal-300)" }}>trusted nationwide.</span></h2>
            <div className="rule"></div>
          </div>

          <div className="rv mx-auto grid w-full max-w-[var(--maxw)] grid-cols-1 gap-6 sm:grid-cols-3">
            <div
              className="rounded-[24px] p-[35px] shadow-[0_24px_50px_-20px_rgba(5,26,33,.35)] transition-transform duration-300 hover:-translate-y-1.5"
              style={{ background: "var(--surface)", borderTop: "4px solid var(--teal-500)" }}
            >
              <span className="block text-[.82rem] font-bold" style={{ color: "var(--muted)" }}>01</span>
              <div className="mt-4 grid h-14 w-14 place-items-center rounded-2xl" style={{ background: "var(--teal-100)", color: "var(--teal-700)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <h3 className="mt-5 text-[1.25rem]" style={{ color: "var(--ink)" }}>Quality Excellence</h3>
              <p className="mt-2 text-[.92rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>In-house design and engineering with value engineering from concept to CEIG approval, ensuring superior quality on every project.</p>
            </div>

            <div
              className="rounded-[24px] p-[35px] shadow-[0_24px_50px_-20px_rgba(5,26,33,.35)] transition-transform duration-300 hover:-translate-y-1.5"
              style={{ background: "var(--surface)", borderTop: "4px solid var(--navy-700)" }}
            >
              <span className="block text-[.82rem] font-bold" style={{ color: "var(--muted)" }}>02</span>
              <div className="mt-4 grid h-14 w-14 place-items-center rounded-2xl" style={{ background: "var(--surface-2)", color: "var(--navy-700)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" /><path d="M17 3.5a4 4 0 0 1 0 7.5" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
              </div>
              <h3 className="mt-5 text-[1.25rem]" style={{ color: "var(--ink)" }}>Expert Leadership</h3>
              <p className="mt-2 text-[.92rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>Directors with over two decades each in HT &amp; LT contracting, collaborating with JLL, CBRE, Savills, RSP and Semac.</p>
            </div>

            <div
              className="rounded-[24px] p-[35px] shadow-[0_24px_50px_-20px_rgba(5,26,33,.35)] transition-transform duration-300 hover:-translate-y-1.5"
              style={{ background: "var(--surface)", borderTop: "4px solid var(--emerald-500)" }}
            >
              <span className="block text-[.82rem] font-bold" style={{ color: "var(--muted)" }}>03</span>
              <div className="mt-4 grid h-14 w-14 place-items-center rounded-2xl" style={{ background: "var(--emerald-100)", color: "var(--emerald-600)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              </div>
              <h3 className="mt-5 text-[1.25rem]" style={{ color: "var(--ink)" }}>Comprehensive Service</h3>
              <p className="mt-2 text-[.92rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>Round-the-clock service department, dedicated EHS and QC teams, testing, commissioning and preventive maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pinsec">
        <div className="pinsec-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1764641812239-cbc54c442e5e?auto=format&fit=crop&crop=top&w=2400&h=945&q=85" alt="" />
        </div>

        <div className="pinsec-content" id="services">
          <div className="shead rv">
            <div className="kicker">Services</div>
            <h2>Our <span style={{ color: "var(--teal-300)" }}>Services</span></h2>
            <div className="rule"></div>
          </div>
          <div className="rv">
            <ServicesShowcase services={SERVICES} />
          </div>
        </div>
      </section>

      <section className="ctaband" id="cta">
        <div className="ctaband-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1663160055679-7b7fecb4468f?auto=format&fit=crop&w=2400&q=85" alt="" />
        </div>
        <span className="glow1"></span><span className="glow2"></span>
        <div className="glass rv">
          <div className="kicker">Ready when you are</div>
          <h2>Transform Your Electrical Infrastructure</h2>
          <div className="rule"></div>
          <p>Partner with us for HT &amp; LT electrification that adds economical value to your business while meeting the highest safety and quality standards.</p>
          <div className="acts"><Link className="btn btn-g" href="/contact">Start Your Project</Link></div>
        </div>
        <HomeFooter />
      </section>
    </>
  );
}
