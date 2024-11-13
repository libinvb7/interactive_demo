import Card from "./Card"

const cardData=[
  {
      "title": "Manufacturing Balanced Scorecard",
      "icon":"/assets/images/icons/manufactuing-icon.png",
      "content": [
          "Improve Efficiency in Production",
          "Strategic Goal Alignment",
          "Boost Profitability",
          "Enhance Supply Chain Performance"
      ],
      "link":"#",
  },
  {
      "title": "Service based industries Balanced Scorecard",
      "icon":"/assets/images/icons/service-based.png",
      "content": [
          "Ensure customer satisfaction",
          "Resource optimisation",
          "Execute strategic plans",
          "Drive business growth"
      ],
      "link":"#",
  },
  {
      "title": "Automotive Balanced Scorecard",
      "icon":"/assets/images/icons/automotive.png",
      "content": [
          "Optimise supply chains",
          "Boost innovation",
          "Customer satisfaction",
          "Meet regulatory compliance"
      ],
      "link":"#",
  },
  {
      "title": "Healthcare Balanced Scorecard",
      "icon":"/assets/images/icons/healthCareicon.png",
      "content": [
          "Enhance patient care",
          "Optimise resource utilisation",
          "Compliance and safety",
          "Strategic health outcomes"
      ],
      "link":"#",
  },
  {
      "title": "Energy sector Balanced Scorecard",
      "icon": "/assets/images/icons/energy.png",
      "content": [
          "Optimise energy production",
          "Sustainability goals",
          "Regulatory compliance",
          "Customer satisfaction"
      ],
      "link":"#",
  },
  {
      "title": "Electronics industry Balanced Scorecard",
      "icon":"/assets/images/icons/electronic.png",
      "content": [
          "Accelerate innovation",
          "Optimise production",
          "Customer-centric strategy",
          "Sustainability and compliance"
      ],
      "link":"#",
  },
]


const IndustrySection = () => {
  return (
    <section className="px-6 industry-section pt-52 "  >
      
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary text-[#fff] mb-10 lg:max-w-[700px]">
          See how Data Point unifies strategic
          insights across your organisation
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center">
          {
            cardData.map((data,index)=>(
<div className="w-full lg:w-1/3 md:w-1/2 px-2 mb-4 flex justify-center items-center mb-16" key={index}>
    <Card data={data}/>
  </div>

            ))
          }
  
</div>

          
       
      </div>
    </section>
  )
}

export default IndustrySection