import { AnimatePresence, motion } from "framer-motion";

import ThemeToggle from "../layout/ThemeToggle";
import Text from "../ui/Text";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";


type Props = {
  view: "home" | "about" | "projects" | "contact";
};

export default function Hero({ view }: Props) {
  return (
    <div className="w-full scroll-smooth overflow-x-hidden h-screen">
      <ThemeToggle />
      <div className="flex flex-col w-full h-screen p-10">
        <header className="fixed m-2 lg:m-5 flex flex-col justify-start items-start w-full">
          <div>
            <Text as="h1" className="text-brand-dark dark:text-brand-light">
              Noah Matsubara
            </Text>
            <Text as="p" className="text-brand-dark dark:text-brand-light">
              Full Stack Web Developer
            </Text>
          </div>
        </header>
        <div className="border-1 border-brand-dark dark:border-brand-light w-full h-full flex flex-col flex-1 overflow-hidden overflow-y-auto">
          <div className="flex justify-center items-center w-full flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex w-full h-full overflow-y-auto"
              >
                {view === "home" && <HomeSection />}
                {view === "about" && <AboutSection />}
                {view === "projects" && <ProjectsSection />}
                {view === "contact" && <ContactSection />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
