"use client";

import { useState } from "react";

import NavBar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Text from "./components/ui/Text";
import HeroContent from "./components/sections/HeroContent";

type view = "home" | "about" | "projects" | "contact";

export default function Home() {
  const [view, setView] = useState<View>("home");

  return (
    <div className="center-flex flex-col w-full scroll-smooth overflow-x-hidden">
      <div className="flex flex-col w-full justify-start">
        <NavBar view={view} setView={setView} />
        <Hero view={view} />
      </div>
    </div>
  );
}
