import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Real sites delivered by the AJ Power Solutions team.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="page active">
      <PageHero
        crumbs="Home · Gallery"
        title={<span className="g">Gallery</span>}
        subtitle="Real sites delivered by our team."
      />
      <div className="litepage"><div className="inwrap">
        <GalleryGrid />
        <PageCta
          title="See our work up close."
          text="Visit a live site or talk to our team about similar installations for your facility."
          linkLabel="Get in Touch"
        />
      </div></div>
    </div>
  );
}