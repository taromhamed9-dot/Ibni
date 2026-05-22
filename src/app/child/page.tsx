import { PageShell } from "@/components/page-shell";
import { Achievements } from "@/components/sections/achievements";

export const metadata = { title: "لوحة الطفل" };

export default function ChildPage() {
  return (
    <PageShell
      eyebrow="عالم الطفل"
      title={<>مغامرة <span className="gradient-text-warm">يحبّها طفلك</span> كل يوم.</>}
      description="واجهة بسيطة، ألوان متوازنة، ومهام يومية ممتعة بدون إفراط ولا إدمان."
    >
      <Achievements />
    </PageShell>
  );
}
