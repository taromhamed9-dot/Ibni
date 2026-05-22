"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past ~70% of first viewport, hide near footer (last 600px)
      const y = window.scrollY;
      const innerH = window.innerHeight;
      const maxY = document.documentElement.scrollHeight - innerH;
      const passedHero = y > innerH * 0.55;
      const nearFooter = maxY - y < 600;
      setShow(passedHero && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="sticky-cta" data-show={show ? "true" : "false"} aria-hidden={!show}>
      <Link href="/signup" className="sticky-cta-btn">
        <span aria-hidden>🚀</span>
        ابدأ مجاناً
        <span className="sticky-cta-pill">١٤ يوم</span>
      </Link>
    </div>
  );
}
