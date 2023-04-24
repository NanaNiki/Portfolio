import React from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="text-contact text-end pr-20 pt-20">
        <h3 className="m-2">Where to find me?</h3>
        <Link
          href="https://www.linkedin.com/in/nicol-weso%C5%82owska-53165025b/"
          target="_blank"
        >
          {" "}
          <BsLinkedin className="icon hover:opacity-40" />
        </Link>
        <Link href="https://github.com/NanaNiki" target="_blank">
          {" "}
          <BsGithub className="icon hover:opacity-40" />
        </Link>
        <Link href="https://www.freecodecamp.org/NanaNiki" target="_blank">
          {" "}
          <FaFreeCodeCamp className="icon hover:opacity-40" />
        </Link>
        <Link href="mailto:nicol.wesolowska@gmail.com" target="_blank">
          {" "}
          <SiGmail className="icon hover:opacity-40" />
        </Link>
      </div>
      <div className="divider-2">
        <svg
          id="visual"
          viewBox="0 0 900 500"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
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
      </div>
    </section>
  );
}
