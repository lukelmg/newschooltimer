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
  var container = document.getElementById("buttonBody");
  for (var i = 0; i < numberOfSchedules; i++) {
    var scheduleButton = document.createElement("button");
    scheduleButton.className = "scheduleButtonClass";
    scheduleButton.onclick = function () {
      change(i);
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
}


var currentScheduleSelected = 0;

function change (sched) {
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
    setTimeout(tick, 100);
  }
  document.addEventListener('DOMContentLoaded', tick);
})();
