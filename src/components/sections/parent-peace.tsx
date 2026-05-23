"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

const features = [
  { icon: <Icon.Shield />, title: "لا إعلانات. لا متابعة." , text: "بيئة مغلقة. لا مشتريات داخل التطبيق ولا تتبّع للأطفال." },
  { icon: <Icon.Calendar />, title: "وقت محدّد بذكاء", text: "ضبط مدة الجلسة اليومية. التطبيق يقترح فاصل راحة." },
  { icon: <Icon.Eye />, title: "تقارير أسبوعية مبسّطة", text: "ماذا تعلّم، أين تفوّق، أين يحتاج دعمك." },
  { icon: <Icon.Heart />, title: "تواصل عاطفي حقيقي", text: "وضع \"معاً\" يجمعك بطفلك في درس واحد." },
  { icon: <Icon.Headphones />, title: "دعم مباشر بالعربية", text: "فريقنا متاح يومياً للإجابة على أسئلتك." },
  { icon: <Icon.Lock />, title: "قفل أبوي ذكي", text: "كلمة سر، رمز، أو بصمة. تتحكم في كل شيء." },
];

export function ParentPeace() {
  return (
    <section id="parents" className="relative py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--green-light)", color: "var(--green)" }}>
            <Icon.Parent size={14} /> طمأنينة لولي الأمر
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
            لأن قلبك على طفلك،
            <br />
            <span className="gradient-text-warm">كل تفصيل في إبني يطمئنك.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="surface-card flex h-full items-start gap-4 rounded-3xl p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
                  style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
                  {f.icon}
                </span>
                <div>
                  <h3 className="font-display font-extrabold" style={{ color: "var(--text)" }}>{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
