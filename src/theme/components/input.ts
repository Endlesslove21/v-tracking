import { defineStyleConfig } from "@chakra-ui/react";

export const Input = defineStyleConfig({
  // The styles all input have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "4px", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "14px",
      px: "12px", // <-- px is short for paddingLeft and paddingRight
      py: "4px", // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 1, // <-- these values are tokens from the design system
      py: 1, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      _placeholder: {
        fontSize: "14px",
        color: "#bebebe",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});
