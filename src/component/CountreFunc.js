import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { runInAction } from 'mobx';

import { counterStoreFunc } from '../stores';

const ConterFunction = observer(props => {
  const store = counterStoreFunc();

  useEffect(() => {
    runInAction(() => {
      store.count = props.initialCount ?? 0;
    });
  }, [props.initialCount]);

  return (
    <div>
      <button onClick={store.dec}>-</button>
      <span style={{ color: store.color }}>{store.count}</span>
      <button onClick={store.inc}>+</button>
    </div>
  );
});

export default ConterFunction;
