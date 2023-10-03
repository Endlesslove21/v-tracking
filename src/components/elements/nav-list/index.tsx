import { chakra, BoxProps, UnorderedList } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
const Nav = chakra("nav");

type NavListProps = PropsWithChildren<BoxProps>;
const NavList = ({ children, ...BoxProps }: NavListProps) => {
  return (
    <Nav>
      <UnorderedList ml={0} {...BoxProps}>
        {children}
      </UnorderedList>
    </Nav>
  );
};

export default NavList;
