import React from 'react';
import { Tabs, Layout } from 'antd';

import Timer from './Timer';
import Countdown from './Countdown';
import './App.scss';

const { TabPane } = Tabs;
const { Content } = Layout;

function App() {
  return (
    <Content>
      <h1>Timer & Countdown React App</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Timer" key="1">
          <Timer />
        </TabPane>
        <TabPane tab="Countdown" key="2">
          <Countdown />
        </TabPane>
      </Tabs>
    </Content>
  );
}

export default App;
