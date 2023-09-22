import { PropsWithChildren } from "react";
import { ChakraProps, Flex, Text } from "@chakra-ui/react";
type Props = PropsWithChildren<ChakraProps> & {
  onClick?: () => void;
};

const CustomButton = ({ children, onClick, ...ChakraProps }: Props) => {
  return (
    <Flex
      {...ChakraProps}
      onClick={onClick}
      as="button"
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"30px"}
      cursor={"pointer"}
      bgGradient="linear(270deg, #BA1318 0%, #E61A45 60.42%, #EE0000 100% )"
    >
      <Text alignSelf={"center"} fontWeight={"bold"} color={"white"}>
        {children}
      </Text>
    </Flex>
  );
};

export default CustomButton;
