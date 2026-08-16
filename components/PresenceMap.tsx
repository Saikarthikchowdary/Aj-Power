"use client";

import { useState } from "react";
import Link from "next/link";
import { CITIES, CityKey } from "@/lib/data";

export default function PresenceMap() {
  const [active, setActive] = useState<CityKey>("hyderabad");
  const city = CITIES[active];

  return (
    <div className="mapgrid">
      <div className="indiawrap">
        <div className="indiamap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/india.svg" alt="Map of India — AJ Power Solutions locations" />
          {(Object.keys(CITIES) as CityKey[]).map((key) => {
            const c = CITIES[key];
            return (
              <button
                type="button"
                className={"mpin" + (active === key ? " on" : "")}
                key={key}
                onClick={() => setActive(key)}
                style={{ left: c.left, top: c.top, background: "none", border: 0, padding: 0 }}
                aria-label={`Show ${c.name} details`}
                aria-pressed={active === key}
              >
                <span className="dot"></span>
                <b style={key === "pune" ? { position: "absolute", right: 22 } : undefined}>{c.name}</b>
              </button>
            );
          })}
        </div>
      </div>
      <div className="cityside">
        <div className="citycard">
          <span className="tag">{city.tag}</span>
          <h3>{city.name}</h3>
          <p>{city.desc}</p>
          <iframe key={city.embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title={`${city.name} location map`} src={city.embed}></iframe>
          <div className="cityacts">
            <a className="btn btn-o" target="_blank" rel="noopener" href={city.gmaps}>Open in Google Maps ↗</a>
            <Link className="btn btn-g" href="/contact">Start Your Project</Link>
            <Link className="btn btn-o" href="/contact">Get in Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
}