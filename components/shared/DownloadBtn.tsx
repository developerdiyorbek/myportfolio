import { Button } from "@/components/ui/button";
import Link from "next/link";

function DownloadBtn() {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      download={true}
      className="block mb-5 animate-pulse"
      aria-label="download-cv"
    >
      <Button
        size={"lg"}
        variant={"secondary"}
        className="max-md:text-[16px] text-[17px] text-main dark:text-white"
      >
        Download CV
      </Button>
    </Link>
  );
}

export default DownloadBtn;
