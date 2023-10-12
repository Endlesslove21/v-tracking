import { useContext } from "react";
import { Box, Flex, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Wrapper from "../elements/wrapper";
import NavList from "../elements/nav-list";
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CustomButton from "../elements/button";
import { SectionContext } from "@/context/ScrollSectionContext";
import { useTranslation } from "react-i18next";

const FooterBottom = () => {
  const { onToggleRegisterModal } = useContext(SectionContext);
  const { t } = useTranslation();
  return (
    <Box mt="80px" mb="50px">
      <Wrapper px={"15px"} flexDir={"column"}>
        <Flex mx={{ lg: "-15px" }} flexDir={{ base: "column", lg: "row" }}>
          <Box w={{ base: "100%", lg: "75%" }}>
            <Heading fontSize={"16px"} as={"h3"} lineHeight={"24px"}>
              {t("companyInfor.name")}
            </Heading>
            <Text py={"10px"}>{t("companyInfor.taxCode")}</Text>
            <NavList>
              <Box as="li" display={"flex"} gap={1} py={"7px"}>
                <Icon boxSize={6} alignSelf={"center"} as={IoLocation} />
                <Text>{t("companyInfor.address")}</Text>
              </Box>
              <Box as="li" display={"flex"} gap={1} py={"7px"}>
                <Icon boxSize={5} alignSelf={"center"} as={FaPhoneVolume} />
                <Text> {t("companyInfor.contact")}</Text>
              </Box>
              <Box as="li" display={"flex"} gap={1} py={"7px"}>
                <Icon boxSize={6} alignSelf={"center"} as={MdEmail} />
                <Text>cskh@viettel.com.vn</Text>
              </Box>
              <Box as="li" display={"flex"} gap={1} py={"7px"}>
                <Image src="/assets/imgs/ipv6.png" maxW={"70%"} />
              </Box>
            </NavList>
          </Box>

          <Box
            w={"100%"}
            display="flex"
            justifyContent={{ base: "center", lg: "right" }}
            height={"fit-content"}
          >
            <CustomButton
              _hover={{
                background:
                  "linear-gradient(270deg, #FF575D 0%, #D72F2F 100% )",
              }}
              py={2}
              w={"150px"}
              onClick={onToggleRegisterModal}
            >
              {t("companyInfor.contactBtn")}
            </CustomButton>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default FooterBottom;
