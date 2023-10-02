import { OUR_CUSTOMERS_DATA } from "@/components/configs/OUR_CUSTOMERS_DATA";
import Wrapper from "@/components/elements/Wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, HStack, Heading, Text } from "@chakra-ui/layout";
import OurCustomersBox from "./OurCustomersBox";

const OurCustomers = () => {
  return (
    <Box as="section" py={"70px"}>
      <Wrapper px={"15px"} flexDir={"column"}>
        <HeadingTitle mb={"40px"} title="KHÁCH HÀNG CỦA V-TRACKING" />
        <Flex flexDir={{ base: "column", lg: "row" }} mx={"-15px"}>
          <OurCustomersBox
            ml={{ base: 0, lg: "16.67%" }}
            customerAmount={52000}
          >
            <Text>
              Tổng số khách hàng <br /> đang sử dụng dịch vụ
            </Text>
          </OurCustomersBox>
          <OurCustomersBox ml={{ base: 0, lg: "8.33%" }} customerAmount={68000}>
            <Text>
              Tổng số thuê bao
              <br />
              đã kích hoạt dịch vụ
            </Text>
          </OurCustomersBox>
        </Flex>
        <Text mt={2} textAlign={"center"}>
          Dịch vụ V-Tracking chính thức được cung cấp từ năm 2012.
          <br />
          Một số khách hàng tiêu biểu như sau:
        </Text>
        <Grid
          mt={10}
          w={"100%"}
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" }}
          gap={6}
        >
          {OUR_CUSTOMERS_DATA.map((imgUrl) => (
            <Box
              border={"1px solid #eeeeee"}
              borderRadius={"3px"}
              padding={"10px 0"}
              key={imgUrl}
              _hover={{ boxShadow: "0 4px 4px rgba(0, 0, 0 ,0.25)" }}
            >
              <Image maxW={"100%"} src={imgUrl} alt={imgUrl} />
            </Box>
          ))}
        </Grid>
      </Wrapper>
    </Box>
  );
};

export default OurCustomers;
