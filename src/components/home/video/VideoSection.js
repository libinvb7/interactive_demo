import StorylaneEmbed from "./StorylaneEmbed";
import VideoPlayer from "./VideoPlayer ";

const VideoSection = ({title,desc}) => {
  return (
    <>
    
      <section className=" px-6   overflow-x-hidden ">
        <div className="container">
          {title?<h2 className="text-primary mb-3">{title}
          </h2>:""}
          {desc?<p className="text-center mb-10 lg:mb-16">{desc}</p>:""}
          

          <div className="glass-bg p-2 lg:p-5   rounded-lg">
          <StorylaneEmbed/>

            {/* <VideoPlayer /> */}
          </div>
        </div>
        
      </section>
      
    </>
  );
};

export default VideoSection;
