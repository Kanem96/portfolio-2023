"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      name="theme toggle"
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-slate-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeToggle;
