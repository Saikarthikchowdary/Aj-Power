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

      <section className="pinsec">
        <div className="pinsec-bg">
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

        <div className="pinsec-content" id="why">
          <div className="shead rv">
            <div className="kicker">Why Choose Us</div>
            <h2>Experience Excellence with <span style={{ color: "var(--teal-300)" }}>AJ Power Solutions</span></h2>
            <div className="rule"></div>
          </div>

          {/* Stacked, fanned cards — each one offset and gently rotated like a
              hand of cards, cascading diagonally. Hover brings a card to the
              front and settles it flat so it's fully readable. Mobile just
              stacks them plainly (no room to fan on a narrow screen). */}
          <div className="rv isolate mx-auto flex w-full max-w-[var(--maxw)] flex-col items-center gap-6 py-4 sm:flex-row sm:items-start sm:justify-center sm:gap-0 sm:py-10">
            <div
              className="group relative z-10 w-full shrink-0 rounded-[29px] p-[35px] shadow-[0_30px_62px_-20px_rgba(5,26,33,.43)] transition-all duration-300 ease-out sm:z-10 sm:w-[402px] sm:rotate-[-4deg] sm:translate-y-[14px] sm:hover:z-50 sm:hover:-translate-y-4 sm:hover:rotate-0 sm:hover:shadow-[0_34px_70px_-18px_rgba(5,26,33,.5)]"
              style={{ background: "var(--surface)" }}
            >
              <div className="grid h-[72px] w-[72px] place-items-center rounded-2xl" style={{ background: "var(--teal-100)", color: "var(--teal-700)" }}>
                <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <span className="mt-4 block text-[.85rem] font-bold tracking-[.18em] uppercase" style={{ color: "var(--teal-700)" }}>Reason 01</span>
              <h3 className="mt-1 text-[1.51rem]" style={{ color: "var(--ink)" }}>Quality Excellence</h3>
              <p className="mt-2 text-[1.02rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>In-house design and engineering with value engineering from concept to CEIG approval, ensuring superior quality on every project.</p>
            </div>

            <div
              className="group relative z-20 w-full shrink-0 rounded-[29px] p-[35px] shadow-[0_30px_62px_-20px_rgba(5,26,33,.43)] transition-all duration-300 ease-out sm:z-20 sm:w-[402px] sm:-ml-[72px] sm:rotate-[2deg] sm:-translate-y-[10px] sm:hover:z-50 sm:hover:-translate-y-8 sm:hover:rotate-0 sm:hover:shadow-[0_34px_70px_-18px_rgba(5,26,33,.5)]"
              style={{ background: "var(--surface)" }}
            >
              <div className="grid h-[72px] w-[72px] place-items-center rounded-2xl" style={{ background: "var(--surface-2)", color: "var(--navy-700)" }}>
                <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" /><path d="M17 3.5a4 4 0 0 1 0 7.5" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
              </div>
              <span className="mt-4 block text-[.85rem] font-bold tracking-[.18em] uppercase" style={{ color: "var(--navy-700)" }}>Reason 02</span>
              <h3 className="mt-1 text-[1.51rem]" style={{ color: "var(--ink)" }}>Expert Leadership</h3>
              <p className="mt-2 text-[1.02rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>Directors with over two decades each in HT &amp; LT contracting, collaborating with JLL, CBRE, Savills, RSP and Semac.</p>
            </div>

            <div
              className="group relative z-30 w-full shrink-0 rounded-[29px] p-[35px] shadow-[0_30px_62px_-20px_rgba(5,26,33,.43)] transition-all duration-300 ease-out sm:z-30 sm:w-[402px] sm:-ml-[72px] sm:rotate-[-3deg] sm:translate-y-[18px] sm:hover:z-50 sm:hover:-translate-y-4 sm:hover:rotate-0 sm:hover:shadow-[0_34px_70px_-18px_rgba(5,26,33,.5)]"
              style={{ background: "var(--surface)" }}
            >
              <div className="grid h-[72px] w-[72px] place-items-center rounded-2xl" style={{ background: "var(--emerald-100)", color: "var(--emerald-600)" }}>
                <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              </div>
              <span className="mt-4 block text-[.85rem] font-bold tracking-[.18em] uppercase" style={{ color: "var(--emerald-600)" }}>Reason 03</span>
              <h3 className="mt-1 text-[1.51rem]" style={{ color: "var(--ink)" }}>Comprehensive Service</h3>
              <p className="mt-2 text-[1.02rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>Round-the-clock service department, dedicated EHS and QC teams, testing, commissioning and preventive maintenance.</p>
            </div>
          </div>
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
