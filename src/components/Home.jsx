
import React, { useState } from 'react';

const Home = () => {
  
  const [count, setCount] = useState(0);

  
  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='homec'>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1 add count</button>
    </div>
  );
};

export default Home;
