import { SERVICE_CHARGES_DATA } from "@/components/configs/SERVICE_CHARGES_DATA";
import Wrapper from "@/components/elements/Wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import ServiceChargeBox from "./ServiceChargeBox";
import { Image } from "@chakra-ui/image";
import NavList from "@/components/elements/nav-list";
import { Icon } from "@chakra-ui/icon";
import { AiOutlineCheck } from "react-icons/ai";
import RegisterModal from "@/components/header/modal/RegisterModal";
import { useDisclosure } from "@chakra-ui/hooks";
import { formatCurrency } from "@/components/utilities/formatVnCurency";
const ServiceCharges = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box w={"100%"} bgColor={"#f3f4f5"} py={"70px"}>
      <Wrapper flexDir={"column"}>
        <HeadingTitle title="phí dịch vụ" mb={"40px"} />
        <Flex
          mx={"-15px"}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
        >
          {SERVICE_CHARGES_DATA.map((item) => {
            if (item.title === "Thiết bị đọc RFID") {
              return (
                <ServiceChargeBox
                  textAlign={"center"}
                  onClick={onOpen}
                  key={item.title}
                  title={item.title}
                >
                  <Text mb={"10px"}>{item.variants.headingTitle}</Text>

                  {item.variants.price && (
                    <Text
                      fontSize={"24px"}
                      fontWeight={"bold"}
                      color={"second"}
                    >
                      {formatCurrency(item.variants.price)}
                    </Text>
                  )}

                  <Text mb={"10px"}>({item.variants.priceNote})</Text>
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
                <ServiceChargeBox
                  onClick={onOpen}
                  title={item.title}
                  key={item.title}
                >
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
                          {pk.name}
                        </Heading>
                        <Text
                          fontSize={"24px"}
                          fontWeight={"bold"}
                          color={"second"}
                        >
                          {formatCurrency(pk.price)}
                        </Text>
                        <Text mb={"10px"}>({pk.priceNote})</Text>
                        <Text mb={"10px"}>Thời hạn: {pk.limit}</Text>
                      </Box>
                    ))}
                    {item.variants.packageEquiments && (
                      <Box my={"10px"}>
                        <Text mb={"5px"} fontWeight={"bold"}>
                          Các gói cước bao gồm:{" "}
                        </Text>
                        <Box>
                          {item.variants.packageEquiments?.map((equiment) => (
                            <Flex gap={1} key={equiment}>
                              <Icon
                                color={"#44a058"}
                                as={AiOutlineCheck}
                                boxSize={5}
                              />{" "}
                              <Text>{equiment}</Text>
                            </Flex>
                          ))}
                        </Box>
                      </Box>
                    )}
                    {item.variants.targetUsers && (
                      <Box my={"10px"}>
                        <Text mb={"5px"} fontWeight={"bold"}>
                          Đối tượng áp dụng:{" "}
                        </Text>
                        <Box>
                          {item.variants.targetUsers?.map((user) => (
                            <Flex gap={1} key={user}>
                              <Icon
                                as={AiOutlineCheck}
                                color={"#44a058"}
                                boxSize={5}
                              />{" "}
                              <Text>{user}</Text>
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

      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ServiceCharges;
