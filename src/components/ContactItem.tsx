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

<div class="contacts">
  <div class="contact">
    <div class="phone contacts-icon">
      <a href="tel:+380666080702" class="contact-icon">
        <img
          class="icon"
          height="22"
          alt="phone"
          src="https://img.icons8.com/ios/50/null/apple-phone.png"
        />
        <span> +38 (066) 608-07-02 </span>
      </a>
    </div>
    <div class="email contacts-icon">
      <a href="mailto:palitsanastasia3.ap@gmail.com" class="contact-icon">
        <svg
          class="icon"
          width="16"
          fill="#000000"
          viewBox="0 0 32.311 32.311"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke-width="0"></g>
          <g transform="translate(-224.531 -194.157)">
            <path d="M252.782,196.157a2.062,2.062,0,0,1,2.06,2.06v24.191a2.062,2.062,0,0,1-2.06,2.06H228.591a2.063,2.063,0,0,1-2.06-2.06V198.217a2.063,2.063,0,0,1,2.06-2.06h24.191m0-2H228.591a4.06,4.06,0,0,0-4.06,4.06v24.191a4.06,4.06,0,0,0,4.06,4.06h24.191a4.06,4.06,0,0,0,4.06-4.06V198.217a4.06,4.06,0,0,0-4.06-4.06Z"></path>
            <path d="M240.687,215.205a4.478,4.478,0,0,1-2.729-.922l-13.011-9.943,1.215-1.59,13.01,9.944a2.5,2.5,0,0,0,3.03,0l12.853-9.826,1.215,1.59-12.853,9.825A4.492,4.492,0,0,1,240.687,215.205Z"></path>
          </g>
        </svg>
        <span>palitsanastasia3.ap@gmail.com</span>
      </a>
    </div>
  </div>
  <div class="icons">
    <a
      href="https://www.instagram.com/anastasiia_prysiazhnaia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="pic" src="./home/icons/instagram.png" alt="label instagram" />
    </a>
    <a
      href="https://t.me/anastasiia_prysiazhnaia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="pic" src="./home/icons/telegram.png" alt="label telegram" />
    </a>
    <a
      href="https://api.whatsapp.com/send?phone=380666080702&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83..."
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="pic" src="./home/icons/whatsapp.png" alt="label whatsapp" />
    </a>
    <a
      href="https://www.linkedin.com/in/anastasiia-prysiazhnaia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="pic" src="./home/icons/linkedin.png" alt="label linkedin" />
    </a>
  </div>
</div>;
