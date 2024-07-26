
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
      <h2>Adding new features</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
      <h2>Adding another feature</h2>
    </div>
  );
};

export default Home;
