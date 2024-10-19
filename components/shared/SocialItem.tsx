import Link from "next/link";
import { IconType } from "react-icons/lib";

interface Props {
  Icon: IconType;
  link: string;
  color: string;
  target: string;
}

function SocialItem({ link, target, Icon, color }: Props) {
  return (
    <Link
      href={link}
      target={target}
      className={`${color} p-[10px] rounded hover:opacity-70 transition-opacity duration-150`}
    >
      <Icon size={20} />
    </Link>
  );
}

export default SocialItem;
