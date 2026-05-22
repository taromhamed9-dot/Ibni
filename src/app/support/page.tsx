import { PageShell } from "@/components/page-shell";

export const metadata = { title: "مركز الدعم" };

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="مركز الدعم"
      title={<>نحن <span className="gradient-text-cool">هنا لمساعدتك.</span></>}
      description="إجابات على المشاكل الشائعة، أدلة الاستخدام، وفريق دعم بشري متاح كل يوم."
    />
  );
}
