import { AGENTS_DATA } from "@/components/configs/AGENTS_DATA";
import Wrapper from "@/components/elements/Wrapper";
import HeadingTitle from "@/components/elements/heading";
import { Box, Center, Grid, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

const Agents = () => {
  const [selectedAgentID, setSelectedAgentID] = useState<number | null>(null);

  return (
    <Box py={"70px"}>
      <Wrapper flexDir={"column"}>
        <HeadingTitle title="Đại lý" />
        <Text textAlign={"center"}>
          Hệ thống được trải dài khắp 63 tỉnh thành trên toàn quốc
        </Text>
        <Center
          py={"30px"}
          borderBottom={selectedAgentID ? "none" : "1px solid #ccc"}
        >
          <Select
            w={"20%"}
            iconSize={"30px"}
            fontSize={"16px"}
            placeholder="Tỉnh/Thành phố"
            value={selectedAgentID}
            onChange={(e) => setSelectedAgentID(Number(e.target.value))}
          >
            {AGENTS_DATA.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.province}
              </option>
            ))}
          </Select>
        </Center>

        {/* agents in province */}
        {selectedAgentID ? (
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          >
            {AGENTS_DATA[selectedAgentID - 1].company.map((company) => (
              <Box
                border={"1px solid #f3f4f5"}
                minH={"100px"}
                p={4}
                key={company.id}
              >
                <Text
                  color={"black"}
                  fontSize={"14px"}
                  mb={"10px"}
                  fontWeight={"bold"}
                >
                  {company.id}. {company.name}
                </Text>
                <Text color={"#000000B3"} fontSize={"13px"}>
                  {company.address}
                </Text>
              </Box>
            ))}
          </Grid>
        ) : (
          <Text textAlign={"center"}>
            Vui lòng chọn Tỉnh/ Thành phố để tìm đại lý
          </Text>
        )}
      </Wrapper>
    </Box>
  );
};

export default Agents;
