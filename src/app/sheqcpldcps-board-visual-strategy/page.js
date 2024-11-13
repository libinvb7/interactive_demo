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
import sheqcpldcpsData from "../../data/solutions/sheqcpldcpsData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={sheqcpldcpsData.bannerData?.title}
        highlightedTitle={sheqcpldcpsData.bannerData?.HighlightTitle}
        desc={sheqcpldcpsData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={sheqcpldcpsData.cardSectionTitle?.title}
        desc={sheqcpldcpsData.cardSectionTitle?.desc}
        cardData={sheqcpldcpsData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={sheqcpldcpsData.StickyScrollContentTitle?.title}
        desc={sheqcpldcpsData.StickyScrollContentTitle?.content}
        content={sheqcpldcpsData.StickyScrollContent}
      />
      <Counter
        counterTitle={sheqcpldcpsData.counterTitle?.title}
        counterData={sheqcpldcpsData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sheqcpldcpsData.formContents?.title}
        desc={sheqcpldcpsData.formContents?.desc}
      />
      <AccordionSection accordionData={sheqcpldcpsData.accordionItems}  />
    </div>
  );
};

export default page;
