"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Icon } from "../icons";
import { Magnetic } from "../magnetic";
import { Mascot } from "../mascot";

export function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Mouse parallax for floating orbit cards
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;

    let raf = 0;
    const handle = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        stage.style.setProperty("--mx", String(px));
        stage.style.setProperty("--my", String(py));
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        stage.style.setProperty("--mx", "0");
        stage.style.setProperty("--my", "0");
      });
    };

    stage.addEventListener("mousemove", handle);
    stage.addEventListener("mouseleave", leave);
    return () => {
      stage.removeEventListener("mousemove", handle);
      stage.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Painterly background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-a" style={{ top: "-12rem", right: "-10rem", width: 540, height: 540, background: "radial-gradient(circle, #FFCFA0 0%, transparent 70%)" }} />
        <div className="blob blob-b" style={{ bottom: "-14rem", left: "-8rem", width: 520, height: 520, background: "radial-gradient(circle, #B8DFFF 0%, transparent 70%)" }} />
        <div className="blob blob-a" style={{ top: "30%", left: "40%", width: 360, height: 360, background: "radial-gradient(circle, #C9EBB6 0%, transparent 70%)", animationDelay: "-9s" }} />
        <div className="absolute inset-0 dotted-grid opacity-25" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-20 lg:grid-cols-12">
        {/* Editorial column */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <span className="sticker">
              <Icon.Sparkles size={14} />
              جديد · مساعد إبني الذكي
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold"
              style={{ background: "var(--card-bg)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full" style={{ background: "var(--green)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--green)" }} />
              </span>
              نبثّ من الجزائر
            </span>
          </div>

          <h1
            className="display-xl mt-6 text-[44px] md:text-[78px] lg:text-[88px]"
            style={{ color: "var(--text)" }}
          >
            <span className="block">عالمٌ آمن</span>
            <span className="block">
              <span className="squiggle">يحبّه طفلك،</span>
            </span>
            <span className="block">
              يبني <span className="gradient-text-warm">عقله</span>
            </span>
            <span className="block">بدل أن يستهلكه.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-loose md:text-lg" style={{ color: "var(--text-muted)" }}>
            منصة تعليمية متكاملة للأطفال من{" "}
            <strong style={{ color: "var(--text)" }}>5 إلى 10 سنوات</strong> —
            ذكاء اصطناعي تربوي، ألعاب علمية، قصص بصوت عربي فصيح، وقيم تحبّها الأسرة.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link href="/signup" className="btn-primary magnetic-target text-base">
                <Icon.Rocket size={18} />
                ابدأ مجاناً — ١٤ يوم
              </Link>
            </Magnetic>
            <Link href="/apps" className="btn-ghost">
              <Icon.Eye size={18} />
              شاهد كيف تعمل
            </Link>
            <span className="hidden items-center gap-2 text-xs md:inline-flex" style={{ color: "var(--text-muted)" }}>
              <Icon.CheckCircle size={14} /> بدون بطاقة بنكية
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TrustChip icon={<Icon.Shield size={16} />} text="بيئة آمنة 100%" tone="green" />
            <TrustChip icon={<Icon.Lock size={16} />} text="بدون إعلانات" tone="blue" />
            <TrustChip icon={<Icon.Quran size={16} />} text="قيم عربية وإسلامية" tone="orange" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <StoreButton store="app" />
            <StoreButton store="play" />
          </div>
        </div>

        {/* Stage with mascot */}
        <div className="lg:col-span-5">
          <div
            ref={stageRef}
            className="relative mx-auto aspect-square w-full max-w-md"
            style={{ ["--mx" as string]: "0", ["--my" as string]: "0" }}
          >
            {/* Soft halo */}
            <div
              aria-hidden
              className="absolute inset-6 rounded-full"
              style={{
                background: "conic-gradient(from 200deg, #FFCFA0, #B8DFFF, #C9EBB6, #FFCFA0)",
                filter: "blur(28px)",
                opacity: 0.55,
              }}
            />

            {/* Orbit ring */}
            <svg aria-hidden viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F39A1F" />
                  <stop offset="1" stopColor="#6BC04B" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="170" fill="none" stroke="url(#ring)" strokeWidth="1.2" strokeDasharray="2 8" opacity="0.55" />
              <circle cx="200" cy="200" r="138" fill="none" stroke="var(--border-color)" strokeWidth="1" />
            </svg>

            {/* Floating cards with parallax */}
            <OrbitCard
              className="absolute right-[-1.5rem] top-4"
              dx={-1} dy={-1}
              tone="orange"
              icon={<Icon.Trophy size={18} />}
              title="نجمة اليوم"
              text="+25 نقطة جديدة"
            />
            <OrbitCard
              className="absolute bottom-12 left-[-1.5rem]"
              dx={1} dy={1}
              tone="green"
              icon={<Icon.Brain size={18} />}
              title="درس مخصّص"
              text="مبني على مستوى ليان"
            />
            <OrbitCard
              className="absolute right-2 bottom-[-1rem]"
              dx={1} dy={-1}
              tone="blue"
              icon={<Icon.Robot size={18} />}
              title="مساعد إبني"
              text="يقرأ القصة بصوته"
            />
            <OrbitCard
              className="absolute top-1/2 left-[-2rem]"
              dx={-1} dy={1}
              tone="sky"
              icon={<Icon.Heart size={18} />}
              title="مزاج اليوم"
              text="هادئ ومتركّز"
            />

            {/* Mascot */}
            <div
              className="absolute inset-0 grid place-items-center"
              style={{ transform: "translate3d(calc(var(--mx) * -10px), calc(var(--my) * -10px), 0)" }}
            >
              <div className="animate-float-slow">
                <Mascot size={260} />
              </div>
            </div>

            {/* Floating mini chip */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow)",
                color: "var(--text)",
              }}
            >
              <Icon.Spark size={14} />
              ٤٢ دقيقة تعلّم ذكي اليوم
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustChip({
  icon,
  text,
  tone,
}: {
  icon: React.ReactNode;
  text: string;
  tone: "green" | "blue" | "orange";
}) {
  const fg = tone === "green" ? "var(--green)" : tone === "blue" ? "var(--blue)" : "var(--orange)";
  const bg =
    tone === "green" ? "var(--green-light)" : tone === "blue" ? "var(--blue-light)" : "var(--orange-light)";
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold"
      style={{ background: "var(--card-bg)", color: "var(--text)", border: "1px solid var(--border-color)" }}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full" style={{ background: bg, color: fg }}>
        {icon}
      </span>
      {text}
    </div>
  );
}

function OrbitCard({
  icon,
  title,
  text,
  className,
  tone,
  dx,
  dy,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  tone: "orange" | "green" | "blue" | "sky";
  dx: number;
  dy: number;
}) {
  const toneStyles =
    tone === "orange"
      ? { bg: "var(--orange-light)", fg: "var(--orange)" }
      : tone === "green"
      ? { bg: "var(--green-light)", fg: "var(--green)" }
      : tone === "sky"
      ? { bg: "var(--blue-light)", fg: "var(--sky)" }
      : { bg: "var(--blue-light)", fg: "var(--blue)" };

  return (
    <div
      className={`animate-float surface-card pointer-events-none flex max-w-[210px] items-center gap-3 rounded-2xl p-3 ${className ?? ""}`}
      style={{
        transform: `translate3d(calc(var(--mx) * ${dx * 22}px), calc(var(--my) * ${dy * 22}px), 0)`,
        transition: "transform 0.4s var(--ease-spring)",
      }}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ background: toneStyles.bg, color: toneStyles.fg }}>
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
        <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>حمّل من</span>
        <span className="text-sm font-bold" style={{ color: "var(--text)" }}>
          {isApp ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}
