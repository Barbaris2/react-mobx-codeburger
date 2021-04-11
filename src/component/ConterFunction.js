import React from 'react';
import { observer, useLocalObservable } from 'mobx-react';

const ConterFunction = observer(props => {
  // const {dec, inc, count} = ...
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
    <div>
      <button onClick={store.dec}>-</button>
      <span>{store.count}</span>
      <button onClick={store.inc}>+</button>
    </div>
  );
});

export default ConterFunction;
