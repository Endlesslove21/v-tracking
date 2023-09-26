import { Heading, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<BoxProps> & {
  title: string;
};

const HeadingTitle = ({ title, ...BoxProps }: Props) => {
  return (
    <Heading
      as={"h2"}
      fontSize={{ base: "28px", md: "33px" }}
      fontFamily={"Magistral"}
      letterSpacing={"1px"}
      lineHeight={"1.7"}
      w={"100%"}
      textAlign={"center"}
      {...BoxProps}
    >
      {title}
    </Heading>
  );
};

export default HeadingTitle;
