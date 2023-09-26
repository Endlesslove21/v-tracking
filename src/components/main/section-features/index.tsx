import { FEATURES_TAB_DATA } from "@/components/configs/FEATURES_TAB_DATA";
import Wrapper from "@/components/elements/Wrapper";
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

const Features = () => {
  return (
    <Wrapper flexDir={"column"}>
      <HeadingTitle title="CHỨC NĂNG NỔI BẬT CỦA V-TRACKING" />

      <Tabs>
        <TabList borderBottom={"1px solid #ccc"}>
          {FEATURES_TAB_DATA.map((tab, index) => (
            <Tab key={tab.id}>
              <Box>
                <Image src={tab.tabImgUrl} />
                <Text>{tab.title}</Text>
              </Box>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {FEATURES_TAB_DATA.map((item) => (
            <TabPanel key={item.id}>
              <Flex>
                <Box w={"50%"}>
                  <Image src={item.contentImgUrl} />
                </Box>
                <Box w={"50%"}>
                  <Heading as={"h3"} fontSize={"20px"}>
                    {item.title}
                  </Heading>
                  <NavList>
                    {item.contents.map((content) => (
                      <Text key={content}>{content}</Text>
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
