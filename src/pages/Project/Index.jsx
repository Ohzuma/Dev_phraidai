import React from "react";
import porfolio from "../../asset/Screenshot (2).png";
import { FaGithub, FaEye } from "react-icons/fa";
import { Button } from "../../components/Button";
const Project = () => {
  return (
    <main className="max-w-[1250px] py-10  my-[5rem]   md:mt-0 flex justify-center items-center   mx-auto  ">
      <section className=" h-full  flex flex-col md:flex-row gap-10 md:gap-0 w-full justify-between mx-auto  md:justify-between items-center  ">
        <div className="flex  flex-col gap-5 md:gap-6 max-w-full w-full md:max-w-[700px]  items-center   md:items-start">
          <header className="flex flex-col  justify-center items-center md:items-start gap-5">
            <div className=" animate-div contact-1 flex gap-3 items-center">
              <div>
                {" "}
                <span className="">C</span>
                <span className="lowercase">R</span>
                <span className="lowercase">A</span>
                <span className="lowercase">F</span>
                <span className="lowercase">T</span>
                <span className="lowercase">I</span>
                <span className="lowercase">N</span>
                <span className="lowercase">G</span>
              </div>
              <div>
                <span className="">I</span>
                <span className="">n</span>
                <span className="">n</span>
                <span className="">o</span>
                <span className="">v</span>
                <span className="">a</span>
                <span className="">t</span>
                <span className="">i</span>
                <span className="">o</span>
                <span className="">n:</span>
              </div>
            </div>

            <div className=" animate-div contact-2 flex flex-row md:flex-col gap-3 items-start">
              {" "}
              <div className="flex gap-3">
                <div>
                  {" "}
                  <span className="">J</span>
                  <span className="">o</span>
                  <span className="">u</span>
                  <span className="">r</span>
                  <span className="">n</span>
                  <span className="">e</span>
                  <span className="">y</span>
                </div>
                <div>
                  {" "}
                  <span className="">t</span>
                  <span className="">h</span>
                  <span className="">r</span>
                  <span className="">o</span>
                  <span className="">u</span>
                  <span className="">g</span>
                  <span className="">h</span>
                </div>
              </div>
              <div className="flex  gap-3">
                {" "}
                <div>
                  <span className="">M</span>
                  <span className="">y</span>
                </div>
                <div>
                  <span className="">p</span>
                  <span className="">r</span>
                  <span className="">o</span>
                  <span className="">j</span>
                  <span className="">e</span>
                  <span className="">c</span>
                  <span className="">t</span>
                  <span className="">s</span>
                </div>
              </div>
            </div>
          </header>
          <article className="w-full flex justify-center items-center lg:justify-start lg:items-start">
            <p
              className=" text-center break-words  break-keep  md:text-left text-lg sm:text-2xl md:text-lg
          sm:w-4/5 leading-[40px] sm:leading-[50px] lg:leading-[50px] lg:w-11/12   "
            >
              <span>A testament to my journey of</span> <b>exploration</b>,{" "}
              <b>learning</b>,<span> and</span> <b>growth</b>{" "}
              <span>in the realms of</span> <b>Web Developement.</b>{" "}
              <span>
                Each project represents a unique endeavor, encapsulating not
                just my skills, but also my passion for
              </span>{" "}
              <b>Web Developement.</b>
            </p>
          </article>
          <Button text="View Github" />
        </div>
        <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 gap-y-14 gap-5 justify-items-center  place-items-start h-full  md:h-[420px] md:overflow-y-scroll project">
          <div>
            <div className="shadow-lg w-full md:max-w-[300px] rounded-md pb-5 bg-[#dbd7d7] ">
              <img className="w-full " src={porfolio} alt="text" />
              <article className="px-2 py-3 mt-2 flex flex-col gap-4">
                <h1 className="text-lg text-bgBlack font-normal">Portfolio</h1>
                <p className="text-[14px] text-[#878787]">
                  My personal portfolio
                </p>
                <div className="flex gap-3 text-bgBlack ">
                  <span className="flex gap-3 items-center">
                    <span>
                      {" "}
                      <FaGithub />{" "}
                    </span>
                    <span className="text-[14px]">Github</span>
                  </span>
                  <span className="flex gap-3 items-center">
                    <span>
                      <FaEye />
                    </span>
                    <span className="text-[14px]">View</span>
                  </span>
                </div>
              </article>
            </div>
          </div>
          <div>
            <div className="shadow-lg  max-w-full md:max-w-[300px] rounded-md pb-5 bg-[#dbd7d7] ">
              <img className="w-full " src={porfolio} alt="text" />
              <article className="px-2 py-3 mt-2 flex flex-col gap-4">
                <h1 className="text-lg text-bgBlack font-normal">Portfolio</h1>
                <p className="text-[14px] text-[#878787]">
                  My personal portfolio
                </p>
                <div className="flex gap-3 text-bgBlack ">
                  <span className="flex gap-3 items-center">
                    <span>
                      {" "}
                      <FaGithub />{" "}
                    </span>
                    <span className="text-[14px]">Github</span>
                  </span>
                  <span className="flex gap-3 items-center">
                    <span>
                      <FaEye />
                    </span>
                    <span className="text-[14px]">View</span>
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Project;
