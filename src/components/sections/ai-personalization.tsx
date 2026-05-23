"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Reveal } from "../reveal";
import { Icon } from "@/components/icons";

type Part = string | ReactNode;
type Msg = { side: "them" | "me"; parts: Part[] };

/** Wrap numbers / arithmetic in LTR to prevent mirroring inside RTL text. */
function Num({ children }: { children: ReactNode }) {
  return (
    <bdi dir="ltr" style={{ unicodeBidi: "isolate" }}>
      {children}
    </bdi>
  );
}

const SCRIPT: Msg[] = [
  {
    side: "them",
    parts: [
      <Icon.Sparkles key="s1" size={14} />,
      " مرحباً ليان! جاهزة لتحدّي اليوم؟",
    ],
  },
  {
    side: "me",
    parts: [
      "جاهزة! ",
      <Icon.Rocket key="s2" size={14} />,
    ],
  },
  {
    side: "them",
    parts: [
      "ممتاز! لاحظتُ أنكِ قويّة في الأرقام. سنبدأ بلغز رياضيات صغير، ثم قصة قصيرة.",
    ],
  },
  {
    side: "them",
    parts: [
      <Icon.Cube key="s3" size={14} />,
      " ",
      <Num key="n1">3 + 5 = ؟</Num>,
    ],
  },
  {
    side: "me",
    parts: [
      <Num key="n2">8</Num>,
      " ",
      <Icon.Lightning key="s4" size={14} />,
    ],
  },
  {
    side: "them",
    parts: [
      "أحسنتِ! ",
      <Num key="n3">+25</Num>,
      " نقطة ",
      <Icon.Star key="s5" size={14} />,
      " — هل ننتقل إلى القصة؟",
    ],
  },
];

const AI_FEATURES = [
  { Icon: Icon.Target, title: "تعلم مخصص", text: "يتكيف المحتوى تلقائياً مع مستوى طفلك وسرعة تعلمه." },
  { Icon: Icon.ChartBar, title: "تحليل ذكي", text: "تقارير مفصلة عن نقاط القوة والمجالات التي تحتاج تعزيز." },
  { Icon: Icon.Microphone, title: "تفاعل صوتي", text: "مساعد صوتي يتحدث العربية يرافق طفلك في رحلة التعلم." },
  { Icon: Icon.Pencil, title: "واجبات ذكية", text: "تمارين وواجبات تتولد تلقائياً بناءً على احتياجات الطفل." },
  { Icon: Icon.BookSparkle, title: "قصص مولّدة بالذكاء", text: "قصص تعليمية فريدة يولدها الذكاء الاصطناعي لكل طفل." },
  { Icon: Icon.Lock, title: "حماية ذكية", text: "فلترة محتوى متقدمة تضمن بيئة آمنة 100% لطفلك." },
];

