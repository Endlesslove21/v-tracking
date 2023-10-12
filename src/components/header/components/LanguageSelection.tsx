import { Box, Flex, Icon, Image, Text, BoxProps } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillCaretDown } from "react-icons/ai";

type Language = {
  id: number;
  content: string;
  key: string;
  iconUrl: string;
};
type Props = BoxProps & {
  textStyle: React.CSSProperties;
};
const languages: Language[] = [
  {
    id: 1,
    content: "Tiếng Việt",
    iconUrl: "/assets/imgs/flag-vn.png",
    key: "vietnamese",
  },
  {
    id: 2,
    content: "English",
    iconUrl: "/assets/imgs/flag-en.png",
    key: "en",
  },
];
const LanguageSelection = ({ textStyle, ...BoxProps }: Props) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>(languages[0]);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Box {...BoxProps}>
      <Box pos={"relative"}>
        <Flex
          onClick={() => setIsDisplay(!isDisplay)}
          cursor={"pointer"}
          gap={1}
          style={textStyle}
        >
          <Image src={language.iconUrl} />
          <Text userSelect={"none"} fontWeight={"500"}>
            {language.content}
          </Text>
          <Icon mt={1} alignSelf={"center"} as={AiFillCaretDown} />
        </Flex>

        <Box
          w={"200px"}
          display={isDisplay ? "block" : "none"}
          boxShadow={"xl"}
          right={-3}
          top={6}
          bg={"white"}
          borderRadius={"3px"}
          m={2}
          pos={"absolute"}
        >
          {languages.map((language) => (
            <Flex
              onClick={() => {
                setLanguage(language);
                setIsDisplay(false);
                changeLanguage(language.key);
              }}
              borderBottom={language.id === 1 ? "1px solid #f3f4f5" : "none"}
              key={language.id}
              p={2}
              cursor={"pointer"}
              _hover={{
                color: "white",
                bgColor: "second",
              }}
              gap={1}
            >
              <Image src={language.iconUrl} />
              <Text fontWeight={"500"}>{language.content}</Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LanguageSelection;
