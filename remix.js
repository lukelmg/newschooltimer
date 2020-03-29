var stateOfRemixModal = 0;
var permState = 0;

function openEditModal() {
  if (stateOfRemixModal == 0) {
    if (permState == 0) {
      getReadyForEdit();
      permState = 1;
    }
    stateOfRemixModal = 1;
    document.getElementById("editModal").style.display = "block";
  } else {
    closeEditModal();
  }
}

function closeEditModal() {
  stateOfRemixModal = 0;
  document.getElementById("editModal").style.display = "none";
}








/*

Parkland:


?nums=4
&names=Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209
&abbs=A,B,C,D
&pers=9,9,9,9
&school=Parkland%20High%20School%20
&color=#ff0000
&newvariable=08:29,09:17,10:05,10:53,11:41,00:29,01:17,02:05,02:53,08:37,09:24,10:11,10:58,11:45,00:32,01:19,02:06,02:53,08:22,09:04,09:46,10:20,10:54,11:28,00:02,00:31,01:00,10:09,10:39,11:09,11:43,00:17,00:51,01:25,02:09,02:53



*/





var verified = 'no';

function verifyCaptcha() {
  document.getElementById('g-recaptcha-error').innerHTML = '';
  verified = 'yes';
}

function readRemix() { // happens on captcha press
  if (verified == 'yes') {
    var numberOfSchedules = document.getElementById("remixSchoolScheduleNumbers").value;

    var periodsPerSchedule = [];
    var arrayTestNew = [];
    var arrayTimingTestNew = [];

    var periodNameURL = [];
    var scheduleTimes = [];

    var scheduleNames = [];
    var scheduleAbbs = [];

    for (var p = 0; p < numberOfSchedules; p++) {
      periodsPerSchedule[p] = document.getElementById(p + "numberOfPeriodsPerThisSchedule").value;
      scheduleNames[p] = document.getElementById(p + "scheduleName").value;
      scheduleAbbs[p] = document.getElementById(p + "remixAbb").value;
    }
    for (var i = 0; i < numberOfSchedules; i++) {
      for (var e = 0; e < periodsPerSchedule[i]; e++) {
        arrayTestNew[e] = document.getElementById(i + " " + e + "name").value;
        arrayTimingTestNew[e] = document.getElementById(i + " " + e + "time").value;
      }

      periodNameURL[i] = arrayTestNew;
      scheduleTimes[i] = arrayTimingTestNew;
      arrayTestNew = [];
      arrayTimingTestNew = [];
    }

    var schoolName = document.getElementById("remixSchoolName").value;
    var schoolCountry = document.getElementById("countryId").value;
    var schoolState = document.getElementById("stateId").value;
    var schoolCity = document.getElementById("cityId").value;
    var schoolColor = document.getElementById("schoolColorInput").value;

    var theURL = "?school=" + schoolName + "&country=" + schoolCountry + "&state=" + schoolState + "&city=" + schoolCity;
    theURL = theURL + "&schoolColor=" + schoolColor + "&nums=" + numberOfSchedules + "&abbs=" + scheduleAbbs + "&pers=" + periodsPerSchedule;
    theURL = theURL + "&names=" + periodNameURL + "&newvariable=" + scheduleTimes;


  } else {
    alert('Please Check the "I am not a robot" box');
  }


}
