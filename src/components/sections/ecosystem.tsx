"use client";

import Link from "next/link";
import { Reveal } from "../reveal";

const FEATURES = [
  {
    emoji: "🧠",
    title: "ذكاء اصطناعي تعليمي",
    text: "مساعد ذكي يتكيف مع مستوى طفلك ويقدم دروساً مخصصة بناءً على نقاط القوة والضعف.",
    tone: "blue",
  },
  {
    emoji: "🎮",
    title: "ألعاب تربوية تفاعلية",
    text: "أكثر من ٢٠٠ لعبة تعليمية مصممة وفق مبادئ علم نفس الطفل لتعزيز التعلم بالمتعة.",
    tone: "orange",
  },
  {
    emoji: "📖",
    title: "قصص تفاعلية مشوّقة",
    text: "قصص عربية تفاعلية يختار فيها الطفل مسار الأحداث مع رسوم متحركة ومؤثرات صوتية.",
    tone: "green",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "لوحة تحكم الأولياء",
    text: "تابع تقدم طفلك لحظة بلحظة مع تقارير ذكية ورؤى مبنية على الذكاء الاصطناعي.",
    tone: "blue",
  },
  {
    emoji: "🏫",
    title: "فصول افتراضية",
    text: "نظام مدرسي متكامل يربط المعلمين بالطلاب في بيئة تعليمية تفاعلية وآمنة.",
    tone: "orange",
  },
  {
    emoji: "🏆",
    title: "نظام المكافآت والإنجازات",
    text: "حافز إيجابي يعزز دافعية الطفل من خلال نقاط وأوسمة وتحديات ممتعة.",
    tone: "green",
  },
  {
    emoji: "🕌",
    title: "قيم عربية إسلامية",
    text: "محتوى يعزز الهوية العربية والإسلامية مع تعليم القرآن والأخلاق والآداب.",
    tone: "blue",
  },
  {
    emoji: "🤸",
    title: "أنشطة بدنية ذكية",
    text: "دمج الأنشطة الحركية مع التعلم الرقمي لصحة جسدية ونفسية متوازنة.",
    tone: "orange",
  },
] as const;

const toneMap = {
  blue: { bg: "var(--blue-light)", fg: "var(--blue)" },
  orange: { bg: "var(--orange-light)", fg: "var(--orange)" },
  green: { bg: "var(--green-light)", fg: "var(--green)" },
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-14 md:py-24" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest"
            style={{ background: "var(--blue-light)", color: "var(--blue)" }}
          >
            <span>✨</span> منظومة تعليمية متكاملة
          </span>
          <h2 className="display-xl mt-4 text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
            كل ما يحتاجه طفلك{" "}
            <span className="gradient-text-warm">في مكان واحد</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            منصة شاملة تجمع بين أحدث تقنيات التعليم والذكاء الاصطناعي مع القيم العربية الأصيلة.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const tone = toneMap[f.tone];
            return (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="tilt surface-card group relative h-full overflow-hidden rounded-3xl p-5">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl text-2xl"
                    style={{ background: tone.bg, color: tone.fg }}
                  >
                    {f.emoji}
                  </span>
                  <h3 className="mt-4 text-base font-extrabold sm:text-lg" style={{ color: "var(--text)" }}>
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed sm:text-sm" style={{ color: "var(--text-muted)" }}>
                    {f.text}
                  </p>
                  <div
                    className="mt-5 inline-flex items-center gap-1 text-[12px] font-extrabold transition-colors"
                    style={{ color: tone.fg }}
                  >
                    اكتشف المزيد <span aria-hidden>←</span>
                  </div>
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

        <Reveal delay={300}>
          <div className="mt-10 flex justify-center">
            <Link href="/apps" className="btn-ghost" style={{ minHeight: 48 }}>
              <span>🎯</span>
              اكتشف جميع المميزات
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
