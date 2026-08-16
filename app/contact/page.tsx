import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";

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
            <p><b>Head Office:</b> #225, Ground Floor, Doyens Colony, Serilingampalle (M), Hyderabad, Telangana 500019</p>
            <p><b>Branches:</b> Bengaluru · Pune</p>
            <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/aj-power-solutions-a887b316b/" target="_blank" rel="noopener">AJ Power Solutions</a></p>
            <iframe className="ctmap" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="AJ Power Solutions — Hyderabad head office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.6554956365817!2d78.32354577522358!3d17.47619548342618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9344c4cc45c5%3A0x77f69745a0b19f8!2sAj%20Power%20Solutions!5e0!3m2!1sen!2sin!4v1784475561486!5m2!1sen!2sin"></iframe>
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