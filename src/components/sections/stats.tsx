"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site";
import { Reveal } from "../reveal";

const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
const COL_HEIGHT = 56;

/** Mechanical odometer-style Arabic-digit roll-down counter. */
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

  const formatted = target.toLocaleString("ar-EG").split("");

  return (
    <span ref={ref} className="roller" style={{ direction: "ltr" }}>
      {prefix && <span style={{ lineHeight: 1 }}>{prefix}</span>}
      {formatted.map((ch, i) => {
        const idx = ARABIC_DIGITS.indexOf(ch);
        if (idx === -1) {
          return (
            <span key={i} className="inline-block" style={{ lineHeight: 1 }}>
              {ch}
            </span>
          );
        }
        const stripTranslate = shown ? -idx * COL_HEIGHT : 0;
        return (
          <span key={i} className="roller-col" style={{ height: COL_HEIGHT }}>
            <span
              className="roller-strip"
              style={{
                transform: `translate3d(0, ${stripTranslate}px, 0)`,
                transitionDelay: `${i * 90}ms`,
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
      {suffix && <span style={{ lineHeight: 1 }}>{suffix}</span>}
    </span>
  );
}

const TONES = [
  { bg: "var(--orange-light)", fg: "var(--orange)" },
  { bg: "var(--blue-light)", fg: "var(--blue)" },
  { bg: "var(--green-light)", fg: "var(--green)" },
  { bg: "var(--orange-light)", fg: "var(--orange)" },
];

export function Stats() {
  return (
    <section id="stats" className="relative py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((s, i) => {
            const tone = TONES[i % TONES.length];
            const prefix = s.suffix === "+" ? "+" : "";
            const trailing = s.suffix && s.suffix !== "+" ? s.suffix : "";
            return (
              <Reveal key={s.label} delay={i * 100}>
                <div
                  className="tilt surface-card relative overflow-hidden rounded-3xl p-4 text-center sm:p-5 md:p-7"
                >
                  <span
                    className="mx-auto grid h-12 w-12 place-items-center rounded-2xl text-2xl"
                    style={{ background: tone.bg, color: tone.fg }}
                  >
                    <span className="emoji-bounce">{s.emoji}</span>
                  </span>
                  <div
                    className="display-xl mt-3 flex items-baseline justify-center text-[32px] sm:text-[40px] md:text-[52px]"
                    style={{ color: "var(--text)", lineHeight: 1 }}
                  >
                    <Roller target={s.value} prefix={prefix} suffix={trailing} />
                  </div>
                  <p className="mt-2 text-[12px] font-bold sm:text-sm" style={{ color: "var(--text-muted)" }}>
                    {s.label}
                  </p>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full opacity-40 blur-2xl"
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
