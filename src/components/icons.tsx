import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base(size: number, extra?: string): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
    className: extra,
  };
}

export const Icon = {
  Sun: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  ),
  Moon: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z" />
    </svg>
  ),
  Sparkles: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  ),
  Shield: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M12 3 4 6v6c0 4.5 3.2 8.4 8 9 4.8-.6 8-4.5 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Heart: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M20.8 8.6a5 5 0 0 0-8.8-3.2 5 5 0 0 0-8.8 3.2c0 5.2 8.8 10.4 8.8 10.4s8.8-5.2 8.8-10.4Z" />
    </svg>
  ),
  Brain: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M9.5 4A3.5 3.5 0 0 0 6 7.5 3 3 0 0 0 4 11a3 3 0 0 0 1.2 2.4A3 3 0 0 0 5 16a3.5 3.5 0 0 0 4.5 3.4V4Z" />
      <path d="M14.5 4A3.5 3.5 0 0 1 18 7.5 3 3 0 0 1 20 11a3 3 0 0 1-1.2 2.4A3 3 0 0 1 19 16a3.5 3.5 0 0 1-4.5 3.4V4Z" />
    </svg>
  ),
  Rocket: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M5 14c0-6 4-11 9-11 0 5-1 8-3.5 11L9 16l-2-2Z" />
      <path d="M9 16l-3 3-2-2 3-3" />
      <circle cx="12.5" cy="8.5" r="1.5" />
    </svg>
  ),
  Robot: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4M8 12h.01M16 12h.01M9 16h6" />
    </svg>
  ),
  Book: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H7a2 2 0 0 0-2 2V5Z" />
      <path d="M9 7h7M9 11h5" />
    </svg>
  ),
  Gamepad: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <rect x="2" y="7" width="20" height="11" rx="4" />
      <path d="M7 12h2M8 11v2M15 12h.01M17 14h.01" />
    </svg>
  ),
  Trophy: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M5 5h3v3a2 2 0 0 1-3 0V5ZM16 5h3v3a2 2 0 0 1-3 0V5Z" />
      <path d="M9 14h6l-1 4h-4l-1-4ZM8 20h8" />
    </svg>
  ),
  Star: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="m12 3 2.7 5.6 6.3.9-4.5 4.4 1.1 6.1L12 17l-5.6 3 1.1-6.1-4.5-4.4 6.3-.9L12 3Z" />
    </svg>
  ),
  Lock: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  Globe: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  Check: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  ),
  CheckCircle: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  ),
  Cross: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  ArrowLeft: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  ),
  ArrowRight: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ChevronDown: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Menu: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  User: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  ),
  Users: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 20c0-3.6 3-6 7-6s7 2.4 7 6" />
      <circle cx="17" cy="7" r="3" />
      <path d="M22 18c0-2.4-1.6-4.5-4-5" />
    </svg>
  ),
  Parent: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="8" cy="7" r="3" />
      <path d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle cx="17" cy="11" r="2" />
      <path d="M14 19c0-1.7 1.3-3 3-3s3 1.3 3 3" />
    </svg>
  ),
  School: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="m3 10 9-6 9 6v10H3V10Z" />
      <path d="M10 20v-6h4v6M3 10l9 4 9-4" />
    </svg>
  ),
  Chat: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4V6Z" />
    </svg>
  ),
  Mic: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  ),
  Compass: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-1.5 5.5L8 16l1.5-5.5L15 9Z" />
    </svg>
  ),
  Map: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6ZM9 4v16M15 6v16" />
    </svg>
  ),
  Eye: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  EyeOff: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M3 3l18 18M10.6 6.3A10 10 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.4 4.1M6.1 6.6A17 17 0 0 0 2 12s3.5 6 10 6a10 10 0 0 0 3.5-.7" />
      <path d="M14 14a3 3 0 0 1-4-4" />
    </svg>
  ),
  Bell: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M6 8a6 6 0 1 1 12 0v5l2 3H4l2-3V8Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  ),
  Lightning: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
    </svg>
  ),
  Pencil: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M14 4l6 6L9 21H3v-6L14 4Z" />
      <path d="m13 5 6 6" />
    </svg>
  ),
  Palette: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M12 3a9 9 0 0 0 0 18 3 3 0 0 0 0-6 2 2 0 0 1 0-4h2a7 7 0 0 0 0-8h-2Z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="9.5" cy="6.5" r="1" />
      <circle cx="14.5" cy="6.5" r="1" />
    </svg>
  ),
  Quran: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M5 4h12a3 3 0 0 1 3 3v14H7a2 2 0 0 1-2-2V4Z" />
      <path d="M9 8h7M9 12h5" />
      <path d="M18 18a3 3 0 0 0-3-3" />
    </svg>
  ),
  Music: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </svg>
  ),
  Puzzle: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M10 3a2 2 0 0 1 4 0v2h3a2 2 0 0 1 2 2v3h-2a2 2 0 1 0 0 4h2v3a2 2 0 0 1-2 2h-3v-2a2 2 0 1 0-4 0v2H7a2 2 0 0 1-2-2v-3H3a2 2 0 0 1 0-4h2V7a2 2 0 0 1 2-2h3V3Z" />
    </svg>
  ),
  Flame: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4-.5 2 1 3 2 3 0-3-2-5 1-9Z" />
    </svg>
  ),
  Calendar: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  Phone: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  Mail: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  AppStore: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M16 3c-1 1.5-3 2-3 4 2 0 4-1.5 4-4M8 21l-2-4M16 21l2-4M5 17h14a3 3 0 0 0 3-3l-3-5a4 4 0 0 0-3-2H8a4 4 0 0 0-3 2l-3 5a3 3 0 0 0 3 3Z" />
    </svg>
  ),
  PlayStore: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M5 3v18l14-9L5 3ZM5 3l11 18M5 21l11-18" />
    </svg>
  ),
  Instagram: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  Facebook: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v9h4v-9h3l1-4h-4V8Z" />
    </svg>
  ),
  Youtube: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <rect x="2" y="6" width="20" height="12" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  ),
  Tiktok: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M10 4v11a3 3 0 1 1-3-3" />
      <path d="M10 4a5 5 0 0 0 5 5" />
    </svg>
  ),
  Whatsapp: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M3 21l1.5-5A9 9 0 1 1 8 19.5L3 21Z" />
      <path d="M8 11c.5 2 2 3.5 4 4l1.5-1.5 2.5 1c-.3 1.7-2 2.5-3.5 2a8 8 0 0 1-5.5-5.5C6.5 9.5 7.3 8 9 7.5l1 2.5L8.5 11.5" />
    </svg>
  ),
  Spark: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </svg>
  ),
  Magic: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M15 4l2 2-11 11-2-2L15 4Z" />
      <path d="M4 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2ZM18 12l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </svg>
  ),
  Headphones: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M4 14v3a3 3 0 0 0 3 3h1v-7H7a3 3 0 0 0-3 1Z" />
      <path d="M20 14v3a3 3 0 0 1-3 3h-1v-7h1a3 3 0 0 1 3 1Z" />
      <path d="M4 14a8 8 0 0 1 16 0" />
    </svg>
  ),
  Target: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  ),
  Plus: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Tree: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M12 3 6 11h3l-3 5h4v5h4v-5h4l-3-5h3l-6-8Z" />
    </svg>
  ),
  House: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="m3 11 9-8 9 8v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z" />
      <path d="M10 21v-7h4v7" />
    </svg>
  ),
  Cube: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </svg>
  ),
  Google: ({ size = 20, ...p }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden focusable={false} className={p.className} {...p}>
      <path d="M21.6 12.23c0-.68-.06-1.34-.18-1.97H12v3.73h5.39a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.98-4.3 2.98-7.28Z" fill="#4285F4" />
      <path d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.23-2.5c-.9.6-2.04.96-3.39.96-2.6 0-4.81-1.76-5.6-4.12H3.07v2.59A10 10 0 0 0 12 22Z" fill="#34A853" />
      <path d="M6.4 13.91A6 6 0 0 1 6.08 12c0-.66.11-1.31.32-1.91V7.5H3.07A10 10 0 0 0 2 12c0 1.61.38 3.14 1.07 4.5l3.33-2.59Z" fill="#FBBC05" />
      <path d="M12 5.97c1.47 0 2.79.5 3.83 1.5l2.86-2.86C16.95 2.99 14.7 2 12 2A10 10 0 0 0 3.07 7.5L6.4 10.1C7.19 7.73 9.4 5.97 12 5.97Z" fill="#EA4335" />
    </svg>
  ),
  Apple: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <path d="M16 3c-.4 1.7-2 2.7-3.5 2.5C12.2 4 13.7 2.4 16 3Z" fill="currentColor" stroke="none" />
      <path d="M19 16.5a8 8 0 0 1-1.5 2.5c-.9 1.2-1.9 2-3 2-1 0-1.4-.5-2.5-.5s-1.6.5-2.5.5c-1.2 0-2.2-.9-3.1-2C4.4 16.6 3.5 12 5.7 9.4c.9-1.1 2.2-1.7 3.6-1.6 1 0 1.9.5 2.7.5.7 0 1.7-.6 3-.5 1 0 1.9.3 2.7 1-2.3 1.4-2 4.8.3 5.7Z" />
    </svg>
  ),
  Key: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="8" cy="14" r="4" />
      <path d="m11 11 9-9 2 2-2 2 2 2-3 3-2-2-2 2-4-4Z" />
    </svg>
  ),
  At: ({ size = 20, ...p }: IconProps) => (
    <svg {...base(size, p.className)} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" />
    </svg>
  ),
};
