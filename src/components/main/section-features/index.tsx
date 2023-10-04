import { FEATURES_TAB_DATA } from "@/configs/FEATURES_TAB_DATA";
import Wrapper from "@/components/elements/wrapper";
import HeadingTitle from "@/components/elements/heading";
import NavList from "@/components/elements/nav-list";
import {
  Box,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
const Features = () => {
  const [selectedTabId, setSelectedTabId] = useState<number>(1);
  const [isLargerThan995] = useMediaQuery("(min-width: 995px)");
  return (
    <Wrapper
      mt={{ base: 200, lg: "0 " }}
      px={{ base: 3, lg: 0 }}
      py={{ base: "30px", lg: "70px" }}
      flexDir={"column"}
    >
      <HeadingTitle title="CHỨC NĂNG NỔI BẬT CỦA V-TRACKING" />

      <Tabs variant={"unstyled"}>
        <TabList borderBottom={"1px solid #ccc"}>
          <Flex mt={8} justifyContent={"space-between"} w={"100%"}>
            {FEATURES_TAB_DATA.map((tab) => (
              <Tab
                pos={"relative"}
                onClick={() => setSelectedTabId(tab.id)}
                key={tab.id}
              >
                <Box
                  _after={
                    selectedTabId === tab.id
                      ? {
                          content: `" "`,
                          pos: "absolute",
                          left: { base: "35%", md: "45%" },
                          opacity: 1,
                          margin: "0 auto",
                          bottom: 0,
                          border: "10px solid transparent",
                          borderBottomColor: "#f00",
                        }
                      : {}
                  }
                  transition="all 1s ease"
                >
                  <Image
                    w={{ base: "40px", sm: "64px" }}
                    height={{ base: "40px", sm: "64px" }}
                    alignSelf={"center"}
                    display={"inline-block"}
                    src={
                      selectedTabId === tab.id
                        ? tab.activeTabImgUrl
                        : tab.tabImgUrl
                    }
                  />

                  {isLargerThan995 && (
                    <Text
                      py={"12px"}
                      color={selectedTabId == tab.id ? "#555" : "primary"}
                      fontWeight={"bold"}
                    >
                      {tab.title}
                    </Text>
                  )}
                </Box>
              </Tab>
            ))}
          </Flex>
        </TabList>

        <TabPanels pt={"50px"}>
          {FEATURES_TAB_DATA.map((item) => (
            <TabPanel p={0} key={item.id}>
              <Flex flexDir={isLargerThan995 ? "row" : "column"}>
                <Box w={{ base: "100%", lg: "50%" }}>
                  <Image src={item.contentImgUrl} />
                </Box>
                <Box
                  w={{ base: "100%", lg: "50%" }}
                  ml={{ base: 0, lg: "100px" }}
                  p={"0 15px"}
                >
                  <Heading mb={"20px"} as={"h3"} fontSize={"20px"}>
                    {item.title}
                  </Heading>
                  <NavList ml={"20px"}>
                    {item.contents.map((content) => (
                      <Box as="li" pb={"20px"} key={content}>
                        <Text>{content}</Text>
                      </Box>
                    ))}
                  </NavList>
                </Box>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Wrapper>
  );
};

export default Features;
