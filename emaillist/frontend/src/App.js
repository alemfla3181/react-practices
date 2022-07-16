import React from 'react';
import styles from './assets/css/styles.css'
import emails from './assets/json/data.json'
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';

function App() {
  return (
    <div id={styles.App}>
      <Searchbar/>
      <Emaillist emails={emails} />
    </div>
  );
}

export default App;