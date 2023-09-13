import React from "react";

import "../styles/index.scss";

export function ContactItem({ item: { href, svgName, svgAlt, description } }) {
  const svg = require(`../assets/svg/${svgName}.svg`);

  return (
    <li className="item">
      <div className="icon-and-text">
        <a
          className="svg"
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src={svg} alt={svgAlt} width={30} height={30} />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer nofollow">
          <p className="description">{description}</p>
        </a>
      </div>
    </li>
  );
}
