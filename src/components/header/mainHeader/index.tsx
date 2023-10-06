import ContactInfor from "@/components/header/mainHeader/headerTop";
import NavBar from "@/components/header/mainHeader/navBar";
import { Box } from "@chakra-ui/react";

const MainHeader = () => {
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

export default MainHeader;
