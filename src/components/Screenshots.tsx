import React from "react";

import "../styles/index.scss";

export function Screenshots({ link, screenshots }) {
  const screenshotImages = screenshots.map((screenshot) => {
    const { imgName, imgAlt } = screenshot;

    const imgSrc = require(`../assets/content/${imgName}.png`);

    return (
      <div key={imgName}>
        <img src={imgSrc} alt={imgAlt} className="content-image" />
      </div>
    );
  });

  return screenshotImages.map((screenshot, screenshotIndex) => (
    <a
      key={screenshotIndex}
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="content-link"
    >
      {screenshot}
    </a>
  ));
}
