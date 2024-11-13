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
import sqdclData from "../../data/solutions/sqdclData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={sqdclData.bannerData?.title}
        highlightedTitle={sqdclData.bannerData?.HighlightTitle}
        desc={sqdclData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={sqdclData.cardSectionTitle?.title}
        desc={sqdclData.cardSectionTitle?.desc}
        cardData={sqdclData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={sqdclData.StickyScrollContentTitle?.title}
        desc={sqdclData.StickyScrollContentTitle?.content}
        content={sqdclData.StickyScrollContent}
      />
      <Counter
        counterTitle={sqdclData.counterTitle?.title}
        counterData={sqdclData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdclData.formContents?.title}
        desc={sqdclData.formContents?.desc}
      />
      <AccordionSection accordionData={sqdclData.accordionItems}  />
    </div>
  );
};

export default page;
