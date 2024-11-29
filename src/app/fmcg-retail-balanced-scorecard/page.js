import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import AccordionSection from "@/components/industries/AccordionSection";
import ManufacturingCompaniesUseBalancedScorecard from "@/components/industries/ManufacturingCompaniesUseBalancedScorecard";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import Banner from "@/components/industries/Banner";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/industries/Form";
import { StickyScrollReveal } from "@/components/industries/StickyScrollReveal";
import React from "react";
import fmcgData from "../../data/industires/fmcgData";

const page = () => {
  return (
    <div >
      <Banner
        title={fmcgData.bannerData?.title}
        highlightTitle={fmcgData.bannerData?.HighlightTitle}
        desc={fmcgData.bannerData?.desc}
        imageUrl={fmcgData.bannerData?.Image}
      />
      <ClientCarousel />
      <StickyScrollReveal
        title={fmcgData.StickyScrollContentTitle?.title}
        desc={fmcgData.StickyScrollContentTitle?.content}
        content={fmcgData.StickyScrollContent}
      />
      <VideoSection
        title="Experience the power of Data Point in action"
        desc="Use Data Point’s advanced Balanced Scorecard to drive Lean practices in electronics manufacturing, streamline operations, and track key KPIs for ongoing improvement and productivity."
      />
      <Counter
        counterTitle={fmcgData.counterTitle?.title}
        counterData={fmcgData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={fmcgData.cardSectionTitle?.title}
        cardData={fmcgData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={fmcgData.formContents?.title}
        desc={fmcgData.formContents?.desc}
      />
      <AccordionSection accordionData={fmcgData.accordionItems} />
    </div>
  );
};

export default page;
