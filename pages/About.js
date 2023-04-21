import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section className="about bg-cyan-200 rounded-e-full" id="about">
          {/** changing avatars */}
          <Image
            src="/AVartsy.jpg"
            width={200}
            height={200}
            className=" rounded-full"
          />
          <p>
            So far, I have been professionally involved in culture and creative
            work in Poland and in international european environments.{" "}
            <code>/!-- Biggest plot twist:--/</code> Art is by far the most
            indirect way of connection and delivery. With coding I can offer my
            skills and knolewledge, providing a desired product/help-tool. And
            what's even better it might end up being useful.
          </p>
        </section>
    )
}