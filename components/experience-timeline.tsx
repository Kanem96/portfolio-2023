"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import TimelineElement from "./timeline-element";

const ExperienceTimeline = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      className="my-20 flex w-full scroll-mt-28 flex-col items-center justify-center gap-10"
      id="experience"
      ref={ref}
    >
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="#e4e4e7">
        {experiencesData.map((item, index) => (
          <TimelineElement key={index} {...item} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
