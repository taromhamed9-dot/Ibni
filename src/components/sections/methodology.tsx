"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

const steps = [
  { icon: <Icon.Book size={32} />, title: "قصة تجذبه", text: "كل درس يبدأ بقصة قصيرة بطلٌها يشبه طفلك ويخوض مغامرة تعلّم." },
  { icon: <Icon.Brain size={32} />, title: "مفهوم يفهمه", text: "نشرح الفكرة بصور وتشبيهات من حياة الطفل العربي اليومية." },
  { icon: <Icon.Puzzle size={32} />, title: "نشاط يجرّبه", text: "تحديات وألغاز تفاعلية تختبر الفهم لا الحفظ." },
  { icon: <Icon.Target size={32} />, title: "تقييم ذكي", text: "نقيس الفهم لحظياً ونعدّل صعوبة الدرس التالي." },
  { icon: <Icon.Trophy size={32} />, title: "مكافأة هادفة", text: "نجوم، إنجازات، وشارات تبني الثقة لا الإدمان." },
];

export function Methodology() {
  return (
    <section id="methodology" className="relative py-16 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--green-light)", color: "var(--green)" }}>
            <Icon.Map size={14} /> منهجية إبني
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
            خمس خطوات تحوّل الدرس إلى مغامرة.
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            مبنية على أبحاث علم نفس الطفل والتربية الحديثة، ومُكيّفة للهوية العربية.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="surface-card relative h-full rounded-3xl p-6">
                <span
                  className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-xs font-extrabold"
                  style={{ background: "var(--orange-light)", color: "var(--orange)" }}
                >
                  {i + 1}
                </span>
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl"
                  style={{ background: "var(--blue-light)", color: "var(--blue)" }}
                >
                  {s.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
