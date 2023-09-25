import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const VideoModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          autoFocus={false}
          top={"-28px"}
          right={"-4px"}
          color={"white"}
          variant={"unstyle"}
        />
        <Box>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/Fo7ve2JzXX8?autoplay=1"
          ></iframe>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
