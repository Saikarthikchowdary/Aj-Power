"use client";

import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/data";

export default function ServicesShowcase({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="svcshow">
      <div className="svcshow-visual">
        {services.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.id}
            src={s.img}
            alt={s.t}
            className={"svcshow-img" + (i === active ? " active" : "")}
          />
        ))}
        <div className="svcshow-visual-cap">
          <span className="no">SERVICE · {services[active].no}</span>
          <h3>{services[active].t}</h3>
        </div>
      </div>

      <div className="svcshow-list">
        {services.map((s, i) => (
          <div
            key={s.id}
            className={"svcshow-row" + (i === active ? " active" : "")}
            onMouseEnter={() => setActive(i)}
          >
            <button
              type="button"
              className="svcshow-head"
              onClick={() => setActive(i)}
              aria-expanded={i === active}
            >
              <span className="svcshow-no">{s.no}</span>
              <span className="svcshow-ttl">{s.t}</span>
              <span className="svcshow-chev" aria-hidden="true">→</span>
            </button>
            <div className="svcshow-body">
              <div className="svcshow-body-in">
                <p>{s.s}</p>
                <Link href={`/services/${s.id}`} className="svcshow-link">
                  View details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
