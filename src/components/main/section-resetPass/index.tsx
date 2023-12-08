import {
  Box,
  Center,
  Circle,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Icon,
  Select,
  Text,
} from "@chakra-ui/react";
import { BsFillBellFill } from "react-icons/bs";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomButton from "@/components/elements/button";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import EmailField from "@/components/elements/input/EmailField";
import PhoneNumberField from "@/components/elements/input/PhoneNumberField";
import ReCAPCHA from "@/components/elements/capcha/ReCAPCHA";

type ResetPass = {
  email?: string;
  phoneNumber?: string;
  capchaToken: string;
};

const ResetPassForm = () => {
  const methods = useForm<ResetPass>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const [option, setOption] = useState<string>("email");
  const navigate = useNavigate();
  const onSubmitResetPass = (value: any) => {
    console.log(value);
  };
  const onErrorResetPass = () => {};
  return (
    <>
      <Center bgColor={"#f5f5f5"} w={"100%"} height={"calc(100vh - 200px)"}>
        <Box
          maxW={"500px"}
          w={"100%"}
          m={"0 auto"}
          bg={"white"}
          borderTop={"1px solid #e5e5e5"}
          borderRadius={"6px"}
          p={"35px"}
          boxShadow={"0px 4px 4px rgb(0 0 0 / 25%)"}
          height={"auto"}
        >
          {/* header */}
          <Flex gap={1}>
            <Circle size={"50px"} bgColor={"#eee"}>
              <Icon as={BsFillBellFill} boxSize={5} />
            </Circle>
            <Box>
              <Heading as={"h6"} fontSize={"24px"}>
                Lấy token reset mật khẩu
              </Heading>

              <Text>
                Vui lòng nhập email/số điện thoại của bạn và mã xác nhận!
              </Text>
            </Box>
          </Flex>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitResetPass, onErrorResetPass)}>
              <Select
                mt={3}
                size={"sm"}
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value={"email"}>Lấy token qua email</option>
                <option value={"phoneNumber"}>
                  Lấy token qua số điện thoại
                </option>
              </Select>
              {option === "email" && (
                <FormControl mt={3} isInvalid={!!errors.email}>
                  <EmailField size={"sm"} />
                  {errors.email && (
                    <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                  )}
                </FormControl>
              )}
              {option === "phoneNumber" && (
                <FormControl mt={3} isInvalid={!!errors.phoneNumber}>
                  <PhoneNumberField
                    errorText="Bạn hãy nhập số điện thoại để có thể reset mật khẩu"
                    size={"sm"}
                  />
                  {errors.phoneNumber && (
                    <FormErrorMessage>
                      {errors.phoneNumber.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
              )}

              <FormControl isInvalid={!!errors.capchaToken} mt={3}>
                <ReCAPCHA />
                {errors.capchaToken && (
                  <FormErrorMessage>
                    {errors.capchaToken.message}
                  </FormErrorMessage>
                )}
              </FormControl>

              <Flex justifyContent={"center"} mt={5}>
                <CustomButton onClick={() => navigate("/")} w={"150px"} mr={3}>
                  <Icon pt={2} as={IoArrowBackOutline} boxSize={5} />
                  Đăng nhập
                </CustomButton>
                <CustomButton w={"150px"} type="submit">
                  Gửi liên hệ
                </CustomButton>
              </Flex>
            </form>
          </FormProvider>
        </Box>
      </Center>
    </>
  );
};

export default ResetPassForm;
