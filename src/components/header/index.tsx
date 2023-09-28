import ContactInfor from "@/components/header/headerTop";
import NavBar from "@/components/header/navBar";
import { SectionContext } from "@/context/ScrollSectionContext";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useRef, useEffect, useContext } from "react";

const Header = () => {
  const [isSmallerThan995] = useMediaQuery("(max-width: 995px)");

  return (
    <Box
      as="header"
      pos={"fixed"}
      zIndex={999}
      top={0}
      left={0}
      w={"100vw"}
      minH={isSmallerThan995 ? "70px" : "50px"}
    >
      <ContactInfor />
      <NavBar />
    </Box>
  );
};

export default Header;
