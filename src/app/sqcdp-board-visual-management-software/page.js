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
import sqdcpData from "../../data/solutions/sqdcpData";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <BackgroundBoxesDemo
        title={sqdcpData.bannerData.title}
        highlightedTitle={sqdcpData.bannerData.HighlightTitle}
        desc={sqdcpData.bannerData.desc}
      />
      <VideoSection />
      <ClientCarousel />
      <SolutionsCard
        title={sqdcpData.cardSectionTitle.title}
        desc={sqdcpData.cardSectionTitle.desc}
        cardData={sqdcpData.cardData}
      />
      <SolutionCta />
      <StickyScrollReveal
        title={sqdcpData.StickyScrollContentTitle.title}
        desc={sqdcpData.StickyScrollContentTitle.content}
        content={sqdcpData.StickyScrollContent}
      />
      <Counter
        counterTitle={sqdcpData.counterTitle.title}
        counterData={sqdcpData.counterData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={sqdcpData.formContents?.title}
        desc={sqdcpData.formContents?.desc}
      />
      <LearnMore
        title={sqdcpData.learnMoreTitle.title}
        learnMoreData={sqdcpData.learnmoreContent}
      />
      <AccordionSection accordionData={sqdcpData.accordionItems} />
    </div>
  );
};

export default page;
