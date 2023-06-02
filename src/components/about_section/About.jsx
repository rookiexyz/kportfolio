const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>about-us
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              We as a team
              <br />
              <br />
              As a seasoned expert in machine learning and artificial intelligence (AI),
              We specialize in delivering cutting-edge solutions to complex business challenges. 
              <br />
              Leveraging our extensive technical expertise and deep industry knowledge, 
              We work closely with clients to design, develop, 
              and deploy custom machine learning and AI applications that drive operational efficiency, 
              reduce costs, and enhance business performance. 
              <br />
              Whether you need help with natural language processing, computer vision, 
              predictive analytics, or any other aspect of ML/AI, 
              We have the skills and experience necessary to deliver results that exceed your expectations. 
              So if you're looking for a trusted professional who can help you unlock 
              the full potential of machine learning and AI, 
              let's connect and explore how we can work together.
              </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="#"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto">
            <img className="mx-auto" src={require("./imgs/man.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
