import Link from "next/link";
import { Icon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-5">
      <div className="text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: "var(--orange-light)", color: "var(--orange)" }}
        >
          <Icon.Compass size={14} /> 404
        </span>
        <h1 className="mt-5 font-display text-4xl font-extrabold" style={{ color: "var(--text)" }}>
          هذه الصفحة <span className="gradient-text-warm">تائهة في الفضاء.</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
          ربما الرابط قديم أو أن طفلاً فضولياً قد ضغط على شيء ما. لنرجعك إلى عالم إبني.
        </p>
        <Link href="/" className="btn-primary mt-7 inline-flex">
          <Icon.ArrowRight size={18} />
          العودة للرئيسية
        </Link>
      </div>
    </section>
  );
}
