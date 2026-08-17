export type Service = {
  id: string;
  no: string;
  t: string;
  img: string;
  s: string;
  d: string[];
  k: string[];
};

export const SERVICES: Service[] = [
  {
    id: "design-engineering",
    no: "01",
    t: "Design & Engineering",
    img: "https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?auto=format&fit=crop&w=1600&q=85",
    s: "Site-specific design, load planning and compliance documentation.",
    d: [
      "Our in-house Design, Engineering, Estimation, Documentation and Procurement teams work in tandem from the core of the project to produce detailed pre-construction, Good-for-Construction and coordination drawings.",
      "AJ Power Solutions is a pioneer in reviewing the complete electrical design in coordination with Architects and Consultants as per client requirements, in a cost-effective manner — from concept through statutory approvals.",
    ],
    k: [
      "Detailed designing & estimation",
      "Load planning & value engineering",
      "GFC & coordination drawings",
      "CEIG / Board liaisoning",
      "Compliance documentation",
    ],
  },
  {
    id: "ht-lt-works",
    no: "02",
    t: "HT & LT Works",
    img: "https://images.unsplash.com/photo-1693013112835-5f3128bb555f?auto=format&fit=crop&w=1600&q=85",
    s: "High- and low-tension panels, distribution and electrification at any scale.",
    d: [
      "We have the ability and expertise across the entire HT and LT electrical system — panels, distribution and complete electrification for projects of any scale.",
      "Our multi-disciplined teams strictly adhere to industrial-sector standards, applying all protective measures to prevent any kind of electrical damage across commercial, industrial, residential and IT sectors.",
    ],
    k: [
      "HT & LT panel installation",
      "Power distribution systems",
      "Substation & transformer works",
      "Industrial & commercial electrification",
      "Safety-first execution",
    ],
  },
  {
    id: "internal-electrification",
    no: "03",
    t: "Internal Electrification",
    img: "https://images.unsplash.com/photo-1768321911048-46171ac7d425?auto=format&fit=crop&w=1600&q=85",
    s: "Complete internal wiring executed cleanly to standard.",
    d: [
      "Complete internal wiring and electrification works executed cleanly to standard — for IT parks, data centres, industries, hospitals, and residential and commercial projects.",
      "Our trained and professionally qualified teams work with you from pre-construction to completion, ensuring quality installation at every stage.",
    ],
    k: [
      "Internal wiring works",
      "Raceways & cable management",
      "DB installation & dressing",
      "Earthing systems",
      "Quality workmanship checks",
    ],
  },
  {
    id: "lighting-management",
    no: "04",
    t: "Lighting Management",
    img: "https://images.unsplash.com/photo-1652540166492-4b700df31f56?auto=format&fit=crop&w=1600&q=85",
    s: "Lighting systems designed for efficiency and control.",
    d: [
      "AJ Power Solutions has a dedicated design team providing the latest light-fixture details according to project requirements, along with complete lighting design calculations.",
      "We design and deliver lighting and lighting-management systems built for efficiency, comfort and control.",
    ],
    k: [
      "Lighting design calculations",
      "Latest fixture selection",
      "Lighting management systems",
      "Energy-efficient solutions",
      "Controls & automation",
    ],
  },
  {
    id: "testing-commissioning",
    no: "05",
    t: "Testing & Commissioning",
    img: "https://images.unsplash.com/photo-1758101755915-462eddc23f57?auto=format&fit=crop&w=1600&q=85",
    s: "Testing, commissioning and CEIG / Board liaisoning end to end.",
    d: [
      "Comprehensive testing, commissioning and certification for electrical installations — handled end to end including all liaisoning works related to Electricity CEIG / Board.",
      "Dedicated EHS and QC teams ensure every installation is verified, certified and handed over safely.",
    ],
    k: [
      "Installation testing",
      "Commissioning & certification",
      "CEIG / Board liaisoning",
      "EHS & QC verification",
      "Safe handover",
    ],
  },
  {
    id: "maintenance-service",
    no: "06",
    t: "Maintenance & Service",
    img: "https://images.unsplash.com/photo-1635335874521-7987db781153?auto=format&fit=crop&w=1600&q=85",
    s: "Preventive maintenance backed by a 24-hour service department.",
    d: [
      "Electrical maintenance is an important part of the electrical system that keeps industries and facilities running effectively. Our twenty-four-hour service department keeps us connected to our customers whenever we are needed.",
      "Preventive maintenance programs, breakdown support and dedicated after-sales service — operating in a friendly, efficient manner focused on customer satisfaction.",
    ],
    k: [
      "24/7 service department",
      "Preventive maintenance programs",
      "Breakdown support",
      "Periodic inspections",
      "Dedicated service teams",
    ],
  },
];

