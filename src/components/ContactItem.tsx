import React from "react";

import "../styles/index.scss";

export function ContactItem({ item: { name, href, svgName, svgAlt } }) {
  const svg = require(`../assets/svg/${svgName}.svg`);

  return (
    <li className="item max-width">
      <a
        className="svg"
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div className="icon-and-contact">
          <img src={svg} alt={svgAlt} width={30} height={30} />
          <p className="description">{name}</p>
        </div>
      </a>
    </li>
  );
}
