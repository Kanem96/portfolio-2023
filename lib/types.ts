import { experiencesData, links, projectsData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectProps = (typeof projectsData)[number];

export type ExperienceProps = (typeof experiencesData)[number];
