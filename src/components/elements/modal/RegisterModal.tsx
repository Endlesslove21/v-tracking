import CustomButton from "@/components/elements/button";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import ToastContent from "../toast/ToastContent";
import PhoneNumberField from "../input/PhoneNumberField";
import EmailField from "../input/EmailField";
import ReCAPCHA from "../capcha/ReCAPCHA";
import { useTranslation } from "react-i18next";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

interface RegisterFormData {
  phoneNumber: string;
  email: string | null;
  note: string | null;
  capchaToken: string;
}

const RegisterModal = ({ isOpen, onClose }: Props) => {
  const methods = useForm<RegisterFormData>();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const { t } = useTranslation();
  const onSubmitRegisterForm = (value: RegisterFormData) => {
    toast({
      position: "top-right",
      render: () => (
        <ToastContent
          isSuccess={true}
          content="Đăng ký tư vấn thành công. Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất!"
        />
      ),
      status: "success",
    });
    console.log(value);
  };

  const onSubmitRegisterFormError = (error: any) => {
    switch (true) {
      case !!error.phoneNumber:
        toast({
          position: "top-right",
          status: "error",
          render: () => <ToastContent content={error.phoneNumber.message} />,
        });
        break;
      case !!error.email:
        toast({
          position: "top-right",
          status: "error",
          render: () => <ToastContent content={error.email.message} />,
        });
        break;
      case !!error.capchaToken:
        toast({
          position: "top-right",
          status: "error",
          render: () => <ToastContent content={error.capchaToken.message} />,
        });
        break;
      default:
        break;
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx={{ base: 3, sm: 0 }}>
        <ModalHeader>
          <Box as={"h2"} className="modal-heading-text">
            {t("registerModal.title")}
          </Box>
        </ModalHeader>
        <ModalCloseButton
          variant={"unstyled"}
          color={"primary"}
          _hover={{ color: "#ccc" }}
        />
        <ModalBody>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(
                onSubmitRegisterForm,
                onSubmitRegisterFormError
              )}
            >
              <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                <FormControl isInvalid={!!errors.phoneNumber}>
                  <FormLabel>
                    {t("registerModal.phoneNumber")}{" "}
                    <Text as={"span"} color={"#f00"}>
                      (*)
                    </Text>
                  </FormLabel>
                  <PhoneNumberField
                    errorText={t("registerModal.phoneNumberErrorText")}
                    size={"md"}
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>{t("registerModal.email")}</FormLabel>
                  <EmailField size={"md"} />
                </FormControl>
              </Flex>

              <Flex mt={5}>
                <FormControl>
                  <FormLabel>{t("registerModal.content")}</FormLabel>
                  <Textarea
                    placeholder={t("registerModal.contentPlaceholder")}
                    _placeholder={{
                      fontSize: "14px",
                    }}
                    resize={"both"}
                    border={"1px solid #d9dde5"}
                    borderRadius={"4px"}
                    px="12px"
                    py="6px"
                    h="44px"
                    {...register("note")}
                  />
                </FormControl>
              </Flex>

              <FormControl isInvalid={!!errors.capchaToken} mt={5}>
                <ReCAPCHA />
                {errors.capchaToken && (
                  <FormErrorMessage>
                    {errors.capchaToken.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <Center mt={5}>
                <CustomButton type="submit" py={2} px={6}>
                  {t("registerModal.submitBtnText")}
                </CustomButton>
              </Center>
            </form>
          </FormProvider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
