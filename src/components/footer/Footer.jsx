const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <h1>AI<span className="text-[#C778DD]">x</span>TECH</h1>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">osamakhannnnn@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Team of Artificial Intelligence Developers and Designers.</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/aibytech-a217691a9/" target="_blank">
                <img src={require("./imgs/linkedin.png")} alt="" />
              </a>
              <a href="https://twitter.com/AIBYTECH" target="_blank">
                <img src={require("./imgs/twitter.png")} alt="" />
              </a>
              <a href="https://github.com/AIBYTECH" target="_blank">
                <img src={require("./imgs/Github.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2023. Made by Isharab
        </div>
      </div>
    </>
  );
};

export default Footer;
