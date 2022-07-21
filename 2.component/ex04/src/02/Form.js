import React, { useState } from 'react';
import './assets/Form.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

export default function Form() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [ValidEmail, setValidEmail] = useState(false);
  const [Password, setPassword] = useState("");
  const [Gender, setGender] = useState("male");
  const [BirthYear, setBirthYear] = useState("1984");
  const [Description, setDescription] = useState("");
  const [AgreeProv, setAgreeProv] = useState("no");

  const onChangeNameInput = e => {
    // setName(e.target.value); 
    // 10자 제한
    setName(e.target.value.substr(0, 10));
  }

  const onChangeEmailInput = e => {
    setEmail(e.target.value);
    // check email format(account@mysite.com)
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    setValidEmail(re.test(e.target.value))
  }
  
  const onchangeInputGender = e => {
    setGender(e.target.value);
  }

  const onChangeInputAgreeProv = e => {
    const status = e.target.value === 'no' ? 'yes' : 'no';
    setAgreeProv(status);
  }

  return (
    <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
      <label htmlFor="name">이름</label>
      <input
        id="name"
        name="name"
        type="text"
        value={Name}
        onChange={onChangeNameInput} />

      <label htmlFor="email">이메일</label>
      <input
        id="email"
        name="email"
        type="text"
        value={Email}
        onChange={onChangeEmailInput} />
      {Email === '' ? null : ValidEmail ?
        <FontAwesomeIcon icon={faCheckCircle} style={{ marginLeft:5, fontSize: 16, color: 'blue' }} /> :
        <FontAwesomeIcon icon={faTimesCircle} style={{ marginLeft:5, fontSize: 16, color: 'red' }} />
      }

      <label htmlFor="password">패스워드</label>
      <input
        id="password"
        name="password"
        type="password"
        value={Password}
        onChange={e => setPassword(e.target.value)} />

      <fieldset>
        <legend>성별</legend>
        <label>여</label>
        <input
          type="radio"
          name="gender"
          value={"female"}
          checked={Gender === 'female'}
          onChange={onchangeInputGender} />
        <label>남</label>
        <input
          type="radio"
          name="gender"
          value={"male"}
          checked={Gender === 'male'}
          onChange={onchangeInputGender} />
      </fieldset>

      <label htmlFor="birthYear">생년</label>
      <select id="birthYear" value={BirthYear} onChange={e=> setBirthYear(e.target.value)}>
        <option value='1984'>1984년</option>
        <option value='1985'>1985년</option>
        <option value='1986'>1986년</option>
        <option value='1987'>1987년</option>
        <option value='1988'>1988년</option>
        <option value='1989'>1989년</option>
        <option value='1990'>1990년</option>
      </select>

      <label htmlFor="birthYear">자기소개</label>
      <textarea value={Description} onChange={e => setDescription(e.target.value)} />

      <fieldset>
        <legend>약관동의</legend>
        <input
          id="agree-prov"
          type="checkbox"
          name="agreeProv"
          value={"yes"}
          checked={AgreeProv}
          onChange={onChangeInputAgreeProv} />
        <label>서비스 약관에 동의합니다.</label>
      </fieldset>

      <input type="submit" value="가입" />
    </form>
  );
}