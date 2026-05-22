"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site";
import { Reveal } from "../reveal";

function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4); }

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1800;
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              setVal(Math.round(easeOutQuart(t) * target));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  const prefix = suffix === "+" ? "+" : "";
  const trailing = suffix && suffix !== "+" ? suffix : "";
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toLocaleString("ar-EG")}
      {trailing}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl" style={{ color: "var(--text)" }}>
            أرقام حقيقية. ثقة حقيقية.
          </h2>
          <p className="mt-3 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            نحن في بدايتنا، ونؤمن أن الأرقام الصادقة أهمّ من الأرقام البرّاقة.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="surface-card flex flex-col items-center gap-2 rounded-3xl p-6 text-center md:p-8">
                <span
                  className="gradient-text-warm font-display text-4xl font-extrabold md:text-5xl"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  <Counter target={s.value} suffix={s.suffix} />
                </span>
                <span className="text-sm font-medium md:text-base" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
