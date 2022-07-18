import React from 'react';

function App() {
  return (
    <div>
      <h1
        onClick={e => console.log('click')}
        style={{
          cursor: 'pointer'
        }}>
        Inline Handler
      </h1>
    </div >
  );
}

export default App; 