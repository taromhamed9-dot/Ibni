import Link from "next/link";
import { SITE } from "@/lib/site";
import { Icon } from "./icons";
import { Logo } from "./logo";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "المنصة",
    links: [
      { href: "/", label: "الرئيسية" },
      { href: "/apps", label: "الألعاب التعليمية" },
      { href: "/apps", label: "القصص التفاعلية" },
      { href: "/methodology", label: "الذكاء الاصطناعي" },
      { href: "/parents", label: "لوحة الأولياء" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { href: "/about", label: "من نحن" },
      { href: "/careers", label: "فريق العمل" },
      { href: "/careers", label: "وظائف" },
      { href: "/blog", label: "المدونة" },
      { href: "/contact", label: "تواصل معنا" },
    ],
  },
  {
    title: "الدعم",
    links: [
      { href: "/support", label: "مركز المساعدة" },
      { href: "/faq", label: "الأسئلة الشائعة" },
      { href: "/privacy", label: "سياسة الخصوصية" },
      { href: "/terms", label: "شروط الاستخدام" },
      { href: "/privacy", label: "سلامة الأطفال" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--footer)", color: "#E6EDF3" }}>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              {SITE.slogan}
              <br />
              المنصة التعليمية الذكية رقم 1 للأطفال العرب. نقدم بديلاً آمناً وممتعاً لإدمان الشاشات
              من خلال الذكاء الاصطناعي والألعاب التربوية والقيم العربية الإسلامية.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <SocialIcon href={SITE.social.instagram} label="إنستغرام"><Icon.Instagram /></SocialIcon>
              <SocialIcon href={SITE.social.facebook} label="فيسبوك"><Icon.Facebook /></SocialIcon>
              <SocialIcon href={SITE.social.youtube} label="يوتيوب"><Icon.Youtube /></SocialIcon>
              <SocialIcon href={SITE.social.tiktok} label="تيك توك"><Icon.Tiktok /></SocialIcon>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <DownloadChip store="app" />
              <DownloadChip store="play" />
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {columns.map((c) => (
                <div key={c.title}>
                  <p className="text-sm font-bold text-white">{c.title}</p>
                  <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                    {c.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="transition-colors hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center">
          <p className="inline-flex flex-wrap items-center gap-1.5">
            <span>© {new Date().getFullYear()} {SITE.name}.</span>
            <span>جميع الحقوق محفوظة. صُنع بـ</span>
            <span aria-hidden style={{ color: "#ff5d6a" }}><Icon.HeartFilled size={12} /></span>
            <span>في الجزائر</span>
            <span aria-hidden className="inline-flex"><DzFlag /></span>
          </p>
          <p className="flex items-center gap-2">
            <Icon.Globe size={14} />
            متاحة بالعربية · قريباً Français · English
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/85 transition-colors hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function DzFlag() {
  return (
    <svg width={18} height={12} viewBox="0 0 30 20" aria-hidden focusable={false}>
      <rect width="15" height="20" fill="#006233" />
      <rect x="15" width="15" height="20" fill="#FFFFFF" />
      <g transform="translate(15 10)" fill="#D21034">
        <path d="M0-5.5a5.5 5.5 0 1 0 0 11 4.5 4.5 0 1 1 0-11Z" />
        <path d="m3.6-1 .9 2.8h2.9l-2.3 1.7.9 2.8L3.6 4.6 1.3 6.3l.9-2.8L0 1.8h2.9L3.6-1Z" />
      </g>
    </svg>
  );
}

function DownloadChip({ store }: { store: "app" | "play" }) {
  const isApp = store === "app";
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-2xl border border-white/15 px-3.5 py-2 text-white/90 transition-colors hover:bg-white/10"
      aria-label={isApp ? "حمّل من App Store" : "حمّل من Google Play"}
    >
      {isApp ? <Icon.AppStore size={20} /> : <Icon.PlayStore size={20} />}
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] text-white/55">حمّل من</span>
        <span className="text-sm font-bold">{isApp ? "App Store" : "Google Play"}</span>
      </span>
    </a>
  );
}
