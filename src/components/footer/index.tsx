import { Box, Text } from "@chakra-ui/react";
import FooterDownload from "./FooterDownload";
import Wrapper from "../elements/wrapper";
import FooterBottom from "./FooterBottom";

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
      <Box
        bg={"linear-gradient(270deg, #BA1318 0%, #E61A45 60.42%, #EE0000 100%)"}
      >
        <Text color="white" p={"10px 0 13px"} textAlign={"center"}>
          © Copyright 2018 Tổng công ty giải pháp Doanh nghiệp - Tập đoàn Công
          nghiệp - Viễn thông Quân đội
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
