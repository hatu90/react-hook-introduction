import React from 'react';
import useCountDown from './useCountDown';
import Timer from './Timer';

export default function FunctionTimer() {
  const [fired, setFired] = React.useState(false);
  const [value, start, pause, reset] = useCountDown(10, () => setFired(true), () => setFired(false));

  return (
    <Timer
      fired={fired}
      value={value}
      start={start}
      pause={pause}
      reset={reset}
    />
  )
}
