import React from "react";

import { AccordionButton } from "./AccordionButton";

import "../styles/index.scss";

export function LinkItem({
  item: { link, svgName, svgAlt, description, textArrow, screenshots },
}) {
  const svg = require(`../assets/svg/${svgName}.svg`);

  return (
    <li className="item">
      <div className="icon-and-text">
        <a
          className="svg"
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src={svg} alt={svgAlt} width={30} height={30} />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer nofollow">
          <p className="description">{description}</p>
        </a>
        <AccordionButton
          buttonText={textArrow}
          link={link}
          screenshots={screenshots}
        />
      </div>
    </li>
  );
}
