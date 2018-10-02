import React from 'react';
import {observable, action, computed, toJS} from 'mobx';
import Counter from "../views/Counter";
import TodoPage from "../views/TodoPage";
import NewEntryModal from "../views/NewEntryModal";
import XtermView from "../views/XtermView";
import Term from "../views/Term";

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
  },
  {
    key: 'tab4',
    name: 'Xterm #1',
    component: <Term ref_='ref' key='1'  />,
  },
  {
    key: 'tab5',
    name: 'Xterm #2',
    component: <Term ref_='ref2' key='12'  />,
  }];

class Tabs {
  @observable data = [];

  @computed get list() {
    this.items = data;
    return this.items;
  }
}

export default Tabs;
