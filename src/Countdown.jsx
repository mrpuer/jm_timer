import React from 'react';
import { playNotification } from './utils';

import CountdownInput from './CountdownInput';
import CountdownRes from './CountdownRes';
import Buttons from './Buttons';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsCount: 0,
      fullTimeCount: 0,
      status: 'off',
      countId: 0,
    };
  }

  componentWillUnmount() {
    this.stopCountdown();
  }

  setStartCount = newValue => {
    this.setState({ secondsCount: newValue, fullTimeCount: newValue });
  };

  startCountdown = () => {
    const { secondsCount } = this.state;
    const endTimeSeconds = Math.floor(Date.now() / 1000) + secondsCount;
    const id = setInterval(() => {
      const { secondsCount: currentSecondsCount } = this.state;
      if (currentSecondsCount <= 1) {
        playNotification().then(() => this.stopCountdown());
      } else {
        this.setState({ secondsCount: endTimeSeconds - Math.floor(Date.now() / 1000) });
      }
    }, 1000);
    this.setState({ countId: id, status: 'on' });
  };

  stopCountdown = () => {
    const { countId } = this.state;
    clearInterval(countId);
    this.setState({ countId: 0, status: 'off', secondsCount: 0, fullTimeCount: 0 });
  };

  pauseCountdown = () => {
    const { countId } = this.state;
    clearInterval(countId);
    this.setState({ countId: 0, status: 'pause' });
  };

  render() {
    const { secondsCount, fullTimeCount, status } = this.state;
    return (
      <div style={{ padding: '30px' }}>
        <CountdownInput
          status={status}
          setStartCount={this.setStartCount}
          secondsCount={secondsCount}
        />
        <CountdownRes secondsCount={secondsCount} fullTimeCount={fullTimeCount} />
        <Buttons
          status={status}
          startTimer={this.startCountdown}
          stopTimer={this.stopCountdown}
          pauseTimer={this.pauseCountdown}
          disabled={fullTimeCount === 0}
        />
      </div>
    );
  }
}
