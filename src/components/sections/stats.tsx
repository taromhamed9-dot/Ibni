"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site";
import { Reveal } from "../reveal";
import { Icon } from "../icons";

const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
const COL_HEIGHT = 84; // px per digit slot (matches font-size used)

/** Mechanical odometer-style number that rolls each column from 0 to its final digit. */
function Roller({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !shown) {
            setShown(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  // Build the target as Arabic digit string e.g. "1,200" -> "١٬٢٠٠"
  const formatted = target.toLocaleString("ar-EG").split("");

  return (
    <span ref={ref} className="roller" style={{ direction: "ltr" }}>
      {prefix && <span className="px-0.5">{prefix}</span>}
      {formatted.map((ch, i) => {
        // If not a digit (e.g. thousands separator ٬), render as-is
        const idx = ARABIC_DIGITS.indexOf(ch);
        if (idx === -1) {
          return (
            <span key={i} className="inline-block" style={{ lineHeight: 1 }}>
              {ch}
            </span>
          );
        }
        const finalDigit = idx;
        const stripTranslate = shown ? -finalDigit * COL_HEIGHT : 0;
        return (
          <span key={i} className="roller-col" style={{ height: COL_HEIGHT }}>
            <span
              className="roller-strip"
              style={{
                transform: `translate3d(0, ${stripTranslate}px, 0)`,
                transitionDelay: `${i * 120}ms`,
              }}
            >
              {ARABIC_DIGITS.map((d, k) => (
                <span key={k} style={{ height: COL_HEIGHT, lineHeight: `${COL_HEIGHT}px` }}>
                  {d}
                </span>
              ))}
            </span>
          </span>
        );
      })}
      {suffix && <span className="px-0.5">{suffix}</span>}
    </span>
  );
}

/** Animated bar from 0 → percent (only used as a hint, not a literal). */
function Bar({ percent, delay = 0 }: { percent: number; delay?: number }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !active) {
            setTimeout(() => setActive(true), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active, delay]);
  return (
    <div ref={ref} className="mt-4 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "var(--border-color)" }}>
      <div
        className="h-full origin-right rounded-full"
        style={{
          background: "linear-gradient(90deg, var(--orange), var(--green))",
          transform: `scaleX(${active ? Math.max(0.05, percent / 100) : 0})`,
          transition: "transform 1.6s var(--ease-spring)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

const TONE_ICONS = [
  { icon: <Icon.Users size={20} />, fg: "var(--orange)", bg: "var(--orange-light)" },
  { icon: <Icon.Book size={20} />, fg: "var(--blue)", bg: "var(--blue-light)" },
  { icon: <Icon.Map size={20} />, fg: "var(--green)", bg: "var(--green-light)" },
  { icon: <Icon.Heart size={20} />, fg: "var(--orange)", bg: "var(--orange-light)" },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ background: "var(--green-light)", color: "var(--green)" }}
          >
            <Icon.CheckCircle size={14} />
            أرقام صادقة
          </span>
          <h2 className="display-xl mt-4 text-4xl md:text-6xl" style={{ color: "var(--text)" }}>
            ليست أرقاماً برّاقة.<br />
            <span className="gradient-text-warm">إنّها أرقام مكتسبة.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            نحن في بدايتنا، ونعدّ كل عائلة كأنها الأولى.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => {
            const tone = TONE_ICONS[i % TONE_ICONS.length];
            const prefix = s.suffix === "+" ? "+" : "";
            const trailing = s.suffix && s.suffix !== "+" ? s.suffix : "";
            const percent = s.suffix === "%" ? s.value : Math.min(95, 25 + i * 22);
            return (
              <Reveal key={s.label} delay={i * 100}>
                <div className="tilt surface-card relative overflow-hidden rounded-3xl p-7 md:p-8">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{ background: tone.bg, color: tone.fg }}
                  >
                    {tone.icon}
                  </span>
                  <div
                    className="display-xl mt-6 flex items-baseline gap-1 text-[64px] md:text-[72px]"
                    style={{ color: "var(--text)", lineHeight: 1 }}
                  >
                    <Roller target={s.value} prefix={prefix} suffix={trailing} />
                  </div>
                  <p className="mt-3 text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
                    {s.label}
                  </p>
                  <Bar percent={percent} delay={i * 200} />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full opacity-40 blur-2xl"
                    style={{ background: tone.bg }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
