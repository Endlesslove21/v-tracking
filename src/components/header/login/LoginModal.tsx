import CustomButton from "@/components/elements/button";
import CustomLink from "@/components/elements/link";
import {
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal size={"sm"} onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />

      <ModalContent borderRadius={"10px"} p={0}>
        <ModalHeader>
          <Heading mt={5} as={"h2"} fontWeight={"700"} fontSize={"32px"}>
            Đăng nhập
          </Heading>
        </ModalHeader>

        <ModalCloseButton color={"#333"} _hover={{ color: "primary" }} />

        <ModalBody>
          <Flex justifyContent={"center"} flexDir={"column"}>
            <Input
              _placeholder={{ fontSize: "14px" }}
              type="text"
              placeholder="Tên đăng nhập..."
              mb={5}
              py={2}
            />
            <Input
              mb={5}
              _placeholder={{ fontSize: "14px" }}
              type="password"
              placeholder="Mật khẩu..."
              py={2}
            />
            <CustomButton py={3} m={"15px auto"} width={"80%"}>
              ĐĂNG NHẬP
            </CustomButton>
          </Flex>
        </ModalBody>

        <ModalFooter
          borderTop={"1px solid rgba(0,0,0,.1)"}
          borderBottomRadius={"10px"}
          bgColor={"#f4f5f7"}
        >
          <Flex width={"100%"} justifyContent={"center"}>
            <CustomLink
              display={"inline-block"}
              onClick={onClose}
              to={"/LostPassword"}
            >
              <Text color={"#337ab7"}>Quên mật khẩu</Text>
            </CustomLink>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
