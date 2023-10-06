import { Box, Text } from "@chakra-ui/react";
import FooterDownload from "./FooterDownload";
import Wrapper from "../elements/wrapper";
import FooterBottom from "./FooterBottom";
import Copyright from "./Copyright";

const Footer = () => {
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
      <Copyright
        description="© Copyright 2018 Tổng công ty giải pháp Doanh nghiệp - Tập đoàn Công
        nghiệp - Viễn thông Quân đội"
      />
    </Box>
  );
};

export default Footer;
