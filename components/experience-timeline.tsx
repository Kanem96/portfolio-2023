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
    <section className="mb-28 sm:mb-40 scroll-mt-28" id="experience" ref={ref}>
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <TimelineElement key={index} {...item} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
