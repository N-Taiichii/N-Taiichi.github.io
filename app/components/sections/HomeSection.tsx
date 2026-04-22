import Text from "../ui/Text";

export default function HomeSection() {
  return (
    <div className="flex flex-col justify-end items-end w-full fixed bottom-5 right-5">
      <div className="flex justify-end items-end w-full">
        <div className="w-50 lg:w-30 text-right m-8 lg:m-10">
          <Text
            as="p"
            className="text-brand-dark dark:text-brand-light font-thin"
          >
            Web design is art. In search of others that feel the same.
          </Text>
        </div>
      </div>
    </div>
  );
}
