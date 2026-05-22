import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icons";

export const metadata = { title: "الاشتراك" };

const plans = [
  {
    name: "إبني للعائلة",
    price: "1,990",
    period: "د.ج / شهر",
    note: "حتى ٣ أطفال · ١٤ يوم تجربة مجانية",
    features: [
      "كل التطبيقات والقصص والألعاب",
      "مساعد إبني الذكي",
      "لوحة ولي الأمر",
      "تقارير أسبوعية",
      "بدون إعلانات",
    ],
    cta: "ابدأ التجربة المجانية",
    tone: "default" as const,
  },
  {
    name: "إبني للعائلة الكبيرة",
    price: "2,990",
    period: "د.ج / شهر",
    note: "حتى ٦ أطفال · توفير ٢٥٪",
    features: [
      "كل ميزات الباقة العائلية",
      "مسارات تعلّم متعدّدة",
      "أولوية الدعم",
      "ألعاب فيزيائية شهرية (قريباً)",
    ],
    cta: "اختر هذه الباقة",
    tone: "primary" as const,
  },
  {
    name: "إبني للمدارس",
    price: "—",
    period: "حسب الحاجة",
    note: "اتصل بنا لباقة مخصصة",
    features: [
      "لوحة معلّم وفصل افتراضي",
      "تكامل مع المنهاج الرسمي",
      "تقارير لولي الأمر تلقائية",
      "تدريب مجاني للمعلمين",
    ],
    cta: "طلب عرض سعر",
    tone: "ghost" as const,
  },
];

export default function PricingPage() {
  return (
    <PageShell
      eyebrow="الاشتراك"
      title={<>أسعار صادقة، <span className="gradient-text-warm">بدون مفاجآت.</span></>}
      description="١٤ يوم تجربة مجانية لكل عائلة جديدة. بدون بطاقة بنكية. ألغِ في أي وقت."
    >
      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className="surface-card relative flex h-full flex-col rounded-3xl p-7"
              style={
                p.tone === "primary"
                  ? {
                      borderColor: "color-mix(in srgb, var(--orange) 50%, var(--border-color))",
                      background:
                        "linear-gradient(180deg, color-mix(in srgb, var(--orange-light) 60%, var(--card-bg)) 0%, var(--card-bg) 100%)",
                    }
                  : undefined
              }
            >
              {p.tone === "primary" && (
                <span
                  className="absolute -top-3 right-6 rounded-full px-3 py-1 text-[11px] font-bold text-white"
                  style={{ background: "var(--orange)" }}
                >
                  الأكثر اختياراً
                </span>
              )}
              <h3 className="font-display text-xl font-extrabold" style={{ color: "var(--text)" }}>{p.name}</h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-4xl font-extrabold" style={{ color: "var(--text)" }}>{p.price}</span>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>{p.period}</span>
              </div>
              <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>{p.note}</p>

              <ul className="mt-6 space-y-3 text-sm" style={{ color: "var(--text)" }}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span style={{ color: "var(--green)" }}><Icon.CheckCircle size={18} /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/contact" className={p.tone === "primary" ? "btn-primary mt-8" : "btn-ghost mt-8"}>
                <Icon.ArrowLeft size={16} />
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
