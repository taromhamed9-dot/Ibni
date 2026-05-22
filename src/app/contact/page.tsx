import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icons";
import { SITE } from "@/lib/site";

export const metadata = { title: "تواصل معنا" };

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="تواصل معنا"
      title={<>نحن <span className="gradient-text-warm">قريبون منك دائماً.</span></>}
      description="فريق إبني متاح لمساعدتك. سواء كنت ولي أمر، معلماً، أو مدرسة — راسلنا وسنردّ خلال يوم عمل."
    >
      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 md:grid-cols-2 md:px-8">
          <a href={`mailto:${SITE.email}`} className="surface-card flex items-start gap-4 rounded-3xl p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
              style={{ background: "var(--orange-light)", color: "var(--orange)" }}><Icon.Mail /></span>
            <div>
              <p className="font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>البريد الإلكتروني</p>
              <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{SITE.email}</p>
            </div>
          </a>
          <a href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer"
             className="surface-card flex items-start gap-4 rounded-3xl p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl"
              style={{ background: "var(--green-light)", color: "var(--green)" }}><Icon.Whatsapp /></span>
            <div>
              <p className="font-display text-lg font-extrabold" style={{ color: "var(--text)" }}>واتساب</p>
              <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>دعم سريع بالعربية</p>
            </div>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
