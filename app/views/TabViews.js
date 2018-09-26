import React from 'react';
import {inject, observer} from 'mobx-react';
import Modal from 'react-modal';

import 'rc-tabs/dist/rc-tabs.min.css';
import Tabs from "rc-tabs";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import TabContent from "rc-tabs/lib/TabContent";
import TabPane from "rc-tabs/es/TabPane";

// var callback = function(key){
//
// }

@inject('tabs')
@observer class TabViews extends React.Component {

  callback = (key) => {
    //window.location.hash = key;
  };

  render() {

    const tabsmap = this.props.tabs.list.map(d => <TabPane key={d.key} tab={d.name}>{d.component}</TabPane>);

    return (
      <div>
        <Tabs
          defaultActiveKey="2"
          onChange={this.callback}
          renderTabBar={()=><ScrollableInkTabBar />}
          renderTabContent={()=><TabContent />}
        >
          {tabsmap}
        </Tabs>
      </div>
    );
  }
}

export default TabViews;
