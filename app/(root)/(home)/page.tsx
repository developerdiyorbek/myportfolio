import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="max-w-6xl w-full container mx-auto mt-[10vh] min-h-[90vh] flex max-md:flex-col-reverse justify-start">
      <div className="w-full md:self-center">
        <h2 className="mb-6 text-slate-500 dark:text-slate-200 text-[22px] md:text-[24px] font-semibold text-center lg:text-left">
          Hello, my name is
          <br />{" "}
          <span className="text-[21px] sm:text-[28px]  text-blue-400 dark:text-white">
            Diyorbek Sulaymonov
          </span>
        </h2>
        <h3 className="mb-8 md:text-[36px] text-[24px] font-bold text-center lg:text-left">
          <span className="text-slate-500 dark:text-slate-200">I am a </span>
          <span className="md:text-[38px] text-[25px] text-blue-400 dark:text-white">
            Frontend developer
          </span>
        </h3>
        <p className="mb-8 sm:text-lg dark:text-slate-200  text-center text-slate-500 lg:text-left">
          I am a professional web developer. I can create FrontEnd part of a
          website. If you interested click the button.
        </p>
        <Link href="/about" className="max-md:text-center block">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="text-lg text-blue-400 dark:text-white max-md:mb-10"
          >
            More about me
          </Button>
        </Link>{" "}
      </div>
      <div className="relative size-64 sm:size-80 md:w-[600px] lg:h-[400px] z-10 max-md:my-5 self-center bg-transparent">
        <Image src={"/myImage.png"} alt="myImage" fill />
      </div>
    </section>
  );
};

export default Home;
