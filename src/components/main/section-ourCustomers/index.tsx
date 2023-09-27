import { OUR_CUSTOMERS_DATA } from "@/components/configs/OUR_CUSTOMERS_DATA";
import Wrapper from "@/components/elements/Wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, HStack, Heading, Text } from "@chakra-ui/layout";

const OurCustomers = () => {
  return (
    <Box as="section" py={"70px"}>
      <Wrapper px={"15px"} flexDir={"column"}>
        <HeadingTitle mb={"40px"} title="KHÁCH HÀNG CỦA V-TRACKING" />
        <Flex flexDir={{ base: "column", lg: "row" }} mx={"-15px"}>
          <Box px={"15px"} w={"33.33%"} ml={"16.67%"}>
            <Box
              bg={
                "url(/assets/imgs/ourCustomers/ourCustomer_bg1.png) no-repeat left top"
              }
              minH={"240px"}
              pl={"170px"}
            >
              <Heading as={"h4"} fontSize={"36px"} color={"second"}>
                52.000
              </Heading>
              <Text>
                Tổng số khách hàng
                <br />
                đang sử dụng dịch vụ
              </Text>
            </Box>
          </Box>

          <Box ml={"8.33%"} w={"33.33%"} px={"15px"}>
            <Box
              bg={
                "url(/assets/imgs/ourCustomers/ourCustomer_bg2.png) no-repeat left top"
              }
              minH={"240px"}
              pl={"170px"}
            >
              <Heading as={"h4"} fontSize={"36px"} color={"second"}>
                68.000
              </Heading>
              <Text>
                Tổng số thuê bao
                <br />
                đã kích hoạt dịch vụ
              </Text>
            </Box>
          </Box>
        </Flex>
        <Text mt={2} textAlign={"center"}>
          Dịch vụ V-Tracking chính thức được cung cấp từ năm 2012.
          <br />
          Một số khách hàng tiêu biểu như sau:
        </Text>
        <Grid mt={10} w={"100%"} gap={6} justifyContent={"space-between"}>
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
