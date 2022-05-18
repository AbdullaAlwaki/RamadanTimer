const daysEl = document.getElementById ('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds1')

const newYears = "22 Mar 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

   // const days =
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML =  Math.floor(totalSeconds / 3600 / 24);
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

}



function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "Am";
    
    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
        pe = "PM";
    }

    Number.prototype.pad = function (digits){
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
        console.log(document.getElementById(ids[i]).firstChild.nodeValue = values[i]);
    }
        
}

setInterval(() => {

    countdown();
  
    updateClock();
  
  }, 1000);
  
  



