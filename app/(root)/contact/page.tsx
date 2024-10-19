import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "../_components/ContactForm";
import Link from "next/link";
import { socialLinks } from "@/constants";
import SocialItem from "@/components/shared/SocialItem";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section className="w-full mt-[10vh] md:mt-[20vh] max-md:min-h-[90vh] flex max-md:items-center mb-4">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-7 md:gap-4 text-muted-foreground">
        <div className="flex flex-col">
          <h1 className="text-3xl">Contact Diyorbek</h1>
          <p className="mt-2 mb-4">
            I am here to help and answer any question you might have. I look
            forward to hearing from you
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <SocialItem
                key={item.id}
                link={item.link}
                Icon={item.icon}
                color={item.color}
                target={item.target}
              />
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
