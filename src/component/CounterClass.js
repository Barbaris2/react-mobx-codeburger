import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { runInAction, autorun } from 'mobx';

import { CounterStoreClass } from '../stores';

// @observer
const CounterClass = observer(
  class extends Component {
    store = new CounterStoreClass();

    componentDidMount() {
      // store.count = this.props.initialCount ?? 0;
      runInAction(() => {
        this.store.count = this.props.initialCount ?? 0;
      });
      autorun(() => console.log(`color: ${this.store.color}`));
    }

    render() {
      return (
        <div>
          <button onClick={this.store.dec}>-</button>
          <span style={{ color: this.store.color }}>{this.store.count}</span>
          <button onClick={this.store.inc}>+</button>
        </div>
      );
    }
  }
);

export default CounterClass;
