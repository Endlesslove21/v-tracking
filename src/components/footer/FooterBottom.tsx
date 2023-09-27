import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Wrapper from "../elements/Wrapper";
import NavList from "../elements/nav-list";
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CustomButton from "../elements/button";
import RegisterModal from "../header/modal/RegisterModal";

const FooterBottom = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt="80px" mb="50px">
      <Wrapper px={"15px"} flexDir={"column"}>
        <Flex mx={"-15px"}>
          <Box w={"75%"}>
            <Heading fontSize={"16px"} as={"h3"} lineHeight={"24px"}>
              TỔNG CÔNG TY VIỄN THÔNG VIETTEL
              <br /> CHI NHÁNH TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI
            </Heading>
            <Text py={"10px"}>
              Mã số thuế: 0100109106-011 – Cục thuế TP Hà Nội
            </Text>
            <NavList>
              <Box as="li" display={"flex"} gap={1} py={"7px"}>
                <Icon boxSize={6} alignSelf={"center"} as={IoLocation} />
                <Text>
                  Số 01 Giang Văn Minh, phường Kim Mã, quận Ba Đình, TP Hà Nội
                </Text>
              </Box>
              <Box as="li" display={"flex"} gap={1} py={"7px"}>
                <Icon boxSize={5} alignSelf={"center"} as={FaPhoneVolume} />
                <Text>18008000 (nhánh 6)</Text>
              </Box>
              <Box as="li" display={"flex"} gap={1} py={"7px"}>
                <Icon boxSize={6} alignSelf={"center"} as={MdEmail} />
                <Text>cskh@viettel.com.vn</Text>
              </Box>
              <Box as="li" display={"flex"} gap={1} py={"7px"}>
                <Image src="/assets/imgs/ipv6.png" maxW={"100%"} />
              </Box>
            </NavList>
          </Box>

          <Box float={"right"} w={"25%"} px={"15px"}>
            <CustomButton
              _hover={{
                background:
                  "linear-gradient(270deg, #FF575D 0%, #D72F2F 100% )",
              }}
              py={2}
              w={"50%"}
              onClick={onOpen}
            >
              Gửi liên hệ
            </CustomButton>
          </Box>
        </Flex>
      </Wrapper>
      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default FooterBottom;