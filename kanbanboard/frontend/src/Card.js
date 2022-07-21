import React from 'react';
import styles from './assets/css/styles.css';
import TaskList from './TaskList';

const Card = ({ title, description, tasks }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__Title}>{title}</div>
      <div className={styles.Card__Details}>{description}
        <div className={styles.TaskList}>
          <ul>
            {tasks.map(e =>
              <TaskList key={e.no} name={e.name} done={e.done} />
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card