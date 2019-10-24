import React from 'react';
import { Button } from 'antd';
import { msToSeconds, msToMinutes, extractMs } from './utils';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
      counted: 0,
      intervalId: null,
      isActive: false,
    };
  }

  startTimer = () => {
    const startTime = Date.now();
    this.setState({ isActive: true });
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
    this.setState({ isActive: false, counted: currentCount });
  };

  stopTimer = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    this.setState({ currentCount: 0, isActive: false, counted: 0 });
  };

  render() {
    const { currentCount, isActive } = this.state;
    return (
      <div>
        <h1>
          <span>{msToMinutes(currentCount)} : </span>
          <span>{msToSeconds(currentCount)} : </span>
          <span>{extractMs(currentCount)}</span>
        </h1>
        <div>
          <Button type="primary" onClick={isActive ? this.pauseTimer : this.startTimer}>
            {isActive ? 'Pause' : 'Start'}
          </Button>
          <Button type="danger" onClick={this.stopTimer}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}
