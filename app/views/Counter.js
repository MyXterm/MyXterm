import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer class Counter extends React.Component {
  // @observable count = 0;

  handleInc = () => {
    this.props.store.increment();
  }

  handleDec = () => {
    this.props.store.decrement();
  }

  render() {
    return (
      <div>
        Counter: {this.props.store.count}<br/>
        <button onClick={this.handleDec}> - </button>
        <button onClick={this.handleInc}> + </button>
      </div>
    );
  }
}

export default Counter;
