import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="about bg-cyan-200 rounded-e-full" id="about">
      {/** changing avatars */}
      <div className="flex flex-row justify-center">
        <Image
          src="/AVartsy.jpg"
          width={200}
          height={200}
          className="rounded-full"
          alt="ai generated avater of nicol wesolowska"
        />
      </div>

      <div className="flex flex-row mt-2 justify-center">
        <button className="button-about">Short</button>
        <button className="button-about">Long</button>
        <button className="button-about">Funny</button>
      </div>
      <p className="mt-20">
        So far, I have been professionally involved in culture and creative work
        in Poland and in international european environments.{" "}
        <code>/!-- Biggest plot twist:--/</code> Art is by far the most indirect
        way of connection and delivery. With coding I can offer my skills and
        knolewledge, providing a desired product/help-tool. And what's even
        better it might end up being useful.
      </p>
    </section>
  );
}
