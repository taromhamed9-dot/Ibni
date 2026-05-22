import { PageShell } from "@/components/page-shell";

export const metadata = { title: "مجتمع إبني" };

export default function CommunityPage() {
  return (
    <PageShell
      eyebrow="مجتمع إبني"
      title={<>عائلة عربية واحدة <span className="gradient-text-cool">من أجل أطفالنا.</span></>}
      description="مجتمع نشيط من أولياء أمور ومعلمين في الجزائر والعالم العربي، نتشارك التجارب، الأنشطة، والنصائح."
    />
  );
}
