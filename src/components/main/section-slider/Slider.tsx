import Wrapper from "@/components/elements/Wrapper";
import CustomButton from "@/components/elements/button";
import HeadingTitle from "@/components/elements/heading";
import RegisterModal from "@/components/header/modal/RegisterModal";
import VideoModal from "@/components/header/modal/VideoModal";
import { Box, Flex, Image, Link, Text, useDisclosure } from "@chakra-ui/react";

const Slider = () => {
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

  return (
    <Box
      bg={"url(/assets/imgs/banner-n.png) no-repeat center top"}
      pt={"180px"}
      w={"100%"}
      height={"830px"}
    >
      <Wrapper flexDir={"column"}>
        <Box w={"50%"} pl={"10px"} pr={"150px"}>
          <HeadingTitle title="HỆ THỐNG QUẢN LÝ VÀ GIÁM SÁT PHƯƠNG TIỆN VẬN TẢI V-TRACKING" />
          <Text mt={"20px"} mb={"30px"} pr={"50px"}>
            Chỉ cần truy cập hệ thống từ các thiết bị có kết nối internet để
            giám sát hành trình và quản lý những chiếc xe của bạn
          </Text>

          <CustomButton
            onClick={onOpenRegisterModal}
            w={"60%"}
            py={2}
            mb={"20px"}
          >
            Đăng ký nhận tư vấn miễn phí
          </CustomButton>
          <Flex>
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
                Video Sản Phẩm
              </Text>
            </Box>
          </Flex>
          <Link
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
                Giới thiệu dịch vụ V-Tracking
              </Text>
            </Box>
          </Link>
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
