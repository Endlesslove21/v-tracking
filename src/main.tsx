import React from "react";
import { render } from "react-dom"; // Import the render function

import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// Use render instead of createRoot
render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
