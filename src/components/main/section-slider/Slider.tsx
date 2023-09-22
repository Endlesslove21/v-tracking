import { useState } from "react";
import Wrapper from "@/components/elements/Wrapper";
import CustomButton from "@/components/elements/button";
import HeadingTitle from "@/components/elements/heading";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

const Slider = () => {
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

          <CustomButton w={"60%"} py={2} mb={"20px"}>
            Đăng ký nhận tư vấn miễn phí
          </CustomButton>
          <Flex cursor={"pointer"} mt={7} mb={3}>
            <Image w={"24px"} height={"24px"} src="/assets/imgs/play-n.png" />
            <Text as={"span"} display={"inline-block"} ml={1}>
              Video Sản Phẩm
            </Text>
          </Flex>
          <Link
            display={"flex"}
            target="_blank"
            href="https://viettel.vn/chi-tiet-video/QXJ0aWNs160210389e288e?catId=QXJ0aWNs15982a50944b96"
          >
            <Image
              w={"24px"}
              height={"24px"}
              src="/assets/imgs/thongtin-n.png"
            />
            <Text as={"span"} display={"inline-block"} ml={1}>
              Giới thiệu dịch vụ V-Tracking
            </Text>
          </Link>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Slider;
