import React from "react";

const About = () => {
  return (
    <main className=" max-w-[1250px]   mx-auto  flex justify-center items-center     ">
      <section className="  flex justify-center md:justify-between items-center w-full  ">
        <div className="flex  flex-col gap-5 md:gap-6 max-w-full w-full md:max-w-[700px]  items-center   md:items-start">
          <header className="flex  justify-center items-center md:items-start flex-col gap-2">
            <span className=" text-3xl  md:text-2xl font-bold text-[#494949]">
              Hello, I'm
            </span>
            <div className=" animate-div flex gap-5 items-center">
              {" "}
              <div>
                <span className="">O</span>
                <span className="">Z</span>
                <span className="">U</span>
                <span className="">M</span>
                <span className="">A</span>
              </div>
              <div>
                {" "}
                <span className="">S</span>
                <span className="">O</span>
                <span className="">L</span>
                <span className="">O</span>
                <span className="">M</span>
                <span className="">O</span>
                <span className="">N</span>
              </div>
            </div>
          </header>
          <article className="w-full flex justify-center items-center lg:justify-start lg:items-start">
            <p
              className=" text-center break-words  break-keep  md:text-left text-lg sm:text-2xl md:text-xl 
          sm:w-4/5 leading-[40px] sm:leading-[50px] md:leading-[34px] lg:w-11/12   "
            >
              {" "}
              <span>I am a </span>
              <b>frontend developer</b>{" "}
              <span> I have a strong background in creating</span>
              <span> visually appealing and</span>{" "}
              <b>user-friendly web experiences</b>.{" "}
              <span>
                {" "}
                I am motivated to find a role where I can challenge myself{" "}
              </span>
              <b> and provide value to website users</b>.{" "}
              <span>
                {" "}
                I am excited to bring my knowledge and experience to a team and
                contribute to a company's success.
              </span>
            </p>
          </article>
          <div className="relative ">
            <button className="text-[15px]  font-ligt capitalize flex nav-btn static  z-10 bg-black text-[rgba(243,243,242)]   h-11 px-5 w-40 items-center justify-center py-1">
              View Resume
            </button>
            <div className="bg-[rgba(243,243,242)] border-2 -z-20 absolute top-2 left-2  border-black text-[rgba(243,243,242)]   h-11  w-40"></div>
          </div>
        </div>
        <div className="relative ">
          <div className="h-[400px] w-[400px] z-40 relative bg-bgBlack hidden md:flex justify-center items-center text-7xl text-[rgba(243,243,242)] font-extrabold gap-3 ">
            <span>O</span>
            <span>Z</span>
          </div>
          <div className="bg-[rgba(243,243,242)] border-2 absolute top-4 left-4  hidden md:flex  border-black text-[rgba(243,243,242)]  h-[400px] w-[400px]"></div>
        </div>
      </section>
    </main>
  );
};

export default About;
