import { PropsWithChildren } from "react";
import {
  BoxProps,
  Flex,
  Text,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

type Props = PropsWithChildren<BoxProps & ChakraButtonProps> & {
  onClick?: () => void;
};

const CustomButton = ({ children, onClick, ...buttonProps }: Props) => {
  return (
    <Flex
      {...buttonProps}
      onClick={onClick}
      as="button"
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"30px"}
      py={2}
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
