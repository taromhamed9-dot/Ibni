"use client";

import Link from "next/link";
import { Icon } from "../icons";
import { Reveal } from "../reveal";

export function CTA() {
  return (
    <section id="cta" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[36px] p-8 md:p-14"
            style={{
              background: "linear-gradient(135deg, var(--deep-blue) 0%, #1A4F9C 50%, var(--orange) 130%)",
              color: "#fff",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div aria-hidden className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />

            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold backdrop-blur">
                  <Icon.Sparkles size={14} />
                  ابدأ رحلتك مع إبني
                </span>
                <h3 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                  استعد علاقتك الجميلة مع طفلك،
                  <br />
                  بتعلّمٍ يستحقّ وقته.
                </h3>
                <p className="mt-3 max-w-xl text-white/85">
                  ١٤ يوماً تجربة مجانية. بدون بطاقة بنكية. ألغِ في أي وقت.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold transition-transform hover:translate-y-[-2px]"
                  style={{ color: "var(--deep-blue)" }}
                >
                  <Icon.Rocket size={18} />
                  ابدأ التجربة المجانية
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold backdrop-blur transition-transform hover:translate-y-[-2px]"
                >
                  <Icon.Mail size={18} />
                  تحدّث مع فريقنا
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
