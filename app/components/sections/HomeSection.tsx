import Text from "../ui/Text";

export default function HomeSection() {
  return (
    <div className="flex flex-col justify-end items-end w-full fixed bottom-5 right-5">
      <div className="flex justify-end items-end w-full">
        <div className="w-50 lg:w-160 text-right m-8 lg:m-10">
          <Text
            as="p"
            className="text-brand-dark dark:text-brand-light font-thin"
          >
            I see web design as a form of art, and am looking to join a team
            that shares that perspective. Looking to contribute to thoughtful,
            fulfilling work where I can add value with my expertise while
            continuing to learn from others and grow into a more well-rounded
            developer.
          </Text>
        </div>
      </div>
    </div>
  );
}
