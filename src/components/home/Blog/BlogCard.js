import Image from "next/image";
import blogImg from "/public/assets/blog/manufacturig-kpi-dahboard.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const BlogCard = () => {
  return (
    <div className="industry-card rounded-lg max-w-[350px]   p-3 relative mb-3">
        <Image src={blogImg} alt="blogimageone"/>
        <div className="btn-primary py-1 px-3 rounded-lg w-fit mt-2 text-white text-sm  ">
            Blog
        </div>
      <h2 className="text-card pt-3">Manufacturing KPI Dashboards: Best Practices for Visualising Performance</h2>
      <div className="flex justify-between items-center pt-5">
        <div>
            <button className="text-[#115991] font-[600]">Read More</button>
        </div>
        <div><IoIosArrowRoundForward className="text-2xl text-[#115991]"/>
        </div>
      </div>
     
    </div>
  )
}

export default BlogCard