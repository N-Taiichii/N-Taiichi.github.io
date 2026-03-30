import ThemeToggle from "../layout/ThemeToggle";
import Text from "../ui/Text";

export default function Hero() {
  return (
    <div className="w-full scroll-smooth overflow-x-hidden">
      <ThemeToggle />
      <div className="w-full h-screen p-10">
        <div className="border-1 border-brand-dark dark:border-brand-light w-full h-full">
          <header className="m-2 lg:m-5 w-full flex flex-col justify-start items-start">
            <div>
              <Text as="h1" className="text-brand-dark dark:text-brand-light">
                Noah Matsubara
              </Text>
              <Text as="p" className="text-brand-dark dark:text-brand-light">
                Full Stack Web Developer
              </Text>
            </div>
          </header>
          <div className="flex flex-col justify-end items-end w-full fixed bottom-5 right-5">
            <div className="flex justify-end items-end w-full">
              <div className="w-40 text-right m-8 lg:m-10">
                <Text
                  as="p"
                  className="text-brand-dark dark:text-brand-light font-thin"
                >
                  I see web design as a form of art, and am looking to
                  join a team that shares that perspective. I’m driven to
                  contribute to thoughtful, fulfilling work where I can add
                  value with my expertise while continuing to learn from others
                  and grow into a more well-rounded developer.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
