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

var schoolCountry;
var schoolState;
var schoolCity;
var schoolName;

function testRead() {
  alert(document.getElementById("3 8theTimes").value);

  alert(document.getElementsByName("3 8theTimes")[0].value);

  var x = document.getElementById("3 8theTimes");
  alert(x.value);
  alert(x.defaultValue);
  alert(x);
}

function readRemix() { // happens on captcha press
  alert(document.getElementById("3 8theTimes").value);
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
        arrayTimingTestNew[e] = document.getElementById(i + " " + e + "theTimes").value;
        if (i==3 && e==8) {
          alert(document.getElementById("3 8theTimes").value);
        }
      }
      periodNameURL[i] = arrayTestNew;
      scheduleTimes[i] = arrayTimingTestNew;
      arrayTestNew = [];
      arrayTimingTestNew = [];
    }

    alert(scheduleTimes)

     schoolName = document.getElementById("remixSchoolName").value;
     schoolCountry = document.getElementById("countryId").value;
     schoolState = document.getElementById("stateId").value;
     schoolCity = document.getElementById("cityId").value;
    var schoolColor = document.getElementById("schoolColorInput").value;

    /*
    var theURL = "?school=" + schoolName + "&country=" + schoolCountry + "&state=" + schoolState + "&city=" + schoolCity;
    theURL = theURL + "&color=" + schoolColor + "&nums=" + numberOfSchedules + "&schedNames=" + scheduleNames + "&abbs=" + scheduleAbbs + "&pers=" + periodsPerSchedule;
    theURL = theURL + "&names=" + periodNameURL + "&newvariable=" + scheduleTimes;
    */

    var theURL = "?nums=" + numberOfSchedules + "&names=" + periodNameURL +  "&schedNames=" + scheduleNames + "&abbs=" + scheduleAbbs + "&pers=" + periodsPerSchedule + "&school=" + schoolName + "&color=" + schoolColor + "&newvariable=" + scheduleTimes;
    theURL = theURL + "&schoolCountry=" + schoolCountry + "&schoolState=" + schoolState + "&schoolCity=" + schoolCity;

    /*
    ?nums=4&schedNames=Normal,Homeroom,Early Dismissal,2 Hour Delay&abbs=A,B,C,D&pers=9,9,9,9&school=Parkland High School &color=#ff0000&names=Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9&newvariable=08:29,09:17,10:05,10:53,11:41,00:29,01:17,02:05,02:53,08:37,09:24,10:11,10:58,11:45,00:32,01:19,02:06,02:53,08:22,09:04,09:46,10:20,10:54,11:28,00:02,00:31,01:00,10:09,10:39,11:09,11:43,00:17,00:51,01:25,02:09,02:53
    */

    document.getElementById("longURL").value = theURL;

    /*


    ?school=Parkland High School &country=&state=&city=&schoolColor=#ff0000&nums=4&abbs=,,,&pers=9,9,9,9&names=Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9,Period 1,Period 2,Period 3,Period 4,Period 5,Period 6,Period 7,Period 8,Period 9&newvariable=08:29,09:17,10:05,10:53,11:41,00:29,01:17,02:05,02:53,08:37,09:24,10:11,10:58,11:45,00:32,01:19,02:06,02:53,08:22,09:04,09:46,10:20,10:54,11:28,00:02,00:31,01:00,10:09,10:39,11:09,11:43,00:17,00:51,01:25,02:09,02:53


    ?nums=4&names=Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209&abbs=A,B,C,D&pers=9,9,9,9&school=Parkland%20High%20School%20&color=#ff0000&newvariable=08:29,09:17,10:05,10:53,11:41,00:29,01:17,02:05,02:53,08:37,09:24,10:11,10:58,11:45,00:32,01:19,02:06,02:53,08:22,09:04,09:46,10:20,10:54,11:28,00:02,00:31,01:00,10:09,10:39,11:09,11:43,00:17,00:51,01:25,02:09,02:53

    */

    createShortURL();

  } else {
    alert('Please Check the "I am not a robot" box');
  }


}


function goToRemix() {
  setTimeout(function() {
        document.getElementById("phpformstuff").submit();
        setTimeout(function() {
          var res = document.getElementById("shortURL").value;
            location.replace("https://www.lukegutman.com/" + res);
        }, 200);
  }, 200);
}






function createShortURL () {

  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
    var res = "";
    for(var i = 0; i < 6; i++) {
        var rnd = Math.floor(Math.random() * list.length);
        res = res + list.charAt(rnd);
        if (i == 2) {
          res = res + "-";
        }
    }

    var uniqueid = "";
    for(var i = 0; i < 10; i++) {
        var rnd = Math.floor(Math.random() * list.length);
        uniqueid = uniqueid + list.charAt(rnd);
    }

    var uni = document.getElementById("uniqueid");
    uni.value = uniqueid;

    var d = new Date();
    var date = document.getElementById("timeanddate");
    date.value = d;

    var input = document.getElementById("shortURL");
    input.value = res;

    var country = document.getElementById("country");
    country.value = schoolCountry;

    var state = document.getElementById("state");
    state.value = schoolState;

    var city = document.getElementById("city");
    city.value = schoolCity;

    var schoolInput = document.getElementById("schoolNameID");
    schoolInput.value = schoolName;

    goToRemix();
}
