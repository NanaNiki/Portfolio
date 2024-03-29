import React, { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { GiCrystalGrowth, GiAlienStare, GiUfo } from "react-icons/gi";
import { DiJavascript1, DiCss3, DiBootstrap, DiReact } from "react-icons/di";
import { observeScroll } from "../page";

export default function Start() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);
  return (
    <>
      <section
        className="relative z-20 mb-8 h-screen bg-stone-100 dark:bg-gray-950"
        id="home"
      >
        <div className="absolute top-0 z-30 flex h-screen w-full flex-col overflow-hidden rounded-ee-full bg-orange-200 from-slate-700 to-slate-950 p-3 shadow-xl shadow-orange-300 dark:bg-gradient-to-br dark:shadow-gray-500">
          <div className="shooting-star-box z-40 flex w-1/2 flex-row justify-between">
            <span className="shooting-star-animation absolute right-1/2 h-[1px] w-48 rounded-full bg-amber-700 opacity-0 dark:bg-white"></span>
            <span className="shooting-star-animation absolute top-9 h-[1px] w-48 rounded-full bg-amber-700 opacity-0 dark:bg-white"></span>
            <span className="shooting-star-animation absolute bottom-96 h-[1px] w-48 rounded-full bg-amber-700 opacity-0 dark:bg-white"></span>
            <DiReact className="shooting-star-animation absolute bottom-96 text-amber-700 opacity-0 dark:text-white" />
            <DiJavascript1 className="shooting-star-animation absolute -left-20 text-amber-700 opacity-0 dark:text-white" />
            <AiFillHtml5 className="shooting-star-animation text-amber-700 opacity-0 dark:text-white" />
            <DiCss3 className="shooting-star-animation text-amber-700 opacity-0 dark:text-white" />
            <DiBootstrap className="shooting-star-animation text-amber-700 opacity-0 dark:text-white" />
            <TbBrandNextjs className="shooting-star-animation text-amber-700 opacity-0 dark:text-white" />
            <SiTailwindcss className="shooting-star-animation text-amber-700 opacity-0 dark:text-white" />
          </div>
          <a
            href="/"
            className="transition-all duration-300 ease-linear"
            aria-label="Go to homepage"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 12.7 12.7"
              version="1.1"
              id="svg5"
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute left-12 top-12 fill-black p-0.5 hover:rounded-full hover:shadow-md hover:shadow-cyan-300 dark:fill-slate-200 dark:hover:shadow-cyan-700"
            >
              <rect
                width="1.4601681"
                height="9.5533428"
                x="1.8817512"
                y="1.7820288"
                rx="0.45614329"
                ry="4.236445"
              />
              <rect
                width="1.4601681"
                height="9.5533428"
                x="9.5719814"
                y="1.7706182"
                rx="0.45614329"
                ry="4.236445"
              />
              <path
                transform="matrix(1,0,-0.6091778,0.79303368,0,0)"
                d="m 11.567057,8.2926399 c -0.08626,0 -0.167937,0.1132578 -0.239648,0.3140856 -1.99e-4,0.00106 -3.71e-4,0.00222 -5.99e-4,0.00326 -2.06e-4,5.806e-4 -1.53e-4,0.00137 -3.59e-4,0.00195 -2.95e-4,0.00123 -0.001,0.00205 -0.0011,0.00326 -1.37e-4,3.898e-4 -1.03e-4,0.001 -2.4e-4,0.0013 -4.71e-4,0.00159 -0.0013,0.00303 -0.0019,0.00456 -1.37e-4,3.931e-4 -1.03e-4,0.001 -2.39e-4,0.0013 -4.32e-4,0.00114 -0.001,0.00216 -0.0011,0.00326 -3.21e-4,7.31e-4 -6.53e-4,0.00189 -9.96e-4,0.00261 -1.06e-4,3.072e-4 -5.31e-4,3.44e-4 -6.37e-4,6.516e-4 -1.77e-4,3.509e-4 -5.6e-5,0.001 -2.39e-4,0.0013 h -5.17e-4 c -2.42e-4,7.066e-4 -6.35e-4,0.00125 -8.76e-4,0.00195 -0.16677,0.4894192 -0.279372,1.458643 -0.279372,2.579151 l -2.19e-4,0.16421 c 0,1.616783 0.235306,2.917998 0.528044,2.917998 h 0.488859 c 0.292689,0 0.528739,-1.301215 0.528739,-2.917998 l -2.98e-4,-0.16421 c 0,-1.125257 -0.114801,-2.096987 -0.282943,-2.584364 L 12.3005,8.6262744 c -5.92e-4,-3.928e-4 -0.0014,-0.00101 -0.0018,-0.0013 -6.83e-4,-4.415e-4 -0.0011,-8.477e-4 -0.0018,-0.0013 l -3.97e-4,-6.516e-4 c -1.49e-4,-7.61e-5 -3.67e-4,7.89e-5 -5.17e-4,0 -3.83e-4,-2.52e-4 -9.45e-4,-0.00105 -0.0013,-0.0013 -2e-4,-1.159e-4 -3e-4,1.294e-4 -5.16e-4,0 -8.4e-4,-5.807e-4 -0.0018,-0.00139 -0.0027,-0.00195 -1.33e-4,-7.66e-5 -3.81e-4,8.11e-5 -5.16e-4,0 -3.98e-4,-2.725e-4 -8.59e-4,-9.715e-4 -0.0013,-0.0013 -5.49e-4,-3.422e-4 -9.02e-4,-3.719e-4 -0.0014,-6.516e-4 -2.78e-4,-1.513e-4 -6.61e-4,-5.259e-4 -9.13e-4,-6.516e-4 -0.001,-5.032e-4 -0.0017,-6.212e-4 -0.0029,-0.0013 -8.64e-4,-5.485e-4 -0.0018,-0.00128 -0.0027,-0.00195 -2.83e-4,-2.024e-4 -6.34e-4,-4.46e-4 -9.14e-4,-6.516e-4 -1.85e-4,-9.42e-5 -3.32e-4,9.39e-5 -5.17e-4,0 -1.83e-4,-1.372e-4 -2.18e-4,-5.156e-4 -3.97e-4,-6.517e-4 -0.0091,-0.00461 -0.01808,-0.00875 -0.02734,-0.014336 -0.01702,-0.010519 -0.03397,-0.021405 -0.05097,-0.03193 -0.0054,-0.003 -0.0069,-0.00366 -0.01784,-0.00977 -0.112728,-0.061769 -0.224763,-0.1189397 -0.336742,-0.1752884 -0.0021,-8.263e-4 -0.0042,-0.00178 -0.0062,-0.00261 -0.03711,-0.014946 -0.07402,-0.02827 -0.110671,-0.041704 -0.04028,-0.015103 -0.08039,-0.029737 -0.120528,-0.044311 z"
              />
              <path
                transform="matrix(-1,0,0.6091778,0.79303368,0,0)"
                d="m -1.4377895,8.2867753 c 0.00525,0.00134 0.01067,0.00266 0.015818,0.00391 0.038058,0.014674 0.07643,0.030463 0.1148807,0.046917 0.059825,0.026759 0.1198677,0.054956 0.1802789,0.084712 0.010107,0.00505 0.020123,0.010482 0.030198,0.015639 7.84e-4,4.013e-4 0.00156,9.551e-4 0.00234,0.0013 0.00902,0.00631 0.018018,0.012607 0.027134,0.018246 0.014312,0.00906 0.029095,0.018445 0.043304,0.028672 0.017926,0.012498 0.0358083,0.02502 0.0538721,0.03584 0.0194104,0.012268 0.0387106,0.025263 0.0580437,0.038446 0.0170619,0.01102 0.033924,0.020745 0.0509736,0.03193 0.002091,0.00137 0.004293,0.00317 0.006396,0.00456 0.001059,6.981e-4 0.002198,0.00126 0.003258,0.00195 0.003352,0.00257 0.006624,0.00547 0.009931,0.00782 0.0139016,0.00988 0.0280328,0.019059 0.0421135,0.026717 0.16505979,0.4924531 0.27675603,1.4546117 0.27675603,2.5674207 l -9.896e-5,0.163559 c 0,1.61678 -0.23562089,2.91865 -0.52834263,2.91865 h -0.4888591 c -0.2927227,0 -0.5284404,-1.30187 -0.5284404,-2.91865 l 9.9e-5,-0.163559 c 0,-1.129053 0.1146987,-2.1027952 0.2836329,-2.5882729 1.727e-4,-2.664e-4 4.663e-4,-3.83e-4 6.366e-4,-6.516e-4 0.00267,-0.00421 0.00507,-0.00889 0.00717,-0.013684 0.00425,-0.010623 0.00837,-0.021304 0.012588,-0.03193 0.00178,-0.00305 0.00175,-0.00335 0.00541,-0.00977 0.03747,-0.061769 0.079853,-0.1189399 0.1231783,-0.1752884 0.00106,-8.263e-4 0.002,-0.00178 0.00306,-0.00261 0.018898,-0.014946 0.039574,-0.02827 0.059861,-0.041704 0.022929,-0.01583 0.046539,-0.030997 0.070001,-0.046266 0.010659,-0.00119 0.00878,-0.00131 0.034706,-0.00326 0.00984,-3.156e-4 0.019643,-5.635e-4 0.029575,-6.516e-4 z m 0.5238002,0.093835 c 2.9173e-4,4.282e-4 5.024e-4,0.001 7.9392e-4,0.0013 l -9.1372e-4,-6.516e-4 z"
              />
              <rect
                width="1.128857"
                height="4.3969541"
                x="6.0596089"
                y="7.0153279"
                rx="0.38598922"
                ry="2.1384463"
                transform="matrix(1,0,-0.00659392,0.99997826,0,0)"
              />
              <rect
                width="1.5453725"
                height="1.5669892"
                x="5.8791718"
                y="3.832216"
                rx="0.52840805"
                ry="0.76210076"
                transform="matrix(1,0,-0.01931525,0.99981344,0,0)"
              />
            </svg>
          </a>
          <div className="mb-44 ms-2 flex h-full flex-col justify-end dark:text-white sm:mb-40 sm:ms-12">
            <span className="text-base">Hi! I'm</span>
            <h1 className="animated-item fade-in font-bold delay-[300ms] lg:text-4xl">
              {" "}
              Nicol Wesołowska
            </h1>
            <h5 className="lg:text-xl ">
              <span className="me-1 text-base italic">Fresh Baby </span>Front
              End Developer
            </h5>
          </div>
        </div>
        <div className="absolute bottom-3 right-2 flex h-1/6 w-full flex-col justify-end sm:bottom-3 sm:right-2 sm:justify-around md:bottom-5 md:right-4 lg:bottom-8 lg:right-8">
          <a
            href="#projects"
            className="has-tooltip"
            aria-label="Go to procejts section"
          >
            <div className="flex flex-row justify-end">
              <GiCrystalGrowth className="start-tag mx-2 h-8 w-8 rounded-md opacity-0 blur-sm dark:text-white" />
              <span className="animated-item fade-in px-1.5 py-0.5 font-bold opacity-80 delay-[500ms] hover:opacity-40 hover:delay-0 hover:duration-300 dark:text-white lg:text-2xl">
                Projects
              </span>
            </div>
          </a>
          <a
            href="#about"
            className="has-tooltip"
            aria-label="Go to about section"
          >
            <div className="flex flex-row justify-end">
              <GiAlienStare className="start-tag mx-2 h-8 w-8 rounded-md opacity-0 blur-sm dark:text-white" />
              <span className="animated-item fade-in px-1.5 py-0.5 font-bold opacity-80 delay-[700ms] hover:opacity-40 hover:delay-0 hover:duration-300 dark:text-white lg:text-2xl">
                About
              </span>
            </div>
          </a>
          <a
            href="#contact"
            className="has-tooltip"
            aria-label="Go to contact section"
          >
            <div className="flex flex-row justify-end">
              <GiUfo className="start-tag mx-2 h-8 w-8 rounded-md opacity-0 blur-sm dark:text-white" />
              <span className="animated-item fade-in px-1.5 py-0.5 font-bold opacity-80 delay-[900ms] hover:opacity-40 hover:delay-0 hover:duration-300 dark:text-white lg:text-2xl">
                Contact
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
