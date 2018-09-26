import React from 'react';
import {observable, action, computed, toJS} from 'mobx';
import Counter from "../views/Counter";
import TodoPage from "../views/TodoPage";
import NewEntryModal from "../views/NewEntryModal";

const Tab1 = () => <div>tab1</div>;
const Tab2 = () => <div>tab2</div>;

let data = [
  {
    key: 'tab1',
    name: 'Counter',
    component: <Counter/>
  },
  {
    key: 'tab2',
    name: 'Todo',
    component: <TodoPage/>,
  },
  {
    key: 'tab3',
    name: 'Modal',
    component: <NewEntryModal/>,
  }];

class Tabs {
  @observable data = [];

  @computed get list() {
    this.items = data;
    return this.items;
  }
}

export default Tabs;
