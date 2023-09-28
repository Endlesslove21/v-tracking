import React from "react";
import { render } from "react-dom"; // Import the render function
import "./index.css";
import App from "./App.tsx";

// Use render instead of createRoot
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
