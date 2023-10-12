import { MODELS_DATA } from "@/configs/MODELS_DATA";
import Wrapper from "@/components/elements/wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Box, Flex, Image } from "@chakra-ui/react";
import ModalBox from "./ModalBox";
import { useTranslation } from "react-i18next";

const Models = () => {
  const { t } = useTranslation();
  return (
    <Box
      bg={{
        base: "url(/assets/imgs/model/modal_bg.png) no-repeat right bottom",
        lg: "url(/assets/imgs/model/modal_bg.png) no-repeat right center",
      }}
      bgSize={{ base: "90%", lg: "40%" }}
      px={{ base: 3, lg: 0 }}
      py={"70px"}
    >
      <Wrapper flexDir={"column"}>
        <HeadingTitle
          title={t(`model.headingTitle`)}
          mb={{ base: "20px", lg: "40px" }}
        />
        <Flex flexDir={{ base: "column", lg: "row" }}>
          <Box w={{ base: "100%", lg: "50%" }}>
            {MODELS_DATA.map((model) => (
              <ModalBox
                key={model.id}
                imgIconUrl={model.imgUrl}
                title={model.title}
                content={model.content}
              />
            ))}
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Image src="/assets/imgs/model/img-right-side.png" />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Models;
