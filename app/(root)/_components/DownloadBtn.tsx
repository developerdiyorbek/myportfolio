import { Button } from "@/components/ui/button";
import Link from "next/link";

function DownloadBtn() {
  return (
    <Link
      href="/myresume.pdf"
      target="_blank"
      download
      className="block mb-5 animate-pulse"
    >
      <Button size={"lg"} className="text-[16px]">
        Download CV
      </Button>
    </Link>
  );
}

export default DownloadBtn;
