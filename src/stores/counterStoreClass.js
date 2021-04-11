import {
  observable,
  makeObservable,
  action,
  computed,
  makeAutoObservable,
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
    // makeAutoObservable(this, { inc: action.bound });
  }

  get color() {
    return this.count > 0 ? 'green' : this.count < 0 ? 'red' : 'black';
  }

  dec = () => this.count--;

  inc() {
    this.count++;
  }
}
