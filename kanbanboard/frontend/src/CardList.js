import React from 'react';

const CardList = ({ title,  card  }) => {
  console.log(title,":",card);

  return (
    <div className={'CardList'}>
      <h1>{title}</h1>
      <br />
    </div>
  );
}

export default CardList;