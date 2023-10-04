import { Box, Center, Image, useDisclosure } from "@chakra-ui/react";
import CustomButton from "../button";
import RegisterModal from "../modal/RegisterModal";
type Props = {
  onOpenRegisterModal: () => void;
};
const RegisterBtn = ({ onOpenRegisterModal }: Props) => {
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
        <CustomButton onClick={onOpenRegisterModal} p={"1px 10px"}>
          Đăng ký tư vấn
        </CustomButton>

        <Center mt={3}>
          <Image
            borderRadius="full"
            boxSize="150px"
            display={"inline-block"}
            cursor={"pointer"}
            src={"/assets/imgs/icon-advisory.gif"}
            w={"60px"}
            height={"60px"}
            onClick={onOpenRegisterModal}
          />
        </Center>
      </Box>
    </>
  );
};

export default RegisterBtn;
