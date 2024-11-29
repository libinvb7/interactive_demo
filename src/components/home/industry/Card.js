import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { PiArrowUpRightThin } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

import Link from "next/link";

const Card = ({ data }) => {
  const { title, content, icon, link } = data;

  return (
    <div className="group  industry-card rounded-lg max-w-[350px] md:h-[450px] lg:h-[460px] p-5 relative cursor-pointer overflow-clip  bg-white hover:bg-gradient-to-r hover:scale-105 shadow-lg p-5 lg:p-5 w-full text-left rounded-lg mb-3 transition duration-300 ">
      <Image
        src={icon}
        width={400}
        className="py-1 relative z-10  rounded-lg"
        height={80}
        alt="banner"
      />
      <h2 className="text-card absolute top-[170px] px-5 z-10 text-white">
        {title}
      </h2>
      <div className="flex flex-col items-start pt-3">
        <ul>
          {content.map((listitem, index) => (
            <li className="flex gap-3 py-2 items-center font-[600]" key={index}>
              <div className=" bg-[#37C1F1]/20 rounded-full h-fit">
                <GiCheckMark className="text-[#0F79C0] text-xl p-1 font-extrabold" />
              </div>
              {listitem}
            </li>
          ))}
        </ul>
      </div>
      <button className="border border-0 pt-2 w-full">
        <Link href={link}>
          <div className="flex justify-between items-center">
            <div className="bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] bg-clip-text text-transparent font-bold">
              Learn More
            </div>
            <div>
              <div className=" w-fit relative  transition duration-300 mb-3  z-[99]  bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] rounded-full">
                <div className="bg-gradient-to-b from-[#37C1F1]/30 to-[#37BDB0]/30 p-1 px-3 rounded-full w-fit absolute left-[0px] top-0 w-full h-full z-[1] group-hover:translate-x-[-7px]  transition duration-300"></div>
                <div className="bg-gradient-to-b from-[#37BDB0]/15 to-[#0097FE]/15 p-1 px-3 rounded-full w-fit absolute left-[0px] top-0 w-full h-full z-[-1] group-hover:translate-x-[-14px] transition duration-300"></div>

                <FaArrowRight className="text-white font-bold text-2xl p-1" />
              </div>
            </div>
          </div>
        </Link>
      </button>
    </div>
  );
};

export default Card;
