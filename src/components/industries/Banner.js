import Image from "next/image";
import React from "react";

const Banner = ({ title, highlightTitle,desc, imageUrl }) => {
  console.log("Banner props:", { title, highlightTitle, imageUrl });  
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl lg:text-5xl text-center lg:text-left font-bold text-[#145994] leading-[50px]">
              {title || ""}
              <span className="bg-gradient-to-r from-[#1873ac] to-[#2ca9e0] bg-clip-text text-transparent">
                 {highlightTitle || ""}
              </span>
            </h2>
            <p className="text-center lg:text-left text-sm lg:text-xl my-7 max-w-[550px]">
             {desc || ""}
            </p>
            <div className="flex items-center gap-3">
              <button className="btn btn-border">Get Started</button>
              <button className="btn btn-primary">Book a Demo</button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              className="w-full"
              src={imageUrl || ""}
              alt="Banner Image"
              width={1200} 
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
