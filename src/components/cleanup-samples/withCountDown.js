import React from 'react';

export default function withCountDown(Component) {
  return class WrappedComponent extends React.Component {
    state = {
      running: false,
      value: 10,
      fired: false
    }

    start = () => this.setState({ running: true });
    pause = () => this.setState({ running: false });
    reset = () => {
      this.setState({
        running: false,
        value: 10,
        fired: false
      })
    }

    timer = null;

    componentDidUpdate(_, { running: prevRunning }) {
      const { running } = this.state;
      if (running && !prevRunning) {
        this.timer = setInterval(() => {
          this.setState(({ value, ...remainState }) => {
            if (value === 1) {
              clearInterval(this.timer);
              return {
                running: false,
                value: 0,
                fired: true
              }
            }
            return {
              ...remainState,
              value: value - 1
            }
          })
        }, 1000);
      }
      if (prevRunning && !running) {
        clearInterval(this.timer);
      }
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    render() {
      return (
        <Component
          start={this.start}
          pause={this.pause}
          reset={this.reset}
          value={this.state.value}
          fired={this.state.fired}
        />
      )
    }
  }
}
