"use client";

import { useEffect, useRef, useState } from "react";

type Section = { id: string; label: string };

export function ScrollProgress({ sections }: { sections: Section[] }) {
  const fillRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const pctRef = useRef<HTMLDivElement | null>(null);
  const pctNumRef = useRef<HTMLSpanElement | null>(null);
  const tickingRef = useRef(false);
  const [active, setActive] = useState<string | null>(null);
  const [dots, setDots] = useState<{ id: string; topPct: number }[]>([]);

  // Top progress bar + vertical fill driven by rAF
  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${ratio})`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
      if (pctRef.current && pctNumRef.current) {
        const pct = Math.round(ratio * 100);
        pctNumRef.current.textContent = pct.toLocaleString("ar-EG") + "٪";
        pctRef.current.dataset.active = window.scrollY > 80 ? "true" : "false";
      }
      tickingRef.current = false;
    };
    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Compute dot positions whenever layout settles
  useEffect(() => {
    const compute = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const next = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          const top = el.getBoundingClientRect().top + window.scrollY;
          return { id: s.id, topPct: Math.max(0, Math.min(1, top / max)) * 100 };
        })
        .filter(Boolean) as { id: string; topPct: number }[];
      setDots(next);
    };
    compute();
    const ro = new ResizeObserver(() => compute());
    ro.observe(document.body);
    window.addEventListener("resize", compute);
    const t = setTimeout(compute, 400);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
      clearTimeout(t);
    };
  }, [sections]);

  // Track active section
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.15, 0.4], rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const go = (id: string) => () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="top-progress" aria-hidden>
        <div ref={barRef} className="bar" />
      </div>
      <div ref={pctRef} className="scroll-pct" aria-hidden>
        <span>📍</span>
        <span ref={pctNumRef}>٠٪</span>
      </div>
      <div className="scroll-track" aria-hidden>
        <div ref={fillRef} className="scroll-fill" />
        {dots.map((d) => (
          <button
            key={d.id}
            type="button"
            className="scroll-dot"
            data-active={active === d.id ? "true" : "false"}
            style={{ top: `${d.topPct}%` }}
            onClick={go(d.id)}
            aria-label={`الانتقال إلى قسم ${sections.find((s) => s.id === d.id)?.label ?? d.id}`}
          />
        ))}
      </div>
    </>
  );
}
