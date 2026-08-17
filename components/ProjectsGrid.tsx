"use client";

import { useState } from "react";
import { type Project } from "@/lib/data";

const STEP = 6;

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [count, setCount] = useState(Math.min(STEP, projects.length));
  const shown = projects.slice(0, count);
  const remaining = projects.length - count;
  const pct = Math.round((count / projects.length) * 100);
  const collapsed = count > STEP && remaining === 0;

  function loadMore() {
    setCount((c) => Math.min(c + STEP, projects.length));
  }

  function showLess() {
    setCount(Math.min(STEP, projects.length));
    document.getElementById("clients-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div className="pjgrid" id="clients-grid">
        {shown.map((p) => {
          const initials = p.name.split(/\s|\(/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
          return (
            <div className="pj" key={p.name}>
              <span className="cnt2">{p.count} {p.count > 1 ? "projects" : "project"}</span>
              {p.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="logoimg" src={p.logo} alt={`${p.name} logo`} loading="lazy" />
              ) : (
                <div className="avv">{initials}</div>
              )}
              <span className="sect">{p.sector}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          );
        })}
      </div>

      {projects.length > STEP && (
        <div className="loadmore">
          <div className="loadmore-track"><div className="loadmore-fill" style={{ width: `${pct}%` }} /></div>
          <p className="loadmore-count">Showing <b>{count}</b> of <b>{projects.length}</b> clients</p>
          {collapsed ? (
            <button className="loadmore-btn" onClick={showLess}>
              Show less <span aria-hidden="true">↑</span>
            </button>
          ) : (
            <button className="loadmore-btn" onClick={loadMore}>
              Load {Math.min(STEP, remaining)} more <span aria-hidden="true">↓</span>
            </button>
          )}
        </div>
      )}
    </>
  );
}
