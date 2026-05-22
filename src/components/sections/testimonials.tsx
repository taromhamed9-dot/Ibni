"use client";

import { Reveal } from "../reveal";

const TESTIMONIALS = [
  {
    quote:
      "تغيّر ابني تماماً منذ بدأنا مع إبني. أصبح متشوقاً للتعلم بدلاً من الألعاب الفارغة. ألاحظ تحسناً واضحاً في تركيزه ولغته العربية. منصة استثنائية!",
    name: "أم محمد",
    role: "والدة، الجزائر العاصمة",
    avatar: "👩🏻",
    badge: "تحوّل إيجابي",
    tone: "orange",
  },
  {
    quote:
      "كأم عاملة، إبني أعطاني راحة بال حقيقية. أعرف أن بنتي تتعلم في بيئة آمنة، وتقارير المنصة تساعدني أعرف نقاط قوّتها وضعفها بدون متابعة مرهقة.",
    name: "د. فاطمة بن علي",
    role: "والدة وطبيبة، وهران",
    avatar: "👩🏻‍⚕️",
    badge: "راحة بال",
    tone: "green",
  },
  {
    quote:
      "كمعلّم، استعملت إبني في الفصل وكانت النتيجة مذهلة. التلاميذ يحبّون الذكاء الاصطناعي، والقصص العربية رفعت مستوى القراءة بشكل ملحوظ.",
    name: "أ. كريم زرڨي",
    role: "معلّم ابتدائي، قسنطينة",
    avatar: "👨🏻‍🏫",
    badge: "نتائج مذهلة",
    tone: "blue",
  },
];

const toneMap = {
  orange: { bg: "var(--orange-light)", fg: "var(--orange)" },
  green: { bg: "var(--green-light)", fg: "var(--green)" },
  blue: { bg: "var(--blue-light)", fg: "var(--blue)" },
} as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-14 md:py-24" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest"
            style={{ background: "var(--orange-light)", color: "var(--orange)" }}
          >
            <span>💬</span> قالوا عن إبني
          </span>
          <h2 className="display-xl mt-4 text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
            آلاف الأولياء{" "}
            <span className="gradient-text-warm">يثقون بنا</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            اكتشف كيف غيّر إبني حياة الأسر العربية وأطفالهم.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t, i) => {
            const tone = toneMap[t.tone as keyof typeof toneMap];
            return (
              <Reveal key={i} delay={i * 100}>
                <div className="tilt surface-card relative h-full overflow-hidden rounded-3xl p-5 sm:p-6">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-extrabold"
                    style={{ background: tone.bg, color: tone.fg }}
                  >
                    <span>✨</span> {t.badge}
                  </span>
                  <div aria-hidden className="mt-3 text-3xl leading-none" style={{ color: tone.fg }}>“</div>
                  <p className="mt-1 text-[14px] leading-relaxed sm:text-[15px]" style={{ color: "var(--text)" }}>
                    {t.quote}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--border-color)" }}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-2xl text-xl"
                        style={{ background: tone.bg }}>
                        {t.avatar}
                      </span>
                      <div className="leading-tight">
                        <div className="text-sm font-extrabold" style={{ color: "var(--text)" }}>
                          {t.name}
                        </div>
                        <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                          {t.role}
                        </div>
                      </div>
                    </div>
                    <div className="text-[14px]" style={{ color: "var(--orange)" }}>
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
