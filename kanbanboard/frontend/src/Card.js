import React, { useState } from 'react';
import AddTask from './AddTask';
import styles from './assets/css/styles.css';
import TaskList from './TaskList';

const Card = ({ title, description, tasks }) => {
  const [ShowDetail, setShowDetail] = useState(true);

  const onClickTitleHandler = e => {
    setShowDetail(ShowDetail ? false : true);
  }


  return (
    <div className={styles.Card}>
      <div className={ShowDetail ? styles.Card__Title : styles.Card__Title__open}
        style={{ cursor: 'pointer' }}
        onClick={onClickTitleHandler}>
        {title}
      </div>
      { ShowDetail  ? <div></div> :
        <div className={styles.Card__Details}>{description}
          <div className={styles.TaskList}>
            <ul>
              {tasks.map(e =>
                <TaskList key={e.no} name={e.name} done={e.done} />
              )}
            </ul>
            <AddTask />
          </div>
        </div>
      }
    </div>
  )
}

export default Card