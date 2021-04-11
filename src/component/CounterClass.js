import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, makeObservable, action } from 'mobx';

// @observer
const CounterClass = observer(
  class extends Component {
    //@observable
    count = 0;
    constructor(props) {
      super(props);
      makeObservable(this, {
        count: observable,
        dec: action,
        inc: action.bound,
      });
      // значение по умолчанию
      this.count = this.props.initialCount ?? 0;
    }
    render() {
      return (
        <div>
          <button onClick={this.dec}>-</button>
          <span>{this.count}</span>
          <button onClick={this.inc}>+</button>
        </div>
      );
    }
    //@action (т.к. не потерян контекст)
    dec = () => this.count--;

    //@action.bound (т.к. потерян контекст)
    inc() {
      this.count++;
    }
  }
);

export default CounterClass;
