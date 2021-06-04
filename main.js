const {app, BrowserWindow, ipcMain} = require("electron");
const os = require("os");

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 600,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            nodeIntegrationInSubFrames: true,
            webviewTag: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    mainWindow.loadFile("index.html");
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}
app.on("ready", createWindow);