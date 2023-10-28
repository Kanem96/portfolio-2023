import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { ExperienceProps } from "@/lib/types";
import { FunctionComponent } from "react";
import { useThemeContext } from "@/context/theme-context";

const TimelineElement: FunctionComponent<ExperienceProps> = ({
  title,
  location,
  description,
  icon,
  date,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { theme } = useThemeContext();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background:
            theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        date={date}
        icon={icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize">{title}</h3>
        <p className="font-normal !mt-0">{location}</p>
        <p className="!front-normal !mt-1 text-slate-700">{description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;
