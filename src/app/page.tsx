import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { StickyCTA } from "@/components/sticky-cta";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Ecosystem } from "@/components/sections/ecosystem";
import { AIPersonalization } from "@/components/sections/ai-personalization";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

const sections = [
  { id: "hero", label: "البداية" },
  { id: "stats", label: "الأرقام" },
  { id: "how-it-works", label: "كيف يعمل" },
  { id: "problem-solution", label: "لماذا إبني" },
  { id: "ecosystem", label: "المنظومة" },
  { id: "ai", label: "الذكاء الاصطناعي" },
  { id: "testimonials", label: "آراء الأولياء" },
  { id: "pricing", label: "الاشتراك" },
  { id: "faq", label: "أسئلة شائعة" },
  { id: "cta", label: "ابدأ الآن" },
];

export default function Home() {
  return (
    <>
      <ScrollProgress sections={sections} />
      <Hero />
      <Stats />
      <HowItWorks />
      <ProblemSolution />
      <Ecosystem />
      <AIPersonalization />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
    </>
  );
}
