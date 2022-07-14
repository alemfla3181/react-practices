import React from 'react'

function Clock01() {
  const date = new Date();

  return (
    <div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()} {date.getHours() < 12 ? 'AM' : 'PM'}</div>
  );
}

export default Clock01;