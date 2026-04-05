"use client";
import { useEffect, useState } from "react";

import Text from "../ui/Text";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only change theme if user hasn't manually toggled
      setTheme(e.matches ? "dark" : "light");
    };

    // Older browsers may use addListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);
  
  useEffect(() => {
    const root = document.documentElement; // or document.body
    root.classList.toggle("dark", theme === "dark");
    if (theme === "dark") {
      root.style.setProperty("--background", "#010202");
      root.style.setProperty("--foreground", "#FFFDED");
    } else {
      root.style.setProperty("--background", "#FFFDED");
      root.style.setProperty("--foreground", "#010202");
    }
  }, [theme]);
  return (
    <div className="fixed z-10 -rotate-90 bottom-30 -left-10 cursor-pointer">
      <div className="flex gap-x-5">
        {/* Light theme toggle */}
        <button
          onClick={() => setTheme("light")}
          className="flex justify-center items-center gap-x-3 cursor-pointer"
        >
          <div
            className={`w-[8px] h-[8px] border border-brand-dark dark:border-brand-light ${theme === "light" ? "bg-brand-dark" : ""}`}
          />
          <Text as="span" className="text-brand-dark dark:text-brand-light">LIGHT</Text>
        </button>
        {/* Dark theme toggle */}
        <button
          onClick={() => setTheme("dark")}
          className="flex justify-center items-center gap-x-3 cursor-pointer"
        >
          <div
            className={`w-[8px] h-[8px] border border-brand-dark dark:border-brand-light ${theme === "dark" ? "bg-brand-light" : ""}`}
          />
          <Text as="span" className="text-brand-dark dark:text-brand-light">DARK</Text>
        </button>
      </div>
    </div>
  );
}