function ChatPreview() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState<"them" | "me" | null>(null);
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
            let i = 0;
            const next = () => {
              if (i >= SCRIPT.length) {
                setTyping(null);
                return;
              }
              const m = SCRIPT[i];
              setTyping(m.side);
              const typingMs = m.side === "them" ? 1300 : 800;
              setTimeout(() => {
                setTyping(null);
                setVisibleCount((c) => c + 1);
                i++;
                const gap = m.side === "them" ? 1000 : 1100;
                setTimeout(next, gap);
              }, typingMs);
            };
            setTimeout(next, 700);
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
      {/* Header */}
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
          <div className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--text-muted)" }}>
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full" style={{ background: "var(--green)" }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />
            </span>
            {typing ? "يكتب الآن…" : "متصل الآن"}
          </div>
        </div>
        <span
          className="ms-auto inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold"
          style={{ background: "var(--green-light)", color: "var(--green)" }}
        >
          <Icon.Pulse size={10} />
          Live
        </span>
      </div>

      {/* Bubbles */}
      <div className="mt-5 flex min-h-[300px] flex-col gap-3">
        {SCRIPT.slice(0, visibleCount).map((m, k) => (
          <ChatBubble key={k} side={m.side}>
            {m.parts.map((p, j) => (
              <span key={j} className="inline-flex items-center align-middle">
                {p}
              </span>
            ))}
          </ChatBubble>
        ))}
        {typing && <TypingBubble side={typing} />}
        {visibleCount === 0 && !typing && (
          <div className="m-auto flex flex-col items-center gap-2 text-[12px]" style={{ color: "var(--text-muted)" }}>
            <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
              <Icon.Chat size={16} />
            </span>
            جلسة اليوم على وشك أن تبدأ…
          </div>
        )}
      </div>

      {/* Progress widget */}
      <div className="mt-5 flex items-center justify-between rounded-2xl p-3"
        style={{ background: "var(--cream)", border: "1px solid var(--border-color)" }}>
        <span className="flex items-center gap-2 text-xs font-bold" style={{ color: "var(--text)" }}>
          <span style={{ color: "var(--green)" }}><Icon.TrendingUp size={14} /></span>
          تقدم اليوم
        </span>
        <span className="gradient-text-warm text-base font-extrabold" style={{ letterSpacing: "-0.02em" }}>
          <Num>85%</Num>
        </span>
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
              <Icon.Brain size={12} /> مدعوم بالذكاء الاصطناعي
            </span>
            <h2 className="display-xl mt-4 text-3xl sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
              تعليم ذكي{" "}
              <span className="gradient-text-warm">يفهم طفلك</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed sm:text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
              يستخدم إبني أحدث تقنيات الذكاء الاصطناعي لفهم أسلوب تعلم كل طفل وتقديم تجربة تعليمية مخصصة بالكامل —
              كأنه معلّم خاص لطفلك يعمل <Num>24/7</Num>.
            </p>
          </Reveal>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {AI_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <div
                  className="flex items-start gap-3 rounded-2xl p-4"
                  style={{ background: "var(--card-bg)", border: "1px solid var(--border-color)" }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                    style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
                    <f.Icon size={20} />
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

function ChatBubble({ side, children }: { side: "me" | "them"; children: ReactNode }) {
  const isMe = side === "me";
  // them = bubble on RIGHT (next to AI avatar) — push with marginInlineStart auto
  // me   = bubble on LEFT — push with marginInlineEnd auto
  // RTL layout: them on RIGHT (near AI avatar), me on LEFT
  const wrapStyle: React.CSSProperties = isMe
    ? { marginInlineStart: "auto", maxWidth: "82%" }   // me → pushed to LEFT in RTL
    : { marginInlineEnd: "auto", maxWidth: "82%" };    // them → pushed to RIGHT in RTL

  const bubbleStyle: React.CSSProperties = isMe
    ? {
        // me on LEFT → sharp top-LEFT corner (top + inline-end in RTL)
        background: "linear-gradient(135deg, var(--orange), #2DD4BF)",
        color: "#fff",
        borderStartEndRadius: 6,
        boxShadow: "0 6px 18px -8px rgba(20, 184, 166, 0.45)",
      }
    : {
        // them on RIGHT → sharp top-RIGHT corner (top + inline-start in RTL)
        background: "var(--blue-light)",
        color: "var(--text)",
        borderStartStartRadius: 6,
      };

  return (
    <div className="chat-row" style={wrapStyle}>
      <div
        className="chat-bubble inline-flex flex-wrap items-center gap-1 rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
        style={bubbleStyle}
        dir="rtl"
      >
        {children}
      </div>
    </div>
  );
}

function TypingBubble({ side }: { side: "me" | "them" }) {
  const isMe = side === "me";
  const wrapStyle: React.CSSProperties = isMe
    ? { marginInlineStart: "auto" }
    : { marginInlineEnd: "auto" };
  const bubbleStyle: React.CSSProperties = isMe
    ? { background: "linear-gradient(135deg, var(--orange), #2DD4BF)", borderStartEndRadius: 6, color: "#fff" }
    : { background: "var(--blue-light)", borderStartStartRadius: 6, color: "var(--text)" };
  return (
    <div className="chat-row" style={wrapStyle}>
      <div className="rounded-2xl px-3.5 py-2.5" style={bubbleStyle}>
        <span className="typing-dots" aria-label="يكتب">
          <span /><span /><span />
        </span>
      </div>
    </div>
  );
}
