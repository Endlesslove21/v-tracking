import CustomButton from "@/components/elements/button";
import CustomLink from "@/components/elements/link";
import {
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const onSubmitLoginForm = () => {};
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
          <Heading className="modal-heading-text">{t("login")}</Heading>
        </ModalHeader>

        <ModalCloseButton color={"#333"} _hover={{ color: "primary" }} />

        <ModalBody>
          <form
            onSubmit={handleSubmit(onSubmitLoginForm, onSubmitLoginFormError)}
          >
            <Flex justifyContent={"center"} flexDir={"column"}>
              <FormControl isInvalid={!!errors.user} mb={5}>
                <Input
                  _placeholder={{ fontSize: "14px" }}
                  type="text"
                  placeholder={t("loginModal.userInputPlacehoder")}
                  py={2}
                  {...register("user", {
                    required: t("loginModal.userInputErrorText"),
                  })}
                  errorBorderColor={errors.user ? "second" : ""}
                />
                {errors.user && (
                  <FormErrorMessage>{errors.user.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.password} mb={5}>
                <Input
                  _placeholder={{ fontSize: "14px" }}
                  type="password"
                  placeholder={t("loginModal.pwdInputPlaceholder")}
                  py={2}
                  {...register("password", {
                    required: t("loginModal.pwdInputErrorText"),
                  })}
                />
                {errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
              </FormControl>
              <Container centerContent>
                <CustomButton type="submit" py={3} my={"15px"} width={"90%"}>
                  {t("login")}
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
              <Text color={"#337ab7"}>{t("loginModal.forgotPass")}</Text>
            </CustomLink>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
