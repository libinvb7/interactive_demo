import Image from "next/image";

const sqdclData = {
  bannerData: {
    title: " SQDCL Board: Driving Operational",
    HighlightTitle: "Excellence with Visual Management  ",
    Image: "/assets/images/industries/manufacturing/manufacturing-banner.png",
    desc: "Manage and optimise your Safety, Quality, Delivery, Cost, and Lean metrics with the powerful SQDCL Board. ",
  },
  cardSectionTitle: {
    title: " What is SQDCL? Understanding Key Metrics ",
    desc: "SQDCL is a comprehensive framework that tracks key operational areas—Safety, Quality, Delivery, Cost, and Lean—providing valuable insights that drive performance improvements across all business functions. ",
  },
  cardData: [
    {
      title: "Integrated Performance Dashboard ",
      icon: "/assets/images/icons/visual-management.png",
      content:
        "The Integrated Performance Dashboard consolidates Safety, Quality, Delivery, Cost, and Lean metrics for streamlined monitoring. ",
    },
    {
      title: "Operational Efficiency Tracking ",
      icon: "/assets/images/icons/real-time-tracking.png",
      content:
        "Real-time tracking of operational metrics enables quick identification of issues and enhances overall productivity. ",
    },
    {
      title: "Data-Driven Lean Insights  ",
      icon: "/assets/images/icons/important-metrics.png",
      content:
        "Actionable insights empower teams to implement Lean practices, driving continuous improvement and aligning efforts with organisational objectives.  ",
    },
  ],

  StickyScrollContentTitle: {
    title: "Comprehensive Tracking Across Safety, Quality, Delivery, Cost, and Lean  ",
    content:
      "Optimise operations by monitoring and managing key performance areas through the SQDCL Board.  ",
  },
  StickyScrollContent: [
    {
      title: "Safety",
      description:
        "Track incidents and promote a safe workplace environment. ",
      content: (
        <Image   height={200}
          src="/   height={200}/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Quality",
      description:
        "Ensure quality consistency to boost product and service reliability.",
      content: (
        <Image   height={200}
          src="/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Delivery",
      description: "Track and improve delivery performance to meet deadlines efficiently.",
      content: (
        <Image   height={200}
          src="/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Cost",
      description:
        "Control operational costs and reduce waste for improved profitability. ",
      content: (
        <Image   height={200}
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
        "Provide teams with real-time data to implement Lean practices and drive continuous improvement. ",
      content: (
        <Image
          src="/assets/images/customization-img.png"
          width={1000}
          className="w-full"
          alt="linear board demo"
        />
      ),
    },
   
  ],
  counterTitle: {
    title: "Boosting Performance with SQDCL Boards ",
  },
  counterData: [
    {
      title: " improvement in leadership decision-making and accountability",
      number: "22",
    },
    {
      title: "reduction in operational costs with real-time cost tracking ",
      number: "18",
    },
    {
      title: " increase in on-time delivery performance and reduced lead times ",
      number: "25",
    },
  ],

  formContents: {
    title: " Get Started with SQDCL Today",
    desc: "Sign up to explore how the SQDCL Board can enhance your operational performance through real-time tracking of key metrics.  ",
  },
  accordionItems: [
    {
      title: "Is the SQDCL Board suitable for all industries? ",
      content:
        "Yes, the SQDCL Board is versatile and can be adapted to various industries looking to enhance operational performance. ",
    },
    {
      title: "How does the SQDCL Board facilitate continuous improvement?  ",
      content:"The board allows teams to identify trends, track progress, and implement Lean practices, driving a culture of continuous improvement. ",
    },
    {
      title: "Can the SQDCL Board integrate with other software systems? ",
      content:
        "Yes, the SQDCL Board can integrate with various software systems to ensure seamless data flow and enhanced functionality.",
    },
    {
      title: "What is the best way to implement the SQDCL Board in my organisation? ",
      content:
        "Begin by training your team on the metrics and functionalities, then gradually introduce the board to track and visualise Key Performance Indicators. ",
    },
  ],
  
};

export default sqdclData;
