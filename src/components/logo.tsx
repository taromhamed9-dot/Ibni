import Image from "next/image";
import Link from "next/link";

export function Logo({ size = 40, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="إبني — الصفحة الرئيسية">
      <span
        className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-[var(--border-color)]"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpeg"
          alt="شعار إبني"
          width={size}
          height={size}
          priority
          className="h-full w-full object-cover"
        />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-extrabold tracking-tight" style={{ color: "var(--text)" }}>
            إبني
          </span>
          <span className="mt-0.5 text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
            Ibni
          </span>
        </span>
      )}
    </Link>
  );
}
