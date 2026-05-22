import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";
import { Footer } from "@/components/footer";

export function AuthShell({
  side = "signin",
  eyebrow,
  title,
  description,
  children,
  footer,
}: {
  side?: "signin" | "signup";
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 right-[-10rem] h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--orange-light), transparent 70%)" }} />
          <div className="absolute -bottom-40 left-[-10rem] h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--blue-light), transparent 70%)" }} />
          <div className="absolute inset-0 dotted-grid opacity-25" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-10 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-2 lg:gap-16">
          {/* Brand pane */}
          <BrandPane side={side} />

          {/* Form pane */}
          <div className="flex items-center justify-center">
            <div
              className="w-full max-w-md rounded-[28px] p-7 md:p-9"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "var(--orange-light)", color: "var(--orange)" }}
              >
                <Icon.Sparkles size={14} />
                {eyebrow}
              </span>
              <h1
                className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl"
                style={{ color: "var(--text)" }}
              >
                {title}
              </h1>
              <p className="mt-2 text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
                {description}
              </p>

              <div className="mt-7">{children}</div>

              {footer && (
                <p className="mt-6 text-center text-sm" style={{ color: "var(--text-muted)" }}>
                  {footer}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function BrandPane({ side }: { side: "signin" | "signup" }) {
  const tiles = side === "signup"
    ? [
        { icon: <Icon.Shield size={18} />, title: "بيئة آمنة 100%", text: "بدون إعلانات، بدون تتبّع." },
        { icon: <Icon.Brain size={18} />, title: "تعلّم مخصّص", text: "مسار فريد لكل طفل." },
        { icon: <Icon.Trophy size={18} />, title: "مكافآت صحية", text: "تبني الثقة لا الإدمان." },
        { icon: <Icon.Parent size={18} />, title: "لوحة لولي الأمر", text: "تقارير هادئة وذكية." },
      ]
    : [
        { icon: <Icon.Heart size={18} />, title: "طفلك بانتظارك", text: "تابع رحلته من حيث توقّفت." },
        { icon: <Icon.Lock size={18} />, title: "دخول آمن", text: "تشفير وقفل أبوي ذكي." },
        { icon: <Icon.Calendar size={18} />, title: "تذكيرات هادفة", text: "إشعارات تساعد لا تشتّت." },
        { icon: <Icon.Globe size={18} />, title: "متاح في كل وقت", text: "ويب وتطبيق وبدون نت." },
      ];

  return (
    <div className="hidden flex-col justify-between gap-8 lg:flex">
      <div>
        <Link href="/" className="inline-flex items-center gap-3">
          <span
            className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl"
            style={{ border: "1px solid var(--border-color)" }}
          >
            <Image src="/logo.jpeg" alt="إبني" width={48} height={48} className="h-full w-full object-cover" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-extrabold" style={{ color: "var(--text)" }}>إبني</span>
            <span className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>Ibni</span>
          </span>
        </Link>

        <h2 className="mt-10 font-display text-4xl font-extrabold leading-tight md:text-5xl" style={{ color: "var(--text)" }}>
          {side === "signup" ? (
            <>ابدأ <span className="gradient-text-warm">رحلة طفلك</span> اليوم.</>
          ) : (
            <>مرحباً <span className="gradient-text-cool">بعودتك</span> إلى إبني.</>
          )}
        </h2>
        <p className="mt-3 max-w-md text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
          {side === "signup"
            ? "أنشئ حساب العائلة في أقل من دقيقة. ١٤ يوماً تجربة مجانية، بدون بطاقة بنكية."
            : "سجّل دخولك لمتابعة تقدّم أطفالك، إدارة الجلسات، وقراءة التقارير الأسبوعية."}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {tiles.map((t) => (
          <div
            key={t.title}
            className="surface-card flex items-start gap-3 rounded-2xl p-4"
          >
            <span
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
              style={{ background: "var(--blue-light)", color: "var(--blue)" }}
            >
              {t.icon}
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{t.title}</p>
              <p className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>{t.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="flex items-center gap-3 rounded-2xl p-4"
        style={{ background: "var(--green-light)", border: "1px solid color-mix(in srgb, var(--green) 25%, transparent)" }}
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl"
          style={{ background: "color-mix(in srgb, var(--green) 20%, transparent)", color: "var(--green)" }}>
          <Icon.Shield size={18} />
        </span>
        <div className="text-xs leading-relaxed" style={{ color: "var(--text)" }}>
          نحن نلتزم بحماية بيانات الأطفال. لا إعلانات، لا بيع للبيانات، تشفير شامل.
        </div>
      </div>
    </div>
  );
}
