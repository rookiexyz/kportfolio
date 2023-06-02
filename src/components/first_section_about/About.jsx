import "./about.css";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            We <span className="text-[#C778DD]">design</span> your feelings, <span className="text-[#C778DD]">code</span> emotions
          </h1>
          <p className="text-[#ABB2BF] my-6">
            We talented people with latest technologies can help you to fulfil your dream.  
          </p>
          <Button url="https://www.linkedin.com/in/aibytech-a217691a9/" />
        </div>
        <div className="mx-auto">
          <div className="">
            <img src={require("./imgs/man.png")} alt="" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              Currently working on <span className="text-white">ChatBot</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-5 py-10">
        <img className="mx-auto" src={require("./imgs/quote.png")} alt="" />
      </div>
    </>
  );
};

export default About;
