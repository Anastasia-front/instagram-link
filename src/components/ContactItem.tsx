import React from "react";

import "../styles/index.scss";

export function ContactItem({ item: { name, href, svgName, svgAlt } }) {
  const svg = require(`../assets/svg/${svgName}.svg`);

  return (
    <li className="item max-width">
      <div className="icon-and-contact">
        <a
          className="svg"
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src={svg} alt={svgAlt} width={30} height={30} />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer nofollow">
          <p className="description">{name}</p>
        </a>
      </div>
    </li>
  );
}
