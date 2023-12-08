import { chakra, UnorderedList, ListProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
const Nav = chakra("nav");

type NavListProps = PropsWithChildren<ListProps>;
const NavList = ({ children, ...rest }: NavListProps) => {
  return (
    <Nav>
      <UnorderedList ml={0} {...rest}>
        {children}
      </UnorderedList>
    </Nav>
  );
};

export default NavList;
