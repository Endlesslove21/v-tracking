import { Icon } from "@chakra-ui/react";
import CustomButton from "../elements/button";
import { IoIosArrowUp } from "react-icons/io";
type Props = {
  onClick: () => void;
};

const ScrollTopBtn = ({ onClick }: Props) => {
  return (
    <CustomButton
      w={"60px"}
      height={"60px"}
      pos={"fixed"}
      bottom={"60px"}
      right={"25px"}
      zIndex={99}
      onClick={onClick}
    >
      <Icon as={IoIosArrowUp} mt={1} boxSize={7} />
    </CustomButton>
  );
};

export default ScrollTopBtn;
