import React from "react";
import { BsLinkedin, BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { FaFreeCodeCamp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact bg-indigo-200 rounded-ss-full" id="contact">
      <div>
        <h3>Where to find me?</h3>
        <BsLinkedin className="icon" />
        <BsGithub className="icon" />
        <FaFreeCodeCamp className="icon" />
        <BsFillTelephoneFill className="icon" />
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
  );
}
