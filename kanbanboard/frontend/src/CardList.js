import React from 'react';
import Card from './Card';
import styles from './assets/css/styles.css'

const CardList = ({ title, card }) => {
  // console.log("card:",card);
  return (
    <div className={styles.CardList}>
      <h1>{title}</h1>
      {card.map(e =>
        <Card key={e.no} no={e.no} title={e.title} description={e.description} status={e.status}/>)}
    </div>
  );
}

export default CardList;