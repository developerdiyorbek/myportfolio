import {
  Home,
  MessageSquare,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";
import { FaTelegram } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export const navLinks = [
  { name: "Home", route: "/", icon: Home },
  { name: "About", route: "/about", icon: UserRound },
  { name: "Portfolio", route: "/portfolio", icon: BriefcaseBusiness },
  { name: "Contact", route: "/contact", icon: MessageSquare },
];

const myAge = new Date().getFullYear() - 2004;

export const aboutInformation = [
  {
    id: 1,
    title: "Birthday: 7 Sentabr 2004",
  },
  {
    id: 2,
    title: "Tashkent, Uzbekistan",
  },
  {
    id: 3,
    title: "Phone: +998 93 622 19 07",
  },
  {
    id: 4,
    title: `Age: ${myAge}`,
  },
  {
    id: 5,
    title: "Degree: Bachelor(currently)",
  },
  {
    id: 6,
    title: "Email: diyorbeksulaymonov70@gamil.com",
  },
  {
    id: 7,
    title: "Freelance: Available",
  },
];

export const knowledge = [
  {
    id: 8,
    title: "HTML",
  },
  {
    id: 9,
    title: "CSS (SASS/SCSS)",
  },
  {
    id: 24,
    title: "Tailwind CSS",
  },
  {
    id: 25,
    title: "Material UI",
  },
  {
    id: 26,
    title: "Bootstrap",
  },
  {
    id: 27,
    title: "Shadcn UI",
  },
  {
    id: 10,
    title: "JavaScript",
  },
  {
    id: 11,
    title: "TypeScript",
  },
  {
    id: 12,
    title: "React JS",
  },
  {
    id: 13,
    title: "Next JS",
  },
  {
    id: 14,
    title: "Redux/Redux Toolkit",
  },
  {
    id: 15,
    title: "Zustand",
  },

  {
    id: 16,
    title: "Tanstack Query",
  },
  {
    id: 17,
    title: "Axios",
  },
  {
    id: 18,
    title: "Git/Github/GitLab",
  },
  {
    id: 19,
    title: "RestAPI",
  },
  {
    id: 20,
    title: "React-hook-form",
  },
  {
    id: 21,
    title: "Formik",
  },
  {
    id: 22,
    title: "Firebase",
  },
  {
    id: 23,
    title: "SEO(Search engine optimization)",
  },
  {
    id: 24,
    title: "React-i18next",
  },
  {
    id: 25,
    title: "Next-intl",
  },
];

export const backEndKnowlodge = [
  {
    id: 1,
    title: "Node JS (basic)",
  },
  {
    id: 2,
    title: "Express JS (basic)",
  },
  {
    id: 3,
    title: "MongoDB (basic)",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaTelegram,
    link: "https://t.me/DiyorbekDeveloper",
    color: "bg-telegram",
    target: "_blank",
  },
  {
    id: 3,
    icon: FaYoutube,
    link: "https://www.youtube.com/@DiyorbekDeveloper",
    color: "bg-youtube",
    target: "_blank",
  },
  {
    id: 4,
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=61566113841324",
    color: "bg-facebook",
    target: "_blank",
  },
  {
    id: 5,
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/diyorbeksulaymonov",
    color: "bg-linkedIn",
    target: "_blank",
  },
  {
    id: 6,
    icon: MdEmail,
    link: "mailto:diyorbeksulaymonov70@gmail.com",
    color: "bg-email",
    target: "_blank",
  },
  {
    id: 7,
    icon: FaInstagram,
    link: "https://www.instagram.com/djurabayev1ch",
    color: "bg-instagram",
    target: "_blank",
  },
];
