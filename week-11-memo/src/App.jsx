import React, { useState, useMemo } from 'react';
import './App.css';

function Parent() {
  const [count, setCount] = useState(0);

  // Memoize the functions so they are not recreated on each render
  const increase = useMemo(() => () => setCount(count => count + 1), []);
  const decrease = useMemo(() => () => setCount(count => count - 1), []);

  return (
    <div>
      <Increase onIncrease={increase} />
      <Decrease onDecrease={decrease} />
      <Count count={count} />
    </div>
  );
}

function Increase({ onIncrease }) {
  return (
    <button onClick={onIncrease} className="m-2 px-4 py-2 bg-blue-500 text-white rounded">
      Increase
    </button>
  );
}

function Decrease({ onDecrease }) {
  return (
    <button onClick={onDecrease} className="m-2 px-4 py-2 bg-red-500 text-white rounded">
      Decrease
    </button>
  );
}

function Count({ count }) {
  // Memoize the count value so it only recalculates when the count changes
  const memoizedCount = useMemo(() => count, [count]);

  return (
    <div className="m-2 text-lg font-semibold">
      Count: {memoizedCount}
    </div>
  );
}

const App = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <Parent />
    </div>
  );
};

export default App;
