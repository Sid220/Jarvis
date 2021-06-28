const { create } = require("domain");
const {app, BrowserWindow, Menu} = require("electron");
const os = require("os");
const contextMenu = require('electron-context-menu');
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            webSecurity: false,
            spellcheck: true,
        },
        icon: "./icon.png"
    });
    mainWindow.loadFile("index.html");
    mainWindow.maximize();
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
    var menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {label:'New Window', click() {createWindow()}},
                {label:'Quit', role: "quit"}
            ]
        },{
            label: 'Location',
            submenu: [
                {label:'Home', id:"home" ,checked:true, type: "checkbox",click() {mainWindow.loadFile("index.html");menu.getMenuItemById("home").checked = true;menu.getMenuItemById("news").checked = false;menu.getMenuItemById("map").checked = false;menu.getMenuItemById("weather").checked = false;menu.getMenuItemById("money").checked = false;menu.getMenuItemById("shop").checked = false}},
                {label:'News', id:"news", type: "checkbox",click() {mainWindow.loadURL("https://www.msn.com/en-us/news");menu.getMenuItemById("news").checked = true;menu.getMenuItemById("home").checked = false;menu.getMenuItemById("map").checked = false;menu.getMenuItemById("weather").checked = false;menu.getMenuItemById("money").checked = false;menu.getMenuItemById("shop").checked = false}},
                {label:'Maps', id:"map", type: "checkbox",click() {mainWindow.loadURL("https://www.bing.com/maps?FORM=Z9LH2");menu.getMenuItemById("map").checked = true;menu.getMenuItemById("home").checked = false;menu.getMenuItemById("news").checked = false;menu.getMenuItemById("weather").checked = false;menu.getMenuItemById("money").checked = false;menu.getMenuItemById("shop").checked = false}},
                {label:'Weather', id:"weather", type: "checkbox",click() {mainWindow.loadURL("https://www.msn.com/en-us/weather");menu.getMenuItemById("weather").checked = true;menu.getMenuItemById("home").checked = false;menu.getMenuItemById("map").checked = false;menu.getMenuItemById("news").checked = false;menu.getMenuItemById("money").checked = false;menu.getMenuItemById("shop").checked = false}},
                {label:'Finance', id:"money", type: "checkbox",click() {mainWindow.loadURL("https://www.msn.com/en-us/money");menu.getMenuItemById("money").checked = true;menu.getMenuItemById("home").checked = false;menu.getMenuItemById("map").checked = false;menu.getMenuItemById("weather").checked = false;menu.getMenuItemById("news").checked = false;menu.getMenuItemById("shop").checked = false}},
                {label:'Shopping', id:"shop", type: "checkbox",click() {mainWindow.loadURL("https://www.bing.com/shop?FORM=Z9LHS4");menu.getMenuItemById("shop").checked = true;menu.getMenuItemById("home").checked = false;menu.getMenuItemById("map").checked = false;menu.getMenuItemById("weather").checked = false;menu.getMenuItemById("money").checked = false;menu.getMenuItemById("news").checked = false}}
            ]
        }, {
            label: "Edit", role: "editMenu"
        }, {
            label: "View", role: "viewMenu"
        }, {
            label: "Window", role: "windowMenu"
        }
    ])
    Menu.setApplicationMenu(menu); 
}
contextMenu({
	prepend: (defaultActions, parameters, browserWindow) => [
        {
            label: "View",
            role: "viewMenu"
        }, {
            label: "Spell Check",
            role: "toggleSpellChecker"
        }
	]
});
app.on("ready", createWindow);