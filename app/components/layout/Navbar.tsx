"use client";

import Text from "../ui/Text";

type NavBarProps = {
  view: "home" | "about" | "projects" | "contact";
  setView: (view: "home" | "about" | "projects" | "contact") => void;
};

export default function NavBar({ view, setView }: NavBarProps) {
  const NAV_LINKS = ["home", "about", "projects", "contact"] as const;

  return (
    <div className="fixed top-30 lg:top-50 left-12 lg:left-15 z-10 flex justify-center items-center">
      <nav>
        <ol className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link} onClick={() => setView(link)}>
              <Text
                as="p"
                className={`cursor-pointer transition ease-in-out duration-300
                ${view === link ? "text-brand-accent" : "text-brand-dark dark:text-brand-light"}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Text>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
