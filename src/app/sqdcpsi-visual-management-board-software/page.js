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
import sqdcpsiData from "../../data/solutions/sqdcpsiData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={sqdcpsiData.bannerData?.title}
        highlightedTitle={sqdcpsiData.bannerData?.HighlightTitle}
        desc={sqdcpsiData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={sqdcpsiData.cardSectionTitle?.title}
        desc={sqdcpsiData.cardSectionTitle?.desc}
        cardData={sqdcpsiData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={sqdcpsiData.StickyScrollContentTitle?.title}
        desc={sqdcpsiData.StickyScrollContentTitle?.content}
        content={sqdcpsiData.StickyScrollContent}
      />
      <Counter
        counterTitle={sqdcpsiData.counterTitle?.title}
        counterData={sqdcpsiData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdcpsiData.formContents?.title}
        desc={sqdcpsiData.formContents?.desc}
      />
      <AccordionSection accordionData={sqdcpsiData.accordionItems}  />
    </div>
  );
};

export default page;
