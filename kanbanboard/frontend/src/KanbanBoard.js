import React from 'react';
import styles from './assets/css/styles.css'
import cards from './assets/json/data.json';
import CardList from './CardList';

const KanbanBoard = () => {
  console.log(cards.filter(e => e.status === 'Done'));

  return (
    <div className={styles.KanbanBoard}>
      <CardList title={'ToDo'} card={cards.filter(e => e.status === 'ToDo')} />
      <CardList title={'Doing'} card={cards.filter(e => e.status === 'Doing')} />
      <CardList title={'Done'} card={cards.filter(e => e.status === 'Done')} />
    </div>
  )
}

export default KanbanBoard;