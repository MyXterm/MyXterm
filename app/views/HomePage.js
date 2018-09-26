import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router-dom';
import SplitPane from 'react-split-pane';



import styles from '../styles/HomePage.less';
import '../styles/resizer.less';
import MyTable from "./MyTable";
import Counter from "./Counter";

import {observable, autorun} from 'mobx';

import { remote } from 'electron'; // electron remote (renderer-side) component

//import Modal from 'react-modal';
import NewEntryModal from "./NewEntryModal";
import TodoPage from "./TodoPage";
import TabViews from "./TabViews";

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



class HomePage extends Component {

  handleClick() {
    console.log("test");
    remote.dialog.showMessageBox(dialogOptions, (index) => {
      console.log('information-dialog-selection', index);
    });
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
                {/*<button onClick={this.handleClick}>test</button>*/}

                <TabViews/>

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
