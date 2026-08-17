import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about AJ Power Solutions' services, process and support.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  { q: "What services does AJ Power Solutions provide?", a: "Complete HT & LT electrical contracting — design & engineering, HT/LT panel and distribution works, internal electrification, lighting & lighting management systems, testing & commissioning with CEIG/Board liaisoning, and 24/7 maintenance & service." },
  { q: "Which sectors do you work in?", a: "Commercial, industrial, residential and IT sectors — including IT parks, data centres, hospitals, manufacturing facilities, aerospace and education campuses." },
  { q: "Where do you operate?", a: "Head office in Hyderabad with branches in Bengaluru and Pune — delivering projects across South India." },
  { q: "Do you handle statutory approvals and liaisoning?", a: "Yes. We handle all liaisoning works related to Electricity CEIG/Board, from design review through inspection and certification, as part of our end-to-end delivery." },
  { q: "Can you take a project from design to handover?", a: "Yes — our in-house design, engineering, estimation, documentation and procurement teams work with you from pre-construction to completion, followed by testing, commissioning and preventive maintenance." },
  { q: "Do you provide after-sales support?", a: "Our twenty-four-hour service department keeps us connected to customers whenever needed — with preventive maintenance programs, breakdown support and dedicated EHS & QC teams." },
  { q: "Who are some of your clients?", a: "We have delivered projects for Qualcomm, Google, Microsoft, Verizon, Wells Fargo, Bank of America, Goldman Sachs, Micron, AMD, ISB, Safran, Hyundai, JSW and more — working alongside PMCs like JLL, CBRE and Savills." },
  { q: "How do I get a quotation?", a: "Share your requirement through the Contact page, or write to hyd@ajpowersolutions.com — an AJ Power Solutions specialist will get back to you with a cost-effective estimation." },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question", name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="page active">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        crumbs="Home · FAQ"
        title={<>Frequently Asked <span className="g">Questions</span></>}
        subtitle="Answers to common questions about our services, process and support."
      />
      <div className="litepage"><div className="inwrap">
        <div className="faq">
          {FAQS.map((f, i) => (
            <details key={i} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="a">{f.a}</div>
            </details>
          ))}
        </div>
        <PageCta
          title="Still have a question?"
          text="Our team is happy to help with anything specific to your project."
          linkLabel="Ask Us Directly"
        />
      </div></div>
    </div>
  );
}