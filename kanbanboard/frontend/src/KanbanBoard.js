import React, { useEffect, useState } from "react";
import styles from "./assets/css/styles.css";
import CardList from "./CardList";

const KanbanBoard = () => {
  const [cards, setCards] = useState([]);

  useEffect(async() => {
    try {
      const response = await fetch('api/card', {
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setCards(json.data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  

  return (
    <div className={styles.KanbanBoard}>
      <CardList title={"ToDo"} card={cards.filter((e) => e.status === "ToDo")} />
      <CardList title={"Doing"} card={cards.filter((e) => e.status === "Doing")} />
      <CardList title={"Done"} card={cards.filter((e) => e.status === "Done")} />
    </div>
  );
};

export default KanbanBoard;
