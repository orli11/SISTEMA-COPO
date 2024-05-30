const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1140,
        height: 728,
        webPreferences: {
            nodeIntegration: true
        },
        show: true
    })
    window.loadFile('index.html')
}
app.whenReady().then(() => { createWindow() })

