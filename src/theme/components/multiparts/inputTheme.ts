import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    fontFamily: "Sarabun, san-serif", // change the font family
    _placeholder: {
      fontSize: "14px",
      color: "#d9dde5",
    },
  },
});

const md = defineStyle({
  fontSize: "14px",
  px: "12px !important",
  py: "6px",
  h: "44px",
});
const sizes = {
  md: definePartsStyle({ field: md, addon: md }),
};

const solid = definePartsStyle({
  field: {
    border: "1px solid #d9dde5 ",
    borderRadius: "4px",
  },
});

const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: { solid },
});
export default inputTheme;
