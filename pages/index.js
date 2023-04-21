import Image from "next/image";
import { Poppins } from "next/font/google";
import { BsFillMoonStarsFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { GiCrystalGrowth, GiAlienStare, GiUfo } from "react-icons/gi";
import { FaFreeCodeCamp } from "react-icons/fa";
import { IoMdPlanet } from "react-icons/io";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  const [darkMode, SetDarmMode] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className={darkMode ? "dark" : ""}>
        <nav className="fixed top-0 right-0 h-screen w-14 m-0 flex flex-col bg-blue-300 text-slate-900 shadow-lg">
          <ul>
            <BsFillMoonStarsFill
              onClick={() => SetDarmMode(!darkMode)}
              className="text-3xl m-3 mb-30 hover:text-blue-500"
            />
          </ul>
          <ul>
            <a href="#home">
              <IoMdPlanet className="icon" />
            </a>
          </ul>
          <ul>
            <a href="#home">
              <GiCrystalGrowth className="icon" />
            </a>
          </ul>
          <ul>
            <a href="#home">
              <GiAlienStare className="icon" />
            </a>
          </ul>
          <ul>
            <a href="#contact">
              <GiUfo className="icon" />
            </a>
          </ul>
        </nav>
        <section className="home" id="home">
          {" "}
          <h1 className="text-lg">Hi! I'm Nicol Wesołowska</h1>
          <h5>Fresh Baby Front End Developer</h5>
        </section>
        <section className="projects" id="projects">
          <h1>Here are my projects</h1>
        </section>
        <section className="about" id="about">
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
        <section className="contact" id="contact">
          <div>
            <h3>Where to find me?</h3>
            <BsLinkedin />
            <BsGithub />
            <FaFreeCodeCamp />
          </div>
          {/** message form */}
          <form method="post">
            <fieldset>
              <label for="name" id="name-label">
                Name
                <input id="name" type="text" placeholder="Neo Smith" required />
              </label>
              <label for="email" id="email-label">
                Email
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="oneneo@example.com"
                />{" "}
              </label>
              <label for="message" id="message">
                {" "}
                <input placeholder="Your message"></input>
              </label>
              {/** here to change the submit form into email? or direct it to ok just research it :* */}
              <input type="submit" id="submit" value="Submit" />
            </fieldset>
          </form>
          {/** section for portfolio-sound-evaluation */}
        </section>
      </div>
    </main>
  );
}
