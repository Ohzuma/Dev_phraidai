import React from "react";
import { Button } from "../../components/Button";

const Skill = () => {
  return (
    <main className="max-w-[1250px] py-10  mt-[10rem]   md:mt-0 flex justify-center items-center   mx-auto  ">
      <section className=" h-full  flex flex-col md:flex-row gap-10 md:gap-0  justify-center mx-auto  md:justify-between items-center  ">
        <div className="flex  flex-col gap-5 md:gap-6 max-w-full w-full md:max-w-[700px]  items-center   md:items-start">
          <header className="flex flex-col justify-center items-center md:items-start gap-5">
            <div className=" animate-div contact-1 flex gap-3 items-center">
              {" "}
              <div>
                {" "}
                <span className="">I</span>
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
                <span className="">m</span>
                <span className="">o</span>
                <span className="">s</span>
                <span className="">t</span>
                <span className="">l</span>
                <span className="">y</span>
              </div>
              <div>
                {" "}
                <span className="">w</span>
                <span className="">i</span>
                <span className="">t</span>
                <span className="">h</span>
              </div>
            </div>

            <div className=" animate-div contact-2 flex flex-row md:flex-col gap-3 items-start">
              {" "}
              <div>
                <span className="">F</span>
                <span className="">r</span>
                <span className="">o</span>
                <span className="">n</span>
                <span className="">t</span>
                <span className="">e</span>
                <span className="">n</span>
                <span className="">d</span>
              </div>
              <div>
                {" "}
                <span className="">T</span>
                <span className="">e</span>
                <span className="">c</span>
                <span className="">h</span>
                <span className="">n</span>
                <span className="">o</span>
                <span className="">l</span>
                <span className="">o</span>
                <span className="">g</span>
                <span className="">i</span>
                <span className="">e</span>
                <span className="">s</span>
              </div>
            </div>
          </header>
          <article className="w-full flex justify-center items-center lg:justify-start lg:items-start">
            <p
              className=" text-center break-words  break-keep  md:text-left text-lg sm:text-2xl md:text-lg
          sm:w-4/5 leading-[40px] sm:leading-[50px] lg:leading-[50px] lg:w-11/12   "
            >
              <span>
                {" "}
                Here are some of the tools i've worked with over the years, for
                my
              </span>
              <b> personal, professional </b> <span>and</span>{" "}
              <b>open source</b> <span>projects.</span>
            </p>
          </article>
          <Button text="View Resume" />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-10 justify-items-center skills place-items-start">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 16 16"
              color="#F05032"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.698 7.287l-6.986-6.986c-0.402-0.402-1.055-0.402-1.457 0l-1.623 1.623 1.221 1.221c0.196-0.094 0.415-0.146 0.647-0.146 0.828 0 1.5 0.672 1.5 1.5 0 0.232-0.053 0.451-0.146 0.647l2 2c0.196-0.094 0.415-0.146 0.647-0.146 0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5-1.5-0.672-1.5-1.5c0-0.232 0.053-0.451 0.146-0.647l-2-2c-0.048 0.023-0.097 0.043-0.147 0.061v4.171c0.583 0.206 1 0.761 1 1.414 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.653 0.417-1.208 1-1.414v-4.171c-0.583-0.206-1-0.761-1-1.414 0-0.232 0.053-0.451 0.146-0.647l-1.221-1.221-4.623 4.623c-0.402 0.403-0.402 1.055 0 1.458l6.986 6.986c0.402 0.402 1.054 0.402 1.457 0l6.953-6.953c0.402-0.403 0.402-1.055-0-1.458z"></path>
            </svg>
            <span>Git</span>
          </div>
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              color="#60DAFB"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              // style="color: rgb(96, 218, 251);"
            >
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
            </svg>
            <span>React</span>
          </div>

          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              color="#07B7D4"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              // style="color: rgb(7, 183, 212);"
            >
              <title></title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>
            <span>Tailwind</span>
          </div>

          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              color="#F16529"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              // style="color: rgb(241, 101, 41);"
            >
              <path d="M64 32l34.936 403.213L255.769 480l157.245-44.854L448 32H64zm307.997 132h-184l3.991 51h176.008l-13.505 151.386-98.5 28.094-98.682-27.976L150.545 289h48.254l3.423 39.287 53.769 14.781 53.422-14.915L314.987 264H147.986l-12.571-149.589 240.789.016L371.997 164z"></path>
            </svg>
            <span>Html</span>
          </div>

          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 32 32"
              color="#2965F1"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              // style="color: rgb(41, 101, 241);"
            >
              <path d="M8.054 6.045l-0.76 3.799h15.462l-0.483 2.454h-15.472l-0.749 3.799h15.462l-0.862 4.333-6.232 2.064-5.4-2.064 0.37-1.879h-3.799l-0.904 4.558 8.932 3.419 10.297-3.419 1.366-6.858 0.277-1.376 1.756-8.829h-19.26z"></path>
            </svg>
            <span>Css</span>
          </div>

          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 32 32"
              color="#F7DF1E"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              // style="color: rgb(247, 223, 30);"
            >
              <path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path>
            </svg>
            <span>Javascript</span>
          </div>

          <div>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              color="#111"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              // style="color: rgb(17, 17, 17);"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
              <path d="M15 12v-3"></path>
            </svg>
            <span>Next.js</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skill;
