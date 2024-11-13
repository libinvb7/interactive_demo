import Image from "next/image";

const sqcplData = {
  bannerData: {
    title: " Enhance your Strategy with ",
    HighlightTitle: "SQCPL Board Scorecard System",
    Image:  "/assets/images/industries/manufacturing/manufacturing-banner.png",
    desc: "Achieve operational excellence with SQCPL board visual management board, designed for effective strategy management and performance tracking. ",
  },
  cardSectionTitle: {
    title: "What is SQCPL? A Holistic Approach to Strategy Management ",
    desc: "SQCPL Board is a strategic management tool that integrates Safety, Quality, Customer, Production, and Lean performance metrics into a single framework, empowering organisations to monitor and enhance their operational effectiveness. ",
  },
  cardData: [
    {
      title: "Performance Measurement System",
      icon: "/assets/images/icons/visual-management.png",
      content:
        "Streamline your metrics into a cohesive framework to monitor progress and drive improvements. ",
    },
    {
      title: "Continuous Improvement Framework",
      icon: "/assets/images/icons/real-time-tracking.png",
      content:
        "Foster a culture of ongoing enhancement by regularly reviewing and refining performance metrics. ",
    },
    {
      title: "Digital Scorecard Solutions",
      icon: "/assets/images/icons/important-metrics.png",
      content:
        "Leverage technology to automate tracking and reporting of performance indicators in real-time. ",
    },
  ],

  StickyScrollContentTitle: {
    title:
      "Visualise Key Performance Metrics with the SQCPL Board ",
    content:
      " Monitor and improve your organisation's performance with a comprehensive view of Safety, Quality, Cost, People, and Lean metrics. ",
  },
  StickyScrollContent: [
    {
      title: "Safety",
      description:
        "Balanced Scorecard tracks accidents, and records the serious near-miss that occurred onsite. BSC analyses health and safety records and gives you a clear idea about the safety measures and to identify areas that require more attention.",
      content: (
        <Image  height={200}
          src="/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Quality",
      description:
        "Quality metrics in balanced scorecard help organisations to measure the defect level of incoming and in house products as perceived and measured by the customer. Using quality metrics, organisations can easily manage and track quality related processes.",
      content: (
        <Image  height={200}
          src="/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Customer",
      description:
        "Customer Metrics in Balanced Scorecard allows organisations to analyse where they are on their delivery process towards customers and identify the ways to improve the process. Drawbacks can be evaluated and solved.",
      content: (
        <Image  height={200}
          src="/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Production",
      description:
        "Production metrics display KPIs based on daily production data. KPIs will be listed and analysed based on target vs actual. Production metrics can help you find the sticking points or weak spots in your production line and processes.",
      content: (
        <Image  height={200}
          src="/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Lean",
      description:
        "Lean Metrics will help the organisation analyse where you are in the lean journey. Lean metrics can be used to control and monitor the manufacturing processes and can identify the opportunities for improvements and changes.",
      content: (
        <Image  height={200}
          src="/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
  ],
  counterTitle: {
    title: "Enhancing Performance with SQCPL Boards ",
  },
  counterData: [
    {
      title: " increase in operational efficiency",
      number: "25",
    },
    {
      title: "reduction in cycle times",
      number: "20",
    },
    {
      title: "improvement in employee engagement and satisfaction",
      number: "30",
    },
  ],

  formContents: {
    title: "Schedule your Personalised Demo Today",
    desc: "Discover how our SQCPL Board Visual Management Software can revolutionise your shop floor performance.",
  },
  accordionItems: [
    {
        title: "What is an SQCPL Board? ",
        content:
          "The SQCPL Board is a performance management tool that integrates Safety, Quality, Cost, People, and Lean metrics to improve operational efficiency. ",
      },
      {
        title: "How does the SQCPL Board enhance strategy management? ",
        content:
          "It provides real-time visibility into performance metrics, enabling organisations to align their strategic goals and make informed decisions. ",
      },
      {
        title:
          "How to use the SQCPL Board?",
        content:
          "Identify key metrics, strategically place the board, review data regularly, and evaluate progress over time. ",
      },
      {
        title: "What are the advantages of using an SQCPL Board? ",
        content:
          "The SQCPL Board helps in tracking performance metrics, fostering continuous improvement, and enhancing team collaboration. ",
      },
  ],

};

export default sqcplData;
