import { chakra, ChakraProps, UnorderedList } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
const Nav = chakra("nav");

type NavListProps = PropsWithChildren<ChakraProps>;
const NavList = ({ children, ...ChakraProps }: NavListProps) => {
  return (
    <Nav>
      <UnorderedList {...ChakraProps}>{children}</UnorderedList>
    </Nav>
  );
};

export default NavList;
