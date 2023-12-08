import { Box, Center, Image } from "@chakra-ui/react";
import CustomButton from "../button";
import { useTranslation } from "react-i18next";

type Props = {
  onOpenRegisterModal: () => void;
};
const RegisterBtn = ({ onOpenRegisterModal }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        w={"130px"}
        height={"90px"}
        pos={"fixed"}
        bottom={"60px"}
        left={"30px"}
        zIndex={1}
      >
        <CustomButton onClick={onOpenRegisterModal} p={"1px 10px"}>
          {t("register")}
        </CustomButton>

        <Center mt={3}>
          <Image
            borderRadius="full"
            boxSize="150px"
            display={"inline-block"}
            cursor={"pointer"}
            src={"/assets/imgs/icon-advisory.gif"}
            w={"60px"}
            height={"60px"}
            onClick={onOpenRegisterModal}
          />
        </Center>
      </Box>
    </>
  );
};

export default RegisterBtn;
