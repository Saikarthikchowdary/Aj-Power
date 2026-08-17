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

      {/* Why Choose Us — a plain light section (no photo, no gradient panel):
          a centered header, a row of icon-topped reason cards, and a dark
          stat strip for visual weight. No leftover space that needs a
          decorative filler, so there's nothing standing in for a photo. */}
      <section id="why" className="slideframe" style={{ background: "var(--surface-2)" }}>
        <div className="rv mx-auto w-full max-w-[640px] text-center">
          <div className="kicker" style={{ color: "var(--teal-700)" }}>Why Choose Us</div>
          <h2 className="mt-3 text-[1.9rem] sm:text-[2.3rem]" style={{ color: "var(--ink)" }}>
            Engineering excellence, <span style={{ color: "var(--teal-600)" }}>trusted nationwide.</span>
          </h2>
          <div className="rule"></div>
          <p className="mx-auto text-[1rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>
            Specialized HT &amp; LT electrification backed by in-house engineering, veteran leadership and round-the-clock support.
          </p>
        </div>

        <div className="rv mx-auto mt-12 grid w-full max-w-[var(--maxw)] grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[28px] p-8 text-center transition-transform duration-300 hover:-translate-y-1.5" style={{ background: "var(--surface)", boxShadow: "0 20px 44px -22px rgba(5,26,33,.22)" }}>
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl" style={{ background: "linear-gradient(135deg,var(--navy-600),var(--teal-500))" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <h3 className="mt-6 text-[1.14rem]" style={{ color: "var(--ink)" }}>Quality Excellence</h3>
            <p className="mt-2.5 text-[.9rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>In-house design and engineering with value engineering from concept to CEIG approval, ensuring superior quality on every project.</p>
          </div>

          <div className="rounded-[28px] p-8 text-center transition-transform duration-300 hover:-translate-y-1.5" style={{ background: "var(--surface)", boxShadow: "0 20px 44px -22px rgba(5,26,33,.22)" }}>
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl" style={{ background: "linear-gradient(135deg,var(--teal-500),var(--emerald-500))" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" /><path d="M17 3.5a4 4 0 0 1 0 7.5" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
            </div>
            <h3 className="mt-6 text-[1.14rem]" style={{ color: "var(--ink)" }}>Expert Leadership</h3>
            <p className="mt-2.5 text-[.9rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>Directors with over two decades each in HT &amp; LT contracting, collaborating with JLL, CBRE, Savills, RSP and Semac.</p>
          </div>

          <div className="rounded-[28px] p-8 text-center transition-transform duration-300 hover:-translate-y-1.5" style={{ background: "var(--surface)", boxShadow: "0 20px 44px -22px rgba(5,26,33,.22)" }}>
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl" style={{ background: "linear-gradient(135deg,var(--emerald-500),var(--navy-600))" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
            </div>
            <h3 className="mt-6 text-[1.14rem]" style={{ color: "var(--ink)" }}>Comprehensive Service</h3>
            <p className="mt-2.5 text-[.9rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>Round-the-clock service department, dedicated EHS and QC teams, testing, commissioning and preventive maintenance.</p>
          </div>
        </div>

        <div className="rv mx-auto mt-8 grid w-full max-w-[var(--maxw)] grid-cols-3 overflow-hidden rounded-[28px]" style={{ background: "linear-gradient(120deg,var(--navy-900),var(--navy-700))" }}>
          <div className="border-r p-6 text-center sm:p-8" style={{ borderColor: "rgba(255,255,255,.14)" }}>
            <b className="block text-[1.7rem] font-extrabold sm:text-[2.1rem]" style={{ color: "#fff", fontFamily: "var(--font-display),sans-serif" }}>250+</b>
            <span className="mt-1 block text-[.72rem] font-semibold sm:text-[.82rem]" style={{ color: "rgba(255,255,255,.75)" }}>Projects Delivered</span>
          </div>
          <div className="border-r p-6 text-center sm:p-8" style={{ borderColor: "rgba(255,255,255,.14)" }}>
            <b className="block text-[1.7rem] font-extrabold sm:text-[2.1rem]" style={{ color: "#fff", fontFamily: "var(--font-display),sans-serif" }}>13M+</b>
            <span className="mt-1 block text-[.72rem] font-semibold sm:text-[.82rem]" style={{ color: "rgba(255,255,255,.75)" }}>Sq Ft Executed</span>
          </div>
          <div className="p-6 text-center sm:p-8">
            <b className="block text-[1.7rem] font-extrabold sm:text-[2.1rem]" style={{ color: "var(--teal-300)", fontFamily: "var(--font-display),sans-serif" }}>24/7</b>
            <span className="mt-1 block text-[.72rem] font-semibold sm:text-[.82rem]" style={{ color: "rgba(255,255,255,.75)" }}>Service Department</span>
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
          <img src="https://images.unsplash.com/photo-1756913454165-246d96a20b67?auto=format&fit=crop&w=2400&q=85" alt="" />
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
