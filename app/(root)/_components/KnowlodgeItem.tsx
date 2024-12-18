import { Separator } from "@/components/ui/separator";
import { Props } from "@/types";
import { CircleCheck } from "lucide-react";

function KnowlodgeItem({ title }: Props) {
  return (
    <li className="flex flex-col gap-2 text-muted-foreground break-all">
      <div className="flex justify-between pe-2 items-center">
        <p>{title}</p>
        <CircleCheck
          size={20}
          className="text-main dark:text-muted-foreground"
        />
      </div>
      <Separator className="h-1 rounded" />
    </li>
  );
}

export default KnowlodgeItem;
