import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Hammer } from "../Context/Context";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  // const { showNav, setShowNav } = Hammer();
  return (
    <header className="   flex justify-center z-50">
      <nav className="px-3  sm:px-[2rem] bg-[rgba(243,243,242)] md:px-[5rem] top-0 max-w-[1250px] py-3 flex justify-between fixed w-full h-20 items-center ">
        <Link
          to={"/about"}
          className="font-[700] text-lg btn btn-ghost uppercase text-bgBlack"
        >
          Dev_Phradai
        </Link>

        <ul
          className={`flex flex-col md:flex-row nav-ul z-50 gap-20 md:py-0 py-14 md:gap-10 justify-center items-center absolute md:relative md:left-0 md:h-0  ${
            showNav
              ? "left-0  top-[5rem]   md:top-0 transition-all    bg-[rgba(243,243,242)] md:bg-transparent shadow-lg md:shadow-none h-screen pt-0 w-52 sm:w-72 md:w-full"
              : " -left-[300px]      transition-all"
          }`}
        >
          <li>
            <Link onClick={() => setShowNav(false)} to={"/about"}>
              About
            </Link>
          </li>

          <li>
            <Link onClick={() => setShowNav(false)} to={"/skills"}>
              Skill/Tools
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} to={"/project"}>
              Project
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowNav(false)} to={"/contact"}>
              contact
            </Link>
          </li>
        </ul>

        <button
          className="border px-2 py-1 rounded md:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-10 rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.3"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <div className="relative hidden md:flex ">
          <button className="text-[15px] uppercase hidden md:flex nav-btn relative z-50 bg-bgBlack text-white  h-10 px-5 w-32 items-center justify-center py-2">
            Resume
          </button>
          <div className="bg-white border-2 absolute top-1 right-1  border-bgBlack text-white  h-10 px-5 w-32"></div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