export type Project = {
  name: string;
  sector: string;
  desc: string;
  count: number;
  logo: string | null;
};

const CUST = "https://tech-pi-website.vercel.app/images/customers/";

export const PROJECTS: Project[] = [
  { name: "Qualcomm", sector: "Semiconductor", desc: "Multi-phase campus electrification across Hyderabad facilities.", count: 25, logo: CUST + "qualcomm.png" },
  { name: "JLL (PMC)", sector: "Project Management", desc: "Fit-out and base-build electrical works delivered under JLL programs.", count: 17, logo: "/images/clients/jll.svg" },
  { name: "Savills (PMC)", sector: "Project Management", desc: "Commercial interior electrification packages across South India.", count: 9, logo: "/images/clients/savills.svg" },
  { name: "Sutherland", sector: "IT / BPO", desc: "Campus electrical works including HT distribution.", count: 9, logo: "/images/clients/sutherland.png" },
  { name: "DivyaSree", sector: "Realty", desc: "Base-build and tenant electrification across developments.", count: 8, logo: null },
  { name: "Verizon", sector: "Telecom", desc: "Office and technical-space electrification programs.", count: 7, logo: CUST + "verizon.png" },
  { name: "Safran", sector: "Aerospace", desc: "Industrial facility electrification to aerospace standards.", count: 6, logo: "/images/clients/safran.svg" },
  { name: "Wells Fargo", sector: "Banking", desc: "Workplace electrification with critical-power provisions.", count: 5, logo: "/images/clients/wellsfargo.svg" },
  { name: "Cognizant", sector: "Technology", desc: "Campus and interior electrical packages.", count: 5, logo: "/images/clients/cognizant.svg" },
  { name: "Toshiba", sector: "Industrial", desc: "Industrial electrification and panel works.", count: 5, logo: "/images/clients/toshiba.svg" },
  { name: "CBRE (PMC)", sector: "Project Management", desc: "Fit-out electrical delivery under CBRE programs.", count: 4, logo: "/images/clients/cbre.svg" },
  { name: "Google", sector: "Technology", desc: "Workplace electrification projects.", count: 3, logo: "/images/clients/google.svg" },
  { name: "AMD", sector: "Semiconductor", desc: "Office and lab-space electrical works.", count: 3, logo: CUST + "amd.png" },
  { name: "ISB", sector: "Education", desc: "Campus electrical infrastructure works.", count: 3, logo: CUST + "isb.jpg" },
  { name: "Micron", sector: "Semiconductor", desc: "Technology workspace electrification.", count: 2, logo: CUST + "micron.png" },
  { name: "Oracle", sector: "Technology", desc: "Office electrification packages.", count: 2, logo: "/images/clients/oracle.svg" },
  { name: "NCR", sector: "Technology", desc: "Workspace electrical works.", count: 2, logo: CUST + "NCR.png" },
  { name: "Hyundai", sector: "Automobile", desc: "Facility electrification works.", count: 1, logo: CUST + "hyundai.png" },
  { name: "JSW", sector: "Steel", desc: "Industrial electrical package.", count: 1, logo: CUST + "jsw.jpg" },
  { name: "DuPont", sector: "Chemical", desc: "Facility electrical works.", count: 1, logo: CUST + "DuPont.png" },
  { name: "Bank of America", sector: "Banking", desc: "Workplace electrification.", count: 1, logo: CUST + "bank.jpg" },
  { name: "Goldman Sachs", sector: "Finance", desc: "Office electrification works.", count: 2, logo: CUST + "gs.png" },
  { name: "Microsoft", sector: "Technology", desc: "Workplace electrical package.", count: 1, logo: "/images/clients/microsoft.svg" },
  { name: "H&R Block", sector: "Finance", desc: "Office electrification.", count: 1, logo: CUST + "h-r-block.png" },
];

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export type CityKey = "hyderabad" | "bengaluru" | "pune";

