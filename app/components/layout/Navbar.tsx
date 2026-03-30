import Text from "../ui/Text";

export default function NavBar() {
  return (
    <div className="fixed top-60 left-12 lg:left-15 z-10 flex justify-center items-center">
      <nav>
        <ol>
          <li>
            <Text as="p" className="text-brand-dark dark:text-brand-light">Home</Text>
          </li>
          <li>
            <Text as="p" className="text-brand-dark dark:text-brand-light">About</Text>
          </li>
          <li>
            <Text as="p" className="text-brand-dark dark:text-brand-light">Projects</Text>
          </li>
          <li>
            <Text as="p" className="text-brand-dark dark:text-brand-light">Contact</Text>
          </li>
        </ol>
      </nav>
    </div>
  );
}
