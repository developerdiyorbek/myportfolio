import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { aboutInformation, backEndKnowlodge, knowledge } from "@/constants";
import InformationItem from "../_components/InformationItem";
import KnowlodgeItem from "../_components/KnowlodgeItem";
import DownloadBtn from "@/components/shared/DownloadBtn";

export const metadata: Metadata = {
  title: "About me",
};

const About = () => {
  return (
    <section className="w-full mt-[10vh] min-h-[90vh]">
      <div className="inline-block mb-4 mt-4 md:mb-8">
        <h1 className="text-[25px] text-main md:text-[35px] dark:text-white font-semibold">
          About me
        </h1>
        <Separator />
      </div>
      <h2 className="font-medium text-[24px] md:text-[28px] text-muted-foreground mb-2 md:mb-4">
        I am a{" "}
        <span className="text-main dark:text-white">Frontend Developer</span>
      </h2>
      <p className="text-[16px] md:text-[17px] mb-10 md:mb-16 text-muted-foreground">
        Hello, my name is Diyorbek and I am a Frontend developer with a strong
        educational background in Software Engineering. I have completed the
        Frontend React JS developer course at Najot Ta&apos;lim and obtained a
        certification. Additionally, I hold a Bachelor&apos;s degree in Software
        Engineering from TUIT, where I achieved an impressive GPA of 4.1 out of
        5. My language proficiency includes English (B2 level), Russian (A1
        level), and Uzbek (Native). I am eager to apply my knowledge and skills
        as a Frontend developer to contribute effectively to your team.
      </p>

      <ul className="list-none max-w-[800px] grid md:grid-cols-2  gap-3 mb-7">
        {aboutInformation.map(({ id, title }) => (
          <InformationItem key={id} title={title} />
        ))}
      </ul>

      <div className="inline-block mb-4 md:mb-8">
        <h3 className="text-[25px] text-muted-foreground md:text-[35px] font-semibold">
          Skills
        </h3>
        <Separator />
      </div>

      <h3 className="text-[18px] mb-2 md:mb-4 text-main dark:text-white md:text-[28px] font-semibold">
        Frontend
      </h3>

      <ul className="grid md:grid-cols-2 gap-2 mb-5 md:mb-8">
        {knowledge.map(({ id, title }) => (
          <KnowlodgeItem key={id} title={title} />
        ))}
      </ul>

      <h3 className="text-[18px] text-main dark:text-white md:text-[28px] mb-2 md:mb-4 font-semibold">
        Backend
      </h3>

      <ul className="grid md:grid-cols-2 gap-2 mb-5 md:mb-8">
        {backEndKnowlodge.map(({ id, title }) => (
          <KnowlodgeItem key={id} title={title} />
        ))}
      </ul>

      <DownloadBtn />
    </section>
  );
};

export default About;
