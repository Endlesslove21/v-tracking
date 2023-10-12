import Wrapper from "@/components/elements/wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Box, Text } from "@chakra-ui/react";
import AgentSelect from "./AgentSelect";
import { useTranslation } from "react-i18next";

const Agents = () => {
  const { t } = useTranslation();
  return (
    <Box py={"70px"}>
      <Wrapper flexDir={"column"}>
        <HeadingTitle title={t("agents.title")} />
        <Text textAlign={"center"}>{t("agents.subTitle")}</Text>
        <AgentSelect />
      </Wrapper>
    </Box>
  );
};

export default Agents;
