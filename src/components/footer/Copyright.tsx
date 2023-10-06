import { Box, Text } from "@chakra-ui/react";

type Props = {
  description: string;
};

const Copyright = ({ description }: Props) => {
  return (
    <Box
      w={"100%"}
      bg={"linear-gradient(270deg, #BA1318 0%, #E61A45 60.42%, #EE0000 100%)"}
    >
      <Text color="white" p={"10px 0 13px"} textAlign={"center"}>
        {description}
      </Text>
    </Box>
  );
};

export default Copyright;
