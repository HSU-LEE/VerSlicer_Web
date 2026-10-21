import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "../i18n/LanguageContext";
import "../styles/index.css";
import "./wiki.css";
import WikiApp from "./WikiApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <WikiApp />
    </LanguageProvider>
  </StrictMode>
);
