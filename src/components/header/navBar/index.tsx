import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Wrapper from "@/components/elements/wrapper";
import CustomButton from "@/components/elements/button";
import NavMenu from "./NavMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavMenu from "./MobileNavMenu";
import DropdownMenu from "@/components/elements/dropdown-menu";

const NavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isSmallerThan995, isLargerThan995, isSmallerThan1200] = useMediaQuery([
    "(max-width: 995px)",
    "(min-width: 995px)",
    "(max-width: 1200px)",
  ]);
  const { onOpen } = useDisclosure();
  // handle navmenu bg to white color when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleCloseMobleNavMenu = () => {
    setIsActive(false);
  };
  const handleOpenNavMenu = () => {
    setIsActive(true);
  };

  return (
    <>
      {/* header */}
      <Box
        bgColor={
          isSmallerThan995 ? "white" : isScrolling ? "#fff" : "transparent"
        }
        boxShadow={isScrolling ? "md" : "none"}
      >
        <Wrapper
          pb={2}
          pt={3}
          px={isSmallerThan995 ? "15px" : 0}
          maxW={{ lg: "970px", xl: "1170px" }}
          justifyContent={"space-between"}
          flexDir={isSmallerThan1200 && isLargerThan995 ? "column" : "row"}
          alignItems={"center"}
        >
          {/* logo */}
          <Link href="" display={"block"}>
            <Image src={"/assets/imgs/logo-n.png"} />
          </Link>
          {/* nav menu list */}
          <Flex
            display={isSmallerThan995 ? "none" : "flex"}
            justifyContent={"space-between"}
          >
            <NavMenu />
            <CustomButton onClick={onOpen} ml={"60px"} w={"150px"}>
              Đăng nhập
            </CustomButton>
          </Flex>

          {/* responsive menu mobile button  */}
          {isSmallerThan995 && (
            <Icon
              onClick={isActive ? handleCloseMobleNavMenu : handleOpenNavMenu}
              as={isActive ? AiOutlineClose : RxHamburgerMenu}
              boxSize={7}
              mb={1}
            />
          )}
        </Wrapper>
        {/* show nav menu for mobile  */}
        <Box display={isLargerThan995 ? "none" : "block"}>
          <DropdownMenu
            sx={{ top: "auto" }}
            isActive={isActive}
            height={"100vh"}
          >
            <MobileNavMenu onClick={onOpen} onClose={handleCloseMobleNavMenu} />
          </DropdownMenu>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
