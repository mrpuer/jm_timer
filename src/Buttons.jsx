import React from 'react';
import { Button, Row } from 'antd';
import PropTypes from 'prop-types';

const Buttons = ({ status, stopTimer, pauseTimer, startTimer, disabled }) => {
  return (
    <Row>
      <Button
        type="primary"
        onClick={status === 'on' ? pauseTimer : startTimer}
        disabled={disabled}
      >
        {status === 'on' ? 'Pause' : 'Start'}
      </Button>
      <Button type="danger" onClick={stopTimer} disabled={disabled}>
        Reset
      </Button>
    </Row>
  );
};

Buttons.propTypes = {
  status: PropTypes.string,
  stopTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Buttons.defaultProps = {
  status: 'off',
  disabled: false,
};

export default Buttons;
