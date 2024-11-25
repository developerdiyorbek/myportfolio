"use client";

import { Card, CardContent } from "@/components/ui/card";
import { IProject } from "@/types";
import { Code, LinkIcon } from "lucide-react";
import Link from "next/link";
import CustomImage from "./CustomImage";

function PortfolioItem(project: IProject) {
  return (
    <Card className="w-full">
      <CardContent className="relative h-56 w-full">
        <CustomImage
          src={project.image}
          alt={project.name}
          className="rounded-t"
        />
      </CardContent>
      <div className="my-4 flex flex-col space-y-2 px-2 text-muted-foreground">
        <h3 className="line-clamp-1 text-2xl text-center dark:text-white text-main">
          {project.name}
        </h3>
        <p className="text-center mb-4">{project.technology}</p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href={project.codeUrl}
            target="_blank"
            aria-label="codeUrl"
            className="hover:scale-110 transition-all duration-200"
          >
            <Code />
          </Link>
          <Link
            href={project.websiteUrl}
            target="_blank"
            title="Live Preview"
            aria-label="websiteUrl"
            className="hover:scale-110 transition-all duration-200"
          >
            <LinkIcon />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default PortfolioItem;
