import NavBar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Text from "./components/ui/Text";

export default function Home() {
  return (
    <div className="center-flex flex-col w-full scroll-smooth overflow-x-hidden overflow-x-hidden">
      <div className="flex flex-col w-full justify-start">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}
