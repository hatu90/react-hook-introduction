import React, { Component } from 'react';

export default class ClassCounter extends Component {
  state = {
    counter: 0
  }

  onIncrease = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={this.onIncrease}>Increment!</button>
      </div>
    )
  }
}
