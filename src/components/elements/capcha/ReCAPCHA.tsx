import { Flex } from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ReCAPCHA = () => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={3}>
      <Controller
        name="capchaToken"
        control={control}
        rules={{ required: t("registerModal.capchaTokenErrorText") }}
        render={({ field }) => (
          <ReCAPTCHA
            {...field}
            sitekey={import.meta.env.VITE_RECAPCHA_SITE_KEY}
            onChange={(value) => {
              field.onChange(value);
            }}
          />
        )}
      />
    </Flex>
  );
};

export default ReCAPCHA;
