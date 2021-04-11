import React from 'react';
import { observer, useLocalObservable, Observer } from 'mobx-react';
// observer - reaction, Observer - component
const ConterFunction = props => {
  const store = useLocalObservable(() => {
    return {
      count: props.initialCount ?? 0,
      dec() {
        this.count--;
      },
      inc() {
        this.count++;
      },
    };
  });

  return (
    // Используя Observer перерисовавается только <span>
    <div>
      <button onClick={store.dec}>-</button>
      <Observer>{() => <span>{store.count}</span>}</Observer>
      <button onClick={store.inc}>+</button>
    </div>
  );
};

export default ConterFunction;
