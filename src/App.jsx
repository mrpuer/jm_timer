import React from 'react';
import { Tabs, Layout } from 'antd';
import 'antd/dist/antd.css';

import Timer from './Timer';
import Countdown from './Countdown';

const { TabPane } = Tabs;
const { Content } = Layout;

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
