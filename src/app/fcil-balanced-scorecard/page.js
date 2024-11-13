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
import fcilData from "../../data/solutions/fcilData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={fcilData.bannerData?.title}
        highlightedTitle={fcilData.bannerData?.HighlightTitle}
        desc={fcilData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={fcilData.cardSectionTitle?.title}
        desc={fcilData.cardSectionTitle?.desc}
        cardData={fcilData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={fcilData.StickyScrollContentTitle?.title}
        desc={fcilData.StickyScrollContentTitle?.content}
        content={fcilData.StickyScrollContent}
      />
      <Counter
        counterTitle={fcilData.counterTitle?.title}
        counterData={fcilData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={fcilData.formContents?.title}
        desc={fcilData.formContents?.desc}
      />
      <AccordionSection accordionData={fcilData.accordionItems}  />
    </div>
  );
};

export default page;
