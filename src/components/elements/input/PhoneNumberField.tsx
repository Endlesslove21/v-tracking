import { Input, InputProps } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props = InputProps & {
  errorText: string;
};

const PhoneNumberField = ({ errorText, ...InputProp }: Props) => {
  const { register } = useFormContext();
  const { t } = useTranslation();
  return (
    <Input
      {...InputProp}
      errorBorderColor="#f00"
      placeholder={t("registerModal.phoneNumberPlaceholder")}
      type="tel"
      {...register("phoneNumber", {
        required: {
          value: true,
          message: errorText,
        },
        onChange: (e) => {
          const newValue = e.target.value.replace(/\s/g, "");
          e.target.value = newValue;
        },
        pattern: {
          value: /^(0|\+84|84)?[1-9]\d{8,9}$/,
          message: t("registerModal.phoneNumberInValidErrorText"),
        },
      })}
    />
  );
};

export default PhoneNumberField;
