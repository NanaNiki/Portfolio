import React, { useEffect } from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";
import { observeScroll } from "../page";

export default function Contact() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <section
      className="relative flex h-screen w-full flex-col rounded-ss-full bg-rose-400 from-slate-950 to-rose-950 pl-3 pr-16 dark:bg-gradient-to-b"
      id="contact"
    >
      <div className="z-50 pr-0 pt-32 text-end sm:pr-20 sm:pt-20">
        <h3 className="m-2 font-semibold">Where to find me?</h3>
        <Link
          href="https://www.linkedin.com/in/nicol-weso%C5%82owska-53165025b/"
          target="_blank"
          aria-label="Go to LinkedIn profile"
        >
          <BsLinkedin className="icon animated-item slide-in delay-700 hover:opacity-40" />
        </Link>
        <Link
          href="https://github.com/NanaNiki"
          target="_blank"
          aria-label="Go to GitHub profile"
        >
          <BsGithub className="icon animated-item slide-in delay-500 hover:opacity-40" />
        </Link>
        <Link
          href="https://www.freecodecamp.org/NanaNiki"
          target="_blank"
          aria-label="Go to freeCodeCamp profile"
        >
          <FaFreeCodeCamp className="icon animated-item slide-in delay-300 hover:opacity-40" />
        </Link>
        <Link
          href="mailto:nicol.wesolowska@gmail.com"
          target="_blank"
          aria-label="Write an email to me"
        >
          <SiGmail className="icon animated-item slide-in delay-100 hover:opacity-40" />
        </Link>
        <div className="m-auto flex flex-row justify-end">
          <Link
            href="/CVNW.pdf"
            download
            target="_blank"
            aria-label="Here is my CV"
          >
            <button className="m-1 mt-3 w-64 rounded-full bg-gradient-to-tl from-rose-500 to-red-300 p-2 font-semibold shadow-lg shadow-rose-800 transition-all duration-100 hover:shadow-rose-300 active:border-2 active:border-rose-700 dark:opacity-60 dark:shadow-transparent dark:hover:text-rose-700 dark:hover:shadow-rose-700 dark:active:text-rose-900">
              Resume
            </button>
          </Link>
        </div>
      </div>
      <svg
        id="visual"
        viewBox="0 0 900 500"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute bottom-0 left-0 w-full overflow-hidden rounded-ss-full"
      >
        <path
          d="M0 451L69 432L138 410L208 446L277 467L346 410L415 470L485 472L554 473L623 438L692 473L762 388L831 470L900 473L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
          fill="#4c0519"
        ></path>
        <path
          d="M0 491L69 415L138 489L208 475L277 439L346 488L415 452L485 480L554 437L623 418L692 501L762 459L831 469L900 426L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
          fill="#73122a"
        ></path>
        <path
          d="M0 506L69 515L138 465L208 474L277 506L346 507L415 506L485 478L554 462L623 460L692 473L762 460L831 497L900 462L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
          fill="#9c203b"
        ></path>
        <path
          d="M0 536L69 510L138 546L208 524L277 515L346 508L415 530L485 535L554 538L623 492L692 527L762 526L831 500L900 525L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
          fill="#c72f4c"
        ></path>
        <path
          d="M0 546L69 543L138 538L208 562L277 542L346 556L415 547L485 537L554 564L623 530L692 550L762 533L831 538L900 569L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
          fill="#f43f5e"
        ></path>
      </svg>
    </section>
  );
}
