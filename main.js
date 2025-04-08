const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs/promises');

let mainWindow;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  await mainWindow.loadFile(path.join(__dirname, 'src/renderer/index.html'));

  mainWindow.on('closed', () => (mainWindow = null));
}

ipcMain.handle('get-app-version', async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'package.json'), 'utf-8');
    return JSON.parse(data).version;
  } catch (error) {
    console.error('Error reading version:', error);
    return '0.0.0';
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});