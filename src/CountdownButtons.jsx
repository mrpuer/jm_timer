import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const CountdownButtons = ({ status, startCountdown, stopCountdown, pauseCountdown }) => {
  return (
    <div>
      <Button type="primary" onClick={status === 'on' ? pauseCountdown : startCountdown}>
        {status === 'on' ? 'Pause' : 'Start'}
      </Button>
      <Button type="danger" onClick={stopCountdown}>
        Reset
      </Button>
    </div>
  );
};

CountdownButtons.propTypes = {
  status: PropTypes.string,
  startCountdown: PropTypes.func,
  stopCountdown: PropTypes.func,
  pauseCountdown: PropTypes.func,
};

CountdownButtons.defaultProps = {
  status: 'off',
  startCountdown: null,
  stopCountdown: null,
  pauseCountdown: null,
};

export default CountdownButtons;
