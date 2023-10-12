import { Input, InputProps } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props = InputProps;

const EmailField = ({ ...InputProps }: Props) => {
  const { register } = useFormContext();
  const { t } = useTranslation();
  return (
    <Input
      errorBorderColor="#f00"
      {...InputProps}
      placeholder={t("registerModal.emailPlaceholder")}
      type="text"
      {...register("email", {
        required: t("registerModal.emailRequiredErrorText"),
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: t("registerModal.emailInvalidErrorText"),
        },
      })}
    />
  );
};

export default EmailField;
