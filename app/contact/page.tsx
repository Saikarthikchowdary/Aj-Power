import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import FooterMap from "@/components/FooterMap";
import { CITIES, CityKey } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Share your requirement and an AJ Power Solutions specialist will get back to you as soon as possible.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="page active">
      <PageHero
        crumbs="Home · Contact"
        title={<>Contact <span className="g">Us</span></>}
        subtitle="Share your requirement and an AJ Power Solutions specialist will get back to you as soon as possible."
      />
      <div className="litepage"><div className="inwrap">
        <div className="ctgrid">
          <div className="ctcard">
            <h4>Reach us</h4>
            <p><b>Email:</b> <a href="mailto:hyd@ajpowersolutions.com">hyd@ajpowersolutions.com</a></p>
            <p><b>Phone:</b> <a href="tel:+918197496989">+91 8197496989</a> | <a href="tel:+917032901979">+91 7032901979</a></p>
            <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/aj-power-solutions-a887b316b/" target="_blank" rel="noopener">AJ Power Solutions</a></p>
            <div className="ctaddrs">
              {(Object.keys(CITIES) as CityKey[]).map((key) => {
                const c = CITIES[key];
                return (
                  <p className="ctaddr" key={key}><b>{c.name} — {c.tag}:</b> {c.desc}</p>
                );
              })}
            </div>
            <div style={{ marginTop: 20 }}>
              <FooterMap light label="View more details →" />
            </div>
          </div>
          <div className="ctcard">
            <h4>Enquiry form</h4>
            <EnquiryForm />
          </div>
        </div>
      </div></div>
    </div>
  );
}