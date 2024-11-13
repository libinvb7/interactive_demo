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
import electronicsData from "../../data/industires/electronicsData";

const page = () => {
  return (
    <div className="bg-industry-home">
      <Banner
        title={electronicsData.bannerData?.title}
        highlightTitle={electronicsData.bannerData?.HighlightTitle}
        desc={electronicsData.bannerData?.desc}
        imageUrl={electronicsData.bannerData?.Image}
      />
      <ClientCarousel />
      <StickyScrollReveal
        title={electronicsData.StickyScrollContentTitle?.title}
        desc={electronicsData.StickyScrollContentTitle?.content}
        content={electronicsData.StickyScrollContent}
      />
      <VideoSection
        title="Experience the power of Data Point in action"
        desc="Use Data Point’s advanced Balanced Scorecard to drive Lean practices in electronics manufacturing, streamline operations, and track key KPIs for ongoing improvement and productivity."
      />
      <Counter
        counterTitle={electronicsData.counterTitle?.title}
        counterData={electronicsData.counterData}
      />
      <ManufacturingCompaniesUseBalancedScorecard
        cardSectionTitle={electronicsData.cardSectionTitle?.title}
        cardData={electronicsData.cardData}
      />
      <TestimonialCarousel />
      <CtaTwo />
      <FormIndustry
        title={electronicsData.formContents?.title}
        desc={electronicsData.formContents?.desc}
      />
      <AccordionSection accordionData={electronicsData.accordionItems} />
    </div>
  );
};

export default page;
