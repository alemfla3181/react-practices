import React from 'react';
import Card from './Card';
import styles from './assets/css/styles.css'

const CardList = ({ title, card }) => {
  console.log(title, ":", card);

  return (
    <div className={styles.CardList}>
      <h1>{title}</h1>
      {card.map(e =>
        <Card key={e.no} title={e.title} description={e.description} />)}
    </div>
  );
}

export default CardList;