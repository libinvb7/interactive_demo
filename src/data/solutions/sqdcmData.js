import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import importantmetrics from "/public/assets/images/icons/important-metrics.png";
import realtimetracking from "/public/assets/images/icons/real-time-tracking.png";
import visualmanagement from "/public/assets/images/icons/visual-management.png";
import Image from "next/image";

const sqdcmData = {
  bannerData: {
    title: "SQDCM Visual Management Boards ",
    HighlightTitle: "for Continuous Improvement ",
    Image: bannerSlide,
    desc: "As a visual management board, SQDCM aids in monitoring and enhancing manufacturing performance. The board provides a visual representation of performance metrics across five key areas: Safety, Quality, Delivery, Cost, and Morale. A SQDCM board enables teams to identify issues, track progress, and implement corrective actions swiftly. SQDCM boards promote transparency, accountability, and continuous improvement across all aspects of operations. ",
  },
  cardSectionTitle: {
    title: "What is a SQDCM Board? ",
    desc: " A SQDCM board, often used in manufacturing environments, is a visual management tool that displays Key Performance Indicators related to Safety (S), Quality (Q), Delivery (D), Cost (C), and Morale (M). SQDCM board serves as a central communication hub for teams, providing real-time visibility into performance targets and progress. The board typically includes colour-coded indicators to track accident rates, defect counts, on-time delivery, production costs, and employee satisfaction. This visual management board facilitates continuous improvement efforts by fostering transparency, accountability, and collaboration among team members, ultimately driving operational excellence and productivity.  ",
  },
  cardData: [
    {
      title: "Operational Excellence ",
      icon: visualmanagement,
      content:
        "Improve safety, quality, and delivery performance simultaneously to ensure seamless operations and meet customer demands efficiently.  ",
    },
    {
      title: "Cost Efficiency  ",
      icon: realtimetracking,
      content:
        " By monitoring safety and quality metrics, reduce operational costs associated with defects, delays, and workplace incidents. ",
    },
    {
      title: "Employee Engagement ",
      icon: importantmetrics,
      content:
        "Boost morale by creating a safer work environment, reducing stress caused by defects or delays, and fostering a culture of continuous improvement.",
    },
  ],

  StickyScrollContentTitle: {
    title: "Key Metrics in the SQDCM Framework ",
    content:
      "SQDCM framework empowers organisations to measure and improve their key operational metrics. ",
  },
  StickyScrollContent: [
    {
      title: "Safety",
      description:
        " Monitor safety metrics to reduce workplace incidents and create a safer environment.",
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
        "Maintain high product and service quality to enhance customer satisfaction.  ",
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
      description: "Track delivery performance and streamline processes to ensure timely customer fulfilment.  ",
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
        "Control operational expenses and optimise processes for better profitability.  ",
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
      title: "Morale",
      description:
        "Monitor employee engagement and morale to create a supportive and productive workplace culture. ",
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
    title: "Boosting Performance with SQDCM Boards  ",
  },
  counterData: [
    {
      title: " improvement in safety ",
      number: "30",
    },
    {
      title: "  reduction in delivery lead times",
      number: "20",
    },
    {
      title: "increase in employee morale  ",
      number: "25",
    },
  ],

  formContents: {
    title: "Learn How SQDCM Can Elevate your operations ",
    desc: "Fill out the form below to discover how the SQDCM framework can help your organisation improve its core metrics.  ",
  },
  accordionItems: [
    {
      title: "How does the SQDCM Board improve workplace safety?",
      content:
        "The board tracks safety incidents and near-misses, enabling teams to take preventive measures and create a safer work environment.  ",
    },
    {
      title: "Can the SQDCM framework enhance product quality?",
      content:"Yes, by consistently monitoring quality metrics, organisations can reduce defects, rework, and ensure product consistency.  ",
    },
    {
      title: "How does SQDCM impact employee morale?",
      content:
        "Tracking employee morale allows organisations to address concerns proactively, improving engagement, productivity, and job satisfaction.  ",
    },
    {
      title: "What are the key cost-saving benefits of using SQDCM?",
      content:
        "The framework helps businesses identify cost-saving opportunities by reducing waste, optimising processes, and controlling operational expenses. ",
    },
  ],
  
};

export default sqdcmData;
