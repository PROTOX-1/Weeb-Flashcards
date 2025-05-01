const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 550,
    resizable: false,
    icon: path.join(__dirname, 'icon.png'), // optional icon
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setMenuBarVisibility(false); // hides top menu
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
