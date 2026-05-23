import { PageShell } from "@/components/page-shell";
import { Methodology } from "@/components/sections/methodology";

export const metadata = { title: "المنهجية" };

export default function MethodologyPage() {
  return (
    <PageShell
      eyebrow="المنهجية"
      title={<>خمس خطوات. <span className="gradient-text-warm">قصة، مفهوم، نشاط، تقييم، مكافأة.</span></>}
      description="منهجية إبني التعليمية بُنيت على أحدث أبحاث علم نفس الطفل، ومُكيّفة بدقة للهوية العربية الإسلامية."
    >
      <Methodology />
    </PageShell>
  );
}
