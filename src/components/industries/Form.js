import Image from "next/image";
import formImg from "/public/assets/images/form-img.png";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import Message from "/public/assets/images/Message.png";
import Profile from "/public/assets/images/Profile.png";
import chat from "/public/assets/images/ChatFormnew.png";

const FormIndustry = ({title, desc}) => {
  return (
    <section className="mt-20">
      <div className="container ">
        <div className="glass-bg p-5 lg:p-10 ">
          <div className="flex gap-10 h-full flex-col  md:flex-row">
            <div className=" p-2 lg:max-w-[500px] bg-gradient-to-r from-[#115991] to-[#1873AC] border-0 p-5 rounded-lg flex justify-center items-center">
              <div className="p-10 p-5">
                <h2 className="text-primary text-white text-left py-5 text-4xl">
                  {title || ""}
                </h2>
                <p className="text-xl text-white pb-4">
                 {desc || ""}</p>
                <Image src={formImg} />
              </div>
            </div>
            <div className="w-full lg:p-14">
              <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="text-3xl text-[#115991] font-[600] py-10 flex gap-3 items-center">
                  <span className=" border border-[#115991] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center">
                    <BsFillRocketTakeoffFill />
                  </span>
                  Get Started
                </h2>

                <form className=" mx-auto">
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Business email<span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Image src={Message} width={20} />
                      </div>
                      <input
                        type="text"
                        id="email-address-icon"
                        className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
             focus-visible:border-[#115991] block w-full ps-10 p-2.5"
                        placeholder="name@flowbite.com"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Full name<span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Image src={Profile} width={15} />
                      </div>
                      <input
                        type="text"
                        id="email-address-icon"
                        className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
             focus-visible:border-[#115991] block w-full ps-10 p-2.5"
                        placeholder="name@flowbite.com"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number<span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Image src={Message} width={20} />
                      </div>
                      <input
                        type="text"
                        id="email-address-icon"
                        className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
             focus-visible:border-[#115991] block w-full ps-10 p-2.5"
                        placeholder="name@flowbite.com"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Select your scorecard framework
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Image src={Message} width={20} />
                      </div>
                      <input
                        type="text"
                        id="email-address-icon"
                        className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
             focus-visible:border-[#115991] block w-full ps-10 p-2.5"
                        placeholder="name@flowbite.com"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 flex items-start top-[10px] ps-3.5 pointer-events-none">
                        <Image src={chat} width={20} />
                      </div>
                      <textarea
  id="email-address-icon"
  className="border border-[#65AFE2] text-gray-900 text-sm rounded-lg 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#115991] 
             focus-visible:border-[#115991] block w-full ps-10 p-2.5"
  placeholder="name@flowbite.com"
/>

                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Start Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormIndustry;
