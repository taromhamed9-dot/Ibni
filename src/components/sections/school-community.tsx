"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

export function SchoolCommunity() {
  return (
    <section id="schools" className="relative py-16 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
              <Icon.School size={14} /> للمدارس والمؤسسات
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
              فصلٌ افتراضي بمعايير المدرسة العربية.
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
              ندعم المعلمين في الجزائر والعالم العربي بأدوات حديثة تتكامل مع المنهاج الرسمي،
              ولا تحلّ محلّ المعلم — بل تمكّنه.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "تكامل مع المنهاج الجزائري",
                "تقارير لولي الأمر تلقائية",
                "أنشطة جماعية وتحديات",
                "دعم تدريب للمعلمين",
              ].map((x) => (
                <li key={x} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text)" }}>
                  <Icon.CheckCircle size={18} />
                  {x}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/schools" className="btn-primary">
                <Icon.ArrowLeft size={16} />
                طلب شراكة مدرسية
              </a>
              <a href="/methodology" className="btn-ghost">
                <Icon.Book size={16} />
                دليل المعلّم
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={120}>
            <div className="surface-card grid grid-cols-2 gap-4 rounded-3xl p-6 md:p-8">
              <Stat label="مدارس شريكة قيد التواصل" value="20+" tone="orange" icon={<Icon.School />} />
              <Stat label="معلمون مدربون" value="65" tone="blue" icon={<Icon.User />} />
              <Stat label="فصول تجريبية مفعّلة" value="34" tone="green" icon={<Icon.Users />} />
              <Stat label="ولايات وصلنا إليها" value="12" tone="orange" icon={<Icon.Map />} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label, value, tone, icon,
}: { label: string; value: string; tone: "orange" | "blue" | "green"; icon: React.ReactNode }) {
  const map = {
    orange: { bg: "var(--orange-light)", fg: "var(--orange)" },
    blue: { bg: "var(--blue-light)", fg: "var(--blue)" },
    green: { bg: "var(--green-light)", fg: "var(--green)" },
  } as const;
  return (
    <div className="rounded-2xl p-4" style={{ background: "color-mix(in srgb, var(--card-bg) 100%, transparent)", border: "1px solid var(--border-color)" }}>
      <span className="grid h-10 w-10 place-items-center rounded-xl"
        style={{ background: map[tone].bg, color: map[tone].fg }}>{icon}</span>
      <p className="mt-3 font-display text-2xl font-extrabold" style={{ color: "var(--text)" }}>{value}</p>
      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
    </div>
  );
}
