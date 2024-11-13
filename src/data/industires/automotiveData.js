import bannerSlide from "/public/assets/images/industries/manufacturing/manufacturing-banner.png";
import customizationImage from "/public/assets/images/customization-img.png";
import ExecuteStrategies from "/public/assets/images/manufacturing/execute-strategies.png";
import strategicplan from "/public/assets/images/manufacturing/strategic-plan.png";
import datainsights from "/public/assets/images/manufacturing/data-insights.png";
import productionandsales from "/public/assets/images/manufacturing/productionandsales.png";
import customer from "/public/assets/images/manufacturing/customer.png";
import digitalreports from "/public/assets/images/manufacturing/digital-reports.png";
import Image from "next/image";

const automotiveData = {
  bannerData:
        {
            title: 'Automotive Balanced Scorecard Software',
            HighlightTitle: ' Elevate your Performance and Strategy   ',
            Image: bannerSlide,
            desc:"Streamline every stage of the automotive lifecycle—from design and development to manufacturing, repair, and modification—with our comprehensive Automotive Balanced Scorecard Software. Track, manage, and optimise KPIs to ensure efficiency and strategic alignment across your entire operation.  "
          
           
        
      },
      StickyScrollContentTitle:{
        title: 'Driving Excellence: How Data Point can transform your Automotive Challenges into Opportunities? ',
        content: "Implementing the Balanced Scorecard framework in an automotive company helps define objectives and establishes their connection to the organisation's strategic priorities. "
      },
    StickyScrollContent:[
        {
          title: "Automotive KPI Dashboards ",
          description:
            "Automotive KPI tracker dashboards consolidate critical data into one visual platform, providing real-time insights into production, quality control, and repair timelines. This allows teams to focus on what matters most and make informed decisions faster. ",
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
          title: "Strategy Alignment ",
          description:
            "Bridge the misalignment between the high-level strategic goals and day-to-day tasks. Balanced Scorecard software helps ensure that every team understands how their work contributes to broader objectives, increasing accountability and focus across the organisation. ",
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
          title: "Production Efficiency Monitoring  ",
          description:
            "Don't comprise your high production qualities for output optimisations.  Automotive KPI Scorecards offers a detailed view of key metrics like production cycle times or quality defects, enabling teams to quickly identify bottlenecks and take corrective actions. ",
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
          title: "Automotive Operational Efficiency Tools  ",
          description:
            "Balanced Scorecard Automotive Operational Efficiency Tools are designed to streamline processes across design, development, and repair. By identifying inefficiencies and areas for improvement, these tools help businesses reduce waste, optimise workflows, and drive continuous improvement.",
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
        title: "Driving Efficiency and Performance Gains with Data Point ",
      },
      counterData:[
        {
          title: "Increase in Production Efficiency ",
          number: "15",
        },
        {
          title: "Reduction in Lead Time ",
          number: "30",
        },
        {
          title: " Enhanced Supplier Performance  ",
          number: "25",
        },
      ],
      cardSectionTitle :{
            title: "Why the Balanced Scorecard is essential for your Automotive success? "
      },
      cardData:[
        {
          title: "Consistent Decision Making ",
          icon: ExecuteStrategies,
          content:
            "Make the right decisions, every single time. Easily analyse perspectives and their key performance indicators to make the correct decisions. Let everyone be well informed about the decisions that are being made.",
        },
        {
          title: "Transparent Communication ",
          icon: strategicplan,
          content:
            "Communicate easily within and across departments. Make sure the employees know what is happening. Help them align their actions to organisational goals. Let the communication be precise and clear.  ",
        },
        {
          title: "Increase Efficiency ",
          icon: datainsights,
          content:
            "Maximise efficiency of all processes within the organisation. Align organisational goals from top to bottom level. Monitor how well teams are performing, to achieve the set organisational goals. ",
        },
        {
          title: "Measure Performance ",
          icon: productionandsales,
          content:
            "Measure and analyse business performance using financial and non-financial data. By measuring performance, the organisation will realise where they are now and what needs to be done to achieve the long or short term goals. ",
        },
        {
          title: " Dynamic Reports  ",
          icon: customer,
          content:
            "Why wait for manual reports, when you have automated reports at hand. Just a click to download your reports. Compare and contrast multiple reports and implement actions for further improvement. ",
        },
       
      ],
      formContents: {
        title:"Kickstart your journey to Optimised Automotive Performance  ",
        desc:"Plan your Strategic alignment with Digital Balanced Scorecard "
      },
      accordionItems:[
        {
          title: "How does a Balanced Scorecard improve operational efficiency in the automotive industry? ",
          content:
            "Data Point balanced scorecard software aligns daily operations with strategic goals, tracks KPIs, and identifies inefficiencies, leading to streamlined processes and improved productivity. ",
        },
        {
          title: "What are the key KPIs for automotive manufacturing in the Balanced Scorecard? ",
          content:
            "Key Automotive KPIs include production efficiency, OEE, lead time, defect rates, and supplier performance, ensuring quality and operational effectiveness. ",
        },
        {
          title:
            "How does Data Point's Balanced Scorecard support Lean Manufacturing in automotive companies? ",
          content:
            "It integrates Lean principles like SQDCP to identify waste and inefficiencies, driving continuous improvement and operational excellence. ",
        },
        {
          title: "What are the benefits of using a Digital Balanced Scorecard for automotive industry KPIs? ",
          content:
            "It enables real-time KPI tracking, dynamic reporting, and data-driven decisions, enhancing efficiency and cross-departmental collaboration.",
        },
      ]

    }


    export default automotiveData;




  


    