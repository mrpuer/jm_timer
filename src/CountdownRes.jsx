import React from 'react';
import { Col, Progress, Row, Card } from 'antd';
import PropTypes from 'prop-types';

const CountdownRes = props => {
  const { secondsCount, fullTimeCount } = props;
  const currentPercent = Math.floor((secondsCount * 100) / fullTimeCount);

  return (
    <Card style={{ marginTop: '50px' }}>
      <Row type="flex" justify="center">
        <Col span={8}>
          <h2>
            {Math.floor(secondsCount / 60)} min {secondsCount % 60} sec
          </h2>
          <Progress percent={currentPercent} status="active" />
        </Col>
      </Row>
    </Card>
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
