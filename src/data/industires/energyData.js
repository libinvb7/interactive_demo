import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import ExecuteStrategies from "/public/assets/images/manufacturing/execute-strategies.png";
import strategicplan from "/public/assets/images/manufacturing/strategic-plan.png";
import datainsights from "/public/assets/images/manufacturing/data-insights.png";
import productionandsales from "/public/assets/images/manufacturing/productionandsales.png";
import customer from "/public/assets/images/manufacturing/customer.png";
import digitalreports from "/public/assets/images/manufacturing/digital-reports.png";
import Image from "next/image";

const energyData = {
  bannerData:
        {
            title: 'Optimise Energy Management with Our ',
            HighlightTitle: 'Balanced Scorecard Software  ',
            Image: bannerSlide,
            desc:"Transform your approach with Data Point Energy Balanced Scorecard Software to boost energy efficiency, drive sustainability, and achieve your strategic goals! "
          
           
        
      },
      StickyScrollContentTitle:{
        title: 'How Data Point solves Energy Industry Challenges with the Balanced Scorecard?',
        content: "Data Point's Energy Balanced Scorecard framework helps energy companies align their goals with KPIs, measuring both progress toward their vision and long-term drivers of success."
      },
    StickyScrollContent:[
        {
          title: "Energy Efficiency Monitoring",
          description:
            "Data Point allows energy providers to easily track and optimise energy usage across operations, reducing waste and improving efficiency.",
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
          title: "Sustainability Performance Metrics",
          description:
            "Track and improve your sustainability efforts by measuring key indicators such as carbon emissions and renewable energy integration, helping meet regulatory and corporate social responsibility goals.",
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
          title: "Real-Time Energy KPIs",
          description:
            "Monitor and manage critical energy KPIs in real-time, including consumption, output efficiency, and cost-effectiveness, to make data-driven decisions.",
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
          title: "Regulatory Compliance Tracking",
          description:
            "Ensure full compliance with energy regulations by tracking necessary metrics, generating reports, and maintaining transparency with stakeholders.",
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
      counterTitle:{
        title: "Driving Efficiency and Performance Gains with Data Point in the Energy Sector",
      },
      counterData:[
        {
          title: "Reduction in Energy Wastage",
          number: "30",
        },
        {
          title: "Annual Cost Savings ",
          number: "20",
        },
        {
          title: " Energy Efficiency Improvement  ",
          number: "15",
        },
      ],
      cardSectionTitle :{
            title: "How Data Point Energy Balanced Scorecard can be your gamechanger?"
      },
      cardData:[
        {
          title: "Consistent Decision Making",
          icon: ExecuteStrategies,
          content:
            "Make the right decisions, every single time. Easily analyse perspectives and their key performance indicators to make the correct decisions. Let everyone be well informed about the decisions that are being made.",
        },
        {
          title: "Analyse External and Internal Environment",
          icon: strategicplan,
          content:
            "Digital Balanced Scorecard analyses both external and internal environments that contribute to the growth of an organisation. Various dashboards in BSC give an overview of the processes and related KPIs.",
        },
        {
          title: "One Solution for Better Strategy Management",
          icon: datainsights,
          content:
            "The combined effort of both top and bottom level management results in effective strategic planning and management. Therefore, it is essential to have a solution that binds both and gives a better result.",
        },
        {
          title: "Transform Data into Meaningful Insights",
          icon: productionandsales,
          content:
            "Gather data related to different departments, analyse and get meaningful insights. Data acquisition is not a problem anymore. Balanced Scorecard helps organisations understand the relationship between your measures and goal statuses.",
        },
        {
          title: "Innumerable Reports in a Click! ",
          icon: customer,
          content:
            "Get countless digital reports. Digital Balanced Scorecard collects all information and auto-generates reports related to different processes and KPIs. Generate reports based on real-time information.",
        },
       
      ],
      formContents: {
        title:"Start Your Journey Toward Enhanced Energy Performance",
        desc:"Plan your Strategic Alignment with the Energy Balanced Scorecard"
      },
      accordionItems:[
        {
          title: "What is the Energy Balanced Scorecard?",
          content:
            "The Energy Balanced Scorecard is a strategic management tool designed to help energy companies align their operations with their strategic goals, track key performance indicators (KPIs), and improve overall energy efficiency and sustainability.",
        },
        {
          title: "How can the Energy Balanced Scorecard improve operational efficiency?",
          content:
            "By providing real-time data insights and performance tracking, the Energy Balanced Scorecard helps organisations identify inefficiencies, optimise energy usage, and make informed decisions that lead to enhanced operational performance.",
        },
        {
          title:
            "What types of KPIs can be tracked using the Energy Balanced Scorecard?",
          content:
            "Data Point Energy balanced scorecard tracks a variety of KPIs, including energy consumption, carbon emissions, operational costs, energy efficiency improvements, and regulatory compliance metrics to ensure alignment with sustainability goals.",
        },
        {
          title: "Is the Energy Balanced Scorecard suitable for all types of organizations?",
          content:
            "Is the Energy Balanced Scorecard suitable for all types of organizations?",
        },
      ]

    }


    export default energyData;




  


    