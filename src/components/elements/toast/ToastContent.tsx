import { Box } from "@chakra-ui/react";

interface ToastContentProps {
  content: string;
  isSuccess?: boolean;
}

const ToastContent = ({ content, isSuccess }: ToastContentProps) => {
  return (
    <Box
      bg={isSuccess ? "#32cd32" : "second"}
      p={"10px"}
      borderRadius={"4px"}
      fontSize={"13px"}
      color={"white"}
      fontWeight={"500"}
    >
      {content}
    </Box>
  );
};

export default ToastContent;
