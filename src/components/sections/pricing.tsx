"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "../reveal";
import { Icon } from "@/components/icons";

type Cycle = "monthly" | "yearly";

const PLANS = [
  {
    id: "free",
    Icon: Icon.Tree,
    name: "المجاني",
    tag: "ابدأ رحلة طفلك التعليمية بدون أي تكلفة",
    monthly: 0,
    yearly: 0,
    cta: { label: "ابدأ مجاناً", href: "/signup" },
    highlight: false,
    perks: [
      "5 ألعاب تعليمية",
      "3 قصص تفاعلية",
      "تتبع أساسي للتقدم",
      "حساب طفل واحد",
      "محتوى محدود يومياً",
    ],
  },
  {
    id: "family",
    Icon: Icon.Family,
    name: "العائلي",
    tag: "الخطة المثالية لكل عائلة جزائرية",
    monthly: 2990,
    yearly: 2093,
    cta: { label: "اشترك الآن", href: "/signup?plan=family" },
    highlight: true,
    perks: [
      "جميع الألعاب التعليمية (+200)",
      "جميع القصص التفاعلية (+500)",
      "ذكاء اصطناعي مخصص",
      "حتى 3 حسابات أطفال",
      "لوحة تحكم الأولياء الكاملة",
      "تقارير أسبوعية ذكية",
      "بدون إعلانات",
      "وضع عدم الاتصال",
    ],
  },
  {
    id: "school",
    Icon: Icon.School,
    name: "المدرسي",
    tag: "للمدارس والمؤسسات التعليمية",
    monthly: 9990,
    yearly: 6993,
    cta: { label: "تواصل معنا", href: "/contact" },
    highlight: false,
    perks: [
      "كل مميزات الخطة العائلية",
      "حتى 50 حساب طالب",
      "لوحة تحكم المعلم",
      "فصول افتراضية",
      "تقارير مفصلة لكل طالب",
      "دعم فني مخصص",
      "تخصيص المحتوى",
      "API للتكامل",
    ],
  },
];

export function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("yearly");

  return (
    <section id="pricing" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest"
            style={{ background: "var(--blue-light)", color: "var(--blue)" }}
          >
            <Icon.Cube size={12} /> خطط الاشتراك
          </span>
          <h2 className="display-xl mt-4 text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
            استثمر في{" "}
            <span className="gradient-text-warm">مستقبل طفلك</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            اختر الخطة المناسبة لعائلتك — جميع الخطط تتضمن ضمان استرداد لمدة 30 يوماً.
          </p>
        </Reveal>

        {/* Cycle toggle */}
        <Reveal delay={120}>
          <div className="mx-auto mt-7 inline-flex items-center gap-1 rounded-full p-1.5 max-w-[320px]"
            style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)", display: "flex" }}>
            <button
              type="button"
              onClick={() => setCycle("monthly")}
              className="flex-1 rounded-full px-4 py-2 text-sm font-extrabold transition-colors"
              style={
                cycle === "monthly"
                  ? { background: "var(--text)", color: "var(--bg)" }
                  : { color: "var(--text-muted)" }
              }
            >
              شهري
            </button>
            <button
              type="button"
              onClick={() => setCycle("yearly")}
              className="flex-1 rounded-full px-4 py-2 text-sm font-extrabold transition-colors"
              style={
                cycle === "yearly"
                  ? { background: "var(--text)", color: "var(--bg)" }
                  : { color: "var(--text-muted)" }
              }
            >
              سنوي
              <span
                className="ml-1 rounded-full px-1.5 py-0.5 text-[9px] font-extrabold"
                style={{ background: "var(--orange)", color: "#fff" }}
              >
                وفّر 30%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {PLANS.map((p, i) => {
            const price = cycle === "yearly" ? p.yearly : p.monthly;
            return (
              <Reveal key={p.id} delay={i * 100}>
                <div
                  className="relative h-full overflow-hidden rounded-[28px] p-6 sm:p-7"
                  style={
                    p.highlight
                      ? {
                          background: "linear-gradient(180deg, var(--orange-light), var(--card-bg) 60%)",
                          border: "2px solid var(--orange)",
                          boxShadow: "0 16px 56px rgba(20, 184, 166, 0.18)",
                        }
                      : {
                          background: "var(--card-bg)",
                          border: "1px solid var(--border-color)",
                          boxShadow: "var(--shadow)",
                        }
                  }
                >
                  {p.highlight && (
                    <span
                      className="absolute -top-px left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-b-2xl px-3 py-1 text-[10px] font-extrabold"
                      style={{ background: "var(--orange)", color: "#fff" }}
                    >
                      <Icon.Star size={10} />
                      الأكثر اختياراً
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl"
                      style={{
                        background: p.highlight ? "color-mix(in srgb, var(--orange) 18%, transparent)" : "var(--blue-light)",
                        color: p.highlight ? "var(--orange)" : "var(--blue)",
                      }}>
                      <p.Icon size={24} />
                    </span>
                    <div className="leading-tight">
                      <div className="text-lg font-extrabold sm:text-xl" style={{ color: "var(--text)" }}>{p.name}</div>
                      <div className="text-[12px]" style={{ color: "var(--text-muted)" }}>{p.tag}</div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="display-xl text-4xl sm:text-5xl" style={{ color: "var(--text)" }}>
                      {price === 0 ? "مجاناً" : price.toLocaleString("en-US")}
                    </span>
                    {price > 0 && (
                      <span className="text-sm font-bold" style={{ color: "var(--text-muted)" }}>
                        دج / شهرياً
                      </span>
                    )}
                  </div>
                  {price > 0 && cycle === "yearly" && (
                    <p className="mt-1 text-[12px] font-bold" style={{ color: "var(--green)" }}>
                      توفير 30% مع الاشتراك السنوي
                    </p>
                  )}

                  <ul className="mt-5 space-y-2.5">
                    {p.perks.map((perk, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px] sm:text-sm" style={{ color: "var(--text)" }}>
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white"
                          style={{ background: p.highlight ? "var(--orange)" : "var(--green)" }}>
                          <Icon.Check size={12} />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={p.cta.href}
                    className={p.highlight ? "btn-primary mt-6 w-full justify-center" : "btn-ghost mt-6 w-full justify-center"}
                    style={{ minHeight: 48 }}
                  >
                    {p.cta.label}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={350}>
          <div
            className="mx-auto mt-8 flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-center text-[13px] font-bold sm:text-sm"
            style={{
              background: "var(--green-light)",
              color: "var(--green)",
              border: "1px solid color-mix(in srgb, var(--green) 25%, transparent)",
              maxWidth: 560,
            }}
          >
            <Icon.Shield size={16} />
            ضمان استرداد كامل خلال 30 يوماً — بدون أي أسئلة.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
