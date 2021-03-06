const { create } = require("domain");
const {app, BrowserWindow, Menu, shell} = require("electron");
const os = require("os");
const contextMenu = require('electron-context-menu');
const join = require('path').join;
const openAboutWindow = require('about-window').default;
const Electrolytic = require('electrolytic')
const electrolytic = Electrolytic({
    appKey: 'zpVJlLuSxD49A618hnvc'
  })
  
  electrolytic
    .analytics
    .enable(true)
    .use(app)
    .report()
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
        icon: __dirname + "/icon.png"
    });
    mainWindow.webContents.userAgent //to get		
    mainWindow.webContents.userAgent = "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4617.2 Mobile Safari/537.36" //to set
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
            label: "Edit", role: "editMenu",
            submenu: [
                {label:"Cut", role:"cut"},
                {label:"Copy", role:"copy"},
                {label: "Paste", role:"paste"},
                {label:"Preferences", click() {openPrefWindow()}}
            ]
        }, {
            label: "View", role: "viewMenu"
        }, {
            label: "Window", role: "windowMenu"
        }, {
            label: "Help", submenu: [
                {label:"Website", click() {shell.openExternal("https://www.vestal.ml")}},
                {label: "About", click() {openAboutWindow({
                    icon_path: join(__dirname, 'icon.png'),
                    description: "Your Open Source Personal Assistant",
                    homepage: "https://www.vestal.ml",
                    copyright: "MIT",
                    show_close_button: "Sounds Good!",
                    use_version_info: true,
                    css_path: join(__dirname, "aboutpage_css.css")
            })}}
            ]
        }
    ])
    Menu.setApplicationMenu(menu); 
}
function openPrefWindow() {
    prefWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            webSecurity: false,
            spellcheck: true,
        },
        icon: __dirname + "/icon.png"
    });
    prefWindow.loadFile("prefs.html");
    prefWindow.setMenu(null);
    prefWindow.on("close", function() {
        const { dialog } = require('electron')
        dialog.showMessageBox({
            message: "Jarvis must be reloaded for your changes (if any) to take effect.",
            buttons: ["OK"]
        });
    });
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
