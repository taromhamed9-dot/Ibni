"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Magnetic({
  children,
  strength = 0.35,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const wrap = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      return;
    }
    const target = el.querySelector<HTMLElement>(".magnetic-target") ?? (el.firstElementChild as HTMLElement | null);
    if (!target) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        target.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        target.style.transform = "translate3d(0,0,0)";
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <span ref={wrap} className="magnetic">
      {children}
    </span>
  );
}
