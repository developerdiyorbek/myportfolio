import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "../_components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section className="w-full mt-[10vh] md:mt-[20vh] max-md:min-h-[90vh] flex max-md:items-center mb-4">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-7 md:gap-4 text-muted-foreground">
        <div className="flex flex-col">
          <h1 className="text-3xl">Contact Diyorbek</h1>
          <p className="mt-2">
            I am here to help and answer any question you might have. I look
            forward to hearing from you
          </p>

          <Link
            href={"mailto: diyorbeksulaymonov70@gmail.com"}
            className="mt-12 flex items-center gap-3"
          >
            <Mail className="w-4 h-4 animate-pulse" />
            <p className="text-sm">diyorbeksulaymonov70@gmail.com</p>
          </Link>
          <Link
            href={"tel:+998936221907"}
            className="mt-2 flex items-center gap-3"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <p className="text-sm">+998 93 622 19 07</p>
          </Link>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
