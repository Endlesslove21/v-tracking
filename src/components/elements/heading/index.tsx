import { Heading } from "@chakra-ui/react";

type Props = {
  title: string;
};

const HeadingTitle = ({ title }: Props) => {
  return (
    <Heading
      as={"h2"}
      fontSize={"33px"}
      fontFamily={"Magistral"}
      letterSpacing={"1px"}
      lineHeight={"1.7"}
    >
      {title}
    </Heading>
  );
};

export default HeadingTitle;
