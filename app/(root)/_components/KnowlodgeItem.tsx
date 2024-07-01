import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";

interface Props {
  title: string;
}

function KnowlodgeItem({ title }: Props) {
  return (
    <li className="flex flex-col gap-2 text-muted-foreground">
      <div className="flex justify-between pe-2 items-center">
        <p>{title}</p>
        <CircleCheck size={20} />
      </div>
      <Separator className="h-1 rounded" />
    </li>
  );
}

export default KnowlodgeItem;
