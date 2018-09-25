import {observable, action} from 'mobx';

class Counter {
  @observable count = 0;

  @action inc() {
    ++this.count;
  }

  @action dec() {
    --this.count;
  }
}

export default Counter;
