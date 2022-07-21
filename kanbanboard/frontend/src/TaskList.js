import React,{useState} from 'react';
import styles from './assets/css/styles.css';

const TaskList = ({ name, done }) => {
  const [Checked, setChecked] = useState(false);
  
  return (
    <li className={styles.TaskList__Task}>
      <input type='checkbox' checked={Checked} onChange={e => setChecked(Checked ? false : true)} /> {name} {done}
      <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  )
}

export default TaskList;