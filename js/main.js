const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 820,
        height:  600,
        webPreferences: {
            nodeIntegration: true
        },
        show: true
    })
    window.loadFile('index.html')
}
app.whenReady().then(() => { createWindow() })

