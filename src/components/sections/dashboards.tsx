"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

export function Dashboards() {
  return (
    <section id="dashboards" className="relative py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--orange-light)", color: "var(--orange)" }}>
            <Icon.Eye size={14} /> لوحات متخصصة
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
            لكل دور لوحة. لكل لوحة هدف.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Parent */}
          <Reveal>
            <div className="surface-card rounded-3xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl"
                style={{ background: "var(--blue-light)", color: "var(--blue)" }}><Icon.Parent /></span>
              <h3 className="mt-5 font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>لوحة ولي الأمر</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                تقارير هادئة وذكية: تقدّم الطفل، وقت الشاشة، نقاط القوة، وما يحتاج دعمك فيه.
              </p>
              <ul className="mt-5 space-y-2 text-sm" style={{ color: "var(--text)" }}>
                <Li>تقارير أسبوعية بالعربية</Li>
                <Li>توصيات ذكية مخصّصة</Li>
                <Li>تنبيهات هادفة فقط</Li>
              </ul>
            </div>
          </Reveal>

          {/* Child */}
          <Reveal delay={100}>
            <div className="surface-card rounded-3xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl"
                style={{ background: "var(--orange-light)", color: "var(--orange)" }}><Icon.Star /></span>
              <h3 className="mt-5 font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>لوحة الطفل</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                عالم ممتع وبسيط: مهمتي اليوم، نجومي، رحلتي، وقصة الأسبوع.
              </p>
              <ul className="mt-5 space-y-2 text-sm" style={{ color: "var(--text)" }}>
                <Li>واجهة مبسّطة بحسب العمر</Li>
                <Li>نظام نجوم وشارات صحي</Li>
                <Li>وضع تركيز بدون إشعارات</Li>
              </ul>
            </div>
          </Reveal>

          {/* Teacher */}
          <Reveal delay={200}>
            <div className="surface-card rounded-3xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl"
                style={{ background: "var(--green-light)", color: "var(--green)" }}><Icon.School /></span>
              <h3 className="mt-5 font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>لوحة المعلم</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                إدارة الفصل، توزيع الأنشطة، متابعة المستوى، وتقارير لولي الأمر بنقرة.
              </p>
              <ul className="mt-5 space-y-2 text-sm" style={{ color: "var(--text)" }}>
                <Li>قوائم الفصول والمستويات</Li>
                <Li>أنشطة جماعية تفاعلية</Li>
                <Li>تكامل مع المنهاج الرسمي</Li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <Icon.Check size={16} />
      {children}
    </li>
  );
}
