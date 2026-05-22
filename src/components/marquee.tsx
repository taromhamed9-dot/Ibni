import { Icon } from "@/components/icons";

const ITEMS = [
  "تعلّم بلا إعلانات",
  "محتوى آمن مفلتر يدوياً",
  "ذكاء اصطناعي تربوي",
  "قيم عربية وإسلامية",
  "قصص تفاعلية بصوت عربي فصيح",
  "لوحة هادئة لولي الأمر",
  "ألعاب علمية للأطفال",
  "مساعد إبني للقراءة",
  "تقارير أسبوعية مفهومة",
];

export function Marquee() {
  return (
    <div
      className="marquee py-5"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
      aria-hidden
    >
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="marquee-chip">
            <span className="dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
