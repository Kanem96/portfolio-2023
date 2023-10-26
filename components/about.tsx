"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <section
      id="about"
      className="mb-28 mt-[120px] max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After completing a number of self-taught{" "}
        <span className="font-medium">Computer Science</span> courses online, I
        decided to pursue my passion for programming. I enrolled in a{" "}
        <span className="font-medium">Level 4 Software Development</span>{" "}
        apprenticeship and completed a JavaScript bootcamp where I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        bringing value to people by solving real problems. I{" "}
        <span className="underline">love</span> the feeling of solving complex
        problems. My core stack right now is is{" "}
        <span className="font-medium">
          React, TypeScript, Kotlin and PostgreSQL
        </span>
        . I am also confident with React Testing Library and Cypress. I am
        always looking to learn new technologies. I am currently learning about{" "}
        <span className="font-medium">server-side rendering</span> using
        Next.js.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and travelling to new countries. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">cinematography</span> with the intention
        of creating my own content. I'm also learning how to speak Chinese.
      </p>
    </section>
  );
};

export default About;
