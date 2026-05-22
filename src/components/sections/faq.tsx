"use client";

import { useState } from "react";
import { Icon } from "../icons";
import { Reveal } from "../reveal";

const faq = [
  { q: "هل المحتوى آمن لطفلي؟", a: "كل قصة، لعبة، ودرس يمرّ عبر مراجعة تربوية يدوية قبل النشر. لا إعلانات، لا مشتريات داخل التطبيق، ولا تتبّع للأطفال." },
  { q: "هل التطبيق يعمل بدون إنترنت؟", a: "نعم. يمكن تنزيل الدروس والقصص للاستخدام دون اتصال. تكتمل المزامنة عند توفر الإنترنت." },
  { q: "ما الفئة العمرية المناسبة؟", a: "إبني مُصمّم بدقة للأطفال من ٥ إلى ١٠ سنوات، مع مسارات تتكيّف لكل عمر." },
  { q: "هل يدعم اللهجة الجزائرية؟", a: "ندعم العربية الفصحى المبسّطة، مع إضافات تدريجية للهجات المحلية بدءاً من الجزائرية والمغربية." },
  { q: "كيف تتعامل المنصة مع الذكاء الاصطناعي؟", a: "نموذجنا تربوي مُقيَّد بمحتوى آمن، لا يخرج عن إطار التعلّم، ولا يحفظ بيانات الأطفال للتدريب." },
  { q: "هل أستطيع تجربتها مجاناً؟", a: "نعم. كل عائلة جديدة تحصل على ١٤ يوماً مجاناً بدون بطاقة بنكية." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-16 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
            <Icon.Chat size={14} /> أسئلة شائعة
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
            كل ما يهمّك معرفته.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className="surface-card rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-right"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-extrabold" style={{ color: "var(--text)" }}>{f.q}</span>
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform"
                      style={{
                        background: "var(--blue-light)", color: "var(--blue)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <Icon.ChevronDown size={16} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {f.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
