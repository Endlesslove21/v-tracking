import {
  Flex,
  Icon,
  Image,
  Link,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Wrapper from "@/components/elements/Wrapper";
import CustomButton from "@/components/elements/button";
import NavMenu from "./NavMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import LoginModal from "../modal/LoginModal";
import MobileNavMenu from "./MobileNavMenu";

const NavBar = () => {
  const [isSmallerThan995, isLargerThan995, isSmallerThan1200] = useMediaQuery([
    "(max-width: 995px)",
    "(min-width: 995px)",
    "(max-width: 1200px)",
  ]);
  const {
    isOpen: isOpenLoginModal,
    onClose: onCloseLoginModal,
    onOpen: onOpenLoginModal,
  } = useDisclosure();
  const { isOpen: isOpenMobileNavMenu, onToggle: onToggleMobileNavMenu } =
    useDisclosure();

  return (
    <>
      {/* header */}
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
          display={isSmallerThan995 ? "none" : "flex"}
          justifyContent={"space-between"}
        >
          <NavMenu />
          <CustomButton
            onClick={onOpenLoginModal}
            ml={"60px"}
            p={"12px 14px"}
            w={"150px"}
          >
            Đăng nhập
          </CustomButton>
        </Flex>

        {/* responsive menu mobile button  */}
        {isSmallerThan995 && (
          <Icon
            onClick={onToggleMobileNavMenu}
            as={isOpenMobileNavMenu ? AiOutlineClose : RxHamburgerMenu}
            boxSize={7}
            mb={1}
          />
        )}
      </Wrapper>

      {/* show modal login */}
      <LoginModal isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />

      {/* show nav menu for mobile  */}
      {!isLargerThan995 && (
        <MobileNavMenu
          onClick={onOpenLoginModal}
          isOpen={isOpenMobileNavMenu}
        />
      )}
    </>
  );
};

export default NavBar;
