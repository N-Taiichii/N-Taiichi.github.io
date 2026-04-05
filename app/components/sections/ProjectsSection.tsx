import Text from "../ui/Text";

export default function ProjectsSection() {
  return (
    <div className="flex justify-end items-end m-2 lg:m-5 w-full">
      <div className="flex flex-col items-center justify-center w-[80%] lg:w-[50%] space-y-5">
        <div className="text-right flex flex-col justify-end items-end w-full">
          <a href="https://www.mkmdesigninc.ca" target="_blank">
            <Text as="h1" className="text-right w-full">
              MKM DESIGN
            </Text>
            <Text as="p" className="text-right w-full">
              2025.12 / Design & Dev
            </Text>
          </a>
        </div>
        <div className="text-right flex flex-col justify-end items-end w-full">
          <a href="https://www.slatedigitalstudio.com" target="_blank">
            <Text as="h1" className="text-right w-full">
              SLATE DIGITAL STUDIO
            </Text>
            <Text as="p" className="text-right w-full">
              2025.12 / Design & Dev
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
