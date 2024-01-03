import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  className?: string;
  onClick?: () => void;
}

export function LangSwitcher({ className, onClick }: Props) {
  const { i18n } = useTranslation();

  const language = i18n.language;

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <ul className="lang-list">
      <li className="first-item">
        <button
          type="button"
          onClick={() => handleLanguageChange("ua")}
          className={`${
            language === "ua" ? "text-white" : "text-blue"
          } lang-button`}
          disabled={language === "ua"}
        >
          UA
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => handleLanguageChange("en")}
          className={`${
            language === "en" ? "text-white" : "text-blue"
          } lang-button`}
          disabled={language === "en"}
          value="en"
        >
          ENG
        </button>
      </li>
    </ul>
  );
}
