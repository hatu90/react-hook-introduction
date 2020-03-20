import React from 'react';

export default function Timer({ value, fired, start, pause, reset }) {
  return (
    <>
      <h1>{value}</h1>
      {
        fired && (<div>Fired!</div>)
      }
      <div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}