if(require('electron-squirrel-startup')) return;
const { app, BrowserWindow } = require('electron')

function createWindow() {
    let win
    win = new BrowserWindow({ width:1920,height:1080 })
    win.maximize()
    win.loadFile('index.html')
    // win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
