const timeDiv = document.getElementById("clock");
const todayDiv = document.getElementById("today");

function formatNumber(num) {
    if(num <10) {
        return "0" + num;
    }
    return num;
}
function formatMonth(num) {
    if(num <10) {
        return "0" + (num + 1);
    }
    return num;
}
function getTime() {
    let now =new Date();
    let hour = now.getHours(); //0~23시
    let minute = now.getMinutes(); //0~59분
    let second = now.getSeconds(); //0~59초
    let noon = "오전"

    if(hour>11) {
        noon = "오후";
        hour = hour - 12;
        if(hour==0) {
            hour = 12;
        }
    }
    timeDiv.textContent = noon + " " + formatNumber(hour) + ":" + formatNumber(minute) + ":" + formatNumber(second);
}
function getToday() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let dayNumber = now.getDay(); //요일 1~7
    const dayList = ["월", "화", "수", "목", "금", "토", "일"];
    
    todayDiv.textContent = formatNumber(year) + "-" + formatMonth(month) + "-" + formatNumber(date) + " " + dayList[dayNumber - 1];
}

getToday(); 
getTime();
setInterval(getTime, 1000)
colorChan();