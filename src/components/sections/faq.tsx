"use client";

import { useState } from "react";
import { Reveal } from "../reveal";
import { Icon } from "@/components/icons";

const FAQS = [
  {
    q: "ما هو إبني؟",
    a: "إبني منصة تعليمية تفاعلية للأطفال العرب من 5 إلى 10 سنوات. تجمع بين الذكاء الاصطناعي والألعاب التربوية والقصص العربية والقيم الإسلامية، لتقديم بديل آمن وممتع لإدمان الشاشات.",
  },
  {
    q: "هل المنصة آمنة لطفلي؟",
    a: "نعم 100%. كل محتوى داخل إبني مفلتر يدوياً، خالٍ من الإعلانات، ولا نجمع بيانات الأطفال للبيع. لدى ولي الأمر تحكم كامل في وقت الاستخدام ونوع المحتوى.",
  },
  {
    q: "كيف يعمل الذكاء الاصطناعي في إبني؟",
    a: "الذكاء الاصطناعي يتابع تفاعل طفلك مع كل درس ولعبة، يفهم نقاط قوته ويولّد له تمارين وقصص مخصصة بصعوبة مناسبة، مع ملاحظات تشجيعية بصوت عربي فصيح.",
  },
  {
    q: "هل يمكنني متابعة تقدم طفلي؟",
    a: "بالطبع. لوحة تحكم ولي الأمر تعرض تقارير أسبوعية ذكية: الوقت المستثمر، المهارات التي تطوّرت، والاقتراحات التربوية لخطوة الأسبوع المقبل.",
  },
  {
    q: "هل يعمل إبني بدون إنترنت؟",
    a: "نعم! مع الخطة العائلية والمدرسية، يمكنك تحميل المحتوى واستخدامه بدون اتصال بالإنترنت.",
  },
  {
    q: "كيف أشترك؟",
    a: "اضغط زر «ابدأ مجاناً»، أنشئ حساب العائلة في أقل من دقيقة، أضف طفلك، واختر الخطة المناسبة. تجربة 14 يوماً مجانية بدون بطاقة بنكية.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
        <Reveal className="text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest"
            style={{ background: "var(--blue-light)", color: "var(--blue)" }}
          >
            <Icon.Question size={12} /> أسئلة شائعة
          </span>
          <h2 className="display-xl mt-4 text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
            كل ما تريد معرفته{" "}
            <span className="gradient-text-warm">عن إبني</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 60}>
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{
                    background: "var(--card-bg)",
                    border: `1px solid ${isOpen ? "color-mix(in srgb, var(--orange) 40%, var(--border-color))" : "var(--border-color)"}`,
                    transition: "border-color var(--dur-state) var(--ease-spring)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-right text-sm font-extrabold sm:text-base"
                    style={{ color: "var(--text)", minHeight: 56 }}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-base font-extrabold transition-transform"
                      style={{
                        background: isOpen ? "var(--orange)" : "var(--blue-light)",
                        color: isOpen ? "#fff" : "var(--blue)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transitionDuration: "0.3s",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "320px" : "0px",
                      transition: "max-height 0.4s var(--ease-spring), opacity 0.3s",
                      opacity: isOpen ? 1 : 0,
                      overflow: "hidden",
                    }}
                  >
                    <div className="border-t px-4 py-4 text-[13px] leading-relaxed sm:text-sm"
                      style={{ borderColor: "var(--border-color)", color: "var(--text-muted)" }}>
                      {item.a}
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
