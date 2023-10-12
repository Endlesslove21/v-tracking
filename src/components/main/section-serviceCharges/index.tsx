import { SERVICE_CHARGES_DATA } from "@/configs/SERVICE_CHARGES_DATA";
import Wrapper from "@/components/elements/wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import ServiceChargeBox from "./ServiceChargeBox";
import { Image } from "@chakra-ui/image";
import NavList from "@/components/elements/nav-list";
import { Icon } from "@chakra-ui/icon";
import { AiOutlineCheck } from "react-icons/ai";
import { formatCurrency } from "@/utilities/formatVnCurency";
import { useTranslation } from "react-i18next";
const ServiceCharges = () => {
  const { t } = useTranslation();
  return (
    <Box w={"100%"} bgColor={"#f3f4f5"} py={"70px"}>
      <Wrapper flexDir={"column"}>
        <HeadingTitle title={t(`serviceCharges.title`)} mb={"40px"} />
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          mx={{ base: "15px", lg: "-15px" }}
          // justifyContent={"space-between"}
        >
          {SERVICE_CHARGES_DATA.map((item) => {
            if (item.title === "Thiết bị đọc RFID") {
              return (
                <ServiceChargeBox
                  textAlign={"center"}
                  key={item.title}
                  title={item.title}
                >
                  <Text mb={"10px"}>
                    {t(`serviceCharges.${item.variants.headingTitle}`)}
                  </Text>

                  {item.variants.price && (
                    <Text
                      fontSize={"24px"}
                      fontWeight={"bold"}
                      color={"second"}
                    >
                      {formatCurrency(item.variants.price)}
                    </Text>
                  )}

                  <Text mb={"10px"}>
                    ({t(`serviceCharges.${item.variants.priceNote}`)})
                  </Text>
                  <Image
                    mt={5}
                    maxW={"100%"}
                    w={"90%"}
                    src={item.variants.imgUrl}
                  />
                </ServiceChargeBox>
              );
            } else
              return (
                <ServiceChargeBox title={item.title} key={item.title}>
                  <NavList listStyleType={"none"}>
                    {item.variants.packages?.map((pk) => (
                      <Box
                        textAlign={"center"}
                        padding={"27px 15px"}
                        borderBottom={"2px solid #e5e5e5"}
                        as="li"
                        key={pk.packageID}
                      >
                        <Heading as={"h3"} fontSize={"20px"}>
                          {t(`serviceCharges.${pk.name}`)}
                        </Heading>
                        <Text
                          fontSize={"24px"}
                          fontWeight={"bold"}
                          color={"second"}
                        >
                          {formatCurrency(pk.price)}
                        </Text>
                        <Text mb={"10px"}>
                          ({t(`serviceCharges.${pk.priceNote}`)})
                        </Text>
                        <Text mb={"10px"}>
                          {t("serviceCharges.limit")}:{" "}
                          {t(`serviceCharges.${pk.limit}`)}
                        </Text>
                      </Box>
                    ))}
                    {item.variants.packageEquiments && (
                      <Box my={"10px"}>
                        <Text mb={"5px"} fontWeight={"bold"}>
                          {t("serviceCharges.PackageInclude")}:{" "}
                        </Text>
                        <Box>
                          {item.variants.packageEquiments?.map((equiment) => (
                            <Flex gap={1} key={equiment}>
                              <Icon
                                color={"#44a058"}
                                as={AiOutlineCheck}
                                boxSize={5}
                              />{" "}
                              <Text>{t(`serviceCharges.${equiment}`)}</Text>
                            </Flex>
                          ))}
                        </Box>
                      </Box>
                    )}
                    {item.variants.targetUsers && (
                      <Box my={"10px"}>
                        <Text mb={"5px"} fontWeight={"bold"}>
                          {t("serviceCharges.users")}:{" "}
                        </Text>
                        <Box>
                          {item.variants.targetUsers?.map((user) => (
                            <Flex gap={1} key={user}>
                              <Icon
                                as={AiOutlineCheck}
                                color={"#44a058"}
                                boxSize={5}
                              />{" "}
                              <Text>{t(`serviceCharges.${user}`)}</Text>
                            </Flex>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </NavList>
                </ServiceChargeBox>
              );
          })}
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default ServiceCharges;
