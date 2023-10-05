import CustomButton from "@/components/elements/button";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  ToastProvider,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  Controller,
} from "react-hook-form";
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
interface ToastContentProps {
  content: string;
}

const ToastContent = ({ content }: ToastContentProps) => {
  return (
    <Box
      bg={"second"}
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

const RegisterModal = ({ isOpen, onClose }: Props) => {
  const methods = useForm<RegisterFormData>();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmitRegisterForm = (value: RegisterFormData) => {
    // async request which may result error
    try {
      // await fetch()
      console.log(value);
    } catch (e) {
      // handle your error
      console.log("e123123");
    }
  };

  const onError = (error: any) => {
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
        toast({
          position: "top-right",
          status: "success",
          description: "Thanh cong!!",
        });
        break;
    }
    console.log(error.capchaToken);
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx={{ base: 3, sm: 0 }}>
        <ModalHeader>
          <Box as={"h2"} className="modal-heading-text">
            Đăng ký nhận tư vấn miễn phí
          </Box>
        </ModalHeader>
        <ModalCloseButton
          variant={"unstyled"}
          color={"primary"}
          _hover={{ color: "#ccc" }}
        />
        <ModalBody>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitRegisterForm, onError)}>
              <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                <FormControl>
                  <FormLabel>
                    Điện thoại{" "}
                    <Text as={"span"} color={"#f00"}>
                      (*)
                    </Text>
                  </FormLabel>
                  <Input
                    size={"sm"}
                    variant={"solid"}
                    placeholder="Nhập số điện thoại"
                    type="tel"
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message:
                          "Bạn hãy nhập số điện thoại để chúng tôi có thể liên hệ tư vấn!",
                      },
                      pattern: {
                        value: /^(0|\+84|84)?[1-9]\d{8,9}$/,
                        message: "Số điện thoại bạn nhập không hợp lệ",
                      },
                    })}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Địa chỉ email</FormLabel>
                  <Input
                    size={"sm"}
                    variant={"solid"}
                    placeholder="Nhập email"
                    type="text"
                    {...register("email", {
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email bạn nhập không hợp lệ",
                      },
                    })}
                  />
                </FormControl>
              </Flex>

              <Flex mt={5}>
                <FormControl>
                  <FormLabel>Nội dung liên hệ</FormLabel>
                  <Textarea
                    placeholder="Nhập nội dung"
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

              <Flex mt={5}>
                <FormControl>
                  <Flex
                    w={"100%"}
                    flexDir={{ base: "column", sm: "row" }}
                    gap={3}
                  >
                    <Controller
                      name="capchaToken"
                      control={methods.control}
                      render={({ field }) => (
                        <ReCAPTCHA
                          {...field}
                          sitekey={import.meta.env.VITE_RECAPCHA_SITE_KEY}
                          onChange={(value) => {
                            field.onChange(value);
                          }}
                        />
                      )}
                    />
                  </Flex>
                </FormControl>
              </Flex>
              <Center mt={5}>
                <CustomButton type="submit" py={2} px={6}>
                  Gửi liên hệ
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
