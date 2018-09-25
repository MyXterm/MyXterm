import React from 'react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';

@inject('counter')
@observer class Counter extends React.Component {
  handleInc = () => {
    this.props.counter.inc();
  }

  handleDec = () => {
    this.props.counter.dec();
  }

  render() {
    return (
      <div>
        Counter: {this.props.counter.count}<br/>
        <button onClick={this.handleDec}> - </button>
        <button onClick={this.handleInc}> + </button>
      </div>
    );
  }
}

export default Counter;
