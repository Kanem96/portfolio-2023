import About from "@/components/about";
import ExperienceTimeline from "@/components/experience-timeline";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <ExperienceTimeline></ExperienceTimeline>
    </main>
  );
}
