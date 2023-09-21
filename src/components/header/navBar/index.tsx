import { Flex, Icon, Image, Link, useMediaQuery } from "@chakra-ui/react";
import Wrapper from "@/components/elements/Wrapper";
import CustomButton from "@/components/elements/button";
import NavMenu from "./NavMenu";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isSmallerThan995, isLargerThan995, isSmallerThan1200] = useMediaQuery([
    "(max-width: 995px)",
    "(min-width: 995px)",
    "(max-width: 1200px)",
  ]);

  return (
    <Wrapper
      py={2}
      px={isSmallerThan995 ? "10px" : 0}
      m={isSmallerThan995 ? "0" : "0 auto"}
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
        display={isSmallerThan995 ? "none" : "block"}
        justifyContent={"space-between"}
      >
        <NavMenu />
        <CustomButton ml={"60px"} p={"12px 14px"} w={"150px"}>
          Đăng nhập
        </CustomButton>
      </Flex>
      {/* button to toggle for responsive menu mobile */}
      {isSmallerThan995 && <Icon as={RxHamburgerMenu} boxSize={8} />}
    </Wrapper>
  );
};

export default NavBar;
