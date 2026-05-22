import { PageShell } from "@/components/page-shell";
import { FAQ } from "@/components/sections/faq";

export const metadata = { title: "الأسئلة الشائعة" };

export default function FAQPage() {
  return (
    <PageShell
      eyebrow="أسئلة شائعة"
      title={<>كل ما <span className="gradient-text-cool">يهمّك معرفته.</span></>}
      description="إجابات سريعة وصادقة على الأسئلة التي يطرحها الأهل والمعلمون عادة."
    >
      <FAQ />
    </PageShell>
  );
}
