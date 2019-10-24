import React from 'react';
import { Col, Progress } from 'antd';
import PropTypes from 'prop-types';

const CountdownRes = props => {
  const { secondsCount, fullTimeCount } = props;
  const currentPercent = Math.floor((secondsCount * 100) / fullTimeCount);

  return (
    <Col span={8}>
      <h2>
        {Math.floor(secondsCount / 60)} min {secondsCount % 60} sec
      </h2>
      <Progress percent={currentPercent} status="active" />
    </Col>
  );
};

CountdownRes.propTypes = {
  secondsCount: PropTypes.number,
  fullTimeCount: PropTypes.number,
};

CountdownRes.defaultProps = {
  secondsCount: 0,
  fullTimeCount: 0,
};

export default CountdownRes;
