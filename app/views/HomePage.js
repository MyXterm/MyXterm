import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router-dom';
import SplitPane from 'react-split-pane';

import 'rc-tabs/dist/rc-tabs.min.css';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import styles from '../styles/HomePage.less';
import '../styles/resizer.less';
import MyTable from "./MyTable";
import Counter from "./Counter";

import {observable} from 'mobx';

import { remote } from 'electron'; // electron remote (renderer-side) component

import Modal from 'react-modal';

const dialogOptions = {
  type: 'info',
  title: 'Information',
  message: "This is an information dialog. Isn't it nice?",
  buttons: ['Yes', 'No']
};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const sidePaneStyle = {
  background: '#262627'
};

const logoPaneStyle = {
  background: '#222222'
};

var callback = function(key){
  console.log(key);
}


// seperate store
const appState = observable({
  count : 0
})

appState.increment = function() {
  this.count++;
}

appState.decrement = function() {
  this.count--;
}

Modal.setAppElement('#root')

class HomePage extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleClick() {
    console.log("test");
    remote.dialog.showMessageBox(dialogOptions, (index) => {
      console.log('information-dialog-selection', index);
    });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="mainContainer">

        <SplitPane split="vertical" allowResize={false} minSize={50} defaultSize={50} maxSize={50} pane1Style={logoPaneStyle}>
          <div>Logo</div>
          <div>
            <SplitPane split="vertical" minSize={80} defaultSize={150} maxSize={300} step={20} pane1Style={sidePaneStyle}>
              <div>
                This is home page... a
                <br/>
                <Link to='/todo'>todo....</Link>
              </div>
              <div>
                <button onClick={this.handleClick}>test</button>
                <Counter store={appState}/>

                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <Modal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                >
                  <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>

                {/*<Tabs*/}
                  {/*defaultActiveKey="2"*/}
                  {/*onChange={callback}*/}
                  {/*renderTabBar={()=><ScrollableInkTabBar />}*/}
                  {/*renderTabContent={()=><TabContent />}*/}
                {/*>*/}
                  {/*<TabPane tab='tab 1' key="1">first</TabPane>*/}
                  {/*<TabPane tab='tab 2' key="2">second</TabPane>*/}
                  {/*<TabPane tab='tab 3' key="3">third</TabPane>*/}
                {/*</Tabs>*/}
              </div>
            </SplitPane>
          </div>
        </SplitPane>
      </div>
    );
  }
}

HomePage.propTypes = {};
export default HomePage;
