import type { Metadata, Viewport } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeInit } from "@/components/theme-init";
import { SITE } from "@/lib/site";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.slogan}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "إبني", "Ibni", "تعليم الأطفال", "منصة تعليمية", "تعلم الأطفال", "بدائل الشاشات",
    "تطبيق تعليمي للأطفال", "ذكاء اصطناعي تعليمي", "الجزائر", "العالم العربي",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.slogan}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "ar_DZ",
    type: "website",
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0D1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={`${tajawal.variable} ${cairo.variable}`}>
      <head>
        <ThemeInit />
      </head>
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
