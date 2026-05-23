"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

const apps = [
  { icon: <Icon.Brain />, name: "إبني للرياضيات", desc: "الحساب الذهني، الأعداد، الهندسة، الكسور.", tone: "blue" },
  { icon: <Icon.Pencil />, name: "إبني للعربية", desc: "الحروف، القراءة، الإملاء، والقصص.", tone: "orange" },
  { icon: <Icon.Quran />, name: "إبني للقرآن", desc: "تحفيظ، تجويد، أذكار، وقصص الأنبياء.", tone: "green" },
  { icon: <Icon.Globe />, name: "إبني للعلوم", desc: "تجارب آمنة، طبيعة، فضاء، وجسم الإنسان.", tone: "blue" },
  { icon: <Icon.Music />, name: "إبني للأناشيد", desc: "أناشيد هادفة بدون موسيقى صاخبة.", tone: "orange" },
  { icon: <Icon.Palette />, name: "إبني للإبداع", desc: "رسم، تلوين، حكاية، وأشغال يدوية.", tone: "green" },
];

const toneMap: Record<string, { bg: string; fg: string }> = {
  blue: { bg: "var(--blue-light)", fg: "var(--blue)" },
  orange: { bg: "var(--orange-light)", fg: "var(--orange)" },
  green: { bg: "var(--green-light)", fg: "var(--green)" },
};

export function Apps() {
  return (
    <section id="apps" className="relative py-16 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
            <Icon.Cube size={14} /> تطبيقات إبني
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
            تطبيق واحد. عوالم متعدّدة.
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            كل قسم من إبني صُمّم بفريق تربوي مختصّ، ومُختبَر مع أطفال من الجزائر والمغرب والمشرق العربي.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((a, i) => (
            <Reveal key={a.name} delay={i * 70}>
              <article className="surface-card group flex h-full items-start gap-4 rounded-3xl p-6">
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl"
                  style={{ background: toneMap[a.tone].bg, color: toneMap[a.tone].fg }}
                >
                  {a.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>{a.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
