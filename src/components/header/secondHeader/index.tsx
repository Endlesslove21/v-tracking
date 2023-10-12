import { Flex, Image } from "@chakra-ui/react";
import LanguageSelection from "../components/LanguageSelection";

const SecondHeader = () => {
  return (
    <Flex as={"header"} w={"100vw"} height={"90px"} pos={"relative"}>
      <Image
        src="/assets/imgs/banner_header.png"
        maxW={"100%"}
        height={"auto"}
      />
      <LanguageSelection
        textStyle={{ color: "white" }}
        pos={"absolute"}
        right={8}
        top={8}
      />
    </Flex>
  );
};

export default SecondHeader;
