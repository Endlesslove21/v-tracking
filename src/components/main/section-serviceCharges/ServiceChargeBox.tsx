import { useContext } from "react";
import CustomButton from "@/components/elements/button";
import { Box, BoxProps, Center, Heading } from "@chakra-ui/layout";
import { PropsWithChildren } from "react";
import "./scrollbar.css";
import { SectionContext } from "@/context/ScrollSectionContext";
import { useTranslation } from "react-i18next";
type Props = PropsWithChildren<BoxProps> & {
  title: string;
};

const ServiceChargeBox = ({ title, children, ...BoxProps }: Props) => {
  const { onToggleRegisterModal } = useContext(SectionContext);
  const { t } = useTranslation();
  return (
    <Box
      overflowY={"hidden"}
      borderWidth={"5px 1px 1px 1px"}
      borderColor={"#d2d2d2"}
      borderStyle={"solid"}
      bgColor={"white"}
      borderRadius={"12px"}
      mx={{ lg: "15px" }}
      w={{ base: "100%", lg: "33.33%" }}
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
        {t(`serviceCharges.${title}`)}
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
        <CustomButton onClick={onToggleRegisterModal} w={"30%"} py={2}>
          {t("serviceCharges.register")}
        </CustomButton>
      </Center>
    </Box>
  );
};

export default ServiceChargeBox;
