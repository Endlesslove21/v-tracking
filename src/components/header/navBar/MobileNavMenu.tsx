import {
  Box,
  Center,
  Collapse,
  Flex,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import NavMenu from "./NavMenu";
import CustomButton from "@/components/elements/button";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
type Props = {
  isOpen: boolean;
  onClick?: () => void;
};

const MobileNavMenu = ({ isOpen, onClick }: Props) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Box flexDir={"column"} bgColor={"#fff"} w={"100%"} h={"100vh"}>
        <NavMenu />
        <Center>
          <CustomButton onClick={onClick} mt={10} p={"12px 14px"} w={"150px"}>
            Đăng nhập
          </CustomButton>
        </Center>

        <Center gap={10} mt={10}>
          <Link href="mailto:cskh@viettel.com.vn?Subject=Vtracking">
            <Flex gap={1}>
              <Icon mt={"2px"} as={IoMdMail} boxSize={5} />
              <Text fontWeight={"normal"} as={"span"}>
                cskh@viettel.com.vn
              </Text>
            </Flex>
          </Link>
          <Link href="telto:18008000">
            <Flex gap={1}>
              <Icon mt={1} boxSize={5} as={FaPhoneVolume} />
              <Text fontWeight={"normal"} as={"span"}>
                18008000-6
              </Text>
            </Flex>
          </Link>
        </Center>
      </Box>
    </Collapse>
  );
};

export default MobileNavMenu;
