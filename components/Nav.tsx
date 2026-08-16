"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our Clients" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/presence", label: "Our Presence" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => typeof window !== "undefined" && localStorage.getItem("ajp-theme") === "dark");
  const isHome = pathname === "/";
  const [transparent, setTransparent] = useState(isHome);

  useEffect(() => {
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setTransparent(window.scrollY < 80);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, [isHome]);

  function toggleTheme() {
    const goingDark = !dark;
    document.documentElement.setAttribute("data-theme", goingDark ? "dark" : "light");
    localStorage.setItem("ajp-theme", goingDark ? "dark" : "light");
    setDark(goingDark);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={isHome && transparent ? "hdr-transparent" : undefined}>
      <nav>
        <Link className="brand" href="/" aria-label="AJ Power Solutions home">
          <span className="mk" id="mk">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-icon.webp"
              alt="AJ Power Solutions logo"
              onError={(e) => {
                (e.currentTarget.closest(".mk") as HTMLElement)?.classList.add("nofile");
              }}
            />
            <svg className="fb" width="42" height="42" viewBox="0 0 56 56" aria-hidden="true">
              <path d="M28 3 L49 15 L49 41 L28 53 L7 41 L7 15 Z" fill="none" stroke="#065074" strokeWidth="3" />
              <path d="M30 15 L19 31 L27 31 L24 43 L37 25 L29 25 Z" fill="#089BA0" />
            </svg>
          </span>
          <span className="txt"><b>AJ POWER</b><small>SOLUTIONS</small></span>
        </Link>

        <div className={"navlinks" + (open ? " open" : "")} id="navlinks">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={isActive(l.href) ? "on" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button className="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode" onClick={toggleTheme}>
          <svg className="i-sun" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: dark ? "none" : "block" }}>
            <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg className="i-moon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: dark ? "block" : "none" }}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>

        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}