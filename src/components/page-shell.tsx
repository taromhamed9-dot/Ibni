import { Footer } from "@/components/footer";
import { Icon } from "@/components/icons";
import Link from "next/link";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 right-[-12rem] h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--orange-light), transparent 70%)" }} />
          <div className="absolute -bottom-40 left-[-10rem] h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--blue-light), transparent 70%)" }} />
          <div className="absolute inset-0 dotted-grid opacity-30" />
        </div>
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--orange-light)", color: "var(--orange)" }}>
            <Icon.Sparkles size={14} />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl"
            style={{ color: "var(--text)" }}>{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-loose md:text-lg" style={{ color: "var(--text-muted)" }}>
            {description}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/pricing" className="btn-primary">
              <Icon.Rocket size={18} />
              ابدأ مجاناً
            </Link>
            <Link href="/" className="btn-ghost">
              <Icon.ArrowRight size={18} />
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
      {children}
      <Footer />
    </>
  );
}
