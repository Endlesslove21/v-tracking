import { colors } from "./foundations/colors";
// theme/index.js
import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
const overrides = {
  styles,
  colors,
  // Other foundational style overrides go here
  components: {
    // Other components go here
  },
};

export default extendTheme(overrides);
