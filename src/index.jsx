import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Parse from "parse";
import { ENV } from "./environments.js";
import App from "./App.jsx";
import "./styles.css";

// connect to Back4App
Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
Parse.serverURL = ENV.SERVER_URL;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
