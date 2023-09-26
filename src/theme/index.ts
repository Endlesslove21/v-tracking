import { colors } from "./foundations/colors";
import { breakpoints } from "@/theme/foundations/breakpoints";
import { Button } from "./components/button";
// theme/index.j
import { extendTheme } from "@chakra-ui/react";

import { styles } from "./styles";
import inputTheme from "./components/multiparts/inputTheme";

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
    FormLabel: {
      baseStyle: {
        fontSize: "14px",
        fontWeight: "400",
      },
    },

    Button,
    Input: inputTheme,
  },
};

export default extendTheme(overrides);
