
import React, { useState } from 'react';

const Home = () => {
  
  const [count, setCount] = useState(0);

  
  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default Home;
