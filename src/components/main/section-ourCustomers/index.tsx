import { OUR_CUSTOMERS_DATA } from "@/configs/OUR_CUSTOMERS_DATA";
import Wrapper from "@/components/elements/wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import OurCustomersBox from "./OurCustomersBox";
import { useTranslation } from "react-i18next";

const OurCustomers = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" py={"70px"}>
      <Wrapper px={"15px"} flexDir={"column"}>
        <HeadingTitle mb={"40px"} title={t("ourCustomer.title")} />
        <Flex flexDir={{ base: "column", lg: "row" }} mx={"-15px"}>
          <OurCustomersBox
            ml={{ base: 0, lg: "16.67%" }}
            customerAmount={52000}
          >
            <Text>
              {t("ourCustomer.count")} <br /> {t("ourCustomer.count2")}
            </Text>
          </OurCustomersBox>
          <OurCustomersBox ml={{ base: 0, lg: "8.33%" }} customerAmount={68000}>
            <Text>
              {t("ourCustomer.count3")}
              <br />
              {t("ourCustomer.count4")}
            </Text>
          </OurCustomersBox>
        </Flex>
        <Text mt={2} textAlign={"center"}>
          {t("ourCustomer.year")}
          <br />
          {t("ourCustomer.guest")}
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
