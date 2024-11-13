import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import importantmetrics from "/public/assets/images/icons/important-metrics.png";
import realtimetracking from "/public/assets/images/icons/real-time-tracking.png";
import visualmanagement from "/public/assets/images/icons/visual-management.png";
import Image from "next/image";

const sqdcpData = {
  bannerData: {
    title: " Streamline your Shop Floor with",
    HighlightTitle: "SQCDP Board Visual Management Software ",
    Image: bannerSlide,
    desc: "Maximise productivity and optimise shop floor operations with a digital SQCDP board designed for real-time performance tracking. ",
  },
  cardSectionTitle: {
    title: "What is SQCDP? A Comprehensive Visual Management System",
    desc: "SQCDP is a lean manufacturing tool that stands for Safety, Quality, Delivery, Cost, and People. This visual management system tracks and displays performance in real time, empowering teams to drive continuous improvement and align with strategic goals. ",
  },
  cardData: [
    {
      title: "Lean Manufacturing Visual Management",
      icon: visualmanagement,
      content:
        "Enhance operational transparency and decision-making with a visual approach to manufacturing management.",
    },
    {
      title: "Real-Time Production Tracking",
      icon: realtimetracking,
      content:
        "Get instant insights into your shop floor performance across key metrics like SQDCP.",
    },
    {
      title: "Continuous Improvement Metrics",
      icon: importantmetrics,
      content:
        "Use real-time data to track, analyse, and improve KPIs consistently.",
    },
  ],

  StickyScrollContentTitle: {
    title: "Visualise and Manage Key Performance Metrics: SQDCP",
    content:
      "Track and improve your manufacturing processes with detailed visual insights across Safety, Quality, Delivery, Cost, and People.",
  },
  StickyScrollContent: [
    {
      title: "Safety",
      description:
        "Monitor incidents, hazards, and ensure workplace safety compliance. ",
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
        "Track product quality, defects, and customer satisfaction rates. ",
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
      description: "Keep delivery timelines on track and optimise logistics. ",
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
        " Control and reduce manufacturing costs with real-time cost tracking. ",
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
        "Measure workforce productivity, engagement, and skills development. ",
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
    title: "Boosting Performance with SQCDP Boards: Proven Benefits ",
  },
  counterData: [
    {
      title: "improvement in shop floor productivity ",
      number: "20",
    },
    {
      title: "reduction in operational costs ",
      number: "15",
    },
    {
      title: "faster decision-making through real-time data",
      number: "30",
    },
  ],

  formContents: {
    title: "Get in Touch with Us for your Customised SQDCP Demo!",
    desc: "Discover how our SQCDP Board Visual Management Software can revolutionise your shop floor performance. ",
  },
  accordionItems: [
    {
      title: "How does the SQCDP Board help in lean manufacturing?  ",
      content:
        "SQDCP is a visual management system that aligns with lean manufacturing principles, such as visual control and communication. SQDCP boards enable real-time monitoring of production processes, identifying bottlenecks, inefficiencies, and waste. ",
    },
    {
      title: "How to use the SQCDP Board? ",
      htmlContent: `
        <ul>
          <li style="margin-bottom:10px"><b>Step 1: </b>Identify Key Metrics 
            <br>
            Define critical metrics for Safety, Quality, Delivery, Cost, and People. 
          </li>
          <li  style="margin-bottom:10px"><b>Step 2: </b>Strategic Placement 
            <br>
            Place the board near the team for easy daily access and engagement. 
          </li>
          <li  style="margin-bottom:10px"><b>Step 3: </b>Review 
            <br>
            Conduct daily reviews to assess performance and address issues promptly. 
          </li>
          <li  style="margin-bottom:10px"><b>Step 4: </b>Evaluate Progress 
            <br>
           Regularly evaluate data to track improvements and identify trends. 
          </li>
        <ul>
      `,
    },
    {
      title: "What is the purpose of the SQCDP?",
      content:
        " The purpose of the SQCDP Board is to provide a clear and visual way to monitor and improve key performance metrics in manufacturing. It helps ensure that teams are aligned on goals, track their progress, and continuously improve processes for better results. ",
    },
    {
      title: "Can the SQCDP Board integrate with our existing systems? ",
      content:
        "Yes, it integrates seamlessly with ERP, MES, and IoT systems to provide a unified view of shop floor performance. ",
    },
  ],
  learnMoreTitle: {
    title: "Learn More about SQCDP Boards",
  },
  learnmoreContent: [
    {
      title: "How do you use a SQCDP board? ",
      link: "",
    },
    {
      title: "Driving continuous improvement with SQDCP... ",
      link: "",
    },
    {
      title: "Streamline Operations with SQCDP Board Visual Manage... ",
      link: "",
    },
    {
      title: "SQDCP Template  ",
      link: "",
    },
    {
      title: "What is SQDCPE? ",
      link: "",
    },
    {
      title: "How can SQDCP boards be utilised to promote continu... ",
      link: "",
    },
  ],
};

export default sqdcpData;