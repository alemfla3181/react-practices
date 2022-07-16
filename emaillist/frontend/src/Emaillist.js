import React, { Fragment } from "react";
import styles from './assets/css/styles.css'

function Emaillist({ emails }) {
  console.log(emails);
  return (
    <ul className={styles.Emaillist}>
      {emails.map((e) => (
        <div key={e.no}>
          <li>{e.firstName}{e.lastName}<br/>{e.email}</li>
        </div>
      ))}
    </ul>
  );
}

export default Emaillist;
