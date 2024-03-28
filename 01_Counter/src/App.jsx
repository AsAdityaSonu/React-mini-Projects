import { useState } from 'react';
import './App.css';
import Counter from './components/Counter.jsx';
import Increase from './components/Increase';
import Decrease from './components/Decrease';

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="container">
        <Decrease removeValue={removeValue} />
        <Counter counter={counter} />
        <Increase addValue={addValue} />
      </div>
    </>
  );
}

export default App;
