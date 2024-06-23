import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

export type NavLink = {
  href: string;
  target?: string;
  label?: string;
};

const navLinks: ReadonlyArray<NavLink> = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <Flex gap={"3"} p={"3"} justify={"between"} px={"6"}>
      {/* <Image src="/logo.svg" alt="logo" width={128} height={128} /> */}
      <Text weight={"bold"}>DAVIN</Text>
      <Flex direction={"row"} gap={"4"} align={"center"}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a href="https://github.com/davinzaki/" target="_blank">
          <GitHubLogoIcon />
        </a>
        <a href="https://www.instagram.com/davinzakip/" target="_blank">
          <InstagramLogoIcon />
        </a>
        <a href="https://www.linkedin.com/in/davinzaki/" target="_blank">
          <LinkedInLogoIcon />
        </a>
      </Flex>
    </Flex>
  );
}
