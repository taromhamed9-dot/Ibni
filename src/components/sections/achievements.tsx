"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

const badges = [
  { icon: <Icon.Flame />, name: "متعلّم متواصل", desc: "٧ أيام بدون انقطاع" },
  { icon: <Icon.Star />, name: "نجم القراءة", desc: "أكمل ١٠ قصص" },
  { icon: <Icon.Brain />, name: "عقل سريع", desc: "أتقن الحساب الذهني" },
  { icon: <Icon.Quran />, name: "حافظ صغير", desc: "حفظ ٣ سور قصيرة" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--orange-light)", color: "var(--orange)" }}>
            <Icon.Trophy size={14} /> نظام الإنجاز
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
            إنجازات تبني الثقة، ليس الإدمان.
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            صمّمنا نظام مكافآت محسوب بدقّة: شارات تعزّز المثابرة، نقاط لا تُشترى بالمال،
            ولوحة تقدّم تركّز على النموّ الحقيقي.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {badges.map((b, i) => (
            <Reveal key={b.name} delay={i * 80}>
              <div className="surface-card flex flex-col items-center gap-3 rounded-3xl p-6 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full"
                  style={{
                    background: "linear-gradient(135deg, var(--orange) 0%, var(--green) 100%)",
                    color: "#fff",
                    boxShadow: "var(--shadow)",
                  }}>
                  {b.icon}
                </span>
                <p className="font-display text-base font-extrabold" style={{ color: "var(--text)" }}>{b.name}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
