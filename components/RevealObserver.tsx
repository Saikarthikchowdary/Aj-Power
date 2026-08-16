"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll<HTMLElement>(".rv:not(.in)").forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 0.07}s`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}