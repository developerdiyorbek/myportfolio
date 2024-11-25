import { Separator } from "@/components/ui/separator";
import { projects } from "@/constants/projects";
import { Metadata } from "next";
import PortfolioItem from "../_components/PortfolioItem";

export const metadata: Metadata = {
  title: "Portfolio",
};

const Portfolio = () => {
  return (
    <section className="w-full mt-[10vh] min-h-[90vh]">
      <div className="inline-block mb-8 mt-4 md:mb-10">
        <h1 className="text-[25px] text-main dark:text-white md:text-[35px] font-semibold">
          My works
        </h1>
        <Separator />
      </div>

      <div className="grid sm:grid-cols-2 items-center lg:grid-cols-3 gap-8 mb-5 md:mb-10">
        {projects.map((project) => (
          <PortfolioItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
