import { PageShell } from "@/components/page-shell";

export const metadata = { title: "شروط الاستخدام" };

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="الشروط"
      title={<>شروط <span className="gradient-text-warm">واضحة وعادلة.</span></>}
      description="نكتب شروطنا بلغة بسيطة. بدون مفاجآت، بدون شروط مخفية، بدون رسوم خفية."
    />
  );
}
