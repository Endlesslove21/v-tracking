import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "14px",
      px: "10px", // <-- px is short for paddingLeft and paddingRight
      py: "5px", // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: "20px", // <-- these values are tokens from the design system
      py: "20px", // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "1px solid",
      borderColor: "#ccc",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});
