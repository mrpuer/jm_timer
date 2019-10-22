import React from 'react';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 'Hi Countdown!',
    };
  }

  render() {
    const { val } = this.state;
    return <span>{val}</span>;
  }
}
