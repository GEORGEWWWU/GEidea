const {contextBridge,ipcRenderer} = require('electron')
//引入electron，且调用contextBridge桥梁模块
//ipcRenderer为调用通信模块(渲染进程)

contextBridge.exposeInMainWorld('myAPI2', {
    //日历组件 API
    createCalendar(){ // 修改 creatCalendar 为 createCalendar
        ipcRenderer.send('calendar');
    },
    //待办清单 API
    createTodoList(){
        ipcRenderer.send('todolist');
    },
    //番茄钟 API
    createFCTime(){
        ipcRenderer.send('fctime');
    },
    //天气 API
    createWeather(){
        ipcRenderer.send('weather');
    },
    //倒数日 API
    createDay(){
        ipcRenderer.send('day');
    }
});