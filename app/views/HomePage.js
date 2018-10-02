import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router-dom';
import SplitPane from 'react-split-pane';



import '../styles/HomePage.less';
import '../styles/resizer.less';

import Tabs from './Tabs';
// import TabViews from "./TabViews";
// import XtermView from "./XtermView";
// import Term from "./Term";

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



  // This will create a new ref_ function for every render,
  // which is inefficient. Should maybe do something similar
  // to this.bind.


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


                {/*<TabViews/>*/}

                <Tabs>
                  <div label="Gator">
                    See ya later, <em>Alligator</em>!
                  </div>
                  <div label="Croc">
                    After 'while, <em>Crocodile</em>!
                  </div>
                  <div label="Sarcosuchus">
                    Nothing to see here, this tab is <em>extinct</em>!
                  </div>
                </Tabs>



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
