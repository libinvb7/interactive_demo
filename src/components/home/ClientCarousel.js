"use client";
import Image from "next/image";
import hitachi from "/public/assets/clients/hitachi.png";
import kineco from "/public/assets/clients/kineco.png";
import pci from "/public/assets/clients/pci.png";
import philips from "/public/assets/clients/philips.png";
import schindler from "/public/assets/clients/schindler.png";
import trp from "/public/assets/clients/trp.png";
import {motion} from 'framer-motion'
const clientImages = [
  { id: 1, imageUrl: hitachi,  logoName: "hitachi" },
  { id: 2, imageUrl: kineco,  logoName: "kineco" },
  { id: 3, imageUrl: pci,  logoName: "pci" },
  { id: 4, imageUrl: philips,  logoName: "philips" },
  { id: 5, imageUrl: schindler,  logoName: "schindler" },
  { id: 6, imageUrl: trp,  logoName: "trp" },
];

// Duplicate the images for seamless looping
const loopingClientImages = [...clientImages, ...clientImages];

export const ClientCarousel = () => {


  return (
    <section className="mt-20 px-6 overflow-x-hidden">
      <div className="container">
        <div className="flex justify-center items-center">
          <h2 className="text-primary mb-10 lg:max-w-[600px]">
            Choice of industry leaders and Fortune 500 companies
          </h2>
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-20 flex-none" animate={{ 
            translateX:"-50%"
          }}
          transition={{
            duration:20,
            ease: "linear",
            repeat:Infinity,
            repeatType:"loop"
          }}
          >
          {loopingClientImages.map((client, index) => (
            <Image
              key={`${client.id}-${index}`}
              src={client.imageUrl}
              alt={client.logoName}
              className="logo-ticker-image"
            />
          ))}
           {loopingClientImages.map((client, index) => (
            <Image
              key={`${client.id}-${index}`}
              src={client.imageUrl}
              alt={client.logoName}
              className="logo-ticker-image"
            />
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
