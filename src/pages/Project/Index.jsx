import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { Button } from "../../components/Button";
import Data from "./data";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <main className="max-w-[1250px] py-10  my-[5rem]   md:mt-0 flex justify-center items-center   mx-auto  ">
      <section className=" h-full  flex flex-col md:flex-row gap-10 md:gap-0 w-full justify-between mx-auto  md:justify-between items-center  ">
        <div className="flex  flex-col gap-5 md:gap-6 max-w-full w-full md:max-w-[700px]  items-center   md:items-start">
          <header className="flex flex-col  justify-center items-center md:items-start gap-5">
            <div className=" animate-div contact-1 flex gap-3 items-center">
              <div className="shake flex">
                {" "}
                <div className="">C</div>
                <div className="lowercase">R</div>
                <div className="lowercase">A</div>
                <div className="lowercase">F</div>
                <div className="lowercase">T</div>
                <div className="lowercase">I</div>
                <div className="lowercase">N</div>
                <div className="lowercase">G</div>
              </div>
              <div className="shake flex">
                <div className="">I</div>
                <div className="">n</div>
                <div className="">n</div>
                <div className="">o</div>
                <div className="">v</div>
                <div className="">a</div>
                <div className="">t</div>
                <div className="">i</div>
                <div className="">o</div>
                <div className="">n:</div>
              </div>
            </div>

            <div className=" animate-div contact-2 flex flex-row md:flex-col gap-3 items-start">
              {" "}
              <div className="flex gap-3">
                <div className="shake flex">
                  {" "}
                  <div className="">J</div>
                  <div className="">o</div>
                  <div className="">u</div>
                  <div className="">r</div>
                  <div className="">n</div>
                  <div className="">e</div>
                  <div className="">y</div>
                </div>
                <div className="shake flex">
                  {" "}
                  <div className="">t</div>
                  <div className="">h</div>
                  <div className="">r</div>
                  <div className="">o</div>
                  <div className="">u</div>
                  <div className="">g</div>
                  <div className="">h</div>
                </div>
              </div>
              <div className="flex  gap-3">
                {" "}
                <div className="shake flex">
                  <div className="">M</div>
                  <div className="">y</div>
                </div>
                <div className="shake flex">
                  <div className="">p</div>
                  <div className="">r</div>
                  <div className="">o</div>
                  <div className="">j</div>
                  <div className="">e</div>
                  <div className="">c</div>
                  <div className="">t</div>
                  <div className="">s</div>
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
          <Button link="https://github.com/Ohzuma" text="View Github" />
        </div>
        <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 gap-y-14 gap-5 justify-items-center  place-items-start h-full  md:h-[420px] md:overflow-y-scroll project">
          {Data.map((item) => {
            return (
              <div className="shadow-lg w-full md:max-w-[300px] rounded-sm pb-5 bg-[#e6e3e3] ">
                <img
                  className="w-full h-[200px] object-fill"
                  src={item.img}
                  alt={item.title}
                />
                <article className="px-2 py-3 mt-2 flex flex-col gap-3">
                  <Link
                    to={item.url}
                    className="text-lg text-bgBlack font-normal"
                  >
                    {item.title}
                  </Link>
                  <p className="text-[14px] text-[#878787]">{item.desc}</p>
                  <div className="flex gap-3">
                    {item.tools.map((tools) => {
                      return (
                        <span className="text-[14px] text-[#878787]">
                          {tools}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex gap-3 text-bgBlack ">
                    <Link
                      to={item.github}
                      target={"_blank"}
                      className="flex gap-2 items-center"
                    >
                      <span>
                        {" "}
                        <FaGithub />{" "}
                      </span>
                      <Link
                        target={"_blank"}
                        to={item.github}
                        className="text-[14px]"
                      >
                        Github
                      </Link>
                    </Link>
                    <Link
                      target={"_blank"}
                      to={item.url}
                      className="flex gap-2 items-center"
                    >
                      <span>
                        <FaEye />
                      </span>
                      <Link
                        target={"_blank"}
                        to={item.url}
                        className="text-[14px]"
                      >
                        View
                      </Link>
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Project;
