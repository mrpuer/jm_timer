import React from 'react';
import { Row } from 'antd';
import { playNotification } from './utils';

import CountdownInput from './CountdownInput';
import CountdownRes from './CountdownRes';
import CountdownButtons from './CountdownButtons';

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
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Row>
          <CountdownInput
            status={status}
            setStartCount={this.setStartCount}
            secondsCount={secondsCount}
          />
        </Row>
        <Row>
          <CountdownRes secondsCount={secondsCount} fullTimeCount={fullTimeCount} />
        </Row>
        <Row>
          <CountdownButtons
            status={status}
            startCountdown={this.startCountdown}
            stopCountdown={this.stopCountdown}
            pauseCountdown={this.pauseCountdown}
          />
        </Row>
      </div>
    );
  }
}
