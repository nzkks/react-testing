import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
    </>
  );
};
