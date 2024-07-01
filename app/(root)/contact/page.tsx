import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section className="w-full mt-[10vh] min-h-[90vh]">
      <div className="inline-block mb-8 mt-4 md:mb-20">
        <h1 className="text-[25px] text-muted-foreground md:text-[35px] font-semibold">
          Contact
        </h1>
        <Separator />
      </div>
    </section>
  );
};

export default Contact;
