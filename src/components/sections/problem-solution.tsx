"use client";

import { Reveal } from "../reveal";
import { Icon } from "@/components/icons";

const PROBLEMS = [
  { Icon: Icon.PhoneAlert, text: "إدمان الشاشات والهواتف" },
  { Icon: Icon.Alert, text: "محتوى غير آمن وغير مراقب" },
  { Icon: Icon.TrendingDown, text: "ضعف التركيز والانتباه" },
  { Icon: Icon.UserX, text: "عزلة اجتماعية وانطواء" },
  { Icon: Icon.ChartBar, text: "تراجع المستوى الدراسي" },
  { Icon: Icon.Frown, text: "سلوكيات عدوانية من الألعاب" },
];

const SOLUTIONS = [
  { Icon: Icon.Gamepad, text: "ألعاب تعليمية ذكية وممتعة" },
  { Icon: Icon.Shield, text: "محتوى آمن ومراقب بالكامل" },
  { Icon: Icon.Puzzle, text: "تنمية التركيز والإبداع" },
  { Icon: Icon.Family, text: "تفاعل عائلي وترابط أسري" },
  { Icon: Icon.TrendingUp, text: "تحسن ملموس في التعلم" },
  { Icon: Icon.Mosque, text: "قيم عربية إسلامية أصيلة" },
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
            <Icon.Lightning size={12} /> لماذا إبني؟
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
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: "rgba(255, 99, 71, 0.18)", color: "#E04F35" }}
                >
                  <Icon.Alert size={22} />
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
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
                      style={{ background: "rgba(255, 99, 71, 0.12)", color: "#E04F35" }}>
                      <p.Icon size={18} />
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
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: "color-mix(in srgb, var(--green) 20%, transparent)", color: "var(--green)" }}
                >
                  <Icon.Sparkles size={22} />
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
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
                      style={{ background: "color-mix(in srgb, var(--green) 15%, transparent)", color: "var(--green)" }}>
                      <s.Icon size={18} />
                    </span>
                    {s.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bridge */}
        <Reveal delay={250}>
          <div className="mt-10 flex flex-col items-center gap-3 text-center md:mt-14">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl"
                style={{ background: "rgba(255, 99, 71, 0.15)", color: "#E04F35" }}>
                <Icon.Frown size={20} />
              </span>
              <span aria-hidden style={{ color: "var(--orange)" }}>
                <Icon.ArrowLeft size={20} />
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-2xl"
                style={{ background: "var(--orange-light)", color: "var(--orange)" }}>
                <Icon.Sparkles size={20} />
              </span>
              <span aria-hidden style={{ color: "var(--green)" }}>
                <Icon.ArrowLeft size={20} />
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-2xl"
                style={{ background: "var(--green-light)", color: "var(--green)" }}>
                <Icon.Smile size={20} />
              </span>
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
