import CustomButton from "@/components/elements/button";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
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

const RegisterModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box as={"h2"} className="modal-heading-text">
            Đăng ký nhận tư vấn miễn phí
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <Flex gap={3}>
              <FormControl>
                <FormLabel fontSize={"14px"} fontWeight={"400"}>
                  Điện thoại{" "}
                  <Text as={"span"} color={"#f00"}>
                    (*)
                  </Text>
                </FormLabel>
                <Input
                  size={"md"}
                  placeholder="Nhập số điện thoại"
                  type="number"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Địa chỉ email</FormLabel>
                <Input
                  placeholder="Nhập số điện thoại"
                  type="email"
                  borderRadius={"2px"}
                />
              </FormControl>
            </Flex>
            <Flex mt={5} gap={3}>
              <Box>
                <Text>Mã xác nhận</Text>
                <Text as={"span"} color={"red"}>
                  {" "}
                  (*)
                </Text>
                <Input
                  placeholder="Mã xác nhận"
                  defaultValue={"guQbt"}
                  readOnly
                  type="text"
                  borderRadius={"2px"}
                />
              </Box>
              <Box>
                <Text> </Text>

                <Input
                  placeholder="Nhập mã xác nhận"
                  type="text"
                  borderRadius={"2px"}
                />
              </Box>
            </Flex>
          </form>

          <Box mt={5}>
            <Text>Nội dung liên hệ</Text>
            <Box as="textarea" placeholder="Nhập nội dung"></Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <CustomButton py={2}>Gửi liên hệ</CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
