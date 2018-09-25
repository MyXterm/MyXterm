/**
 * Created by eatong on 17-3-13.
 */
import React, {Component}from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import {Provider} from 'mobx-react';

import TodoState from './stores/Todo';
import CounterState from './stores/Counter';
import ModalState from './stores/Modal';

import HomePage from './views/HomePage';
import TodoPage from './views/TodoPage';

// Main store consists of multiple other stores, these stores will be injected
// using @inject('storename'), eg @inject('modal') in component page
const stores = {
  todo: new TodoState(),
  counter: new CounterState(),
  modal: new ModalState()
};


export default  class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <HashRouter>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/todo" component={TodoPage}/>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}
