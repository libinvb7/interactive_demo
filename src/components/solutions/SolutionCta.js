import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

const SolutionCta = () => {
  return (
    <section className=" px-6 mb-20">
      <div className="group container home-cta flex items-center shadow-2xl rounded-lg relative bg-white overflow-hidden py-10   ">
        <Image  width={150}  height={200}
          src= "/assets/images/solutionCta.png"
          className="absolute bottom-[-20px] right-0 z-1 group-hover:scale-y-150 transition duration-300" alt="product logo"
        />
        <Image  width={150}  height={200}
          src= "/assets/images/solutionCta.png"
          className="absolute top-[-20px] left-0 z-1 rotate-180 group-hover:scale-y-150 transition duration-300" alt="product logo"
        />
        <div className="flex flex-wrap justify-center ">
          <div className="  w-full md:w-3/4 flex justify-center items-start flex-col">
            <h2 className="text-primary  text-3xl lg:text-5xl text-start pt-8 md:pt-0">
              See how our Balanced Scorecard works for you !
            </h2>
          </div>
          <div className="  w-full md:w-1/4 flex justify-center items-center">
            <button className="btn btn-primary  ">
              Get Started   <IoArrowForwardOutline className="inline-block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCta;
