import React from "react";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { AnimatedBackground } from "./AnimatedBackground";
import { ContactList } from "./ContactsList";
import { LangSwitcher } from "./LangSwitcher";
import { LinkList } from "./LinkList";

import "../styles/index.scss";

import translationEN from "../locales/en/translation.json";
import translationUA from "../locales/ua/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <LangSwitcher />
      <AnimatedBackground />
      <div className="container content">
        <h1 className="title">
          {t("title.firstPart")} <br />
          {t("title.secondPart")}
        </h1>
        <h2 className="subtitle">
          {t("subtitle.firstPart")} <br /> {t("subtitle.secondPart")}
        </h2>
        <div className="sections">
          <section className="section">
            <h3 className="subsubtitle"> {t("subsubtitle")}</h3>
            <p className="comment">{t("comment")}</p>
            <LinkList />
          </section>

          <section>
            <h3 className="subsubtitle">{t("contact.description")}</h3>
            <p className="comment">{t("contact.comment")}</p>
            <ContactList />
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
