import ContactInfor from "@/components/header/headerTop";
import NavBar from "@/components/header/navBar";
import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      pos={"fixed"}
      zIndex={999}
      top={-1}
      w={"100vw"}
      minH={{ base: "70px", lg: "50px" }}
    >
      <ContactInfor />
      <NavBar />
    </Box>
  );
};

export default Header;
