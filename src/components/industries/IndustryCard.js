import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { PiArrowUpRightThin } from "react-icons/pi";
import Link from "next/link";


const IndustryCard = ({data}) => {
  const { title, content,icon } = data; 

  return (
    <div className="group industry-card rounded-lg max-w-[350px] md:h-[420px] p-5 relative flex justify-center items-center flex-col overflow-hidden text-center hover:bg-gradient-to-r hover:scale-105 shadow-lg p-5 lg:p-10  w-full text-left rounded-lg mb-3 transition duration-300">
    <Image src="/assets/images/card-bg.png"  width={150}  height={200} alt="industry-card-bg" className="absolute top-0 left-0 z-1  group-hover:scale-x-150 transition duration-300 ease-in-out"/>
    <Image src={icon} className="py-2 relative z-10 text-center industryCardAfter group-hover:scale-110  transition duration-300 ease-in-out" width={150} height={150}  alt="product logo"/>
    <h2 className="text-card">{title}</h2>
    <div className="flex flex-col items-start pt-3">
   <p className="font-[500]">{content}</p>
    </div>
   
  </div>
  )
}

export default IndustryCard