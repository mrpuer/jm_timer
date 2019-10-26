import React from 'react';
import { msToSeconds, msToMinutes, extractMs } from './utils';
import Buttons from './Buttons';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
      counted: 0,
      intervalId: null,
    };
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    const startTime = Date.now();
    this.setState({ isActive: 'on' });
    const id = setInterval(() => {
      this.setState(state => {
        return {
          currentCount: state.counted + (Date.now() - startTime),
        };
      });
    }, 1);
    this.setState({ intervalId: id });
  };

  pauseTimer = () => {
    const { intervalId, currentCount } = this.state;
    clearInterval(intervalId);
    this.setState({ isActive: 'off', counted: currentCount });
  };

  stopTimer = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ currentCount: 0, isActive: 'off', counted: 0 });
  };

  render() {
    const { currentCount, isActive } = this.state;
    return (
      <div>
        <h2>
          <span>{msToMinutes(currentCount)} : </span>
          <span>{msToSeconds(currentCount)} : </span>
          <span>{extractMs(currentCount)}</span>
        </h2>
        <Buttons
          status={isActive}
          pauseTimer={this.pauseTimer}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
        />
      </div>
    );
  }
}
