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
  { value: 50000, suffix: "+", label: "طفل نشط", icon: "users" },
  { value: 200, suffix: "+", label: "لعبة تعليمية", icon: "gamepad" },
  { value: 500, suffix: "+", label: "قصة تفاعلية", icon: "book" },
  { value: 98, suffix: "%", label: "رضا الأولياء", icon: "heart" },
] as const;
