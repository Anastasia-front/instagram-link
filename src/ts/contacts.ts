export interface ContactItemType {
  title: string;
  href: string;
  svgAlt: string;
  description: string;
  svgName: string;
}

export const contacts: ContactItemType[] = [
  {
    title: "Phone",
    href: "tel:+380666080702",
    description: "+38 (066) 608-07-02",
    svgName: "phone",
    svgAlt: "phone-svg",
  },
  {
    title: "Email",
    href: "mailto:palitsanastasia3.ap@gmail.com",
    description: "palitsanastasia3.ap@gmail.com",
    svgName: "email",
    svgAlt: "email-svg",
  },
  {
    title: "Telegram",
    href: "https://t.me/anastasiia_prysiazhnaia",
    description: "Telegram",
    svgName: "telegram",
    svgAlt: "telegram-svg",
  },
  {
    title: "WhatsApp",
    href: "https://www.hrefedin.com/in/anastasiia-prysiazhnaia/",
    description: "WhatsApp",
    svgName: "whatsApp",
    svgAlt: "whatsApp-svg",
  },
];
