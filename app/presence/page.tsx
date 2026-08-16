import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PresenceMap from "@/components/PresenceMap";

export const metadata: Metadata = {
  title: "Our Presence",
  description: "Head office in Hyderabad with branches in Bengaluru and Pune — delivering HT & LT projects across South India.",
  alternates: { canonical: "/presence" },
};

export default function PresencePage() {
  return (
    <div className="page active">
      <PageHero
        crumbs="Home · Our Presence"
        title={<>Our <span className="g">Presence</span></>}
        subtitle="Head office in Hyderabad with branches in Bengaluru and Pune — click a location on the map to explore it."
      />
      <div className="litepage"><div className="inwrap">
        <PresenceMap />
        <div className="covermap" style={{ marginTop: 40 }}>
          <div>
            <h3>Delivering across South India — and beyond.</h3>
            <p>From our Hyderabad head office and regional branches, our teams execute HT &amp; LT projects for IT parks, data centres, industries and hospitals — backed by a 24/7 service department.</p>
            <ul>
              <li>Telangana · Andhra Pradesh · Karnataka · Tamil Nadu · Maharashtra</li>
              <li>On-site teams with dedicated EHS &amp; QC</li>
              <li>Manufacturing support via sister concern Tech PI Solutions</li>
            </ul>
          </div>
          <div className="covericon" aria-hidden="true">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>
          </div>
        </div>
      </div></div>
    </div>
  );
}