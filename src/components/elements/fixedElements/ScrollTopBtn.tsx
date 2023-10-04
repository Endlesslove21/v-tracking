import { Icon } from "@chakra-ui/react";
import CustomButton from "../button";
import { IoIosArrowUp } from "react-icons/io";
type Props = {
  onClick: () => void;
};

const ScrollTopBtn = ({ onClick }: Props) => {
  return (
    <CustomButton
      w={"50px"}
      height={"50px"}
      pos={"fixed"}
      bottom={"60px"}
      right={"25px"}
      zIndex={99}
      sx={{ borderRadius: "9px" }}
      onClick={onClick}
    >
      <Icon as={IoIosArrowUp} mt={1} boxSize={7} />
    </CustomButton>
  );
};

export default ScrollTopBtn;
