import CustomButton from "@/components/elements/button";
import { Box, BoxProps, Center, Heading } from "@chakra-ui/layout";
import { PropsWithChildren } from "react";
import "./scrollbar.css";
type Props = PropsWithChildren<BoxProps> & {
  title: string;
  onClick: () => void;
};

const ServiceChargeBox = ({ title, children, onClick, ...BoxProps }: Props) => {
  return (
    <Box
      overflow={"hidden"}
      borderWidth={"5px 1px 1px 1px"}
      borderColor={"#d2d2d2"}
      borderStyle={"solid"}
      bgColor={"white"}
      borderRadius={"12px"}
      mx={"15px"}
      margin={{ base: "0 auto", lg: "0 15px" }}
      w={{ base: "90%", lg: "33%" }}
      mb={{ base: 5, lg: 0 }}
      _hover={{ borderColor: "second" }}
      {...BoxProps}
    >
      <Heading
        as={"h3"}
        fontSize={"16px"}
        w={"100%"}
        pt={4}
        pb={6}
        textAlign={"center"}
      >
        {title}
      </Heading>
      <Box
        className="custom-scrollbar"
        mb={"50px"}
        height={"400px"}
        overflowY={"auto"}
        p={"30px 40px 40px"}
      >
        {children}
      </Box>
      <Center mb={10}>
        <CustomButton onClick={onClick} w={"30%"} py={2}>
          Đăng ký
        </CustomButton>
      </Center>
    </Box>
  );
};

export default ServiceChargeBox;
