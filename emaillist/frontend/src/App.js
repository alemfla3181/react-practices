import React, { useState } from 'react';
import './assets/scss/App.scss'
import data from './assets/json/data.json'
import Emaillist from './Emaillist';
import Searchbar from './Searchbar';
import RegisterForm from './RegisterForm';

const App = () => {
  const [emails, setEmails] = useState(data);

  const notifyEmailAdd = (email) => {
    console.log(email)
  }

  const notifyKeywordChanged = (keyword) => {
    console.log(keyword);
  }
  return (
    <div id={'App'}>
      <RegisterForm/>
      <Searchbar callback={notifyKeywordChanged} />
      <Emaillist emails={emails} />
    </div>
  );
}

export default App;