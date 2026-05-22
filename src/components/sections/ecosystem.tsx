"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

const pillars = [
  { icon: <Icon.Robot size={32} />, color: "blue",   title: "مساعد إبني الذكي", text: "رفيق ودود يتحدث العربية بفصاحة، يشرح، يحفّز، ويقرأ بصوت طبيعي." },
  { icon: <Icon.Gamepad size={32} />, color: "orange", title: "ألعاب تعليمية", text: "ألعاب قصيرة تبني الحساب، اللغة، الانتباه، والتفكير المنطقي." },
  { icon: <Icon.Book size={32} />, color: "green",  title: "قصص تفاعلية", text: "قصص بأبطال عرب يختار طفلك مسارها فيتعلّم القيم باللعب." },
  { icon: <Icon.Quran size={32} />, color: "blue",   title: "أخلاق وقرآن", text: "محتوى أصيل لتعليم الأذكار، الأخلاق، السيرة، وحب اللغة العربية." },
  { icon: <Icon.School size={32} />, color: "orange", title: "نظام افتراضي للمدارس", text: "صفوف رقمية للمعلمين، أنشطة جماعية، وتقارير لولي الأمر." },
  { icon: <Icon.Cube size={32} />, color: "green",  title: "ألعاب وأدوات فيزيائية", text: "ربط التعلّم الرقمي بألعاب يدوية حقيقية تصل إلى بيتك." },
];

const colorMap: Record<string, { bg: string; fg: string }> = {
  blue: { bg: "var(--blue-light)", fg: "var(--blue)" },
  orange: { bg: "var(--orange-light)", fg: "var(--orange)" },
  green: { bg: "var(--green-light)", fg: "var(--green)" },
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--orange-light)", color: "var(--orange)" }}>
            <Icon.Tree size={14} /> منظومة إبني
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
            ست أركان متّصلة تبني عقل طفلك من كل اتجاه.
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            ليست مجرد تطبيق. إبني منظومة متكاملة تنمو مع طفلك من سن الخامسة إلى العاشرة.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="surface-card h-full rounded-3xl p-7">
                <span
                  className="grid h-14 w-14 place-items-center rounded-2xl"
                  style={{ background: colorMap[p.color].bg, color: colorMap[p.color].fg }}
                >
                  {p.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
