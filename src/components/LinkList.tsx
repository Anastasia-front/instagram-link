import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/index.scss";

import { LinkItemType, linksEN, linksUA } from "../ts/links";

import { LinkItem } from "./LinkItem";

export function LinkList() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const links = language === "en" ? linksEN : linksUA;

  return (
    <ul className="list" id="linksList">
      {links.map((item: LinkItemType) => (
        <LinkItem item={item} key={item.title} />
      ))}
    </ul>
  );
}
