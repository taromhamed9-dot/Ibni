"use client";

import { Icon } from "../icons";
import { Reveal } from "../reveal";

const items = [
  { icon: <Icon.Spark />, title: "مسار فريد لكل طفل", text: "نبني خريطة تعلّم خاصة بكل طفل من أول يوم." },
  { icon: <Icon.Mic />, title: "محادثة صوتية بالعربية", text: "يتحدث ويسمع طفلك بفصحى مبسّطة أو لهجة محلية." },
  { icon: <Icon.Lightning />, title: "تكيّف لحظي", text: "صعوبة الدرس تتغيّر حسب أدائه ومزاجه." },
  { icon: <Icon.Bell />, title: "تحفيز ذكي", text: "تذكير لطيف عند فقدان التركيز، استراحة عند الإرهاق." },
];

export function AIPersonalization() {
  return (
    <section id="ai" className="relative py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
              <Icon.Robot size={14} /> ذكاء اصطناعي تربوي
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl" style={{ color: "var(--text)" }}>
              ذكاء اصطناعي صُمّم لطفل عربي،
              <br />
              <span className="gradient-text-cool">ليس مساعداً عاماً.</span>
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
              بنينا نموذج إبني التربوي على بيانات تعليمية عربية مفلترة. يتحدث لغة طفلك، يعرف حدوده، ولا يتدخل خارج
              ما يحتاجه التعلّم الآمن.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <li key={it.title} className="surface-card flex items-start gap-3 rounded-2xl p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{ background: "var(--orange-light)", color: "var(--orange)" }}>{it.icon}</span>
                  <div>
                    <p className="font-bold" style={{ color: "var(--text)" }}>{it.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{it.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={120}>
            {/* Stylized AI chat preview */}
            <div className="surface-card rounded-3xl p-5 md:p-7">
              <div className="flex items-center gap-3 border-b pb-4" style={{ borderColor: "var(--border-color)" }}>
                <span className="grid h-10 w-10 place-items-center rounded-xl"
                  style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
                  <Icon.Robot />
                </span>
                <div className="leading-tight">
                  <p className="font-bold" style={{ color: "var(--text)" }}>مساعد إبني</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>متصل · يتحدث العربية</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold"
                  style={{ background: "var(--green-light)", color: "var(--green)" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />
                  آمن للأطفال
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <Bubble side="them" text="السلام عليكم يا إبني! كيف حالك اليوم؟" />
                <Bubble side="me" text="تمام يا أستاذ. ساعدني أحلّ تمرين الجمع." />
                <Bubble side="them" text="بكل سرور 🎈 سأبدأ بمثال من حياتك: عندك ٣ تفاحات، أعطاك أبوك ٤ أخرى... كم صار عندك؟" />
                <Bubble side="me" text="٧!" />
                <Bubble side="them" text="ممتاز! نجمة لك. هل نجرّب مثالاً أصعب قليلاً؟" />
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-2xl border p-2"
                style={{ borderColor: "var(--border-color)" }}>
                <Icon.Mic />
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>تحدّث أو اكتب رسالتك...</span>
                <span className="ml-auto grid h-9 w-9 place-items-center rounded-full"
                  style={{ background: "var(--orange)", color: "#fff" }}>
                  <Icon.ArrowLeft size={16} />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Bubble({ side, text }: { side: "me" | "them"; text: string }) {
  const isMe = side === "me";
  return (
    <div className={`flex ${isMe ? "justify-start" : "justify-end"}`}>
      <div
        className="max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
        style={{
          background: isMe ? "var(--orange)" : "var(--blue-light)",
          color: isMe ? "#fff" : "var(--text)",
          borderTopRightRadius: isMe ? 20 : 6,
          borderTopLeftRadius: isMe ? 6 : 20,
        }}
      >
        {text}
      </div>
    </div>
  );
}
