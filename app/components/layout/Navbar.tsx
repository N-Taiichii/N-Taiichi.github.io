"use client";

import Text from "../ui/Text";

type NavBarProps = {
  setView: (view: "home" | "about" | "projects" | "contact") => void;
};

export default function NavBar({ setView }: NavBarProps) {
  return (
    <div className="fixed top-60 left-12 lg:left-15 z-10 flex justify-center items-center">
      <nav>
        <ol className="space-y-1">
          <li onClick={() => setView("home")}>
            <Text
              as="p" className="text-brand-dark dark:text-brand-light cursor-pointer">
              Home
            </Text>
          </li>
          <li onClick={() => setView("about")}>
            <Text
              as="p" className="text-brand-dark dark:text-brand-light cursor-pointer">
              About
            </Text>
          </li>
          <li onClick={() => setView("projects")}>
            <Text
              as="p" className="text-brand-dark dark:text-brand-light cursor-pointer">
              Projects
            </Text>
          </li>
          <li onClick={() => setView("contact")}>
            <Text
              as="p" className="text-brand-dark dark:text-brand-light cursor-pointer">
              Contact
            </Text>
          </li>
        </ol>
      </nav>
    </div>
  );
}
