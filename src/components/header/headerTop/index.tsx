import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import Wrapper from "@/components/elements/Wrapper";
import NavList from "@/components/elements/nav-list";

const HeaderTop = () => {
  return (
    <Box bg={"white"} borderBottom={"1px solid #ccc"}>
      <Wrapper justifyContent={"space-between"} py={1}>
        <Flex>
          <Link
            color={"header_contact"}
            className="contact-text"
            href="mailto:cskh@viettel.com.vn?Subject=Vtracking"
          >
            <Flex gap={1}>
              <Icon as={IoMdMail} boxSize={5} />
              <Text as={"span"}> Email: </Text>
              <Text fontWeight={"bold"} as={"span"}>
                cskh@viettel.com.vn
              </Text>
            </Flex>
          </Link>
          <Link
            color={"header_contact"}
            className="contact-text"
            href="telto:18008000"
          >
            <Flex gap={1}>
              <Icon boxSize={5} as={FaPhoneVolume} />
              <Text as={"span"}> Hỗ trợ kĩ thuật: </Text>
              <Text fontWeight={"bold"} as={"span"}>
                18008000 (nhánh 6)
              </Text>
            </Flex>
          </Link>
          <Link
            color={"header_contact"}
            className="contact-text"
            href="telto:18008168"
          >
            <Flex gap={1}>
              <Icon boxSize={5} as={BsQuestionCircleFill} />
              <Text as={"span"}> Tư vấn dịch vụ: </Text>
              <Text fontWeight={"bold"} as={"span"}>
                18008168
              </Text>
            </Flex>
          </Link>
        </Flex>

        <NavList display={"flex"} listStyleType={"none"}>
          <Box as="li" mr={3}>
            <Link>
              <Image src={"/assets/imgs/languages/english.png"} alt="english" />
            </Link>
          </Box>
          <Box as="li">
            <Link>
              <Image
                src={"/assets/imgs/languages/vietnamese.png"}
                alt="vietnamese"
              />
            </Link>
          </Box>
        </NavList>
      </Wrapper>
    </Box>
  );
};

export default HeaderTop;
