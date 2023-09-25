import { colors } from "./foundations/colors";
import { breakpoints } from "@/theme/foundations/breakpoints";
import { Button } from "./components/button";
import { Input } from "./components/input";
// theme/index.js
import { extendTheme } from "@chakra-ui/react";

import { styles } from "./styles";
const overrides = {
  styles,
  colors,
  breakpoints,
  // Other foundational style overrides go here
  components: {
    // Other components go here
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
        display: "inline-block",
      },
    },
    Button,
    Input,
  },
};

export default extendTheme(overrides);
