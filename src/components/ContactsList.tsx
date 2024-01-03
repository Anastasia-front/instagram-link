import React from "react";



import { ContactItem } from "./ContactItem";

import { ContactItemType, contacts } from "../ts/contacts";

import "../styles/index.scss";
export function ContactList() {
  return (
    <ul className="list">
      {contacts.map((item: ContactItemType) => (
        <ContactItem item={item} key={item.name} />
      ))}
    </ul>
  );
}
