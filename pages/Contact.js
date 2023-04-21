import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFreeCodeCamp, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      className="contact bg-rose-200 rounded-ss-full flex flex-col justify-items-center"
      id="contact"
    >
      <div className="text-end">
        <h3 className="m-2">Where to find me?</h3>
        <BsLinkedin className="icon" />
        <BsGithub className="icon" />
        <FaFreeCodeCamp className="icon" />
        <FaPhoneAlt className="icon" />
      </div>
      {/** message form */}

      <form method="post" className="mt-20 mx-auto w-full">
        <fieldset>
          <label htmlFor="name" id="name-label" className="block opacity-30">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder="Neo Smith"
            required
            className="contact-input"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" id="email-label" className="block opacity-30">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            required
            placeholder="oneneo@example.com"
            className="contact-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message" id="message" className="block"></label>
          <textarea
            id="message"
            name="message"
            value={message}
            placeholder="Your message"
            className="shadow-md m-1.5 p-2 w-96 h-40 rounded-3xl"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {/** here to change the submit form into email? or direct it to ok just research it :* */}
          <div className="flex justify-center">
            <button type="submit" className="submit">
              Send
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
