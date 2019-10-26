import React from 'react';
import PropTypes from 'prop-types';
import { Slider, InputNumber, Row, Col } from 'antd';
import { extractsSeconds, minutesFromSec } from './utils';

const CountdownInput = ({ status, secondsCount, setStartCount }) => {
  const onChangeMinutes = value => {
    const secondsValue = extractsSeconds(secondsCount);
    if (typeof value === 'number' && value <= 60) setStartCount(value * 60 + secondsValue);
  };

  const onChangeSeconds = value => {
    const minutesValue = minutesFromSec(secondsCount);
    if (typeof value === 'number' && value <= 60) setStartCount(minutesValue * 60 + value);
  };

  const onChangeSlider = value => {
    setStartCount(value);
  };

  return (
    <>
      <Row type="flex" justify="center">
        <Col span={3}>
          <InputNumber
            min={0}
            max={60}
            style={{ marginLeft: 16 }}
            value={minutesFromSec(secondsCount)}
            disabled={status !== 'off'}
            onChange={onChangeMinutes}
          />{' '}
          Minutes
        </Col>
        <Col span={3}>
          <InputNumber
            min={0}
            max={60}
            style={{ marginLeft: 16 }}
            value={extractsSeconds(secondsCount)}
            disabled={status !== 'off'}
            onChange={onChangeSeconds}
          />{' '}
          Seconds
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span={8}>
          <Slider
            min={0}
            max={3600}
            step={15}
            tooltipVisible={false}
            disabled={status !== 'off'}
            onChange={onChangeSlider}
            value={secondsCount}
          />
        </Col>
      </Row>
    </>
  );
};

CountdownInput.propTypes = {
  status: PropTypes.string,
  secondsCount: PropTypes.number,
  setStartCount: PropTypes.func.isRequired,
};

CountdownInput.defaultProps = {
  status: 'off',
  secondsCount: 0,
};

export default CountdownInput;
