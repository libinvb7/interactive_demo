import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import importantmetrics from "/public/assets/images/icons/important-metrics.png";
import realtimetracking from "/public/assets/images/icons/real-time-tracking.png";
import visualmanagement from "/public/assets/images/icons/visual-management.png";
import Image from "next/image";

const eqdcpsData = {
  bannerData: {
    title: "Elevate your Strategy with",
    HighlightTitle: "EQDCPS Visual Boards ",
    Image: bannerSlide,
    desc: "Use the EQDCPS framework to drive sustainable improvements in your organisation. ",
  },
  cardSectionTitle: {
    title: "What is EQDCPS? ",
    desc: " EQDCPS stands for Environment, Quality, Delivery, Cost, People, and Site Action, providing a holistic approach to organisational performance. ",
  },
  cardData: [
    {
      title: "Environmental Sustainability ",
      icon: visualmanagement,
      content:
        "Monitor and improve eco-friendly practices to reduce your carbon footprint.  ",
    },
    {
      title: "Quality Assurance   ",
      icon: realtimetracking,
      content:
        "Ensure product and service quality to enhance customer satisfaction. ",
    },
    {
      title: "Operational Efficiency  ",
      icon: importantmetrics,
      content:
        "Streamline delivery processes and reduce costs for better profitability. ",
    },
  ],

  StickyScrollContentTitle: {
    title: "Understanding the EQDCPS Metrics ",
    content:
      "EQDCPS framework encompasses essential metrics for holistic improvement.  ",
  },
  StickyScrollContent: [
    {
      title: "Environment",
      description:
        "Monitor environmental impact and implement sustainable practices. ",
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
        "Maintain high-quality standards to ensure customer loyalty.  ",
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
      description: "Track delivery timelines to optimise supply chain effectiveness.  ",
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
        "Manage costs effectively to improve financial performance.",
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
        " Evaluate workforce engagement and drive productivity. ",
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
        "Implement site-specific initiatives for operational excellence.  ",
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
    title: "Boosting Performance with EQDCPS Boards ",
  },
  counterData: [
    {
      title: "reduction in operational costs",
      number: "20",
    },
    {
      title: " increase in customer satisfaction",
      number: "30",
    },
    {
      title: "improvement in employee engagement ",
      number: "20",
    },
  ],

  formContents: {
    title: " Discover the Benefits of EQDCPS  ",
    desc: "Fill out the form below to learn how EQDCPS can elevate your organisation's performance. ",
  },
  accordionItems: [
    {
      title: "How does EQDCPS enhance sustainability efforts? ",
      content:
        "EQDCPS focuses on environmental metrics, helping organisations reduce their carbon footprint by tracking and improving eco-friendly practices. ",
    },
    {
      title: "What are the key metrics in EQDCPS?  ",
      content:"EQDCPS covers Environment, Quality, Delivery, Cost, People, and Site Action, providing a comprehensive view of your operational performance and helping drive continuous improvements.  ",
    },
    {
      title: "How can EQDCPS improve delivery performance? ",
      content:
        "By monitoring delivery timelines and addressing bottlenecks, EQDCPS helps streamline your supply chain and ensure on-time deliveries, improving overall customer satisfaction. ",
    },
    {
      title: "Can EQDCPS improve employee engagement? ",
      content:
        "Yes, by evaluating workforce productivity and fostering a culture of accountability, EQDCPS helps increase employee engagement and morale, leading to improved performance.  ",
    },
  ],
  
};

export default eqdcpsData;
