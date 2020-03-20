import React from 'react';

export default function FunctionCounter() {
  const [counter, setCounter] = React.useState(0);
  const onIncrease = React.useCallback(() => {
    setCounter(x => x + 1)
  }, []);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={onIncrease}>Increment!</button>
    </>
  )
}
