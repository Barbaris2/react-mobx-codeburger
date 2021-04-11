import React, { Component } from 'react';

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount ?? 0,
    };
    this.inc = this.inc.bind(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.dec}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }

  dec = () => this.setState(prevState => ({ count: prevState.count - 1 }));

  inc() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
}