export const CITIES: Record<CityKey, { tag: string; name: string; desc: string; embed: string; gmaps: string; left: string; top: string }> = {
  hyderabad: {
    tag: "Head Office",
    name: "Hyderabad",
    desc: "#225, Ground Floor, Doyens Colony, Serilingampalle (M), Hyderabad, Telangana 500019.",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.6554956365817!2d78.32354577522358!3d17.47619548342618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9344c4cc45c5%3A0x77f69745a0b19f8!2sAj%20Power%20Solutions!5e0!3m2!1sen!2sin!4v1784475561486!5m2!1sen!2sin",
    gmaps: "https://www.google.com/maps?cid=540266428755548664",
    left: "46.0%",
    top: "65.75%",
  },
  bengaluru: {
    tag: "Branch · Since 2021",
    name: "Bengaluru",
    desc: "Serving projects across Karnataka since 2021.",
    embed: "https://maps.google.com/maps?q=12.996954887320769,77.65473557507691(AJ+Power+Solutions)&z=16&output=embed",
    gmaps: "https://www.google.com/maps?q=12.996954887320769,77.65473557507691",
    left: "36.0%",
    top: "76.0%",
  },
  pune: {
    tag: "Branch · Since 2020",
    name: "Pune",
    desc: "Serving projects across Maharashtra since 2020.",
    embed: "https://maps.google.com/maps?q=18.509402899999998,73.83441979999999(AJ+Power+Solutions)&z=16&output=embed",
    gmaps: "https://www.google.com/maps?cid=15104381972742901745",
    left: "20.9%",
    top: "64.4%",
  },
};

export const HERO_PICS = [
  "01.png", "02.png", "03.png", "04.png", "05.png", "06.png",
  "07.png", "08.png", "09.png", "10.png", "11.png", "12.png",
].map((f) => `/images/${f}`);

export const GALLERY_STOCK = [
  "1759109391537-ee5aec6f1775","1621905251189-08b45d6a269e","1758101755915-462eddc23f57",
  "1693013112835-5f3128bb555f","1621905252507-b35492cc74b4","1541888946425-d81bb19240f5",
  "1763207503516-36dc6337e956","1559722748-61bdc9839dbc","1504307651254-35680f356dfd",
  "1503387762-592deb58ef4e","1509390673020-a5b2450e33f1","1759922378222-47ad736a174d",
  "1771599141394-bc646d21cd61",
].map((id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`);

export const CLIENTS_ROW1: [string | null, string, string, number][] = [
  [null, "Qualcomm", "Semiconductor", 25],
  [null, "Bank of America", "Banking", 1],
  [null, "Goldman Sachs", "Finance", 2],
  [null, "HCL", "Technology", 1],
  [null, "AMD", "Semiconductor", 3],
  ["/images/clients/google.svg", "Google", "Technology", 3],
  ["/images/clients/microsoft.svg", "Microsoft", "Technology", 1],
  [null, "Verizon", "Telecom", 7],
  ["/images/clients/wellsfargo.svg", "Wells Fargo", "Banking", 5],
  ["/images/clients/cognizant.svg", "Cognizant", "Technology", 5],
  [null, "Micron", "Semiconductor", 2],
  [null, "DivyaSree", "Realty", 8],
];

export const CLIENTS_ROW2: [string | null, string, string, number][] = [
  ["/images/clients/jll.svg", "JLL (PMC)", "PMC", 17],
  ["/images/clients/savills.svg", "Savills (PMC)", "PMC", 9],
  ["/images/clients/cbre.svg", "CBRE (PMC)", "PMC", 4],
  ["/images/clients/sutherland.png", "Sutherland", "IT", 9],
  ["/images/clients/safran.svg", "Safran", "Aerospace", 6],
  [null, "Hyundai", "Automobile", 1],
  [null, "JSW", "Steel", 1],
  [null, "DuPont", "Chemical", 1],
  [null, "NCR", "Technology", 2],
  [null, "ISB", "Education", 3],
  ["/images/clients/toshiba.svg", "Toshiba", "Industrial", 5],
  ["/images/clients/oracle.svg", "Oracle", "Technology", 2],
  [null, "H&R Block", "Finance", 1],
];