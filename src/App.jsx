import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

import Timer from './Timer';
import Countdown from './Countdown';

const { TabPane } = Tabs;

function App() {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Timer" key="1">
        <Timer />
      </TabPane>
      <TabPane tab="Countdown" key="2">
        <Countdown />
      </TabPane>
    </Tabs>
  );
}

export default App;
