import { ClientCarousel } from "@/components/home/ClientCarousel";
import Counter from "@/components/common/counter/Counter";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import VideoSection from "@/components/home/video/VideoSection";
import CtaTwo from "@/components/industries/CtaTwo";
import FormIndustry from "@/components/common/Form/Form";
import SolutionCta from "@/components/solutions/SolutionCta";
import AccordionSection from "@/components/solutions/AccordionSection";
import sqdcpsData from "../../data/solutions/sqdcpsData";
import Banner from "@/components/common/Banner";
import LeftRight from "@/components/common/LeftRight";

const page = () => {
  return (
    <div className="bg-solutions-home">
      <Banner title={sqdcpsData.bannerData?.title}
        desc={sqdcpsData.bannerData?.desc} btnView={true}/>
      <VideoSection customClass="lg:py-20 py-10"  />
      <ClientCarousel />
      <LeftRight
        mainTitle={sqdcpsData.leftRightDataTitles.title}
        mainData={sqdcpsData.leftRightData}
        desc={sqdcpsData.leftRightDataTitles.content}
      />
      <SolutionCta />
     
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
