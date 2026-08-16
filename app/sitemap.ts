import type { MetadataRoute } from "next";
import { SERVICES, PROJECTS, slugify } from "@/lib/data";

const BASE = "https://ajpowersolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/services", priority: 0.9, freq: "monthly" as const },
    { path: "/projects", priority: 0.9, freq: "monthly" as const },
    { path: "/gallery", priority: 0.7, freq: "monthly" as const },
    { path: "/about", priority: 0.8, freq: "yearly" as const },
    { path: "/faq", priority: 0.7, freq: "yearly" as const },
    { path: "/presence", priority: 0.8, freq: "yearly" as const },
    { path: "/contact", priority: 0.9, freq: "yearly" as const },
  ].map((r) => ({
    url: `${BASE}${r.path}`, lastModified: now,
    changeFrequency: r.freq, priority: r.priority,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.id}`, lastModified: now,
    changeFrequency: "monthly" as const, priority: 0.8,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${BASE}/projects/${slugify(p.name)}`, lastModified: now,
    changeFrequency: "monthly" as const, priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}