import { PageShell } from "@/components/page-shell";

export const metadata = { title: "الوظائف" };

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="انضم إلينا"
      title={<>ابنِ معنا <span className="gradient-text-warm">جيلاً عربياً أفضل.</span></>}
      description="نوظّف بشغف. إذا كنت مصمماً، مهندساً، مربياً، أو فناناً، نريد التعرّف عليك."
    />
  );
}
