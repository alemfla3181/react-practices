import React from 'react';

const CardList = ({ title,  card  }) => {
  console.log(title,":",card);

  return (
    <div className={'CardList'}>
      <h1>{title}</h1>
      <br />
      <h2>{card[0].title}</h2>
      <h2></h2>
    </div>
  );
}

export default CardList;