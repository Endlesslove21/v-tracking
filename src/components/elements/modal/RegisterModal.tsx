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
} from "@chakra-ui/react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterModal = ({ isOpen, onClose }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const handleChangeRecapcha = (value: string | null) => {};

  const handleSubmitRegisterForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
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
          <form onSubmit={handleSubmitRegisterForm}>
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
                  placeholder="Nhập số điện thoại"
                  type="tel"
                  variant={"solid"}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Địa chỉ email</FormLabel>
                <Input
                  size={"sm"}
                  variant={"solid"}
                  placeholder="Nhập email"
                  type="email"
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
                    onChange={handleChangeRecapcha}
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
