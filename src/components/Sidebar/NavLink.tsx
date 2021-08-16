import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";
import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  title: string;
  href: string;
}

export function NavLink({ icon, title, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}