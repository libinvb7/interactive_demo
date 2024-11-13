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
import eqdcpsData from "../../data/solutions/eqdcpsData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={eqdcpsData.bannerData?.title}
        highlightedTitle={eqdcpsData.bannerData?.HighlightTitle}
        desc={eqdcpsData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={eqdcpsData.cardSectionTitle?.title}
        desc={eqdcpsData.cardSectionTitle?.desc}
        cardData={eqdcpsData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={eqdcpsData.StickyScrollContentTitle?.title}
        desc={eqdcpsData.StickyScrollContentTitle?.content}
        content={eqdcpsData.StickyScrollContent}
      />
      <Counter
        counterTitle={eqdcpsData.counterTitle?.title}
        counterData={eqdcpsData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={eqdcpsData.formContents?.title}
        desc={eqdcpsData.formContents?.desc}
      />
      <AccordionSection accordionData={eqdcpsData.accordionItems}  />
    </div>
  );
};

export default page;
