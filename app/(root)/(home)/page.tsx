import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="w-full  mt-[10vh] min-h-[90vh] flex max-lg:flex-col-reverse home-page">
      <div className="w-full md:self-center">
        <h1 className="mb-6 text-muted-foreground text-[22px] md:text-[24px] font-semibold text-center lg:text-left">
          Hello, my name is
          <br />{" "}
          <span className="text-[21px] sm:text-[28px]  text-blue-400 dark:text-white">
            Diyorbek Sulaymonov
          </span>
        </h1>
        <h3 className="mb-8 md:text-[36px] text-[24px] font-bold text-center lg:text-left">
          <span className="text-muted-foreground">I am a </span>
          <span className="md:text-[38px] text-[25px] text-blue-400 dark:text-white">
            Frontend developer
          </span>
        </h3>
        <p className="mb-8 sm:text-lg  text-center  lg:text-left text-muted-foreground">
          I am a professional web developer. I can create FrontEnd part of a
          website. If you interested click the button.
        </p>
        <Link href="/about" className="max-lg:text-center block">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="text-lg text-blue-400 dark:text-white max-md:mb-10 animate-pulse"
          >
            More about me
          </Button>
        </Link>{" "}
      </div>
      <div className="relative size-64 sm:size-80 lg:w-[600px] lg:h-[400px] z-10 max-lg:my-5 self-center bg-transparent">
        <Image src={"/myImage.png"} alt="myImage" fill />
      </div>
    </section>
  );
};

export default Home;
