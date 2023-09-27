import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";

const FooterDownload = () => {
  return (
    <Box
      px={"15px"}
      bg={"url(/assets/imgs/footer_download_bg.png) no-repeat center 150px"}
      bgSize={"contain"}
    >
      <Flex mx={"-15px"}>
        <Box px={"15px"} w={"33.33%"}>
          <Image src="/assets/imgs/footer_smartphone.png" maxW={"100%"} />
        </Box>
        <Box ml={"16.67%"} px={"15px"} w={"50%"}>
          <Box mt={"180px"}>
            <Heading
              as={"h2"}
              color={"white"}
              fontSize={"36px"}
              mb={"20px"}
              fontWeight={"600"}
            >
              Tăng trải nghiệm phần mềm <br />
              V-Tracking trên thiết bị di động
            </Heading>

            <Flex>
              <Box w={"25%"}>
                <Image src="/assets/imgs/appDownload/appDownload_qrcode.png" />
              </Box>
              <Box w={"75%"}>
                <Link
                  display={"block"}
                  target="blank"
                  mb={2}
                  href="https://apps.apple.com/vn/app/vtracking-2-0/id1219931486"
                >
                  <Image src="/assets/imgs/appDownload/appDownload_appStore.png" />
                </Link>
                <Link
                  target="blank"
                  display={"block"}
                  href="https://play.google.com/store/apps/details?id=com.viettel.vtrackingv2&pli=1"
                >
                  <Image src="/assets/imgs/appDownload/appDownload_chPlay.png" />
                </Link>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default FooterDownload;
