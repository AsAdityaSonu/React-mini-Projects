import React from 'react';

function Decrease({ removeValue }) {
  return (
    <button className="btn" onClick={removeValue}>Decrease</button>
  );
}

export default Decrease;
