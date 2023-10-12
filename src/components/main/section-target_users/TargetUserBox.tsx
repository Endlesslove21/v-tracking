import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type Props = {
  imgIconUrl: string;
  title: string;
  contents: string[];
};

const TargetUserBox = ({ imgIconUrl, title, contents }: Props) => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  const { t } = useTranslation();
  return (
    <Box px={"15px"}>
      <Flex flexDir={{ base: "row", sm: "column" }}>
        <Image
          style={
            isLargerThan480
              ? { width: "64px", height: "64px" }
              : { width: "40px", height: "40px" }
          }
          src={imgIconUrl}
          maxW={"100%"}
          alignSelf={isLargerThan480 ? "left" : "center"}
          mr={{ base: 3, sm: 0 }}
          display={"block"}
        />
        <Heading as="h3" my={"10px"} fontSize={"16px"}>
          {t(`targetUsers.${title}`)}
        </Heading>
      </Flex>
      <Box>
        {contents.map((content) => (
          <Text key={content}>{t(`targetUsers.${content}`)}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default TargetUserBox;
