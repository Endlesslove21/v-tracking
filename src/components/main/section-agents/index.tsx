import Wrapper from "@/components/elements/Wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Box, Text } from "@chakra-ui/react";
import AgentSelect from "./AgentSelect";

const Agents = () => {
  return (
    <Box py={"70px"}>
      <Wrapper flexDir={"column"}>
        <HeadingTitle title="Đại lý" />
        <Text textAlign={"center"}>
          Hệ thống được trải dài khắp 63 tỉnh thành trên toàn quốc
        </Text>

        <AgentSelect />
      </Wrapper>
    </Box>
  );
};

export default Agents;
