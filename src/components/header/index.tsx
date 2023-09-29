import ContactInfor from "@/components/header/headerTop";
import NavBar from "@/components/header/navBar";
import { Box, useMediaQuery } from "@chakra-ui/react";

const Header = () => {
  const [isSmallerThan995] = useMediaQuery("(max-width: 995px)");

  return (
    <Box
      as="header"
      pos={"fixed"}
      zIndex={999}
      top={-1}
      w={"100vw"}
      minH={isSmallerThan995 ? "70px" : "50px"}
    >
      <ContactInfor />
      <NavBar />
    </Box>
  );
};

export default Header;
