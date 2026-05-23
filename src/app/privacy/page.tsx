import { PageShell } from "@/components/page-shell";

export const metadata = { title: "سياسة الخصوصية" };

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="الخصوصية"
      title={<>خصوصيتك <span className="gradient-text-cool">والأمر مع طفلك أولاً.</span></>}
      description="لا نبيع بيانات الأطفال. لا نتتبّع سلوكهم خارج المنصة. كل ما نجمعه يبقى داخل إبني ولأغراض تربوية فقط."
    />
  );
}
