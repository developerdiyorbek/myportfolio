import { Card, CardContent } from "@/components/ui/card";
import { Code, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProject {
  id: number;
  name: string;
  codeUrl: string;
  websiteUrl: string;
  technology: string;
  image: string;
}

function PortfolioItem(project: IProject) {
  return (
    <Card className="w-full">
      <CardContent className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="rounded-t"
        />
      </CardContent>
      <div className="my-4 flex flex-col space-y-2 px-2 text-muted-foreground">
        <h3 className="line-clamp-1 text-2xl text-center">{project.name}</h3>
        <p className="text-center mb-4">{project.technology}</p>

        <div className="flex items-center justify-center gap-4">
          <Link href={project.codeUrl} target="_blank">
            <Code />
          </Link>
          <Link href={project.websiteUrl} target="_blank" title="Live Preview">
            <LinkIcon />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default PortfolioItem;
