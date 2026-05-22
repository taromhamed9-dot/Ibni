import { PageShell } from "@/components/page-shell";
import { Dashboards } from "@/components/sections/dashboards";

export const metadata = { title: "للمعلمين" };

export default function TeachersPage() {
  return (
    <PageShell
      eyebrow="للمعلّمين"
      title={<>أدواتٌ <span className="gradient-text-warm">تحرّر وقتك</span> لتركّز على ما يهمّ.</>}
      description="من إدارة الفصل إلى توزيع الأنشطة وتقارير ولي الأمر، إبني يوفّر للمعلم العربي ساعات أسبوعياً."
    >
      <Dashboards />
    </PageShell>
  );
}
