import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const BlogCard = () => {
  return (
   <Link href="/" >
    <div className="industry-card rounded-lg max-w-[350px]   p-3 relative mb-3  group">
        <Image src="/assets/blog/manufacturig-kpi-dahboard.png" alt="blogimageone"  width={400}  height={200}/>
        <div className="btn-primary py-1 px-3 rounded-lg w-fit mt-2 text-white text-sm  ">
            Blog
        </div>
      <h2 className="text-card pt-3">Manufacturing KPI Dashboards: Best Practices for Visualising Performance</h2>
      <button className="flex justify-between items-center pt-5 w-full ">
        <div>
            <span className="bg-gradient-to-r from-[#37C1F1] to-[#37BDB0] bg-clip-text text-transparent font-bold">Read More</span>
        </div>
        <div><IoIosArrowRoundForward className="text-4xl text-[#37BDB0] font-bold group-hover:translate-x-[-10px] transition-all "/>
        </div>
      </button>
     
    </div>
    </Link>
  )
}

export default BlogCard