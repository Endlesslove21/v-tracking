import { Box, Flex, Icon, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";
import Wrapper from "@/components/elements/wrapper";
import { useTranslation } from "react-i18next";
import LanguageSelection from "../../components/LanguageSelection";

const HeaderTop = () => {
  const [isLargerThan995] = useMediaQuery("(min-width: 995px)");
  const { t } = useTranslation();

  return (
    <Box
      bg={"white"}
      pt={1}
      display={isLargerThan995 ? "block" : "none"}
      borderBottom={"1px solid #ccc"}
    >
      <Wrapper
        maxW={{ lg: "970px", xl: "1170px" }}
        justifyContent={"space-between"}
        py={1}
      >
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
              <Text as={"span"}> {t(`headerTop.assist`)} </Text>
              <Text fontWeight={"bold"} as={"span"}>
                {t("headerTop.contactPhone")}
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
              <Text as={"span"}> {t("headerTop.consulting")}: </Text>
              <Text fontWeight={"bold"} as={"span"}>
                18008168
              </Text>
            </Flex>
          </Link>
        </Flex>

        <LanguageSelection textStyle={{ color: "primary" }} />
      </Wrapper>
    </Box>
  );
};

export default HeaderTop;
