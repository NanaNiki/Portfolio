import React, { useEffect } from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";
import { observeScroll } from "./index";

export default function Contact() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <>
      <div className="text-contact text-end pr-20 pt-20 z-50">
        <h3 className="m-2 font-semibold">Where to find me?</h3>
        <Link
          href="https://www.linkedin.com/in/nicol-weso%C5%82owska-53165025b/"
          target="_blank"
        >
          {" "}
          <BsLinkedin className="icon hover:opacity-40 animated-item hide delay-700" />
        </Link>
        <Link href="https://github.com/NanaNiki" target="_blank">
          {" "}
          <BsGithub className="icon hover:opacity-40 animated-item hide delay-500" />
        </Link>
        <Link href="https://www.freecodecamp.org/NanaNiki" target="_blank">
          {" "}
          <FaFreeCodeCamp className="icon hover:opacity-40 animated-item hide delay-300" />
        </Link>
        <Link href="mailto:nicol.wesolowska@gmail.com" target="_blank">
          {" "}
          <SiGmail className="icon hover:opacity-40 animated-item hide delay-100" />
        </Link>
        <div className="flex flex-row justify-end m-auto">
          <Link href="/CVNW.pdf" download target="_blank">
            <button className="button-resume">Resume</button>
          </Link>
        </div>
      </div>
    </>
  );
}
