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
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterModal = ({ isOpen, onClose }: Props) => {
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
          <form>
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
                  type="number"
                  variant={"solid"}
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
                <FormLabel>
                  Mã xác nhận{" "}
                  <Text as={"span"} color={"#f00"}>
                    (*)
                  </Text>
                </FormLabel>
                <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                  <Input
                    size={"sm"}
                    readOnly
                    defaultValue={"12311ÂF"}
                    type="text"
                    variant={"solid"}
                  />
                  <Input
                    size={"sm"}
                    placeholder="Nhập mã xác nhận"
                    type="text"
                    variant={"solid"}
                  />
                </Flex>
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
            <Center mt={5}>
              <CustomButton py={2} px={6}>
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
