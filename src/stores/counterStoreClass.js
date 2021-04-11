import {
  observable,
  makeObservable,
  action,
  computed,
  autorun,
  when,
  reaction,
} from 'mobx';

export class CounterStoreClass {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      color: computed,
      dec: action,
      inc: action.bound,
    });
    // autorun(() => console.log(`count: ${this.count}`));
    // when(
    //   () => this.count > 13,
    //   () => console.log(`${this.count} > 13`)
    // );
    const disposer = reaction(
      () => this.count,
      (count, prevCount) => {
        console.log(`prevCount: ${prevCount}, count: ${count}`);

        // уничтожение реакции
        if (count > 13) {
          disposer();
        }
      }
    );
  }

  get color() {
    return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black';
  }

  dec = () => this.count--;

  inc() {
    this.count++;
  }
}
