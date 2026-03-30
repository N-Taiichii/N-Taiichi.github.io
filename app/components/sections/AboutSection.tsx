import Text from "../ui/Text";

export default function AboutSection() {
  return (
    <div className="flex justify-end items-end m-2 lg:m-5">
      <div className="flex flex-col items-center justify-center w-[80%] lg:w-[60%] space-y-5">
        {/* Professional Details */}
        <div className="flex flex-col space-y-2 text-left mt-30">
          <Text as="h2" className="text-brand-accent">
            Professional/Academic Background
          </Text>
          <Text as="p">
            I work as a Systems Analyst and Full-Stack Developer at Fresh Focus
            Media, where I build client-facing websites and contribute to
            internal ERP platform development using PHP, WordPress, and MySQL. I
            also help plan and coordinate system enhancements, translating
            client requirements into effective technical solutions.
          </Text>
          <Text as="p">
            I earned a Bachelor’s degree in Computer Science from the University
            of Jamestown, graduating with a 3.7 GPA and a strong technical
            foundation. My interest in programming grew into a passion for
            building impactful digital products, supported by the discipline and
            teamwork I developed as a student-athlete.
          </Text>
        </div>
        {/* Personal Details */}
        <div className="flex flex-col space-y-2 text-right">
          <Text as="h2" className="text-brand-accent">
            Personal Background
          </Text>
          <Text as="p">
            I currently live in Calgary, Alberta with my partner, Katherine, and
            our puppy, Rhubarb. Outside of work, I spend my time playing
            volleyball, bouldering, or "enjoying" games like Counter-Strike and
            Overwatch.
          </Text>
          <Text as="p">
            I have been learning how to play tennis, guitar, piano, and disc
            golf for the past few years as well. I am surrounded by great
            friends that like to try news things as much as myself, so if I'm
            not doing any of the above, I'm probably off trying to find another
            hobby.
          </Text>
        </div>
      </div>
    </div>
  );
}
