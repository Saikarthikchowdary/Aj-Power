import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajpowersolutions.com"),
  title: {
    default: "AJ Power Solutions — Specialized HT & LT Electrical Contractors, Hyderabad",
    template: "%s — AJ Power Solutions",
  },
  description:
    "AJ Power Solutions — Specialized HT & LT electrical contractors and engineers in South India. 13M+ sq ft executed, 250+ projects delivered. Hyderabad · Bengaluru · Pune.",
  keywords: [
    "electrical contractors Hyderabad", "HT LT contractors",
    "electrical engineers South India", "internal electrification",
    "testing commissioning", "AJ Power Solutions",
  ],
  openGraph: {
    type: "website",
    title: "AJ Power Solutions — Specialized HT & LT Electrical Contractors",
    description: "Specialized Electrical Contractors and Engineers — 13M+ sq ft executed, 250+ projects across South India.",
    url: "https://ajpowersolutions.com",
    images: ["/images/logo-icon.webp"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = { themeColor: "#0B2036" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AJ Power Solutions",
  description: "Specialized HT & LT electrical contractors and engineers in South India.",
  url: "https://ajpowersolutions.com",
  email: "hyd@ajpowersolutions.com",
  telephone: ["+918197496989", "+917032901979"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "225, Ground Floor, Doyens Colony, Serilingampalle (M)",
    addressLocality: "Hyderabad", addressRegion: "Telangana",
    postalCode: "500019", addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.47619548342618, longitude: 78.32354577522358 },
  foundingDate: "2018",
  areaServed: ["Hyderabad", "Bengaluru", "Pune", "South India"],
  sameAs: [
    "https://www.linkedin.com/in/aj-power-solutions-a887b316b/",
    "https://www.facebook.com/ajpowersolutions/",
    "https://www.instagram.com/aj_power_solutions/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}