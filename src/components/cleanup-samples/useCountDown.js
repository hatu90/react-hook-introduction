import React from 'react';

export default function useCountDown(initValue, onFire, onReset) {
  const [running, setRunning] = React.useState(false);
  const [value, setValue] = React.useState(initValue);
  const tick = React.useRef();
  const fire = React.useRef();
  const start = React.useCallback(() => setRunning(true), []);
  const pause = React.useCallback(() => setRunning(false), []);
  const reset = React.useCallback(() => {
    setValue(initValue);
    onReset();
    setRunning(false);
  }, [initValue, onReset]);
  tick.current = React.useCallback(() => {
    setValue(x => x - 1);
    console.log('tick')
  }, []);
  const timerRef = React.useRef();
  React.useEffect(() => {
    fire.current = onFire;
  }, [onFire]);
  React.useEffect(() => {
    if (running) {
      timerRef.current = setInterval(tick.current, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);
  React.useEffect(() => {
    if (value === 0) {
      setRunning(false);
      clearInterval(timerRef.current);
      fire.current();
    }
  }, [value]);
  return [value, start, pause, reset];
}
