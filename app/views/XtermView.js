import React from "react";
// import { XTerm, Terminal } from "react-xterm";

import {Terminal} from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';
import 'xterm/dist/xterm.css';

// import {ResizableBox} from 'react-resizable';
// import ReactResizeDetector from 'react-resize-detector';
const throttle = require("lodash.throttle");

Terminal.applyAddon(fit);

const termClassName = "xterm-box";
let term = new Terminal();



class XtermView extends React.Component {

constructor() {
  super();
  console.log("xterm init");
}

  // constructor(props, context) {
  //   super(props, context);
  //   this.throttleConsoleResize = throttle((size) => {
  //     // this.refs.xterm && this.refs.xterm.fit();
  //   }, 50);
  // }
  //
  componentDidMount() {
    term.open(document.getElementById('xterm'));
    term.write("Testing 123\n\n\nHello World!");

    term.on('key', function (key, ev) {
        term.write(key);
    });

    term.fit();

    // runFakeTerminal(this.refs.xterm);
    // this.refs.xterm.resize(50,40);
  }
  // componentWillUnmount() {
  //   this.refs.mainDeviceComponent.componentWillUnmount();
  // }
  //
  // onResize = () => {
  //   console.log("res");
  // }

  throttleConsoleResize() {
    console.log("resize");
  }

  render() {
    return (
      <div>
        {/*<ReactResizeDetector handleWidth handleHeight onResize={this.onResize} />*/}
        {/*<ResizableBox width={600} height={600} onResize={this.throttleConsoleResize()} style={{*/}
          {/*overflow: 'scroll'*/}
        {/*}} >*/}
          <div id="xterm"></div>
          {/*<XTerm ref='xterm' style={{*/}
            {/*addons:['fit'],*/}
            {/*overflow: 'auto',*/}
            {/*position: 'relative',*/}
            {/*width: '100%',*/}
            {/*height: '100%',*/}
          {/*}} />*/}
        {/*</ResizableBox>*/}
      </div>
    );
  }
}

export default XtermView;


function runFakeTerminal(xterm: XTerm) {
  const term: Terminal = xterm.getTerminal();
  var shellprompt = '$ ';

  function prompt () {
    xterm.write('\r\n' + shellprompt);
  };

  term.fit();

  xterm.writeln('Welcome to xterm.js');
  xterm.writeln('This is a local terminal emulation, without a real terminal in the back-end. This is just an example of Xterm component in React!');
  xterm.writeln('Type some keys and commands to play around.');
  xterm.writeln('');
  prompt();

  term.on('key', function (key, ev) {
    var printable = (
      !ev.altKey && !ev.ctrlKey && !ev.metaKey
    );

    if (ev.keyCode == 13) {
      prompt();
      // } else if (ev.keyCode == 8) {
      //   // Do not delete the prompt
      //   if (term['x'] > 2) {
      //     xterm.write('\b \b');
      //   }
    } else if (printable) {
      xterm.write(key);
    }
  });

  term.on('paste', function (data, ev) {
    xterm.write(data);
  });
}
