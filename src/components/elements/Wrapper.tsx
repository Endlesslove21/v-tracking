import { Flex, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
type Props = PropsWithChildren<BoxProps>;
const Wrapper = ({ children, ...BoxProps }: Props) => {
  return (
    <Flex
      m={"0 auto"}
      w={"100%"}
      maxW={{ lg: "970px", xl: "1170px" }}
      {...BoxProps}
    >
      {children}
    </Flex>
  );
};

export default Wrapper;
