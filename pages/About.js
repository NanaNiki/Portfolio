import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { observeScroll } from "./index";

export default function About() {
  const [avatar, setAvatar] = useState({
    image: "/AVartsy.jpg",
    text: "I'm a dedicated Junior Front-End Developer with a background in the art industry and a passion for coding user-friendly web applications. Working proffesionally in culture and commercial sector in Europe made me a creative problem solver with soft spot for a healthy and motivating working environment.\n\nAlso I love witnessing the process of building something from scratch and finding the best (of time being ‘now’ 😉)solutions to challenges along the way. I am excited to collaborate with a team that values creativity and communication.",
  });

  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  const changeAvatar = (type) => {
    if (type === "short") {
      setAvatar({
        image: "/AVartsy.jpg",
        text: "I'm a dedicated Junior Front-End Developer with a background in the art industry and a passion for coding user-friendly web applications. Working proffesionally in culture and commercial sector in Europe made me a creative problem solver with soft spot for a healthy and motivating working environment.\n\nAlso I love witnessing the process of building something from scratch and finding the best (of time being ‘now’ 😉)solutions to challenges along the way. I am excited to collaborate with a team that values creativity and communication.",
      });
    } else if (type === "long") {
      setAvatar({
        image: "/AVsoldaat.jpg",
        text: "With my background in the art industry and experience in many fields of body expression (dancing-acting-directing-and-teaching) I believe, I can bring a unique perspective to the world of web development. \n\nI have a passion for creating engaging user experience. I believe that delivering the desired outcome is heavly tied with evoking the right emotions of the user. That’s where coding stands for me, as an interdisciplinary space of translation. Also there's nothing quite like the feeling of watching an idea come to life. I deeply value effective communication and co-creation of healthy and motivating working environment. \n\nAlso, I'm a certified energy healer, sunflower-seed addict, music lover, and internet child with a love for forests and any spin on ramen. As a self-proclaimed dragon slayer in the making, I'm always up for a challenge and eager to learn new things. I'm excited to bring my passion and problem-solving skills to any beautiful team or project.",
      });
    } else if (type === "funny") {
      setAvatar({
        image: "/AVart.jpg",
        text: "I'm a Junior Front-End Developer/Ex-dancer and let me tell you, making art is way more distant than it seems, so don't let those pretentious artists fool you! But, but! Thanks to my interdisciplinary experience and never-ending love for creation, here I am fueled with passion for that tasty and satisfying user experience.\n\nAlthough coding is like a never-ending quest, full of challenges and the occasional episodes of madness, that's what makes it so exciting for me! I'm still at the beginning of my journey, but I'm already hooked. So, if you need a fearless adventurer with a passion for problem-solving and an insatiable appetite for ramen, I'm your person. Also if you need a human kaleidoscope of spirituality and internet memes here I am. \n\nLet's slay some dragons (respectively) and build something beautiful!",
      });
    }
  };
  return (
    <>
      <h1 className="z-50 text-center font-bold mt-5 lg:text-3xl animated-item hide2 delay-75">
        About me
      </h1>
      <div className="flex flex-col mt-4 mx-auto">
        <div className="flex flex-row mx-auto mb-5">
          <Image
            src={avatar.image}
            width={200}
            height={200}
            priority
            className="image rounded-full shadow-xl dark:shadow-slate-900 "
            alt="ai generated avatar of nicol wesolowska"
          />
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="button-about animated-item hide2 delay-75"
            onClick={() => changeAvatar("short")}
          >
            Short
          </button>
          <button
            className="button-about animated-item hide2 delay-100"
            onClick={() => changeAvatar("long")}
          >
            Long
          </button>
          <button
            className="button-about animated-item hide2 delay-300"
            onClick={() => changeAvatar("funny")}
          >
            Funny
          </button>
        </div>

        <p className="text-about text-justify mt-5 xl:px-60 md:px-20 lg:text-lg md:text-lg sm:text-base">
          {avatar.text.split("\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </>
  );
}
