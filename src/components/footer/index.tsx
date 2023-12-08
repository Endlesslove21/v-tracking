import { Box } from "@chakra-ui/react";
import FooterDownload from "./FooterDownload";
import Wrapper from "../elements/wrapper";
import FooterBottom from "./FooterBottom";
import Copyright from "./Copyright";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      as="footer"
      bg={"url(/assets/imgs/footer_bg.png) no-repeat center 200px"}
    >
      <Wrapper flexDir={"column"}>
        <FooterDownload />
        <FooterBottom />
      </Wrapper>
      {/* copy right */}
      <Copyright description={t("copyRight")} />
    </Box>
  );
};

export default Footer;
