"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "../reveal";

const SCRIPT = [
  { side: "them" as const, text: "مرحباً ليان! 🌸 جاهزة لتحدّي اليوم؟" },
  { side: "me" as const, text: "جاهزة! 🚀" },
  { side: "them" as const, text: "ممتاز! لاحظتُ أنكِ قويّة في الأرقام. سنبدأ بلغز رياضيات صغير، ثم قصة قصيرة." },
  { side: "them" as const, text: "🧮  ٣ + ٥ = ؟" },
  { side: "me" as const, text: "٨ 💡" },
  { side: "them" as const, text: "أحسنتِ! +٢٥ نقطة ⭐ هل ننتقل إلى القصة؟" },
];

const AI_FEATURES = [
  { emoji: "🎯", title: "تعلم مخصص", text: "يتكيف المحتوى تلقائياً مع مستوى طفلك وسرعة تعلمه." },
  { emoji: "📊", title: "تحليل ذكي", text: "تقارير مفصلة عن نقاط القوة والمجالات التي تحتاج تعزيز." },
  { emoji: "🗣️", title: "تفاعل صوتي", text: "مساعد صوتي يتحدث العربية يرافق طفلك في رحلة التعلم." },
  { emoji: "📝", title: "واجبات ذكية", text: "تمارين وواجبات تتولد تلقائياً بناءً على احتياجات الطفل." },
  { emoji: "🌙", title: "قصص مولّدة بالذكاء", text: "قصص تعليمية فريدة يولدها الذكاء الاصطناعي لكل طفل." },
  { emoji: "🔒", title: "حماية ذكية", text: "فلترة محتوى متقدمة تضمن بيئة آمنة 100% لطفلك." },
];

function ChatPreview() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            io.unobserve(el);
            // Walk through messages with typing indicator before "them" messages.
            let i = 0;
            const next = () => {
              if (i >= SCRIPT.length) {
                setTyping(false);
                return;
              }
              const isThem = SCRIPT[i].side === "them";
              if (isThem) {
                setTyping(true);
                setTimeout(() => {
                  setTyping(false);
                  setVisibleCount((c) => c + 1);
                  i++;
                  setTimeout(next, 650);
                }, 750);
              } else {
                setVisibleCount((c) => c + 1);
                i++;
                setTimeout(next, 700);
              }
            };
            setTimeout(next, 500);
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="surface-card relative overflow-hidden rounded-[28px] p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div
          className="grid h-12 w-12 place-items-center rounded-2xl text-base font-extrabold text-white"
          style={{ background: "linear-gradient(135deg, var(--blue), var(--sky))" }}
        >
          AI
        </div>
        <div className="leading-tight">
          <div className="text-sm font-extrabold" style={{ color: "var(--text)" }}>
            مساعد إبني الذكي
          </div>
          <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>
            متصل {typing ? "· يكتب الآن…" : ""}
          </div>
        </div>
        <span className="ml-auto rounded-full px-2.5 py-1 text-[10px] font-extrabold" style={{ background: "var(--green-light)", color: "var(--green)" }}>
          Live
        </span>
      </div>

      <div className="mt-5 flex min-h-[280px] flex-col gap-3">
        {SCRIPT.slice(0, visibleCount).map((m, k) => (
          <ChatBubble key={k} side={m.side}>{m.text}</ChatBubble>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div
              className="rounded-2xl px-3.5 py-2.5"
              style={{ background: "var(--blue-light)", borderTopLeftRadius: 6 }}
            >
              <span className="typing-dots" aria-label="يكتب">
                <span /><span /><span />
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl p-3"
        style={{ background: "var(--cream)", border: "1px solid var(--border-color)" }}>
        <span className="flex items-center gap-2 text-xs font-bold" style={{ color: "var(--text)" }}>
          <span className="emoji-bounce">📈</span> تقدم اليوم
        </span>
        <span className="gradient-text-warm text-base font-extrabold" style={{ letterSpacing: "-0.02em" }}>٨٥٪</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "var(--border-color)" }}>
        <div className="h-full rounded-full" style={{ width: "85%", background: "linear-gradient(90deg, var(--orange), var(--green))" }} />
      </div>
    </div>
  );
}

export function AIPersonalization() {
  return (
    <section id="ai" className="relative overflow-hidden py-14 md:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-a" style={{ top: "-8rem", left: "-6rem", width: 420, height: 420, background: "radial-gradient(circle, #B8DFFF 0%, transparent 70%)" }} />
        <div className="blob blob-b" style={{ bottom: "-10rem", right: "-6rem", width: 400, height: 400, background: "radial-gradient(circle, #C9EBB6 0%, transparent 70%)" }} />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-5 md:px-8 lg:grid-cols-12 lg:gap-14">
        {/* Animated chat preview */}
        <Reveal className="lg:col-span-5">
          <ChatPreview />
        </Reveal>

        {/* Copy + grid */}
        <div className="lg:col-span-7">
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest"
              style={{ background: "var(--blue-light)", color: "var(--blue)" }}
            >
              <span>🧠</span> مدعوم بالذكاء الاصطناعي
            </span>
            <h2 className="display-xl mt-4 text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
              تعليم ذكي{" "}
              <span className="gradient-text-warm">يفهم طفلك</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
              يستخدم إبني أحدث تقنيات الذكاء الاصطناعي لفهم أسلوب تعلم كل طفل وتقديم تجربة تعليمية مخصصة بالكامل —
              كأنه معلّم خاص لطفلك يعمل ٢٤/٧.
            </p>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {AI_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <div
                  className="flex items-start gap-3 rounded-2xl p-4"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)" }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xl"
                    style={{ background: "var(--blue-light)" }}>
                    {f.emoji}
                  </span>
                  <div className="leading-snug">
                    <div className="text-sm font-extrabold" style={{ color: "var(--text)" }}>{f.title}</div>
                    <div className="mt-1 text-[12px]" style={{ color: "var(--text-muted)" }}>{f.text}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  const isMe = side === "me";
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className="max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
        style={
          isMe
            ? { background: "linear-gradient(135deg, var(--orange), #ff8a3d)", color: "#fff", borderTopRightRadius: 6 }
            : { background: "var(--blue-light)", color: "var(--text)", borderTopLeftRadius: 6 }
        }
      >
        {children}
      </div>
    </div>
  );
}
