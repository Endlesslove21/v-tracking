import { AGENTS_DATA } from "@/configs/AGENTS_DATA";
import { Box, Center, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./agents.css";
import DropdownMenu from "@/components/elements/dropdown-menu";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const AgentSelect = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [province, setProvince] = useState<string>("Tỉnh/ Thành phố");
  const [provinceId, setProvinceId] = useState<number | null>(null);

  // Access the current language
  useEffect(() => {
    function changeDefaultProvince() {
      if (i18next.language === "vietnamese") {
        setProvince("Tỉnh/ Thành phố");
      } else {
        setProvince("Province/ City");
      }
    }

    changeDefaultProvince();
  }, [i18next.language]);

  return (
    <>
      <Center py={"30px"}>
        <Box
          pos={"relative"}
          w={["50", "50%", null, "40%", "20%"]}
          className="agent-border"
          p={"7px 25px"}
        >
          <Flex
            justifyContent={"space-between"}
            w={"100%"}
            onClick={() => setIsActive(!isActive)}
          >
            <Text
              userSelect={"none"}
              as={"span"}
              fontWeight={"500"}
              fontFamily={"Montserrat,serif"}
              color={"#444"}
            >
              {province}
            </Text>
            <Icon
              display={"inline-block"}
              alignSelf={"center"}
              color={"#444"}
              as={BsChevronDown}
              boxSize={5}
            />
          </Flex>
          <DropdownMenu
            height={"300px"}
            isActive={isActive}
            className="agent-border"
          >
            {AGENTS_DATA.map((agent) => (
              <Box
                as={"li"}
                p={"6px"}
                _hover={{
                  bgColor: "second",
                  color: "white",
                  fontWeight: "500",
                }}
                key={agent.id}
                style={
                  agent.province === province
                    ? {
                        backgroundColor: "#EA0D34",
                        color: "white",
                        fontWeight: "500",
                      }
                    : {}
                }
                onClick={() => {
                  setProvince(agent.province);
                  setIsActive(false);
                  setProvinceId(agent.id);
                }}
              >
                {agent.province}
              </Box>
            ))}
          </DropdownMenu>
        </Box>
      </Center>

      {/* agents in province */}
      {provinceId ? (
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          px={{ lg: 0, base: "15px" }}
        >
          {AGENTS_DATA[provinceId - 1].company.map((company) => (
            <Box
              className="agent-company"
              border={"1px solid #f3f4f5"}
              minH={"100px"}
              p={4}
              key={`${province}-${company.name}-${company.id}`}
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
        <Text textAlign={"center"}>{t("agents.description")}</Text>
      )}
    </>
  );
};

export default AgentSelect;
