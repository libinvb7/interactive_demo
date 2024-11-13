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
import sqdcData from "../../data/solutions/sqdcData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={sqdcData.bannerData?.title}
        highlightedTitle={sqdcData.bannerData?.HighlightTitle}
        desc={sqdcData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={sqdcData.cardSectionTitle?.title}
        desc={sqdcData.cardSectionTitle?.desc}
        cardData={sqdcData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={sqdcData.StickyScrollContentTitle?.title}
        desc={sqdcData.StickyScrollContentTitle?.content}
        content={sqdcData.StickyScrollContent}
      />
      <Counter
        counterTitle={sqdcData.counterTitle?.title}
        counterData={sqdcData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdcData.formContents?.title}
        desc={sqdcData.formContents?.desc}
      />
      <AccordionSection accordionData={sqdcData.accordionItems}  />
    </div>
  );
};

export default page;
