import React from "react";

import "../styles/index.scss";
import { LinkItemType, content } from "../ts/content";

import { LinkItem } from "./LinkItem";

export function ContentList() {
  return (
    <ul className="list" id="contentList">
      {content.map((item: LinkItemType) => (
        <LinkItem item={item} key={item.title} />
      ))}
    </ul>
  );
}
