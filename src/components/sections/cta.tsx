"use client";

import Link from "next/link";
import { Reveal } from "../reveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-a" style={{ top: "-6rem", right: "-6rem", width: 420, height: 420, background: "radial-gradient(circle, #FFCFA0 0%, transparent 70%)" }} />
        <div className="blob blob-b" style={{ bottom: "-8rem", left: "-6rem", width: 460, height: 460, background: "radial-gradient(circle, #C9EBB6 0%, transparent 70%)" }} />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[32px] p-7 text-center sm:p-10 md:p-14"
            style={{
              background: "linear-gradient(135deg, var(--card-bg), var(--cream))",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div aria-hidden className="absolute right-6 top-6 text-2xl opacity-60">🌟</div>
            <div aria-hidden className="absolute left-6 top-10 text-2xl opacity-60">🎮</div>
            <div aria-hidden className="absolute right-10 bottom-8 text-2xl opacity-60">📚</div>
            <div aria-hidden className="absolute left-10 bottom-12 text-2xl opacity-60">🧩</div>

            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest"
              style={{ background: "var(--orange-light)", color: "var(--orange)" }}
            >
              <span>🚀</span> ابدأ الآن — مجاناً
            </span>

            <h2 className="display-xl mt-5 text-3xl sm:text-4xl md:text-6xl" style={{ color: "var(--text)" }}>
              رحلة طفلك نحو
              <br />
              <span className="gradient-text-warm">مستقبل أفضل</span>
              {" "}تبدأ اليوم
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
              انضم إلى أكثر من ٥٠٬٠٠٠ عائلة عربية اختارت إبني لتحويل وقت الشاشة إلى رحلة تعليمية ممتعة وآمنة.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/signup" className="btn-primary justify-center" style={{ minHeight: 52 }}>
                <span>🚀</span> ابدأ مجاناً — بدون بطاقة
              </Link>
              <Link href="/apps" className="btn-ghost justify-center" style={{ minHeight: 52 }}>
                <span>🎬</span> شاهد العرض التوضيحي
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] font-bold sm:text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="inline-flex items-center gap-1.5">
                <span style={{ color: "var(--green)" }}>✓</span> مجاني للأبد
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span style={{ color: "var(--green)" }}>✓</span> بدون بطاقة بنكية
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span style={{ color: "var(--green)" }}>✓</span> إلغاء في أي وقت
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
