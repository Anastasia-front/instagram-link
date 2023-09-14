import React from "react";

import "../styles/index.scss";
import { ContactItemType, contacts } from "../ts/contacts";

import { ContactItem } from "./ContactItem";

export function ContactList() {
  return (
    <ul className="list">
      {contacts.map((item: ContactItemType) => (
        <ContactItem item={item} key={item.name} />
      ))}
    </ul>
  );
}
