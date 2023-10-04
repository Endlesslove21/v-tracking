import { PropsWithChildren } from "react";
import NavList from "../nav-list";
import { BoxProps } from "@chakra-ui/react";

type Props = PropsWithChildren<BoxProps> & {
  isActive: boolean;
  height: string;
};

const DropdownMenu = ({ isActive, height, children, ...BoxProp }: Props) => {
  return (
    <NavList
      {...BoxProp}
      listStyleType={"none"}
      pos={"absolute"}
      left={0}
      zIndex={999}
      top={9}
      visibility={isActive ? "visible" : "hidden"}
      transition={"all 0.2s ease"}
      w={"100%"}
      maxH={isActive ? height : 0}
      overflowY={isActive ? "clip" : "hidden"}
    >
      {children}
    </NavList>
  );
};

export default DropdownMenu;
