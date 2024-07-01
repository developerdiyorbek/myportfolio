import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
}

function InformationItem({ title }: Props) {
  return (
    <li className="flex items-center">
      <ChevronRight className="size-5 text-muted-foreground" />
      <span className="text-muted-foreground">{title}</span>
    </li>
  );
}

export default InformationItem;
