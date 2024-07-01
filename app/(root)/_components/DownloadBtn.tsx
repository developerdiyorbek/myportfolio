import { Button } from "@/components/ui/button";
import Link from "next/link";

function DownloadBtn() {
  return (
    <Link href="/myresume.pdf" download target="_blank" className="block mb-5">
      <Button size={"lg"} className="text-[16px]">
        Download CV
      </Button>
    </Link>
  );
}

export default DownloadBtn;
