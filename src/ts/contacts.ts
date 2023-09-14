export interface ContactItemType {
  name: string;
  href: string;
  svgAlt: string;
  svgName: string;
}

export const contacts: ContactItemType[] = [
  {
    name: "Phone",
    href: "tel:+380666080702",
    svgName: "phone",
    svgAlt: "phone-svg",
  },
  {
    name: "E-mail",
    href: "mailto:palitsanastasia3.ap@gmail.com",
    svgName: "email",
    svgAlt: "email-svg",
  },
  {
    name: "Telegram",
    href: "https://t.me/anastasiia_prysiazhnaia",
    svgName: "telegram",
    svgAlt: "telegram-svg",
  },
  {
    name: "Viber",
    href: "viber://chat?number=380666080702",
    svgName: "viber",
    svgAlt: "viber-svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/380666080702",
    svgName: "whatsApp",
    svgAlt: "whatsApp-svg",
  },
];
