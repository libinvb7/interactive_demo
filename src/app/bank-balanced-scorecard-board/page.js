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
import bankData from "../../data/industires/bankData";

const page = () => {
  return (
    <div >
      <Banner
        title={bankData.bannerData?.title}
        highlightTitle={bankData.bannerData?.HighlightTitle}
        desc={bankData.bannerData?.desc}
        imageUrl={bankData.bannerData?.Image}
      />
      <ClientCarousel />
      <StickyScrollReveal
        title={bankData.StickyScrollContentTitle?.title}
        desc={bankData.StickyScrollContentTitle?.content}
        content={bankData.StickyScrollContent}
      />
      <VideoSection
        title="Experience the power of Data Point in action"
        desc="Use Data Point’s advanced Balanced Scorecard to drive Lean practices in electronics manufacturing, streamline operations, and track key KPIs for ongoing improvement and productivity."
      />
      <Counter
        counterTitle={bankData.counterTitle?.title}
        counterData={bankData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={bankData.cardSectionTitle?.title}
        cardData={bankData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={bankData.formContents?.title}
        desc={bankData.formContents?.desc}
      />
      <AccordionSection accordionData={bankData.accordionItems} />
    </div>
  );
};

export default page;
