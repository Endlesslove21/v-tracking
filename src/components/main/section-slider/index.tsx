import Wrapper from "@/components/elements/wrapper";
import CustomButton from "@/components/elements/button";
import HeadingTitle from "@/components/elements/heading";
import RegisterModal from "@/components/elements/modal/RegisterModal";
import VideoModal from "@/components/elements/modal/VideoModal";
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import "./animationDisplay.css";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const [isSmallerThan995] = useMediaQuery("max-width(995px)");

  const {
    isOpen: isVideoModalOpen,
    onClose: onCloseVideoModalOpen,
    onOpen: onOpenVideoModal,
  } = useDisclosure();
  const {
    isOpen: isRegisterModalOpen,
    onClose: onCloseRegisterModal,
    onOpen: onOpenRegisterModal,
  } = useDisclosure();
  const { t } = useTranslation();
  return (
    <Box
      bg={"url(/assets/imgs/banner-n.png) no-repeat center top"}
      pt={"180px"}
      w={"100%"}
      height={"100vh"}
    >
      <Wrapper px={{ base: "15px", lg: 0 }} flexDir={"column"}>
        <Box w={{ base: "90%", md: "70%", xl: "50%" }} pr={{ xl: "150px" }}>
          <HeadingTitle
            className="sliderBox animationDelay1"
            sx={{ textAlign: "left" }}
            title={t("slider.title")}
          />
          <Text
            className="sliderBox animationDelay2"
            mt={"20px"}
            mb={"30px"}
            pr={"50px"}
          >
            {t("slider.subText")}
          </Text>

          <CustomButton
            className="sliderBox animationDelay3"
            onClick={onOpenRegisterModal}
            w={{ base: "70%", lg: "60%" }}
            py={2}
            mb={"20px"}
          >
            {t("slider.btnText")}
          </CustomButton>
          <Flex className="sliderBox animationDelay4">
            <Box
              onClick={onOpenVideoModal}
              mt={7}
              mb={3}
              display={"flex"}
              cursor={"pointer"}
            >
              <Image
                display={"inline-block"}
                w={"24px"}
                height={"24px"}
                src="/assets/imgs/play-n.png"
              />
              <Text
                alignItems={"center"}
                as={"span"}
                display={"inline-block"}
                ml={1}
              >
                {t("slider.video")}
              </Text>
            </Box>
          </Flex>
          <Link
            className="sliderBox animationDelay5"
            target="_blank"
            href="https://viettel.vn/chi-tiet-video/QXJ0aWNs160210389e288e?catId=QXJ0aWNs15982a50944b96"
          >
            <Box display={"flex"}>
              <Image
                display={"inline-block"}
                w={"24px"}
                height={"24px"}
                src="/assets/imgs/thongtin-n.png"
              />
              <Text as={"span"} display={"inline-block"} ml={1}>
                {t("slider.introduction")}
              </Text>
            </Box>
          </Link>
        </Box>

        <Box
          className="sliderImg"
          display={{ base: "block", lg: "none" }}
          ml={"auto"}
          mb={"100px"}
          w={{ base: "100%", sm: "85%", md: "75%" }}
          mt={{ base: 0, sm: "-33px", md: "-53px" }}
        >
          <Image
            src="/assets/imgs/n-photo-banner.png"
            maxW={"100%"}
            height={"auto"}
          />
        </Box>
      </Wrapper>
      {/* introducing v-tracking video modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={onCloseVideoModalOpen} />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={onCloseRegisterModal}
      />
    </Box>
  );
};

export default Slider;
