import { TARGET_USERS_DATA } from "@/configs/TARGET_USERS_DATA";
import Wrapper from "@/components/elements/wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import TargetUserBox from "./TargetUserBox";
import { useTranslation } from "react-i18next";

const TargetUsers = () => {
  const { t } = useTranslation();
  return (
    <Box py={"70px"}>
      <Wrapper flexDir={"column"}>
        <Box mb={"40px"}>
          <HeadingTitle
            title={t(`targetUsers.headingTitle`)}
            px={{ base: "15px", sm: 0 }}
          />
          <Text m={"20px"} textAlign={"center"}>
            {t("targetUsers.subTitle1")}
            <br /> {t("targetUsers.subTitle2")}
          </Text>
        </Box>

        <Flex flexDir={{ base: "column", lg: "row" }}>
          <Box w={{ base: "100%", lg: "50%" }} px={"15px"}>
            <Image
              src={"/assets/imgs/targetUsers/targetUser_left.png"}
              w={"100%"}
              maxW={"100%"}
            />
          </Box>
          <Box mt={{ base: "20px", lg: 0 }} w={{ base: "100%", lg: "50%" }}>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
              gap={6}
            >
              {TARGET_USERS_DATA.map((item) => (
                <TargetUserBox
                  key={item.id}
                  title={item.title}
                  contents={item.contents}
                  imgIconUrl={item.imgIconUrl}
                />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default TargetUsers;
