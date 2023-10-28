"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitButton from "./submit-button";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();

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

      <form action={sendEmail} className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </section>
  );
};

export default Contact;
