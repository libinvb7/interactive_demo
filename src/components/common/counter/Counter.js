import CountItem from "./CountItem";


const Counter = ({counterData,counterTitle}) => {
 
  return (
    <section className=" mt-20 px-6  ">
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <h2 className="text-primary mb-10 lg:max-w-[700px]">
           {counterTitle || ""} 
          </h2>
        </div>

        <div className=" p-3 pt-5 lg:p-4  glass-bg">
          <div className="flex flex-col md:flex-row  text-center justify-between">
            {
              counterData?.map((counterNum,index) =>(
                <CountItem key={index} end={counterNum.number} title={counterNum.title}/>
              ))
            }
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
