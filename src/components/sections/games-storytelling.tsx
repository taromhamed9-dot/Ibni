"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

export function GamesStorytelling() {
  return (
    <section id="games" className="relative py-16 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <article
              className="relative h-full overflow-hidden rounded-[32px] p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(140deg, color-mix(in srgb, var(--orange) 18%, var(--card-bg)) 0%, var(--card-bg) 60%)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "var(--orange-light)", color: "var(--orange)" }}>
                <Icon.Gamepad size={14} /> ألعاب تعليمية
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold md:text-3xl" style={{ color: "var(--text)" }}>
                ألعاب قصيرة، تأثير طويل.
              </h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: "var(--text-muted)" }}>
                ألعاب من ٣ إلى ٧ دقائق تبني الذاكرة والانتباه والمنطق، بدون حلقات إدمان أو إشعارات مزعجة.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["تحدي الحساب الذهني", "بناء الكلمات", "خرائط العالم العربي", "ذاكرة الأشكال"].map((g) => (
                  <li key={g} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text)" }}>
                    <Icon.CheckCircle size={18} />
                    {g}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article
              className="relative h-full overflow-hidden rounded-[32px] p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(140deg, color-mix(in srgb, var(--blue) 18%, var(--card-bg)) 0%, var(--card-bg) 60%)",
                border: "1px solid var(--border-color)",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
                <Icon.Book size={14} /> قصص تفاعلية
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold md:text-3xl" style={{ color: "var(--text)" }}>
                قصص يعيشها طفلك، لا يشاهدها فقط.
              </h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: "var(--text-muted)" }}>
                مغامرات مرسومة بأبطال عرب، يختار طفلك مسار القصة ويتعلّم القيم من خلال قراراته.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["قصص الأنبياء", "أبطال العلم العرب", "مغامرات الصحراء", "حكايات جدّتي"].map((g) => (
                  <li key={g} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text)" }}>
                    <Icon.CheckCircle size={18} />
                    {g}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
