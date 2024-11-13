import { FaCheck } from "react-icons/fa6";
import Image from "next/image";


const RightChoice = () => {
  return (
    <section className="px-6  bg-transparent">
      <div className="container bg-transparent">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary mb-10 lg:max-w-[700px]">
            Why is Data Point Balanced Scorecard the right choice for you?
          </h2>
        </div>
        {/* first section */}
        <div className="flex flex-col flex-col-reverse md:flex-row" >
        
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16">
            <div>
              <div className="flex gap-3 items-center">
                
                <Image  src="/assets/images/icons/customization.png" width={50}  height={200} alt="product logo"/>
                <span className="text-card">Customisation</span>
              </div>
              <ul className="py-5">
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> Customisable dashboards
                  to meet your unique organisational needs.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> Configure dashboards,
                  reports, and visualisations for your specific KPI focus.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> Align metrics and
                  features with your business objectives for optimal performance
                  tracking. 
                </li>
              </ul>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16 order-1 md:order-2">
            <Image src="/assets/images/customization-img.png"  width={700}  height={700} alt="product logo"/>
          </div>
        </div>
        {/* first section */}
        {/* second section */}
        <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16 ">
            <Image src="/assets/images/customization-img.png"  width={700}  height={700} alt="product logo"/>
          </div>
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16">
            <div>
              <div className="flex gap-3 items-center">
                {" "}
                <Image src="/assets/images/icons/integration.png" width={50}   height={50} alt="product logo"/>{" "}
                <span className="text-card">Integrations</span>
              </div>
              <ul className="py-5">
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> Seamlessly integrates with ERP, MES, and other enterprise systems.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> Automatic data flow across departments, centralising all relevant information.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> Breaks down data silos for a holistic view of organisational performance. 
                </li>
              </ul>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
         
        </div>
        {/* second section */}
        {/* third section */}

        <div className="flex flex-col flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16">
            <div>
              <div className="flex gap-3 items-center">
                {" "}
                <Image src="/assets/images/icons/security.png" width={50}  height={200}/>
                <span className="text-card">Security</span>
              </div>
              <ul className="py-5">
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" />Top-tier encryption protocols and secure data storage ensuring data protection. 
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> Role-based access controls to manage who can view and edit sensitive information.
                </li>
                <li className="flex gap-3 py-2 font-[600]">
                  <FaCheck className="text-[#37BDB0]" /> Regular system audits and strict privacy measures to maintain the
                  highest level of security 
                </li>
              </ul>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
          <div className="w-full md:w-1/2  mb-4 flex justify-center items-center mb-16 order-1 md:order-2">
            <Image src="/assets/images/customization-img.png"  width={700}  height={700} alt="customization image"/>
          </div>
        </div>
        {/* third section */}
      </div>
    </section>
  );
};

export default RightChoice;
