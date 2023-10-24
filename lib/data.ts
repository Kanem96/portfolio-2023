import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "JavaScript Bootcamp",
    location: "Leeds, UK",
    description:
      "Completed a full-stack JavaScript bootcamp, building a full stack application with React.js, Node.js and postgresql.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Level 4 Software Development Apprenticeship",
    location: "Leeds, UK",
    description:
      "Worked as a software development apprentice for 18 months, graduated with a distinction.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Leeds, UK",
    description:
      "I'm now a full-stack engineer. My stack includes React, TypeScript, Kotlin, and Postgresql.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "NC Game Reviews",
    description:
      "I worked as a full-stack developer on this bootcamp project. Users can leave reviews on different board games which are fetched from the database server I set up.",
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Project 2",
    description: "",
    tags: [],
    imageUrl: rmtdevImg,
  },
  {
    title: "Project 3",
    description: "",
    tags: [],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Kotlin",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "PostgreSQL",
] as const;
