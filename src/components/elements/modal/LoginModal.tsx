import CustomButton from "@/components/elements/button";
import CustomLink from "@/components/elements/link";
import {
  Container,
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
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import ToastContent from "../toast/ToastContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
type LoginForm = {
  user: string;
  password: string;
};

const LoginModal = ({ isOpen, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const toast = useToast();
  const onSubmitLoginForm = (value: LoginForm) => {};
  const onSubmitLoginFormError = (error: any) => {
    switch (true) {
      case !!error.user:
        toast({
          status: "error",
          position: "top-right",
          render: () => <ToastContent content={error.user.message} />,
        });
        break;
      case !!error.password:
        toast({
          status: "error",
          position: "top-right",
          render: () => <ToastContent content={error.password.message} />,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Modal size={"md"} onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />

      <ModalContent borderRadius={"10px"} p={0}>
        <ModalHeader>
          <Heading className="modal-heading-text">Đăng nhập</Heading>
        </ModalHeader>

        <ModalCloseButton color={"#333"} _hover={{ color: "primary" }} />

        <ModalBody>
          <form
            onSubmit={handleSubmit(onSubmitLoginForm, onSubmitLoginFormError)}
          >
            <Flex justifyContent={"center"} flexDir={"column"}>
              <Input
                _placeholder={{ fontSize: "14px" }}
                type="text"
                placeholder="Tên đăng nhập..."
                mb={5}
                py={2}
                {...register("user", {
                  required: "Vui lòng điền tên đăng nhập!",
                })}
                errorBorderColor={errors.user ? "second" : ""}
              />
              <Input
                mb={5}
                _placeholder={{ fontSize: "14px" }}
                type="password"
                placeholder="Mật khẩu..."
                py={2}
                {...register("password", {
                  required: "Vui lòng nhập mật khẩu!",
                })}
              />
              <Container centerContent>
                <CustomButton type="submit" py={3} my={"15px"} width={"90%"}>
                  ĐĂNG NHẬP
                </CustomButton>
              </Container>
            </Flex>
          </form>
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
