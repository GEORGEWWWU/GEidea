const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

let mainWindow = null;
let cldWindow = null;
let todoWindow = null;
let fcWindow = null;
let wtrWindow = null;
let dayWindow = null;

//主窗口
function createMainWindow() {
    if (mainWindow) {
        mainWindow.focus();
        return;
    }
    mainWindow = new BrowserWindow({
        width: 750,
        height: 500,
        frame: true, // 保留frame边框
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            backgroundThrottling: true,
        },
        icon: './geid.png',
    });
    // 设置窗口透明度（如果需要）
    mainWindow.setOpacity(0.9);
    mainWindow.setBackgroundColor('rgba(29, 29, 29, 0.51)');

    mainWindow.loadFile('./pages/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}




//日历小组件
function createCLDWindow() {
    if (cldWindow) {
        cldWindow.focus();
        return;
    }
    cldWindow = new BrowserWindow({
        width: 360,
        height: 270,
        frame: false,
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            backgroundThrottling: true,
        },
        icon: './geid.png',
        // 设置窗口无阴影
        hasShadow: false,
    });
    // 设置窗口透明度（如果需要）
    cldWindow.setOpacity(0.8);
    cldWindow.setBackgroundColor('rgba(29, 29, 29, 0.51)');
    // 获取屏幕尺寸
    const { screen } = require('electron');
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    // 设置窗口位置到右上角
    cldWindow.setPosition(width - 370, 10);

    cldWindow.loadFile('./pages/calendar.html');

}
//监听窗口的创建事件
ipcMain.on('calendar', () => {
    createCLDWindow();
});




//待办清单小组件
function createTODOWindow() {
    if (todoWindow) {
        todoWindow.focus();
        return;
    }
    todoWindow = new BrowserWindow({
        width: 800,
        height: 550,
        frame: true,
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            backgroundThrottling: true,
        },
        icon: './geid.png',
    });
    // 设置窗口透明度（如果需要）
    todoWindow.setOpacity(0.9);
    todoWindow.setBackgroundColor('rgba(29, 29, 29, 0.51)');

    todoWindow.loadFile('./pages/todolist.html');

}
//监听窗口的创建事件
ipcMain.on('todolist', () => {
    createTODOWindow();
});



//番茄钟小组件
function createFCWindow() {
    if (fcWindow) {
        fcWindow.focus();
        return;
    }
    fcWindow = new BrowserWindow({
        width: 800,
        height: 550,
        frame: true,
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            backgroundThrottling: true,
        },
        icon: './geid.png',
    });
    // 设置窗口透明度（如果需要）
    fcWindow.setOpacity(0.9);
    mainWindow.setBackgroundColor('rgba(29, 29, 29, 0.51)');

    fcWindow.loadFile('./pages/fctime.html');

}
//监听窗口的创建事件
ipcMain.on('fctime', () => {
    createFCWindow();
});



//天气小组件
function createWTRWindow() {
    if (wtrWindow) {
        wtrWindow.focus();
        return;
    }
    wtrWindow = new BrowserWindow({
        width: 270,
        height: 200,
        frame: false,
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            backgroundThrottling: true,
        },
        icon: './geid.png',
        // 设置窗口无阴影
        hasShadow: false,
    });
    // 设置窗口透明度（如果需要）
    wtrWindow.setOpacity(0.8);
    wtrWindow.setBackgroundColor('rgba(29, 29, 29, 0.51)');
    // 获取屏幕尺寸
    const { screen } = require('electron');
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    // 设置窗口位置到右上角
    wtrWindow.setPosition(width - 645, 10);

    wtrWindow.loadFile('./pages/weather.html');

}
//监听窗口的创建事件
ipcMain.on('weather', () => {
    createWTRWindow();
});



//天气小组件
function createDAYWindow() {
    if (dayWindow) {
        dayWindow.focus();
        return;
    }
    dayWindow = new BrowserWindow({
        width: 300,
        height: 200,
        frame: false,
        autoHideMenuBar: true,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            backgroundThrottling: true,
        },
        icon: './geid.png',
        // 设置窗口无阴影
        hasShadow: false,
    });
    // 设置窗口透明度（如果需要）
    dayWindow.setOpacity(0.8);
    dayWindow.setBackgroundColor('rgba(29, 29, 29, 0.51)');
    // 获取屏幕尺寸
    const { screen } = require('electron');
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    // 设置窗口位置到右上角
    dayWindow.setPosition(width - 950, 10);

    dayWindow.loadFile('./pages/day.html');

}
//监听窗口的创建事件
ipcMain.on('day', () => {
    createDAYWindow();
});









app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});