import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Methodology } from "@/components/sections/methodology";
import { Ecosystem } from "@/components/sections/ecosystem";
import { AIPersonalization } from "@/components/sections/ai-personalization";
import { Apps } from "@/components/sections/apps";
import { ParentPeace } from "@/components/sections/parent-peace";
import { GamesStorytelling } from "@/components/sections/games-storytelling";
import { Dashboards } from "@/components/sections/dashboards";
import { SchoolCommunity } from "@/components/sections/school-community";
import { Achievements } from "@/components/sections/achievements";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

const sections = [
  { id: "hero", label: "البداية" },
  { id: "stats", label: "الأرقام" },
  { id: "problem-solution", label: "قبل وبعد" },
  { id: "methodology", label: "المنهجية" },
  { id: "ecosystem", label: "المنظومة" },
  { id: "ai", label: "الذكاء الاصطناعي" },
  { id: "apps", label: "التطبيقات" },
  { id: "games", label: "ألعاب وقصص" },
  { id: "parents", label: "لأولياء الأمور" },
  { id: "dashboards", label: "اللوحات" },
  { id: "schools", label: "للمدارس" },
  { id: "achievements", label: "الإنجازات" },
  { id: "faq", label: "أسئلة شائعة" },
  { id: "cta", label: "ابدأ الآن" },
];

export default function Home() {
  return (
    <>
      <ScrollProgress sections={sections} />
      <Hero />
      <Marquee />
      <Stats />
      <ProblemSolution />
      <Methodology />
      <Ecosystem />
      <AIPersonalization />
      <Apps />
      <GamesStorytelling />
      <ParentPeace />
      <Dashboards />
      <SchoolCommunity />
      <Achievements />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
