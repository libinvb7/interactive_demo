import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import IndustrySection from "@/components/home/industry/IndustrySection";
import AccordionSection from "@/components/industries/AccordionSection";
import ManufacturingCompaniesUseBalancedScorecard from "@/components/industries/ManufacturingCompaniesUseBalancedScorecard";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import Banner from "@/components/industries/Banner";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/industries/Form";
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal";
import React from "react";
import energyData from "../../data/industires/energyData";

const page = () => {
  return (
    <div >
      <Banner
        title={energyData.bannerData?.title}
        highlightTitle={energyData.bannerData?.HighlightTitle}
        desc={energyData.bannerData?.desc}
        imageUrl={energyData.bannerData?.Image}
      />
      <ClientCarousel />
      <StickyScrollReveal
        title={energyData.StickyScrollContentTitle?.title}
        desc={energyData.StickyScrollContentTitle?.content}
        content={energyData.StickyScrollContent}
      />
      <VideoSection
        title="Experience the power of Data Point in action"
        desc="Use Data Point’s advanced Balanced Scorecard to drive Lean practices in electronics manufacturing, streamline operations, and track key KPIs for ongoing improvement and productivity."
      />
      <Counter
        counterTitle={energyData.counterTitle?.title}
        counterData={energyData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={energyData.cardSectionTitle?.title}
        cardData={energyData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={energyData.formContents?.title}
        desc={energyData.formContents?.desc}
      />
      <AccordionSection accordionData={energyData.accordionItems} />
    </div>
  );
};

export default page;
