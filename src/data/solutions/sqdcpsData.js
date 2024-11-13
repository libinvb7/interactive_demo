import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import importantmetrics from "/public/assets/images/icons/important-metrics.png";
import realtimetracking from "/public/assets/images/icons/real-time-tracking.png";
import visualmanagement from "/public/assets/images/icons/visual-management.png";
import Image from "next/image";

const sqdcpsData = {
  bannerData: {
    title: "Optimise Performance with",
    HighlightTitle: "SQDCPS Visual Planning Board Software ",
    Image: bannerSlide,
    desc: "Drive efficiency with our SQDCPS board, designed to provide a comprehensive view of Safety, Quality, Delivery, Cost, People, and Sustainability metrics.",
  },
  cardSectionTitle: {
    title: "What is SQDCPS? A Complete Framework for Operational Excellence ",
    desc: "SQDCPS Visual Planning Board is a performance management tool that integrates Safety, Quality, Delivery, Cost, People, and Sustainability metrics into a unified visual framework, helping organisations to monitor, evaluate, and improve key operational areas. ",
  },
  cardData: [
    {
      title: "Performance Tracking System",
      icon: visualmanagement,
      content:
        " Monitor real-time performance data for quick, informed decision-making.",
    },
    {
      title: "Digital Visual Boards",
      icon: realtimetracking,
      content:
        "Enhance transparency and engagement with a digital approach to visual management. ",
    },
    {
      title: "Continuous Improvement Software",
      icon: importantmetrics,
      content:
        "Empower teams to continuously assess and improve operational performance.",
    },
  ],

  StickyScrollContentTitle: {
    title: "Track Your KPIs effectively with SQDCPS Metrics",
    content:
      "Monitor Safety, Quality, Delivery, Cost, People, and Site Action metrics in one centralised visual board. ",
  },
  StickyScrollContent: [
    {
      title: "Safety",
      description:
        "Track incidents and ensure a safe working environment. ",
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
      description:
        "Monitor product quality and enhance customer satisfaction. ",
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
      description: "Measure on-time delivery performance and address any delays. ",
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
        " Control and reduce operational costs with real-time tracking. ",
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
      title: "Site Action",
      description:
        "Monitor and manage site-related activities to ensure operational efficiency and compliance. ",
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
    title: "Achieving Results with SQDCPS Boards: Proven Impact in Numbers ",
  },
  counterData: [
    {
      title: "increase in production efficiency ",
      number: "20",
    },
    {
      title: "reduction in operational costs ",
      number: "15",
    },
    {
      title: "improvement in sustainability performance",
      number: "30",
    },
  ],

  formContents: {
    title: "Request your Personalised SQDCPS Demo",
    desc: "Explore how the SQDCPS Visual Planning Board can transform your organisation. ",
  },
  accordionItems: [
    {
      title: "How can SQDCPS improve my business operations?",
      content:
        "SQDCPS provides real-time visibility into essential operational metrics, enabling faster decision-making and continuous improvement. ",
    },
    {
      title: "How to use the SQDCPS Board?",
      htmlContent: `
        <ul>
          <li style="margin-bottom:10px"><b>Step 1: </b>Identify Key Metrics  
          </li>
          <li  style="margin-bottom:10px"><b>Step 2: </b> Place the board in a visible area
          </li>
          <li  style="margin-bottom:10px"><b>Step 3: </b>Review data regularly 
          </li>
          <li  style="margin-bottom:10px"><b>Step 4: </b> Evaluate performance over time. 
          </li>
        <ul>
      `,
    },
    {
      title: "Is the SQDCPS Board customisable? ",
      content:
        "Yes, the board can be tailored to fit your organisation’s specific metrics and performance goals. ",
    },
    {
      title: "Is the SQDCPS board suitable for small businesses? ",
      content:
        "Yes, the SQDCPS board is scalable and can be used by both small and large businesses to track essential performance metrics and drive continuous improvement. ",
    },
  ],
  
};

export default sqdcpsData;
