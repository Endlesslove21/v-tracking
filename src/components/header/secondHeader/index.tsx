import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

type Language = {
  id: number;
  content: string;
  iconUrl: string;
};

const languages: Language[] = [
  {
    id: 1,
    content: "Tiếng Việt",
    iconUrl: "/assets/imgs/flag-vn.png",
  },
  {
    id: 2,
    content: "English",
    iconUrl: "/assets/imgs/flag-en.png",
  },
];

const SecondHeader = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>(languages[0]);
  return (
    <Flex w={"100vw"} height={"90px"} pos={"relative"}>
      <Image
        src="/assets/imgs/banner_header.png"
        maxW={"100%"}
        height={"auto"}
      />

      <Box pos={"absolute"} right={8} top={8}>
        <Box pos={"relative"}>
          <Flex
            onClick={() => setIsDisplay(!isDisplay)}
            cursor={"pointer"}
            gap={1}
          >
            <Image src={language.iconUrl} />
            <Text userSelect={"none"} color={"white"} fontWeight={"500"}>
              {language.content}
            </Text>
            <Icon
              mt={1}
              alignSelf={"center"}
              color={"white"}
              as={AiFillCaretDown}
            />
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
    </Flex>
  );
};

export default SecondHeader;
