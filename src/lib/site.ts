export const SITE = {
  name: "إبني",
  nameEn: "Ibni",
  slogan: "نبني عقولاً.. ونصنع مستقبلاً",
  description:
    "منصة تعليمية ذكية للأطفال من 5 إلى 10 سنوات، صُنعت لتحلّ محل الإدمان على الشاشات بتعلم آمن وممتع.",
  url: "https://ibni.app",
  email: "hello@ibni.app",
  whatsapp: "+213000000000",
  social: {
    instagram: "https://instagram.com/ibni",
    facebook: "https://facebook.com/ibni",
    youtube: "https://youtube.com/@ibni",
    tiktok: "https://tiktok.com/@ibni",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/apps", label: "تطبيقاتنا" },
  { href: "/methodology", label: "المنهجية" },
  { href: "/parents", label: "أولياء الأمور" },
  { href: "/schools", label: "للمدارس" },
  { href: "/pricing", label: "الاشتراك" },
] as const;

export const STATS = [
  { value: 1200, suffix: "+", label: "طفل مسجل في المنصة" },
  { value: 85, suffix: "+", label: "درس تفاعلي متاح" },
  { value: 12, suffix: "", label: "ولاية وصلنا إليها" },
  { value: 94, suffix: "%", label: "رضى أولياء الأمور" },
] as const;
