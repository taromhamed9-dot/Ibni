"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "../icons";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 right-[-12rem] h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--orange-light), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 left-[-10rem] h-[34rem] w-[34rem] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(closest-side, var(--blue-light), transparent 70%)" }}
        />
        <div className="absolute inset-0 dotted-grid opacity-30" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
            style={{
              background: "var(--orange-light)",
              color: "var(--orange)",
              border: "1px solid color-mix(in srgb, var(--orange) 25%, transparent)",
            }}
          >
            <Icon.Sparkles size={14} />
            البديل الذكي لإدمان الشاشات
          </div>

          <h1
            className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-6xl"
            style={{ color: "var(--text)" }}
          >
            عالمٌ آمن يحبّه طفلك،
            <br />
            <span className="gradient-text-warm">يبني عقله بدل أن يستهلكه.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-loose md:text-lg" style={{ color: "var(--text-muted)" }}>
            إبني منصة تعليمية متكاملة للأطفال من <strong style={{ color: "var(--text)" }}>5 إلى 10 سنوات</strong>،
            تجمع بين الذكاء الاصطناعي، الألعاب التعليمية، القصص التفاعلية، والقيم العربية والإسلامية،
            لتحوّل وقت الشاشة إلى وقت يبني المستقبل.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/pricing" className="btn-primary">
              <Icon.Rocket size={18} />
              ابدأ مجاناً لمدة 14 يوم
            </Link>
            <Link href="/apps" className="btn-ghost">
              <Icon.Eye size={18} />
              شاهد كيف تعمل
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <TrustChip icon={<Icon.Shield size={16} />} text="بيئة آمنة 100%" />
            <TrustChip icon={<Icon.Lock size={16} />} text="بدون إعلانات" />
            <TrustChip icon={<Icon.Quran size={16} />} text="قيم عربية وإسلامية" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <StoreButton store="app" />
            <StoreButton store="play" />
          </div>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-square max-w-md">
            {/* Floating cards */}
            <FloatCard
              className="absolute right-[-1rem] top-6"
              tone="orange"
              icon={<Icon.Trophy size={18} />}
              title="مكافأة جديدة"
              text="نجمة الإنجاز اليومية"
            />
            <FloatCard
              className="absolute bottom-10 left-[-1.25rem]"
              tone="green"
              icon={<Icon.Brain size={18} />}
              title="درس مخصّص"
              text="مبني على مستوى طفلك"
              delay="200ms"
            />
            <FloatCard
              className="absolute right-2 bottom-[-1rem]"
              tone="blue"
              icon={<Icon.Robot size={18} />}
              title="مساعد إبني"
              text="يقرأ القصة بصوته"
              delay="400ms"
            />

            {/* Central logo medallion */}
            <div
              className="relative grid h-full w-full place-items-center rounded-[44px]"
              style={{
                background:
                  "conic-gradient(from 220deg, var(--orange-light), var(--blue-light), var(--green-light), var(--orange-light))",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <div
                className="grid h-[78%] w-[78%] place-items-center rounded-[36px]"
                style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)" }}
              >
                <div className="animate-float-slow">
                  <Image
                    src="/logo.jpeg"
                    alt="شعار إبني"
                    width={260}
                    height={260}
                    priority
                    className="rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium"
      style={{
        background: "var(--card-bg)",
        color: "var(--text)",
        border: "1px solid var(--border-color)",
      }}
    >
      <span style={{ color: "var(--green)" }}>{icon}</span>
      {text}
    </div>
  );
}

function FloatCard({
  icon,
  title,
  text,
  className,
  tone,
  delay = "0ms",
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  tone: "orange" | "green" | "blue";
  delay?: string;
}) {
  const toneStyles =
    tone === "orange"
      ? { bg: "var(--orange-light)", fg: "var(--orange)" }
      : tone === "green"
      ? { bg: "var(--green-light)", fg: "var(--green)" }
      : { bg: "var(--blue-light)", fg: "var(--blue)" };
  return (
    <div
      className={`animate-float surface-card pointer-events-none flex max-w-[200px] items-center gap-3 rounded-2xl p-3 ${className ?? ""}`}
      style={{ animationDelay: delay }}
    >
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
        style={{ background: toneStyles.bg, color: toneStyles.fg }}
      >
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{title}</span>
        <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>{text}</span>
      </span>
    </div>
  );
}

function StoreButton({ store }: { store: "app" | "play" }) {
  const isApp = store === "app";
  return (
    <a
      href="#"
      className="surface-card inline-flex items-center gap-3 rounded-2xl px-4 py-2.5"
      aria-label={isApp ? "متوفر على App Store" : "متوفر على Google Play"}
    >
      <span style={{ color: "var(--text)" }}>{isApp ? <Icon.AppStore size={22} /> : <Icon.PlayStore size={22} />}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
          {isApp ? "حمّل من" : "حمّل من"}
        </span>
        <span className="text-sm font-bold" style={{ color: "var(--text)" }}>
          {isApp ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}
