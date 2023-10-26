"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-slate-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kanemilligan1@gmail.com">
          kanemilligan1@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center  gap-2 h-[3rem] w-[8rem] bg-slate-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-slate-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xd opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
