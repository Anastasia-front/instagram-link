import React from "react";
import "../styles/index.scss";
import { ContactList } from "./ContactsList";
import { LinkList } from "./LinkList";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">
        Вітаю! <br />
        Мене звати Анастасія!
      </h1>
      <h2 className="subtitle">
        В минулому я хореограф та тренер зі стретчингу, а зараз світчер
        fullstack developer (react, vite, next, node.js)
      </h2>
      <div className="sections">
        <section className="section">
          <h3 className="subsubtitle">Далі посилання:</h3>
          <p className="comment">* всі елементи клікабельні</p>
          <LinkList />
        </section>

        <section>
          <h3 className="subsubtitle">
            Звʼязатися зі мною можна будь-яким зручним для Вас способом:
          </h3>
          <p className="comment">* також всі елементи є клікабельними</p>
          <ContactList />
        </section>
      </div>
    </div>
  );
};

export default App;
