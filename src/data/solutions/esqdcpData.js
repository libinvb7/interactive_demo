import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import importantmetrics from "/public/assets/images/icons/important-metrics.png";
import realtimetracking from "/public/assets/images/icons/real-time-tracking.png";
import visualmanagement from "/public/assets/images/icons/visual-management.png";
import Image from "next/image";

const esqdcpData = {
  bannerData: {
    title: " ESQDCP Board:",
    HighlightTitle: "Optimising Performance with an Environmental Focus ",
    Image: bannerSlide,
    desc: "rack and improve performance across Environment, Safety, Quality, Delivery, Cost, and People with a powerful visual management tool. ",
  },
  cardSectionTitle: {
    title: " What is ESQDCP? Understanding the Key Metrics ",
    desc: "ESQDCP is a comprehensive framework for tracking critical operational metrics, focusing on Environment, Safety, Quality, Delivery, Cost, and People. This approach ensures that businesses meet their strategic objectives while maintaining a sustainable and safe working environment.  ",
  },
  cardData: [
    {
      title: "Operational Efficiency",
      icon: visualmanagement,
      content:
        "The ESQDCP Board enhances decision-making by tracking key metrics across Environment, Safety, Quality, Delivery, Cost, and People. ",
    },
    {
      title: "Sustainability and Safety ",
      icon: realtimetracking,
      content:
        "Track environmental impact and workplace safety to ensure compliance and promote sustainable practices.",
    },
    {
      title: "Cost and Workforce Engagement ",
      icon: importantmetrics,
      content:
        "Control operational costs and boost employee productivity by aligning team efforts with organisational goals. ",
    },
  ],

  StickyScrollContentTitle: {
    title: "Monitoring and Managing Key ESQDCP Metrics ",
    content:
      "Gain insights across Environment, Safety, Quality, Delivery, Cost, and People in a single view. ",
  },
  StickyScrollContent: [
    {
      title: "Environment",
      description:
        "Measure and track environmental impact and sustainability efforts. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Safety",
      description:
        "Track safety incidents and enhance workplace safety protocols. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Quality",
      description: "Improve product quality and customer satisfaction through real-time monitoring. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Delivery",
      description:
        "Measure on-time delivery performance to enhance supply chain efficiency. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Cost",
      description:
        "Evaluate workforce productivity and engagement. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "People",
      description:
        "Boost workforce productivity and engagement through focused tracking. ",
      content: (
        <Image
          src={customizationImage}
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
  ],
  counterTitle: {
    title: "Boosting Performance with ESQDCP Boards",
  },
  counterData: [
    {
      title: "reduction in environmental waste and emissions ",
      number: "25",
    },
    {
      title: "improvement in safety compliance and incident management ",
      number: "20",
    },
    {
      title: "boost in delivery performance and reduced lead times ",
      number: "30",
    },
  ],

  formContents: {
    title: "Get Started with ESQDCP Today ",
    desc: "Sign up to explore how the ESQDCP Board can transform your business operations with a focus on environmental sustainability and operational efficiency.  ",
  },
  accordionItems: [
    {
      title: "How does the ESQDCP Board improve sustainability?",
      content:
        "By tracking environmental metrics in real-time, the ESQDCP Board helps businesses reduce their environmental impact and meet sustainability goals. ",
    },
    {
      title: "Can the ESQDCP Board be customised for different industries? ",
      content:"Yes, the ESQDCP Board is customisable and can be adapted to fit the needs of different industries, ensuring relevant metrics are tracked.",
    },
    {
      title: "What is the benefit of tracking environmental performance?  ",
      content:
        "Tracking environmental performance helps businesses reduce waste, improve sustainability, and ensure compliance with environmental regulations. ",
    },
    {
      title: "How often should the ESQDCP Board be updated? ",
      content:
        "The board should be updated daily or in real-time, depending on the operational needs, to ensure accurate tracking of all key metrics.",
    },
  ],
  
};

export default esqdcpData;
