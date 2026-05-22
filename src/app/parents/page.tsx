import { PageShell } from "@/components/page-shell";
import { ParentPeace } from "@/components/sections/parent-peace";
import { Dashboards } from "@/components/sections/dashboards";

export const metadata = { title: "لأولياء الأمور" };

export default function ParentsPage() {
  return (
    <PageShell
      eyebrow="لأولياء الأمور"
      title={<>منصة <span className="gradient-text-warm">تطمئنك</span> وتُريحك من القلق اليومي.</>}
      description="كل أداة في إبني صُنعت بتفكير ولي أمر عربي. شفافية كاملة، تحكم تام، ودعم إنساني."
    >
      <ParentPeace />
      <Dashboards />
    </PageShell>
  );
}
