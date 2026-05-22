import { PageShell } from "@/components/page-shell";
import { Apps } from "@/components/sections/apps";

export const metadata = { title: "تطبيقاتنا" };

export default function AppsPage() {
  return (
    <PageShell
      eyebrow="تطبيقاتنا"
      title={<>منظومة تطبيقات <span className="gradient-text-cool">تنمو مع طفلك.</span></>}
      description="تطبيق واحد، عوالم متعدّدة. من الحساب إلى القرآن، من العلوم إلى الإبداع. كلها بمعيار تربوي واحد."
    >
      <Apps />
    </PageShell>
  );
}
