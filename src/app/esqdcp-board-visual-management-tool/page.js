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
import esqdcpData from "../../data/solutions/esqdcpData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={esqdcpData.bannerData?.title}
        highlightedTitle={esqdcpData.bannerData?.HighlightTitle}
        desc={esqdcpData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={esqdcpData.cardSectionTitle?.title}
        desc={esqdcpData.cardSectionTitle?.desc}
        cardData={esqdcpData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={esqdcpData.StickyScrollContentTitle?.title}
        desc={esqdcpData.StickyScrollContentTitle?.content}
        content={esqdcpData.StickyScrollContent}
      />
      <Counter
        counterTitle={esqdcpData.counterTitle?.title}
        counterData={esqdcpData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={esqdcpData.formContents?.title}
        desc={esqdcpData.formContents?.desc}
      />
      <AccordionSection accordionData={esqdcpData.accordionItems}  />
    </div>
  );
};

export default page;
