// 日历组件
const creatcalender = document.getElementById('calendar');
const createtodolist = document.getElementById('todolist');
const createfctime = document.getElementById('fctime');
const createweather = document.getElementById('weather');
const createday = document.getElementById('day');
creatcalender.onclick = ()=>{
    myAPI2.createCalendar()
}
createtodolist.onclick = () =>{
    myAPI2.createTodoList()
}
createfctime.onclick = () =>{
    myAPI2.createFCTime()
}
createweather.onclick = () =>{
    myAPI2.createWeather()
}
createday.onclick = () =>{
    myAPI2.createDay()
}
