import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { NavbarDemo } from "@/components/common/NavbarDemo";
import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/industries/Form";
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal";
import { BackgroundBoxesDemo } from "@/components/solutions/BackgroundBoxesDemo";
import LearnMore from "@/components/solutions/LearnMore";
import SolutionCta from "@/components/solutions/SolutionCta";
import SolutionsCard from "@/components/solutions/SolutionsCardSection";
import AccordionSection from "@/components/solutions/AccordionSection";
import manufacturingData from "../../data/industires/manufacturingData";
import sqcplData from "../../data/solutions/sqcplData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={sqcplData.bannerData?.title}
        highlightedTitle={sqcplData.bannerData?.HighlightTitle}
        desc={sqcplData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={sqcplData.cardSectionTitle?.title}
        desc={sqcplData.cardSectionTitle?.desc}
        cardData={sqcplData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={sqcplData.StickyScrollContentTitle?.title}
        desc={sqcplData.StickyScrollContentTitle?.content}
        content={sqcplData.StickyScrollContent}
      />
      <Counter
        counterTitle={sqcplData.counterTitle?.title}
        counterData={sqcplData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqcplData.formContents?.title}
        desc={sqcplData.formContents?.desc}
      />
      <AccordionSection accordionData={sqcplData.accordionItems}  />
    </div>
  );
};

export default page;
