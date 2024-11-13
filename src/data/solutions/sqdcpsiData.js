import Image from "next/image";

const sqdcpsiData = {
  bannerData: {
    title: "Enhance Performance with ",
    HighlightTitle: "SQDCPSI Visual Management Boards ",
    Image: "/assets/images/industries/manufacturing/manufacturing-banner.png",
    desc: "Streamline operations and improve accountability across Safety, Quality, Delivery, Cost, People, Site Action, and Inventory metrics. ",
  },
  cardSectionTitle: {
    title: "What is SQDCPSI?",
    desc: " SQDCPSI stands for Safety, Quality, Delivery, Cost, People, Site Action, and Inventory. This comprehensive framework helps organisations monitor and enhance operational performance.  ",
  },
  cardData: [
    {
      title: "Operational Excellence ",
      icon: "/assets/images/icons/visual-management.png",
      content:
        "Monitor and improve safety, quality, and delivery to enhance overall performance.  ",
    },
    {
      title: "Cost Efficiency  ",
      icon: "/assets/images/icons/real-time-tracking.png",
      content:
        "Control costs and reduce waste for improved profitability across operations. ",
    },
    {
      title: "Workforce Engagement ",
      icon: "/assets/images/icons/important-metrics.png",
      content:
        " Assess employee productivity and morale to foster a motivated workforce.  ",
    },
  ],

  StickyScrollContentTitle: {
    title: "Understanding the SQDCPSI Metrics ",
    content:
      "Discover how each metric contributes to operational excellence.  ",
  },
  StickyScrollContent: [
    {
      title: "Safety",
      description:
        "Track and improve workplace safety measures",
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
      title: "Quality",
      description:
        "Monitor and enhance product quality consistently. ",
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
      description: "Improve delivery times to meet customer expectations. ",
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
        "Streamline costs to enhance overall profitability. ",
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
      title: "People",
      description:
        "Foster a motivated and productive workforce. ",
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
      title: "Site Action",
      description:
        "Facilitate rapid responses to site-level issues. ",
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
      title: "Inventory",
      description:
        "Optimise inventory management to reduce waste.",
      content: (
        <Image   height={200}
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
      title: " increase in operational efficiency",
      number: "25",
    },
    {
      title: " reduction in safety incidents",
      number: "30",
    },
    {
      title: "improvement in on-time delivery rates ",
      number: "20",
    },
  ],

  formContents: {
    title: " Get Started with SQDCPSI ",
    desc: "Fill out the form below to explore how implementing SQDCPSI can enhance your operational performance.",
  },
  accordionItems: [
    {
      title: "How does SQDCPSI improve operational performance? ",
      content:
        "By providing real-time visibility into key metrics, SQDCPSI enables teams to identify issues quickly and make informed decisions. ",
    },
    {
      title: "Can SQDCPSI be customised for different industries? ",
      content:"Yes, the SQDCPSI Board can be tailored to meet the specific needs of various industries.  ",
    },
    {
      title: "How often should I update the SQDCPSI Board?",
      content:
        "It’s advisable to update the board regularly, ideally on a daily or weekly basis, to ensure data accuracy. ",
    },
    {
      title: "What are the benefits of using the SQDCPSI Board?",
      content:
        "Benefits include improved accountability, faster decision-making, and enhanced operational efficiency.  ",
    },
  ],
  
};

export default sqdcpsiData;
