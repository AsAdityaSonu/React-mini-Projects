import React from 'react';

function Increase({ addValue }) {
  return (
    <button className="btn" onClick={addValue}>Increase</button>
  );
}

export default Increase;
