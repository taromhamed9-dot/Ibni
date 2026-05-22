import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icons";

export const metadata = { title: "المدوّنة" };

const posts = [
  { title: "كيف تختار وقت الشاشة الصحي لطفلك؟", excerpt: "خمسة معايير علمية بسيطة لكل بيت عربي.", tag: "علم نفس" },
  { title: "تعلّم القراءة قبل العاشرة: ما الذي يصنع الفرق؟", excerpt: "دروس من مدارس الجزائر والمغرب.", tag: "تربية" },
  { title: "ذكاء اصطناعي يصلح للأطفال — كيف؟", excerpt: "ما الذي يجعل نموذجاً تربوياً آمناً فعلاً.", tag: "تقنية" },
];

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="المدوّنة"
      title={<>مقالات صادقة <span className="gradient-text-warm">للأهل والمعلمين.</span></>}
      description="نكتب باستمرار عن تربية الطفل العربي في العالم الرقمي، بدون مبالغة ولا حشو."
    >
      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {posts.map((p) => (
            <article key={p.title} className="surface-card flex h-full flex-col rounded-3xl p-6">
              <span className="inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
                <Icon.Pencil size={12} /> {p.tag}
              </span>
              <h3 className="mt-4 font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--orange)" }}>
                اقرأ المزيد <Icon.ArrowLeft size={14} />
              </span>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
