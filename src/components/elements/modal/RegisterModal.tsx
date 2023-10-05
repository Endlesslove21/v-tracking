import CustomButton from "@/components/elements/button";
import {
  Box,
  Center,
  Flex,
  FormControl,
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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
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
  const { register, handleSubmit } = methods;

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
    if (error.phoneNumber) {
      toast({
        status: "error",
        position: "top-right",
        render: () => (
          <Box bg={"red"} p={"10px 5px"} color={"white"}>
            {error.phoneNumber.message}
          </Box>
        ),
      });
    }
    if (error.email) {
      toast({
        status: "error",
        render: () => (
          <Box bg={"red"} color={"white"}>
            {error.email.message}
          </Box>
        ),
      });
    }
    if (error.capchaToken) {
      toast({
        status: "error",
        render: () => (
          <Box bg={"red"} color={"white"}>
            {error.capchaToken.message}
          </Box>
        ),
      });
    }
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
                    <ReCAPTCHA
                      sitekey={import.meta.env.VITE_RECAPCHA_SITE_KEY}
                      {...register("capchaToken", {
                        required: "Hãy xác nhận mã capcha",
                      })}
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
