import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icons";

const values = [
  { icon: <Icon.Heart />, title: "الطفل أولاً", text: "كل قرار تصميمي يبدأ من سلامة الطفل النفسية." },
  { icon: <Icon.Quran />, title: "هوية أصيلة", text: "نحتفي باللغة العربية والقيم الإسلامية والثقافة المغاربية." },
  { icon: <Icon.Brain />, title: "علم لا ادعاء", text: "نبني على أبحاث علم نفس الطفل والتعليم الحديث." },
  { icon: <Icon.Shield />, title: "أمان لا تنازل", text: "لا إعلانات، لا تتبّع، لا مشتريات داخل التطبيق." },
];

export const metadata = { title: "من نحن" };

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="من نحن"
      title={<>صُنعت في الجزائر، <span className="gradient-text-warm">من أجل العالم العربي.</span></>}
      description="إبني فريق صغير من المهندسين والمربّين وعلماء النفس، نؤمن أن طفلاً عربياً يستحقّ منصة عالمية المعايير، عربية الروح."
    >
      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2 md:px-8">
          {values.map((v) => (
            <div key={v.title} className="surface-card flex items-start gap-4 rounded-3xl p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
                style={{ background: "var(--blue-light)", color: "var(--blue)" }}>{v.icon}</span>
              <div>
                <p className="font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>{v.title}</p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
