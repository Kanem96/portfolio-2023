"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
