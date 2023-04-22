import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [avatar, setAvatar] = useState({
    image: "/AVartsy.jpg",
    text: "I'm a dedicated Junior Front-End Developer with a background in the art industry and a passion for coding user-friendly web applications. Working proffesionally in culture and commercial sector in Europe made me a creative problem solver with soft spot for a healthy and motivating working environment. Also I love witnessing the process of building something from scratch and finding the best (of time being ‘now’ 😉)solutions to challenges along the way. You could call me a dragon slayer in the making. I am excited to collaborate with a team that values creativity and communication.",
  });

  const changeAvatar = (type) => {
    if (type === "short") {
      setAvatar({
        image: "/AVartsy.jpg",
        text: "I'm a dedicated Junior Front-End Developer with a background in the art industry and a passion for coding user-friendly web applications. Working proffesionally in culture and commercial sector in Europe made me a creative problem solver with soft spot for a healthy and motivating working environment. Also I love witnessing the process of building something from scratch and finding the best (of time being ‘now’ 😉)solutions to challenges along the way. You could call me a dragon slayer in the making. I am excited to collaborate with a team that values creativity and communication.",
      });
    } else if (type === "long") {
      setAvatar({
        image: "/AVsoldaat.jpg",
        text: "I'm a curious person who loves to create. With my background in the art industry and experience in many fields of body expression (everything between dancing-acting-directing-and-teaching), I can bring a unique perspective to the world of web development. I have a passion for user experience and design principles, which evoke the desired outcome. In the end I believe that emotions are the motivator of user’s engagement. That’s where coding stands for me, as a interdisciplinary space of translation. And I love the process of building something from scratch and figuring out the best solutions to challenges along the way. There's nothing quite like the feeling of watching an idea come to life. I deeply value effective communication and co-creation of healthy and motivating working environment ~ I ‘m a team player. Also, I'm a certified Reiki Usui Shiki Ryoho Energy Healer, ex-dancer, sunflower-seed addict, music lover, and internet child with a love for forests and any spin on ramen. As a self-proclaimed dragon slayer in the making, I'm always up for a challenge and eager to learn new things. I'm excited to bring my passion and problem-solving skills to any beautiful team or project.",
      });
    } else if (type === "funny") {
      setAvatar({
        image: "/AVspirit.jpg",
        text: "I'm a Junior Front-End Developer/Ex-dancer and let me tell you, making art is way more distant than it seems, so don't let those pretentious artists fool you! But, but thanks to my interdisciplinary experience and never-ending love for creation, here I am fueled with passion for that tasty and satisfying user experience. Although coding is like a never-ending quest, full of challenges, surprises, and the occasional episodes of madness, that's what makes it so exciting for me! I'm still at the beginning of my journey, but I'm already hooked. So, if you need a fearless adventurer with a passion for problem-solving and an insatiable appetite for ramen, I'm your person. Also if you need a human kaleidoscope of spirituality and internet memes here I am. Let's slay some dragons (respectively) and build something beautiful!",
      });
    }
  };
  return (
    <section className="about" id="about">
      {/** changing avatars */}
      <div className="flex flex-row justify-center pt-10">
        <Image
          src={avatar.image}
          width={200}
          height={200}
          className="rounded-full shadow-xl dark:shadow-slate-900"
          alt="ai generated avatar of nicol wesolowska"
        />
      </div>

      <div className="flex flex-row mt-2 justify-center">
        <button className="button-about" onClick={() => changeAvatar("short")}>
          Short
        </button>
        <button className="button-about" onClick={() => changeAvatar("long")}>
          Long
        </button>
        <button className="button-about" onClick={() => changeAvatar("funny")}>
          Funny
        </button>
      </div>
      <p className="mt-2 text-justify text-sm">{avatar.text}</p>
    </section>
  );
}
