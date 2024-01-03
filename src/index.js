import React from "react";
import ReactDOM from "react-dom/client";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import App from "./components/App";

import "./styles/index.scss";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
