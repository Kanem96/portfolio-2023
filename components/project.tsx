"use client";

import React, { FunctionComponent, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectProps } from "@/lib/types";

const Project: FunctionComponent<ProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group bg-slate-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 sm:even:pl-8 hover:bg-slate-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[26rem]">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="mt-2 leading-relaxed text-slate-700 dark:text-white/70">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sn:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={`Project ${title}`}
        width={200}
        height={200}
        quality={95}
        priority={true}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 
        transition
        group-hover:scale-[1.04]

        group-hover:-translate-x-3 group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2"
      />
    </motion.section>
  );
};

export default Project;
