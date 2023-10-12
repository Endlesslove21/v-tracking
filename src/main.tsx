import { render } from "react-dom"; // Import the render function
import "./index.css";
import App from "./App.tsx";
import "./i18n.ts";
// Use render instead of createRoot
render(<App />, document.getElementById("root"));
