import React from "react";

import "../styles/index.scss";
import { LinkItemType, links } from "../ts/links";

import { LinkItem } from "./LinkItem";

export function LinkList() {
  return (
    <ul className="list" id="linksList">
      {links.map((item: LinkItemType) => (
        <LinkItem item={item} key={item.title} />
      ))}
    </ul>
  );
}
