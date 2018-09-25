const electron = require('electron');
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const nodeEnv = process.env.NODE_ENV;

// for dialog box access from renderer process
const { dialog } = require('electron');

var force_quit = false;

const dialogOptions = {
  type: 'info',
  title: 'Information',
  message: "Are you sure to quit this application?",
  buttons: ['Yes', 'No']
};

let win;

app.on('ready', () => {

  if (nodeEnv === 'development') {
    const sourceMapSupport = require('source-map-support');
    sourceMapSupport.install();
  }
  createWindow();
});

app.on('window-all-closed', () => {
  console.log("app quit");
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  console.log(nodeEnv);
  if (win === null) {
    createWindow();
  }
});

function dialogPromise() {
  return new Promise(function(resolve, reject){

  });
}


function createWindow() {
  //const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
   //win = new BrowserWindow({width, height});
   win = new BrowserWindow({width: 1366, height: 768, show: false});

   // Close box
  win.on("close", (e) => {
    var result = dialog.showMessageBox(dialogOptions);
    if (result == 1)
      e.preventDefault();
  });

  if (nodeEnv === 'development') {
    //delay 1000ms to wait for webpack-dev-server start

    setTimeout(function(){

      win.loadURL(url.format({
        pathname: "localhost:3000",
        protocol: 'http:',
        slashes: true
      }));

      // delay load prevent white screen
      win.webContents.on("did-finish-load", () => {
        win.webContents.openDevTools();
        win.show();
      });

    },2000);
  } else {
    win.loadURL(url.format({
      pathname: path.join(path.resolve(__dirname, './dist'), 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }
}
