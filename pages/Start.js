import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1, DiCss3, DiBootstrap, DiReact } from "react-icons/di";

export default function Start() {
  return (
    <>
      <div className="hide flex flex-row">
        <DiReact className="icon-fall " />
        <DiJavascript1 className="icon-fall" />
        <AiFillHtml5 className="icon-fall" />
        <DiCss3 className="icon-fall" />
        <DiBootstrap className="icon-fall" />
        <TbBrandNextjs className="icon-fall" />
        <SiTailwindcss className="icon-fall" />
      </div>

      <div className="m-auto">
        <h1 className="font-bold lg:text-3xl">Hi! I'm Nicol Wesołowska</h1>
        <h5 className="lg:text-xl ">
          <span className="italic">Fresh Baby </span>Front End Developer
        </h5>
      </div>
    </>
  );
}
