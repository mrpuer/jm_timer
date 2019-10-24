import React from 'react';
import PropTypes from 'prop-types';
import { Slider, InputNumber, Row, Col } from 'antd';
import { extractsSeconds, minutesFromSec } from './utils';

const CountdownInput = ({ status, secondsCount, setStartCount }) => {
  const onChangeMinutes = value => {
    const secondsValue = extractsSeconds(secondsCount);
    setStartCount(value * 60 + secondsValue);
  };

  const onChangeSeconds = value => {
    const minutesValue = minutesFromSec(secondsCount);
    setStartCount(minutesValue + value);
  };

  const onChangeSlider = value => {
    setStartCount(value);
  };

  return (
    <Col span={12}>
      <Row>
        <Col span={6}>
          <InputNumber
            min={0}
            max={60}
            style={{ marginLeft: 16 }}
            value={minutesFromSec(secondsCount)}
            disabled={status !== 'off'}
            onChange={onChangeMinutes}
          />
        </Col>
        <Col span={6}>
          <InputNumber
            min={0}
            max={60}
            style={{ marginLeft: 16 }}
            value={extractsSeconds(secondsCount)}
            disabled={status !== 'off'}
            onChange={onChangeSeconds}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
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
    </Col>
  );
};

CountdownInput.propTypes = {
  status: PropTypes.string,
  secondsCount: PropTypes.number,
  setStartCount: PropTypes.func,
};

CountdownInput.defaultProps = {
  status: 'off',
  secondsCount: 0,
  setStartCount: null,
};

export default CountdownInput;
