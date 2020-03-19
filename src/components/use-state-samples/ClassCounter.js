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
        <div>{counter}</div>
        <button onClick={this.onIncrease}>Increment!</button>
      </div>
    )
  }
}
