import AnimatedNumber from "@/utilities/CountUp";
import { Box, Heading, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<BoxProps> & {
  customerAmount: number;
};

const OurCustomersBox = ({ customerAmount, children, ...BoxProps }: Props) => {
  return (
    <Box {...BoxProps} px={"15px"} w={{ base: "100%", lg: "33.33%" }}>
      <Box
        bg={
          "url(/assets/imgs/ourCustomers/ourCustomer_bg1.png) no-repeat left top"
        }
        minH={"240px"}
        pl={"170px"}
      >
        <AnimatedNumber
          animationDuration={2000}
          targetNumber={customerAmount}
        />
        {children}
      </Box>
    </Box>
  );
};

export default OurCustomersBox;
