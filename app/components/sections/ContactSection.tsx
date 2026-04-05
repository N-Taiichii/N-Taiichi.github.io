import Text from "../ui/Text";

export default function ContactSection() {
  return (
    <div className="flex justify-center items-center m-2 lg:m-5 w-full">
      <div className="flex flex-col items-center justify-center w-[80%] lg:w-[60%] gap-y-20 gap-x-10">
        <div className="flex flex-col space-y-0 justify-center items-center w-full">
          <a href="https://github.com/N-Taiichii" target="_blank" className="relative left-0 hover:text-brand-accent transition ease-in-out duration-300"><Text as="p">https://github.com/N-Taiichii</Text></a>
        </div>
        <div className="flex flex-col space-y-0 justify-center items-center w-full">
          <a href="https://www.linkedin.com/in/noahmatsubara/" target="_blank" className="relative left-4 hover:text-brand-accent transition ease-in-out duration-300"><Text as="p">https://www.linkedin.com/in/noahmatsubara/</Text></a>
        </div>
        <div className="flex flex-col space-y-0 justify-center items-center w-full">
          <a href="mailto:noah.matsubara15@gmail.com" target="_blank" className="relative left-0 hover:text-brand-accent transition ease-in-out duration-300"><Text as="p">noah.matsubara15@gmail.com</Text></a>
        </div>
        <div className="flex flex-col space-y-0 justify-center items-center w-full">
          <a href="/resume.pdf" target="_blank" className="relative left-4 hover:text-brand-accent transition ease-in-out duration-300"><Text as="p">/resume.pdf/</Text></a>
        </div>
      </div>
    </div>
  );
}
