import { PageShell } from "@/components/page-shell";
import { SchoolCommunity } from "@/components/sections/school-community";

export const metadata = { title: "للمدارس" };

export default function SchoolsPage() {
  return (
    <PageShell
      eyebrow="للمدارس والمؤسسات"
      title={<>شراكات مدرسية <span className="gradient-text-cool">تمكّن المعلم.</span></>}
      description="نقدّم لمدارس الجزائر والعالم العربي منظومة تعليمية حديثة تتكامل مع المنهاج الرسمي، ولا تحلّ محل المعلم بل تدعمه."
    >
      <SchoolCommunity />
    </PageShell>
  );
}
