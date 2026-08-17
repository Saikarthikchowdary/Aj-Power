import Link from "next/link";
import { CITIES, CityKey } from "@/lib/data";

export default function FooterMap({ label = "Our Presence →", light = false }: { label?: string; light?: boolean }) {
  return (
    <Link className={"fmap" + (light ? " fmap-light" : "")} href="/presence" aria-label="View all AJ Power Solutions locations">
      <div className="fmap-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/india.svg" alt="AJ Power Solutions locations across India" />
        {(Object.keys(CITIES) as CityKey[]).map((key) => {
          const c = CITIES[key];
          return (
            <span className="fmap-pin" key={key} style={{ left: c.left, top: c.top }}>
              <span className="fmap-dot"></span>
              <b style={key === "pune" ? { position: "absolute", right: 12 } : undefined}>{c.name}</b>
            </span>
          );
        })}
      </div>
      <span className="fmap-cta">{label}</span>
    </Link>
  );
}