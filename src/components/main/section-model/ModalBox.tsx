import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type Props = {
  imgIconUrl: string;
  title: string;
  content: string;
};

const ModalBox = ({ imgIconUrl, title, content }: Props) => {
  const { t } = useTranslation();

  return (
    <Flex alignItems={"center"} p={"20px 10px"}>
      <Box
        w={"85px"}
        mr={"20px"}
        borderRadius={"50%"}
        textAlign={"center"}
        minWidth={"85px"}
      >
        <Image
          alignSelf={"center"}
          display={"inline-block"}
          src={imgIconUrl}
          maxW={"100%"}
        />
      </Box>
      <Box w={"100%"}>
        <Heading
          as={"h4"}
          fontSize={"18px"}
          lineHeight={"30px"}
          fontWeight={"600"}
          mb={"10px"}
        >
          {t(`model.${title}`)}
        </Heading>
        <Text>{t(`model.${content}`)}</Text>
      </Box>
    </Flex>
  );
};

export default ModalBox;
