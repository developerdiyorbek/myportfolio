import { Button } from "@/components/ui/button";
import Link from "next/link";

function DownloadBtn() {
  return (
    <Link
      href="/Resume.pdf"
      target="_blank"
      download={true}
      className="block mb-5 animate-pulse"
      aria-label="download-cv"
    >
      <Button size={"lg"} className="text-[16px]">
        Download CV
      </Button>
    </Link>
  );
}

export default DownloadBtn;
