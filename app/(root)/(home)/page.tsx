import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diyorbek Sulaymonov",
  description: "Diyorbek's portfolio",
  openGraph: {
    title: "Diyorbek Sulaymonov",
    description: "Diyorbek's portfolio",
    images:
      "https://lh3.googleusercontent.com/pw/AP1GczMY8bWabI0Pb2d0rtRXQisIjewIxleTbbjssR6KUAjH02ipnrf1oNYec3AGUonA7PcIxI6ew0DFz90DryXOJdpJpXQNfaRER8pGYsHmzJ3IUhRIXacOJ6rONf1RKG0ZQZfof40dlx_xdWhNyI1a5JwW=w960-h1280-s-no-gm?authuser=0",
  },
};

const Home = () => {
  return (
    <section className="w-full  mt-[10vh] min-h-[90vh] flex max-lg:flex-col-reverse home-page">
      <div className="w-full md:self-center">
        <h2 className="mb-6 text-muted-foreground text-[22px] md:text-[24px] font-semibold text-center lg:text-left">
          Hello, my name is
          <br />{" "}
          <span className="text-[21px] sm:text-[28px]  text-blue-400 dark:text-white">
            Diyorbek Sulaymonov
          </span>
        </h2>
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
