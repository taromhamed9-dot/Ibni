"use client";

import { Reveal } from "../reveal";

const PROBLEMS = [
  { emoji: "📱", text: "إدمان الشاشات والهواتف" },
  { emoji: "😰", text: "محتوى غير آمن وغير مراقب" },
  { emoji: "🧠", text: "ضعف التركيز والانتباه" },
  { emoji: "😔", text: "عزلة اجتماعية وانطواء" },
  { emoji: "📉", text: "تراجع المستوى الدراسي" },
  { emoji: "😤", text: "سلوكيات عدوانية من الألعاب" },
];

const SOLUTIONS = [
  { emoji: "🎮", text: "ألعاب تعليمية ذكية وممتعة" },
  { emoji: "🛡️", text: "محتوى آمن ومراقب بالكامل" },
  { emoji: "🧩", text: "تنمية التركيز والإبداع" },
  { emoji: "👨‍👩‍👧‍👦", text: "تفاعل عائلي وترابط أسري" },
  { emoji: "📈", text: "تحسن ملموس في التعلم" },
  { emoji: "🌟", text: "قيم عربية إسلامية أصيلة" },
];

export function ProblemSolution() {
  return (
    <section id="problem-solution" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest"
            style={{ background: "var(--orange-light)", color: "var(--orange)" }}
          >
            <span>💡</span> لماذا إبني؟
          </span>
          <h2 className="display-xl mt-4 text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
            من إدمان الشاشات إلى{" "}
            <span className="gradient-text-warm">التعلم الذكي</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            طفلك يستحق بديلاً ذكياً يحوّل وقت الشاشة إلى رحلة تعليمية ممتعة وآمنة.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-8">
          {/* Problem column */}
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[28px] p-5 sm:p-7"
              style={{
                background: "linear-gradient(180deg, rgba(255, 99, 71, 0.08) 0%, var(--card-bg) 100%)",
                border: "1px solid color-mix(in srgb, #FF6347 25%, var(--border-color))",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl text-2xl"
                  style={{ background: "rgba(255, 99, 71, 0.18)" }}
                >
                  😟
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-extrabold uppercase tracking-widest" style={{ color: "#E04F35" }}>
                    المشكلة
                  </p>
                  <h3 className="text-lg font-extrabold sm:text-xl" style={{ color: "var(--text)" }}>
                    ما يعانيه أطفالنا اليوم
                  </h3>
                </div>
              </div>
              <ul className="mt-5 grid gap-3">
                {PROBLEMS.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-2xl p-3 text-sm font-semibold sm:text-base"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text)",
                    }}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg"
                      style={{ background: "rgba(255, 99, 71, 0.12)" }}>
                      {p.emoji}
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Solution column */}
          <Reveal delay={120}>
            <div
              className="relative overflow-hidden rounded-[28px] p-5 sm:p-7"
              style={{
                background: "linear-gradient(180deg, var(--green-light) 0%, var(--card-bg) 100%)",
                border: "1px solid color-mix(in srgb, var(--green) 35%, var(--border-color))",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl text-2xl"
                  style={{ background: "color-mix(in srgb, var(--green) 20%, transparent)" }}
                >
                  ✨
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-extrabold uppercase tracking-widest" style={{ color: "var(--green)" }}>
                    الحل — إبني
                  </p>
                  <h3 className="text-lg font-extrabold sm:text-xl" style={{ color: "var(--text)" }}>
                    البديل الذكي والآمن
                  </h3>
                </div>
              </div>
              <ul className="mt-5 grid gap-3">
                {SOLUTIONS.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-2xl p-3 text-sm font-semibold sm:text-base"
                    style={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text)",
                    }}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg"
                      style={{ background: "color-mix(in srgb, var(--green) 15%, transparent)" }}>
                      {s.emoji}
                    </span>
                    {s.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bridge — animated arrow */}
        <Reveal delay={250}>
          <div className="mt-10 flex flex-col items-center gap-3 text-center md:mt-14">
            <div className="flex items-center gap-2 text-3xl">
              <span>😰</span>
              <span aria-hidden style={{ color: "var(--orange)" }}>›››</span>
              <span>✨</span>
              <span aria-hidden style={{ color: "var(--green)" }}>›››</span>
              <span>🌟</span>
            </div>
            <p className="text-sm font-bold" style={{ color: "var(--text-muted)" }}>
              التحوّل يبدأ من هنا
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
