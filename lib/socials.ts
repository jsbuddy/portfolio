import type { IconType } from "react-icons";
import {
  TbBrandCodepen,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTelegram,
  TbBrandTwitter,
} from "react-icons/tb";

export type Social = {
  label: string;
  href: string;
  icon: IconType;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/jsbuddy", icon: TbBrandGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/judecodes/",
    icon: TbBrandLinkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/judecodes",
    icon: TbBrandTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/judecodes",
    icon: TbBrandInstagram,
  },
  { label: "Telegram", href: "https://t.me/judecodes", icon: TbBrandTelegram },
  {
    label: "CodePen",
    href: "https://codepen.io/judecodes",
    icon: TbBrandCodepen,
  },
];
