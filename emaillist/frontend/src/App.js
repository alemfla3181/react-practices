import React from 'react';
import './assets/scss/styles.scss'
import emails from './assets/json/data.json'
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';

function App() {
  return (
    <div id={'App'}>
      <Searchbar/>
      <Emaillist emails={emails} />
    </div>
  );
}

export default App;