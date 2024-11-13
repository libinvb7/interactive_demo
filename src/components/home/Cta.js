import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";


const Cta = () => {
  return (
    <section className=" px-6  relative top-40">
      <div className="group container home-cta flex items-center shadow-2xl rounded-lg relative bg-white overflow-hidden ">
        <Image src="/assets/images/home-cta.png"  width={600} alt="product logo"  height={600} className="absolute bottom-[-20px] right-0 z-1 group-hover:scale-y-150 transition duration-300" />
        <Image src="/assets/images/home-cta.png"  width={600} alt="product logo"  height={600} className="absolute top-[-20px] left-0 z-1 rotate-180 group-hover:scale-y-150 transition duration-300" />
        <div className="flex flex-wrap justify-center ">
          <div className="  w-full md:w-1/2 flex justify-center items-start flex-col">
               <h2 className="text-primary  text-3xl lg:text-5xl text-start pt-8 md:pt-0">See how our
               Balanced Scorecard works for you !</h2>
             
      <button className='btn btn-primary mt-5 '>Get a Demo  <IoArrowForwardOutline className="inline-block"/>
      </button>
      
          </div>
          <div className="  w-full md:w-1/2 flex justify-center">
          <Image width={500}  height={500}  src="/assets/images/customization-img.png" alt="product logo" className=" relative z-10 group-hover:scale-110 transition duration-300"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
