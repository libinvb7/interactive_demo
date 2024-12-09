"use client";
import Image from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import {
  FaPhoneAlt,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterCta from "./FooterCta";
import footerMenu from "../../../data/menu/footerMenu";
const productLogs = [
  {
    logo: "/assets/product-logo/one.png",
  },
  {
    logo: "/assets/product-logo/two.png",
  },
  {
    logo: "/assets/product-logo/three.png",
  },
  {
    logo: "/assets/product-logo/four.png",
  },
  {
    logo: "/assets/product-logo/five.png",
  },
  {
    logo: "/assets/product-logo/six.png",
  },
  {
    logo: "/assets/product-logo/seven.png",
  },
  {
    logo: "/assets/product-logo/eight.png",
  },
];
const partnerLogo = [
  {
    logo: "/assets/partner-logo/backingbritain.jpg",
  },
  {
    logo: "/assets/partner-logo/brainboxes.jpg",
  },
  {
    logo: "/assets/partner-logo/madeinthemidlands.jpg",
  },
];

const Footer = () => {
  return (
    <footer className="footer-bg mt-20 ">
      <div className="container">
        <FooterCta />
        <div className="flex flex-wrap justify-center relative top-50 pt-10">
          <div className="  w-full md:w-1/5 flex flex-col  ">
            <div className="py-2">
              <Link href="/">
                <Image
                  src="/assets/images/Datapoint_logo.png"
                  className="bg-white rounded-lg p-2"
                  alt="data point logo"
                  width={150}
                  height={50}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/assets/images/lts-logo.png"
                  className="pt-3"
                  alt="data point logo"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <div className="py-2">
              <h3 className="text-white ">
                Powered by
                <span className="block font-bold">
                  Lean transition Solutions
                </span>
              </h3>
            </div>
            <div className="py-2">
              <h3 className="text-white font-bold ">Contact Us</h3>
              <p className="text-white">
                The Old Vicarage, Pershore Road, Upton Snodsbury, Worcester,
                Worcestershire, WR7 4NR, United Kingdom.
              </p>
            </div>
            <div className="infobox flex   items-center w-[100%] pr-6 py-1">
              <div className="icon bg-white/20 p-2 rounded-lg relative ">
                <MdMail className="text-3xl text-white" />
              </div>
              <div className="iconLink bg-white/20 p-1 px-3 rounded-r-lg w-[100%]">
                <Link href="mailto:info@ltslean.com" className="text-white">
                  info@ltslean.com
                </Link>
              </div>
            </div>
            <div className="infobox flex  items-center w-[100%] pr-6 py-1">
              <div className="icon bg-white/20 p-2 rounded-lg relative ">
                <FaPhoneAlt className="text-3xl text-white p-1" />
              </div>
              <div className="iconLink bg-white/20 p-1 px-3 rounded-r-lg w-[100%]">
                <Link href="tel:+44(0)190523928" className="text-white">
                  +44(0) 1905 23928
                </Link>
              </div>
            </div>
            <div className="infobox flex  items-center w-[100%] pr-6 py-1">
              <div className="icon bg-white/20 p-2 rounded-lg relative ">
                <FaPhoneAlt className="text-3xl text-white p-1" />
              </div>
              <div className="iconLink bg-white/20 p-1 px-3 rounded-r-lg w-[100%]">
                <Link href="tel:+44(0)7515894225" className="text-white">
                  +44(0) 751 589 4225
                </Link>
              </div>
            </div>
            <div className="social-icons flex gap-2 pt-2">
              <div className="icon bg-white/20 p-2 rounded-lg relative ">
                <FaFacebook className="text-3xl text-white p-1" />
              </div>
              <div className="icon bg-white/20 p-2 rounded-lg relative ">
                <FaXTwitter className="text-3xl text-white p-1" />
              </div>
              <div className="icon bg-white/20 p-2 rounded-lg relative ">
                <FaYoutube className="text-3xl text-white p-1" />
              </div>
              <div className="icon bg-white/20 p-2 rounded-lg relative ">
                <FaLinkedin className="text-3xl text-white p-1" />
              </div>
              <div className="icon bg-white/20 p-2 rounded-lg relative ">
                <FaInstagram className="text-3xl text-white p-1" />
              </div>
            </div>
          </div>
          <div className="  w-full md:w-4/5 ">
            <div className="flex md:px-5 flex-wrap ">
              <div className=" w-full md:w-1/5">
                <div className="py-2">
                  <h3 className="text-white font-bold ">Features</h3>
                </div>
                {
                  footerMenu.map((item , k) => (
                   <div key={k}>
                    <h2>{item.title}</h2>
                    {
                      item.submenu.map((item,k)=>(
                        <Link key={k} href={item.link} className="text-white text-sm block py-2">
                          {item.title}
                        </Link>
                      ))
                    }
                    </div>
                  ))
                }
                <Link href="/" className="text-white text-sm block py-2">
                  Interactive Dashboards
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  Keep Track of KPIs
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  Mobility & Global Accessibility
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  Dynamic Report
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  MES & ERP Integration
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  Hoshin Kanri X Matrix
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  SMART KPIS
                </Link>
                <Link href="/" className="text-white block py-2 text-sm">
                  Project Tracker
                </Link>
                <Link href="/" className="text-white block py-2 text-sm">
                  Advanced Features
                </Link>
                <Link href="/" className="text-white block py-2 text-sm">
                  Lean Tools
                </Link>
              </div>
              <div className=" w-full md:w-2/5">
                <div className="py-2">
                  <h3 className="text-white font-bold ">Use Cases</h3>
                </div>
                <div className="flex justify-between w-full flex-wrap ">
                  <div className="w-full md:w-1/2 lg:pr-3">
                    <Link href="/" className="text-white text-sm    block py-2">
                      Strategic Planning
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Hoshin Kanri X Matrix
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Strategic Alignment
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Objective Flow Chart{" "}
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Line of Sight alignment
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Goal Setting/ Strategy Execution
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Continuous Improvement
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      SheQCPLDCPS
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      KPI Management
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      KPI Tracking
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Link href="/" className="text-white text-sm    block py-2">
                      KPI Bowling Dashboards
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      KPI Action plans
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Lean Daily Management
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Project management and Tracking
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Operational Performance Optimisation
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Process Optimisation
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      Digital Huddle Boards
                    </Link>
                    <Link href="/" className="text-white text-sm    block py-2">
                      PDCA
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" w-full md:w-1/5">
                <div className="py-2">
                  <h3 className="text-white font-bold ">Frameworks</h3>
                </div>
                <Link href="/" className="text-white text-sm  block py-2">
                  SQCDP
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  SQCPL
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  SQDCPS
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  ESQDCP
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  SQDCL
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  SQDCPSI
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  EQDCPS
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  EQDCPS
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  SheQCPLDCPS
                </Link>
                <Link href="/" className="text-white text-sm  block py-2">
                  FCIL
                </Link>
              </div>
              <div className=" w-full md:w-1/5">
                <div className="py-2">
                  <h3 className="text-white font-bold ">Industries</h3>
                </div>
                <Link href="/" className="text-white block py-2 text-sm ">
                  Manufacturing
                </Link>
                <Link href="/" className="text-white block py-2 text-sm ">
                  Automotive
                </Link>
                <Link href="/" className="text-white block py-2 text-sm ">
                  Healthcare
                </Link>
                <Link href="/" className="text-white block py-2 text-sm ">
                  Energy
                </Link>
                <Link href="/" className="text-white block py-2 text-sm ">
                  Electronics
                </Link>
                <Link href="/" className="text-white block py-2 text-sm ">
                  FMCG & Retail
                </Link>
                <Link href="/" className="text-white block py-2 text-sm ">
                  Banking
                </Link>
              </div>
            </div>
            <div className="w-full py-3">
                <div className="md:py-2 pt-5 md:px-5">
                  <h3 className="text-white font-bold">
                    Lean Manufacturing Software
                  </h3>
                  <div className="flex gap-2 mt-3 flex-wrap  md:justify-start text-white">
                    <Link className="text-white" href="">Blogs</Link>| 
                    <Link className="text-white" href="">History</Link>| 
                    <Link className="text-white" href="">FAQ</Link>| 
                    <Link className="text-white" href="">Videos</Link>| 
                    <Link className="text-white" href="">Case Studies </Link>| 
                    <Link className="text-white" href="">Resource Hub </Link>
                  </div>
                </div>
              </div>
            <div className="flex flex-wrap pt-3">
              <div className="w-full md:w-3/4 lg:w-2/4">
                <div className="md:py-2 pt-5 md:px-5">
                  <h3 className="text-white font-bold">
                    Lean Manufacturing Software
                  </h3>
                  <div className="flex gap-2 mt-3 flex-wrap  md:justify-start">
                    {productLogs.map((logo, index) => (
                      <Image
                        key={index}
                        src={logo.logo}
                        alt="product logo"
                        width={100}
                        height={200}
                        className="bg-white rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-1/4">
                <div className="md:py-2 pt-5 md:px-5">
                  <h3 className="text-white font-bold ">Our Partners</h3>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {partnerLogo.map((logo, index) => (
                      <Image
                        key={index}
                        src={logo.logo}
                        alt="product logo"
                        width={100}
                        height={100}
                        className="bg-white rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="md:py-2 pt-5 md:px-5">
                  <h3 className="text-white font-bold ">Our Partners</h3>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    <Image
                      src="/assets/partner-logo/iso-logo.png"
                      alt="product logo"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full text-center">
        <div className="flex gap-2 mt-5 flex-wrap  md:justify-center text-white text-center">
                    <Link className="text-white" href="">Privacy Policy </Link>| 
                    <Link className="text-white" href="">Terms of Use</Link>| 
                    <Link className="text-white" href="">Cookie Policy</Link>
                    
                  </div>
        </div>
        
        <div className="flex flex-wrap justify-center mt-5 py-10 border-t-2 border-white/50">
          <p className="text-white">
            ©2024 Data Point by Lean Transition Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
