"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { Icon } from "@/components/icons";

export function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Mouse parallax (desktop) — disabled on touch
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
        <div className="absolute inset-0 dotted-grid opacity-20" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-6 sm:px-5 md:gap-12 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-12">
        {/* Editorial column */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="sticker inline-flex items-center gap-1.5 text-[11px]">
              <Icon.Sparkles size={12} />
              البديل الذكي لإدمان الشاشات
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold"
              style={{ background: "var(--card-bg)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full" style={{ background: "var(--green)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--green)" }} />
              </span>
              نبثّ من الجزائر
              <span className="ms-1 inline-flex" aria-label="DZ">
                <Icon.FlagDZ size={12} />
              </span>
            </span>
          </div>

          <h1
            className="display-xl mt-5 text-[40px] sm:text-[52px] md:text-[76px] lg:text-[92px]"
            style={{ color: "var(--text)" }}
          >
            <span className="block">نبني <span className="gradient-text-warm">عقولاً</span></span>
            <span className="block">
              <span className="squiggle">ونصنع مستقبلاً.</span>
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-loose sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text)" }}>البديل الذكي لإدمان الشاشات.</strong>{" "}
            منصة تعليمية تفاعلية تجمع بين الذكاء الاصطناعي والألعاب التربوية والقيم العربية الإسلامية،
            لبناء جيل واعٍ ومبدع.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/signup"
              className="btn-primary justify-center text-base"
              style={{ minHeight: 52 }}
            >
              <Icon.Rocket size={18} />
              ابدأ رحلة طفلك مجاناً
            </Link>
            <Link
              href="/apps"
              className="btn-ghost justify-center text-base"
              style={{ minHeight: 52 }}
            >
              <Icon.Play size={16} />
              شاهد كيف تعمل
            </Link>
          </div>

          {/* Trust pills */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
            <TrustPill icon={<Icon.Shield size={16} />} label="محتوى آمن 100%" tone="green" />
            <TrustPill icon={<Icon.Brain size={16} />} label="مدعوم بالذكاء الاصطناعي" tone="blue" />
            <TrustPill icon={<Icon.Globe size={16} />} label="لملايين الأطفال العرب" tone="orange" />
            <TrustPill icon={<Icon.CheckCircle size={16} />} label="معتمد تربوياً" tone="green" />
          </div>
        </div>

        {/* AI assistant stage */}
        <div className="lg:col-span-5">
          <div
            ref={stageRef}
            className="relative mx-auto w-full max-w-md"
            style={{ ["--mx" as string]: "0", ["--my" as string]: "0" }}
          >
            {/* Halo */}
            <div
              aria-hidden
              className="absolute inset-4 rounded-[40px]"
              style={{
                background: "conic-gradient(from 200deg, #FFCFA0, #B8DFFF, #C9EBB6, #FFCFA0)",
                filter: "blur(36px)",
                opacity: 0.5,
              }}
            />

            {/* Assistant chat card */}
            <div
              className="surface-card relative z-10 overflow-hidden rounded-[28px] p-5"
              style={{
                transform: "translate3d(calc(var(--mx) * -8px), calc(var(--my) * -8px), 0)",
                transition: "transform 0.4s var(--ease-spring)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-2xl text-base font-extrabold text-white"
                    style={{ background: "linear-gradient(135deg, var(--blue), var(--sky))" }}
                  >
                    AI
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-bold" style={{ color: "var(--text)" }}>
                      مساعد إبني الذكي
                    </div>
                    <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                      متصل الآن
                    </div>
                  </div>
                </div>
                <span
                  className="inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 text-[10px] font-bold"
                  style={{ background: "var(--green-light)", color: "var(--green)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />
                  Live
                </span>
              </div>

              <div className="mt-4 flex items-start gap-2 rounded-2xl p-4 text-sm leading-relaxed"
                style={{ background: "var(--blue-light)", color: "var(--text)" }}>
                <span className="mt-0.5 shrink-0" style={{ color: "var(--orange)" }}>
                  <Icon.Sparkles size={16} />
                </span>
                <span>أحسنت يا أحمد! لقد أتممت درس الرياضيات. هل تريد تجربة تحدي جديد؟</span>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-2xl p-3"
                style={{ background: "var(--cream)", border: "1px solid var(--border-color)" }}>
                <span className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--text)" }}>
                  <span style={{ color: "var(--green)" }}><Icon.TrendingUp size={14} /></span>
                  تقدم اليوم
                </span>
                <span className="text-base font-extrabold gradient-text-warm" style={{ letterSpacing: "-0.02em" }}>
                  85%
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "var(--border-color)" }}>
                <div className="h-full rounded-full"
                  style={{ width: "85%", background: "linear-gradient(90deg, var(--orange), var(--green))" }} />
              </div>
            </div>

            {/* Floating chips around the card */}
            <FloatChip
              className="absolute -right-2 -top-3"
              dx={-1} dy={-1}
              icon={<Icon.Gamepad size={18} />}
              title="ألعاب تعليمية"
              sub="+200 لعبة تفاعلية"
              tone="orange"
            />
            <FloatChip
              className="absolute -left-3 top-1/3"
              dx={-1} dy={1}
              icon={<Icon.Brain size={18} />}
              title="ذكاء اصطناعي"
              sub="تعلم مخصص لطفلك"
              tone="blue"
            />
            <FloatChip
              className="absolute -bottom-4 right-3"
              dx={1} dy={1}
              icon={<Icon.Trophy size={18} />}
              title="نظام المكافآت"
              sub="اجمع النقاط!"
              tone="green"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustPill({ icon, label, tone }: { icon: ReactNode; label: string; tone: "green" | "blue" | "orange" }) {
  const bg =
    tone === "green" ? "var(--green-light)" : tone === "blue" ? "var(--blue-light)" : "var(--orange-light)";
  const fg = tone === "green" ? "var(--green)" : tone === "blue" ? "var(--blue)" : "var(--orange)";
  return (
    <div
      className="flex items-center gap-2 rounded-2xl p-2.5 text-[12px] font-bold sm:text-[13px]"
      style={{ background: "var(--card-bg)", color: "var(--text)", border: "1px solid var(--border-color)" }}
    >
      <span
        className="grid h-7 w-7 shrink-0 place-items-center rounded-xl"
        style={{ background: bg, color: fg }}
      >
        {icon}
      </span>
      <span className="leading-tight">{label}</span>
    </div>
  );
}

function FloatChip({
  icon, title, sub, className, tone, dx, dy,
}: {
  icon: ReactNode; title: string; sub: string; className?: string;
  tone: "orange" | "green" | "blue"; dx: number; dy: number;
}) {
  const bg =
    tone === "orange" ? "var(--orange-light)" : tone === "green" ? "var(--green-light)" : "var(--blue-light)";
  const fg = tone === "orange" ? "var(--orange)" : tone === "green" ? "var(--green)" : "var(--blue)";
  return (
    <div
      className={`animate-float surface-card pointer-events-none flex max-w-[180px] items-center gap-2.5 rounded-2xl p-2.5 ${className ?? ""}`}
      style={{
        transform: `translate3d(calc(var(--mx) * ${dx * 16}px), calc(var(--my) * ${dy * 16}px), 0)`,
        transition: "transform 0.5s var(--ease-spring)",
      }}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl" style={{ background: bg, color: fg }}>
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[12px] font-extrabold" style={{ color: "var(--text)" }}>{title}</span>
        <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{sub}</span>
      </span>
    </div>
  );
}
