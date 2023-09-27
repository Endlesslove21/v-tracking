import { Box, Heading, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = BoxProps & {
  customerAmount: string;
  content: ReactNode;
};

const OurCustomersBox = ({ customerAmount, content, ...BoxProps }: Props) => {
  return (
    <Box {...BoxProps} px={"15px"} w={{ base: "100%", lg: "33.33%" }}>
      <Box
        bg={
          "url(/assets/imgs/ourCustomers/ourCustomer_bg1.png) no-repeat left top"
        }
        minH={"240px"}
        pl={"170px"}
      >
        <Heading as={"h4"} fontSize={"36px"} color={"second"}>
          {customerAmount}
        </Heading>
        {content}
      </Box>
    </Box>
  );
};

export default OurCustomersBox;
