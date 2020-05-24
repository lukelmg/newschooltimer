/*
?nums=4
&schoolCountry=United States
&schoolState=Pennsylvania
&schoolCity=Allentown
&names=Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9
&schedNames=Normal,Homeroom,Early Dismissal,2 Hour Delay
&abbs=A,B,C,D
&pers=9,9,9,9
&school=Parkland High School
&color=#ff0000
&newvariable=08:29,09:17,10:05,10:53,11:41,00:29,01:17,02:05,02:53,08:37,09:24,10:11,10:58,11:45,00:32,01:19,02:06,02:53,08:22,09:04,09:46,10:20,10:54,11:28,00:02,00:31,01:00,10:09,10:39,11:09,11:43,00:17,00:51,01:25,02:09,02:53
*/

var phsURL = "?nums=4&schoolCountry=United States&schoolState=Pennsylvania&schoolCity=Allentown&names=Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9&schedNames=Normal,Homeroom,Early Dismissal,2 Hour Delay&abbs=A,B,C,D&pers=9,9,9,9&school=Parkland High School&color=#ff0000&newvariable=08:29,09:17,10:05,10:53,11:41,00:29,01:17,02:05,02:53,08:37,09:24,10:11,10:58,11:45,00:32,01:19,02:06,02:53,08:22,09:04,09:46,10:20,10:54,11:28,00:02,00:31,01:00,10:09,10:39,11:09,11:43,00:17,00:51,01:25,02:09,02:53"

var numberOfSchedules, schoolName, schoolColor;
var rawPeriodNames = [];
var rawPeriodTimes = [];
var rawScheduleNames = [];
var rawScheduleAbbs = [];
var rawNumberOfPeriods = [];



function start () {
  var url_string = "https://www.test.com/" + phsURL;
  var url = new URL(url_string);

  numberOfSchedules = url.searchParams.get("nums");
  rawPeriodNames = url.searchParams.get("names").split(",")
  rawPeriodTimes = (url_string.split('newvariable=')[1]).split(",");
  rawScheduleNames = url.searchParams.get("schedNames").split(",");
  rawScheduleAbbs = url.searchParams.get("abbs").split(",");
  rawNumberOfPeriods = url.searchParams.get("pers").split(",");
  chunk();
  createTimesAndNameTextAreas();
  createScheduleButtons();
}

function createScheduleButtons() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var buttonSize = width / numberOfSchedules;
  var container = document.getElementById("buttonBody");
  for (var i = 0; i < numberOfSchedules; i++) {
    var scheduleButton = document.createElement("button");
    scheduleButton.className = "scheduleButtonClass";
    scheduleButton.id = i;
    scheduleButton.style.height = buttonSize + "px";
    scheduleButton.style.width = buttonSize + "px";
    scheduleButton.onclick = function () {
      change(this.id);
    }
    scheduleButton.innerHTML = rawScheduleAbbs[i];
    container.appendChild(scheduleButton);
  }
}

var scheduleSplit = [];

var timeMultiDem = [];
var nameMultiDem = [];

var testArray = [];

function chunk () {
  var k = 0;
  var p, j, timeSplitArray, nameSplitArray, chunk;

  for (p = 0, j = rawPeriodNames.length; p < j; p += chunk) {

    var prtest = parseInt(rawNumberOfPeriods[k]);
    p, j, timeSplitArray, nameSplitArray, chunk = prtest;
    timeSplitArray = rawPeriodTimes.slice(p, p + chunk);
    nameSplitArray = rawPeriodNames.slice(p, p + chunk);

    timeMultiDem[k] = "(" + timeSplitArray + ")";
    nameMultiDem[k] = "(" + nameSplitArray + ")";

    k++;
  }
  times();
}

var onlyHours = [];
var onlyMinutes = [];

function times() {
  onlyHours = (timeMultiDem[currentScheduleSelected].substring(1, timeMultiDem[currentScheduleSelected].length-1)).split(',');
  onlyMinutes = (timeMultiDem[currentScheduleSelected].substring(1, timeMultiDem[currentScheduleSelected].length-1)).split(',');
  for (var i = 0; i < rawNumberOfPeriods[currentScheduleSelected]; i++) {
    //Hours
    var s = onlyHours[i]
    onlyHours[i] = s.substring(0, s.indexOf(':'));
    if (onlyHours[i] < 6) {
      onlyHours[i] = (parseInt(onlyHours[i]) + 12);
    }
    //Hours

    //Minutes
    var x = onlyMinutes[i];
    onlyMinutes[i] = x.substring(x.indexOf(":") + 1);
    //Minutes
  }
  console.log(onlyHours);
  console.log(onlyMinutes);
}

var onlyNames = [];

function createTimesAndNameTextAreas () {
  onlyNames = (nameMultiDem[currentScheduleSelected].substring(1, nameMultiDem[currentScheduleSelected].length-1)).split(',');
  for (var i = 0; i < rawNumberOfPeriods[currentScheduleSelected]; i++) {
    var container = document.getElementById("timerBody");
    var periodName = document.createElement("span");
    periodName.id = i + "name";
    periodName.className = "periodNameClass";
    periodName.innerHTML = onlyNames[i] + ": ";
    var periodTime = document.createElement("span");
    periodTime.id = i + "time";
    periodTime.className = "periodTimeClass";
    container.appendChild(periodName);
    container.appendChild(periodTime);
    var myBreak = document.createElement("br");
    container.appendChild(myBreak);
  }
  var timerBodyWidth = parseInt(document.getElementById("timerBody").offsetWidth);
  var width = parseInt((window.innerWidth > 0) ? window.innerWidth : screen.width);

  console.log(timerBodyWidth);
  console.log(width);

  var startingSize = 10;

    while (timerBodyWidth < (width-197)) {
      startingSize = startingSize + 1;
      var times = document.getElementsByClassName("periodTimeClass");
      var names = document.getElementsByClassName("periodNameClass");
      for (var e = 0; e < times.length; e++) {
        times[e].style.fontSize = startingSize + "px";
        names[e].style.fontSize = startingSize + "px";
      }
      timerBodyWidth = parseInt(document.getElementById("timerBody").offsetWidth);
      console.log(timerBodyWidth);
    }
}


var currentScheduleSelected = 0;

function change (sched) {
  console.log(sched);
  var x = document.getElementsByClassName("scheduleButtonClass");
  for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#1E1E1E";
  }
    document.getElementById(sched).style.backgroundColor = "#262626";
  currentScheduleSelected = sched;
  times();
}

function pad(num) {
  return ("0" + parseInt(num)).substr(-2);
}

(function() {
  var start = new Date;
  function tick() {

    for (var i = 0; i < rawNumberOfPeriods[currentScheduleSelected]; i++) {
      start.setHours(onlyHours[i], onlyMinutes[i], 0); // 11pm

      var now = new Date;
      if (now > start) { // too late, go to tomorrow
        start.setDate(start.getDate() + 1);
      }
      var remain = ((start - now) / 1000);
      var hh = pad((remain / 60 / 60) % 60);
      var mm = pad((remain / 60) % 60);
      var ss = pad(remain % 60);

      document.getElementById(i + 'time').innerHTML = hh + ":" + mm + ":" + ss;
    }
    setTimeout(tick, 0);
  }
  document.addEventListener('DOMContentLoaded', tick);
})();
