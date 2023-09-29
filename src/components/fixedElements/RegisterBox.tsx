import { Box, Center, Image, useDisclosure } from "@chakra-ui/react";
import CustomButton from "../elements/button";
import RegisterModal from "../header/modal/RegisterModal";

const RegisterBox = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w={"130px"}
        height={"90px"}
        pos={"fixed"}
        bottom={"60px"}
        left={"30px"}
        zIndex={1}
      >
        <CustomButton p={"1px 10px"}>Đăng ký tư vấn</CustomButton>
        <Center mt={3}>
          <Image
            display={"inline-block"}
            cursor={"pointer"}
            src={"/assets/imgs/icon-advisory.gif"}
            w={"60px"}
            height={"60px"}
            onClick={onOpen}
          />
        </Center>
      </Box>

      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default RegisterBox;
