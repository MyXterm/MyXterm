import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router-dom';
import SplitPane from 'react-split-pane';

import 'rc-tabs/dist/rc-tabs.min.css';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import styles from '../styles/HomePage.less';
import '../styles/resizer.less';

const sidePaneStyle = {
  background: '#262627'
};

const logoPaneStyle = {
  background: '#222222'
};

var callback = function(key){
  console.log(key);
}




class HomePage extends Component {


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
                <Tabs
                  defaultActiveKey="2"
                  onChange={callback}
                  renderTabBar={()=><ScrollableInkTabBar />}
                  renderTabContent={()=><TabContent />}
                >
                  <TabPane tab='tab 1' key="1">first</TabPane>
                  <TabPane tab='tab 2' key="2">second</TabPane>
                  <TabPane tab='tab 3' key="3">third</TabPane>
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
