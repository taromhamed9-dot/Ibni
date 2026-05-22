"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

const problems = [
  { icon: <Icon.EyeOff />, title: "ساعات أمام محتوى عشوائي", text: "محتوى لا يبني، يستهلك انتباه الطفل ويُعيد تشكيل عاداته." },
  { icon: <Icon.Flame />, title: "إدمان رقمي مبكّر", text: "حلقات دوبامين سامّة تجعل التعلّم التقليدي مملاً." },
  { icon: <Icon.Cross />, title: "محتوى غير آمن", text: "خوارزميات لا تميّز بين عقل طفل ووعي بالغ." },
  { icon: <Icon.Bell />, title: "قلق دائم لدى الأهل", text: "صعوبة في معرفة ماذا يرى، ماذا يتعلّم، وماذا يحفظ." },
];

const solutions = [
  { icon: <Icon.Brain />, title: "تعلّم مخصّص بالذكاء الاصطناعي", text: "كل طفل يحصل على مساره الفريد بحسب سرعته ومزاجه." },
  { icon: <Icon.Heart />, title: "حلقات دوبامين صحية", text: "مكافآت تبني المثابرة لا الإدمان." },
  { icon: <Icon.Shield />, title: "محتوى مفلتر يدوياً", text: "كل درس وقصة ولعبة مراجعة من فريق تربوي." },
  { icon: <Icon.Parent />, title: "لوحة هادئة وذكية للأهل", text: "تقارير مفهومة عن إنجازات الطفل وانتباهه ومزاجه." },
];

export function ProblemSolution() {
  return (
    <section id="problem-solution" className="relative py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
            <Icon.Compass size={14} /> المشكلة والحل
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
            من <span className="gradient-text-warm">شاشة تستهلكه</span> إلى منصة <span className="gradient-text-cool">تبنيه</span>.
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            صمّمنا إبني بعد دراسة معمّقة لعادات الأطفال العرب والفجوة بين التعليم التقليدي والعالم الرقمي.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-10">
          <Reveal>
            <div
              className="rounded-[28px] border p-6 md:p-8"
              style={{ borderColor: "var(--border-color)", background: "color-mix(in srgb, var(--orange-light) 40%, var(--card-bg))" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl"
                  style={{ background: "var(--card-bg)", color: "var(--orange)", border: "1px solid var(--border-color)" }}>
                  <Icon.EyeOff />
                </span>
                <h3 className="font-display text-xl font-extrabold" style={{ color: "var(--text)" }}>قبل إبني</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {problems.map((p) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                      style={{ background: "var(--card-bg)", color: "var(--orange)", border: "1px solid var(--border-color)" }}>
                      {p.icon}
                    </span>
                    <div>
                      <p className="font-semibold" style={{ color: "var(--text)" }}>{p.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="rounded-[28px] border p-6 md:p-8"
              style={{ borderColor: "var(--border-color)", background: "color-mix(in srgb, var(--green-light) 50%, var(--card-bg))" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl"
                  style={{ background: "var(--card-bg)", color: "var(--green)", border: "1px solid var(--border-color)" }}>
                  <Icon.CheckCircle />
                </span>
                <h3 className="font-display text-xl font-extrabold" style={{ color: "var(--text)" }}>مع إبني</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {solutions.map((p) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                      style={{ background: "var(--card-bg)", color: "var(--green)", border: "1px solid var(--border-color)" }}>
                      {p.icon}
                    </span>
                    <div>
                      <p className="font-semibold" style={{ color: "var(--text)" }}>{p.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
