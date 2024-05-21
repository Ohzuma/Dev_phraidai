import React from "react";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const publicKey = "ZNXEm1GN03mW9A-5c";
  const serviceid = "service_j88jvfc";
  const template_id = "contact_form";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceid, template_id, e.target, publicKey).then(
      (result) => {
        console.log(result.text, "success");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };
  return (
    // <main className="max-w-[1250px] py-10  mt-[10rem]   md:mt-0 flex justify-center items-center   mx-auto  ">
    //   <section className=" h-full w-full flex flex-col md:flex-row gap-10 md:gap-0  justify-center mx-auto  md:justify-between items-center  ">
    //     <div className="flex  flex-col gap-5 md:gap-6 max-w-full w-full md:max-w-[700px]  items-center   md:items-start">
    //       <header className="flex flex-col justify-center items-center md:items-start gap-5">
    //         <h1>Contact Info</h1>
    //       </header>
    //       <form action="/">
    //         <div>
    //           <input type="text" placeholder="First name" name="name" />
    //         </div>
    //         <div>
    //           <input type="email" placeholder="Email address" name="email" />
    //         </div>
    //         <div>
    //           <input type="text" placeholder="Phone." name="phone" />
    //         </div>
    //         <div>
    //           <button type="submit"></button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="grid grid-cols-1 gap-10 justify-items-center skills place-items-start">
    //       ggg
    //     </div>
    //   </section>
    // </main>

    <main className="max-w-[1250px] py-10  mt-[2rem]   md:mt-0 flex justify-center items-center   mx-auto  ">
      <section className=" h-full w-full flex flex-col md:flex-row gap-10 md:gap-0  justify-center mx-auto  md:justify-between items-center  ">
        <div className="flex  flex-col gap-5 md:gap-6 max-w-full w-full   items-center   md:items-start">
          <header className="flex flex-col justify-center items-center md:items-start gap-5">
            <div className=" animate-div contact-1 flex flex-row md:flex-col gap-3">
              <div className=" flex gap-3 items-center">
                <div>
                  {" "}
                  <span className="">W</span>
                  <span className="">a</span>
                  <span className="">n</span>
                  <span className="">t</span>
                </div>
                <div>
                  <span>t</span>
                  <span>o</span>
                </div>
                <div>
                  {" "}
                  <span className="">w</span>
                  <span className="">o</span>
                  <span className="">r</span>
                  <span className="">k</span>
                </div>
                <div>
                  {" "}
                  <span className="">w</span>
                  <span className="">i</span>
                  <span className="">t</span>
                  <span className="">h</span>
                </div>
              </div>
              <div>
                <span className="">m</span>
                <span className="">e</span>
                <span className="">?</span>
              </div>
            </div>

            <div className=" animate-div contact-2 flex flex-row gap-3 items-start">
              {" "}
              <div>
                <span className="">L</span>
                <span className="">e</span>
                <span className="">t</span>
                <span className="">'</span>
                <span className="">s</span>
              </div>
              <div>
                <span className="">C</span>
                <span className="">o</span>
                <span className="">n</span>
                <span className="">n</span>
                <span className="">e</span>
                <span className="">c</span>
                <span className="">t</span>
              </div>
            </div>
          </header>
          <article className="w-full max-w-[600px] flex justify-center items-center lg:justify-start lg:items-start">
            <p
              className=" text-center break-words  break-keep  md:text-left text-lg sm:text-2xl md:text-lg
          sm:w-4/5 leading-[40px] sm:leading-[50px] lg:leading-[50px] lg:w-11/12   "
            >
              {" "}
              <span> I'm open for </span>
              <b>remote</b> and <b>onsite full-time</b>,
              <span> part-time, and contract frontend web developement</span>{" "}
              <b>jobs</b>
            </p>
          </article>
        </div>
        <div className="max-w-[600px] w-full form">
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-7">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="relative  ">
              <button
                onClick={() => console.log("hello0")}
                type="submit"
                className="text-[20px]  font-ligt capitalize flex nav-btn static  z-10 bg-black text-[rgba(243,243,242)]   h-14 px-5 w-full items-center justify-center py-1"
              >
                Connect{" "}
              </button>
              <div className="bg-[rgba(243,243,242)] border-2 -z-20 absolute top-2 left-2  border-black text-[rgba(243,243,242)]   h-14  w-full"></div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
