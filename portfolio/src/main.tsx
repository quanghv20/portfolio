import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript.min.js";

// import Prism from "prismjs";

import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
