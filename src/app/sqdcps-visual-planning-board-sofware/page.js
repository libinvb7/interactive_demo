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
import sqdcpsData from "../../data/solutions/sqdcpsData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={sqdcpsData.bannerData?.title}
        highlightedTitle={sqdcpsData.bannerData?.HighlightTitle}
        desc={sqdcpsData.bannerData?.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={sqdcpsData.cardSectionTitle?.title}
        desc={sqdcpsData.cardSectionTitle?.desc}
        cardData={sqdcpsData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={sqdcpsData.StickyScrollContentTitle?.title}
        desc={sqdcpsData.StickyScrollContentTitle?.content}
        content={sqdcpsData.StickyScrollContent}
      />
      <Counter
        counterTitle={sqdcpsData.counterTitle?.title}
        counterData={sqdcpsData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdcpsData.formContents?.title}
        desc={sqdcpsData.formContents?.desc}
      />
      <AccordionSection accordionData={sqdcpsData.accordionItems}  />
    </div>
  );
};

export default page;
