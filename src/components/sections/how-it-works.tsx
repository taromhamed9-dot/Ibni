"use client";

import { Reveal } from "../reveal";

const STEPS = [
  {
    n: "١",
    emoji: "👨‍👩‍👧",
    title: "أنشئ حساب العائلة",
    text: "سجّل حساب ولي الأمر في أقل من دقيقة، ثم أضف ملف طفلك (الاسم، العمر، المرحلة).",
    tone: "orange",
  },
  {
    n: "٢",
    emoji: "🧠",
    title: "الذكاء يتعرّف على طفلك",
    text: "يقوم المساعد بتقييم مرح وقصير لمستوى طفلك ويبني له خطة تعليمية مخصصة بالكامل.",
    tone: "green",
  },
  {
    n: "٣",
    emoji: "🚀",
    title: "ابدأ التعلم والمتعة",
    text: "ألعاب، قصص، تحديات، ومكافآت يومية — وأنت تتابع التقدم من لوحتك بكل راحة.",
    tone: "blue",
  },
];

const toneMap = {
  orange: { bg: "var(--orange-light)", fg: "var(--orange)" },
  green: { bg: "var(--green-light)", fg: "var(--green)" },
  blue: { bg: "var(--blue-light)", fg: "var(--blue)" },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest"
            style={{ background: "var(--green-light)", color: "var(--green)" }}
          >
            <span className="emoji-bounce">⚡</span> كيف يعمل إبني؟
          </span>
          <h2 className="display-xl mt-4 text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
            ٣ خطوات بسيطة{" "}
            <span className="gradient-text-warm">وتبدأ الرحلة</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            من التسجيل إلى أول إنجاز — كل شيء مصمم ليكون سهلاً للأهل وممتعاً للطفل.
          </p>
        </Reveal>

        <div className="relative mt-12">
          {/* Connecting line (desktop only) */}
          <div className="steps-line" aria-hidden />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
            {STEPS.map((s, i) => {
              const tone = toneMap[s.tone as keyof typeof toneMap];
              return (
                <Reveal key={i} delay={i * 120}>
                  <div className="relative z-10 surface-card flex h-full flex-col items-center rounded-3xl p-6 text-center">
                    <span
                      className="grid h-16 w-16 place-items-center rounded-full text-3xl"
                      style={{
                        background: tone.bg,
                        color: tone.fg,
                        boxShadow: `0 0 0 6px var(--card-bg), 0 0 0 7px ${tone.fg}`,
                      }}
                    >
                      <span className="emoji-bounce">{s.emoji}</span>
                    </span>
                    <span
                      className="mt-4 inline-flex h-7 min-w-[28px] items-center justify-center rounded-full px-2 text-[12px] font-extrabold"
                      style={{ background: tone.fg, color: "#fff" }}
                    >
                      {s.n}
                    </span>
                    <h3 className="mt-3 text-lg font-extrabold sm:text-xl" style={{ color: "var(--text)" }}>
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-[13px] leading-relaxed sm:text-sm" style={{ color: "var(--text-muted)" }}>
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
