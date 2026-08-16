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

          {/* One big opaque rounded panel (same idea as the Services showcase
              panel below) so the rows stay legible over the photo no matter
              how light or busy the crop behind them is. */}
          <div
            className="rv mx-auto w-full max-w-[var(--maxw)] divide-y divide-black/[0.07] px-7 py-3 sm:px-10 shadow-[0_34px_72px_-20px_rgba(5,26,33,.35)]"
            style={{ background: "linear-gradient(135deg,var(--line) 0%,var(--line-strong) 100%)", borderRadius: 32 }}
          >
            <div className="group flex flex-col gap-5 py-9 transition-colors duration-300 hover:bg-black/[0.02] sm:flex-row sm:items-center sm:gap-11 sm:py-12">
              <span className="shrink-0 text-[2.8rem] font-black leading-none opacity-70 sm:text-[3.8rem]" style={{ fontFamily: "var(--font-display)", color: "var(--teal-500)" }}>01</span>
              <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-[1.3rem] sm:text-[1.5rem]" style={{ color: "var(--ink)" }}>Quality Excellence</h3>
                  <p className="mt-2 text-[.88rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>In-house design and engineering with value engineering from concept to CEIG approval, ensuring superior quality on every project.</p>
                </div>
                <div className="grid h-16 w-16 shrink-0 place-items-center ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--teal-100)", color: "var(--teal-700)", borderRadius: 18 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>
                </div>
              </div>
            </div>

            <div className="group flex flex-col gap-5 py-9 transition-colors duration-300 hover:bg-black/[0.02] sm:flex-row sm:items-center sm:gap-11 sm:py-12">
              <span className="shrink-0 text-[2.8rem] font-black leading-none opacity-70 sm:text-[3.8rem]" style={{ fontFamily: "var(--font-display)", color: "var(--navy-700)" }}>02</span>
              <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-[1.3rem] sm:text-[1.5rem]" style={{ color: "var(--ink)" }}>Expert Leadership</h3>
                  <p className="mt-2 text-[.88rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>Directors with over two decades each in HT &amp; LT contracting, collaborating with JLL, CBRE, Savills, RSP and Semac.</p>
                </div>
                <div className="grid h-16 w-16 shrink-0 place-items-center ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--surface-2)", color: "var(--navy-700)", borderRadius: 18 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" /><path d="M17 3.5a4 4 0 0 1 0 7.5" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
                </div>
              </div>
            </div>

            <div className="group flex flex-col gap-5 py-9 transition-colors duration-300 hover:bg-black/[0.02] sm:flex-row sm:items-center sm:gap-11 sm:py-12">
              <span className="shrink-0 text-[2.8rem] font-black leading-none opacity-70 sm:text-[3.8rem]" style={{ fontFamily: "var(--font-display)", color: "var(--emerald-600)" }}>03</span>
              <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h3 className="text-[1.3rem] sm:text-[1.5rem]" style={{ color: "var(--ink)" }}>Comprehensive Service</h3>
                  <p className="mt-2 text-[.88rem] font-medium leading-relaxed" style={{ color: "var(--body-text)" }}>Round-the-clock service department, dedicated EHS and QC teams, testing, commissioning and preventive maintenance.</p>
                </div>
                <div className="grid h-16 w-16 shrink-0 place-items-center ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110" style={{ background: "var(--emerald-100)", color: "var(--emerald-600)", borderRadius: 18 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                </div>
              </div>
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
