var schoolName, numberOfSchedules, schoolColor;
var remNumberOfSchedules;
var remPeriodsPerSchedule = [1,1,1,1,1,1,1,1];

var remPeriodNames = [];
var remPeriodTimes = [];

var currentArray = [];
var currentTimeArray = [];

var remScheduleNames = [];
var remScheduleAbbs = [];

var copyNames = [];
var copyTimes = [];

function myCopy(id) {
  var currentSchedule = id.charAt(0);
  var currentNumberOfPeriods = document.getElementById(currentSchedule + "numberOfPeriodsPerThisSchedule").value;
  for (var p = 0; p < currentNumberOfPeriods; p++) {
    copyNames[p] = document.getElementById(currentSchedule + " " + p + "name").value;
    copyTimes[p] = document.getElementById(currentSchedule + " " + p + "theTimes").value;
  }
  var copyButtons = document.getElementsByClassName("copyButtons");
  var pasteButtons = document.getElementsByClassName("pasteButtons");
  for (var i = 0; i < copyButtons.length; i++) {
      copyButtons[i].style.display="none";
      pasteButtons[i].style.display="block";
  }
    document.getElementById(currentSchedule + "paste").innerHTML = "Cancel"
}


function myPaste(id) {
  var cancelOrPaste = document.getElementById(id).innerHTML;
  if (cancelOrPaste == "Paste Schedule") {

    var currentSchedule = id.charAt(0);
    var currentNumberOfPeriods = document.getElementById(currentSchedule + "numberOfPeriodsPerThisSchedule").value;
    for (var i = 0; i < currentNumberOfPeriods; i++) {
      if (copyNames[i] != undefined && copyTimes[i] != undefined) {
        document.getElementById(currentSchedule + " " + i + "name").value = copyNames[i];
        document.getElementById(currentSchedule + " " + i + "theTimes").value = copyTimes[i];
      }
    }
  }
  var copyButtons = document.getElementsByClassName("copyButtons");
  var pasteButtons = document.getElementsByClassName("pasteButtons");
  for (var q = 0; q < copyButtons.length; q++) {
      copyButtons[q].style.display="block";
      pasteButtons[q].style.display="none";
      pasteButtons[q].innerHTML="Paste Schedule";
  }
  rememberPeriodInput();
}


function setSchedules() {
  numberOfSchedules = document.getElementById("remixSchoolScheduleNumbers").value;

  var container = document.getElementById("remixScheduleContainer");

  while(container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }


  for (var i = 0; i < numberOfSchedules; i++) {
    var otherContainer = document.createElement("div");
    otherContainer.className = "remixElement";
    otherContainer.id = i + "otherContainer";

    var copy = document.createElement("button");
    copy.innerHTML = "Copy Schedule";
    copy.id = i + "copy";
    copy.className = "copyButtons";
    copy.onclick = function () {
      myCopy(this.id);
    }

    var paste = document.createElement("button");
    paste.innerHTML = "Paste Schedule";
    paste.id = i + "paste";
    paste.className = "pasteButtons";
    paste.onclick = function () {
      myPaste(this.id);
    }

    var abb = document.createElement("input");
    abb.id = i + "remixAbb";
    abb.placeholder = "Schedule Abbreviation";
    abb.className = "scheduleAbbreviationInput";
    abb.maxLength = 5;

    abb.oninput = function () {
      rememberPeriodInput();
    }

    if (remScheduleAbbs[i] != undefined) {
      abb.value = remScheduleAbbs[i];
    }

    var thisinp = document.createElement("input");
    thisinp.className = "actualScheduleName";
    thisinp.id = i + "scheduleName";
    thisinp.maxLength = 50;
    thisinp.placeholder = "Schedule Name";

    thisinp.oninput = function () {
      rememberPeriodInput();
    }

    if (remScheduleNames[i] != undefined) {
      thisinp.value = remScheduleNames[i];
    }

    var h = document.createElement("H5");
    var t = document.createTextNode("Examples: Normal, Early Dismissal, Homeroom, 2 Hour Delay");
    h.className = "boringSchedule";
    h.appendChild(t);

    var thisspan = document.createElement("div");
    thisspan.className = "divtest";
    thisspan.appendChild(thisinp);
    thisspan.appendChild(abb);

    var inp = document.createElement("input");
    inp.type = "number"
    inp.className = "remixNumberOfPeriodsInput";
    inp.id = i + "numberOfPeriodsPerThisSchedule";
    inp.oninput = function () {
      setAllPeriods();
    }
    inp.onkeydown = function () {
      return false;
    }
    inp.max = 15;
    inp.min = 1;
    inp.value = remPeriodsPerSchedule[i];

    var text = document.createTextNode("Number Of Periods: ");
    var inplabel = document.createElement("H5");
    inplabel.className = "otherboring";
    inplabel.appendChild(text);

    otherContainer.appendChild(thisinp);
    otherContainer.appendChild(h);

    otherContainer.appendChild(paste);
    otherContainer.appendChild(copy);

    var myBreak = document.createElement("br");
    otherContainer.appendChild(myBreak);


    otherContainer.appendChild(abb);

    var q = document.createElement("H5");
    var o = document.createTextNode("Examples: A, B, 1, 2, HR, Mon, Tues, Wed");
    q.className = "boringSchedule";
    q.appendChild(o);

    otherContainer.appendChild(q);


    otherContainer.appendChild(thisspan);

    var text2 = document.createTextNode("Name Of Period");
    var inplabel2 = document.createElement("H5");
    inplabel2.className = "boringSchedule2";
    inplabel2.appendChild(text2);

    var text3 = document.createTextNode("Time Period Ends");
    var inplabel3 = document.createElement("H5");
    inplabel3.className = "boringSchedule3";
    inplabel3.appendChild(text3);

    otherContainer.appendChild(inplabel);
    otherContainer.appendChild(inp);

    var myBreak2 = document.createElement("br");
    otherContainer.appendChild(myBreak2);

    otherContainer.appendChild(inplabel2);
    otherContainer.appendChild(inplabel3);

    var periodTimeContainer = document.createElement("div");
    periodTimeContainer.id = i + "periodTimeContainer";

    otherContainer.appendChild(periodTimeContainer);

    container.appendChild(otherContainer);
  }
  setAllPeriods();
  rememberPeriodInput();
}


function setAllPeriods () {
  var numberOfSchedules = document.getElementById("remixSchoolScheduleNumbers").value;
  for (var i = 0; i < numberOfSchedules; i++) {

    remPeriodsPerSchedule[i] = document.getElementById(i + "numberOfPeriodsPerThisSchedule").value;

    var periodTimeContainer = document.getElementById(i + "periodTimeContainer");
    var otherContainer = document.getElementById(i + "otherContainer");

    while (periodTimeContainer.hasChildNodes()) {
      periodTimeContainer.removeChild(periodTimeContainer.lastChild);
    }

    for (var p = 0; p < remPeriodsPerSchedule[i]; p++) {
      var perinp = document.createElement("input");
      var timeinp = document.createElement("input");

      perinp.maxLength = 30;
      perinp.className = "remixPeriodNameInput";
      perinp.id = i + " " + p + "name";
      perinp.placeholder = "Period Name";

      perinp.oninput = function () {
        rememberPeriodInput();
      }


      if (remPeriodNames[i] != undefined) {
        var current = remPeriodNames[i].substr(1);
        console.log(current);
        var myNew = current.slice(0, -1);
        var final = myNew.split(',');
        if (final[p] != undefined) {
          perinp.value = final[p]
        } else {
          perinp.value = "";
        }
      }

      periodTimeContainer.appendChild(perinp);
      timeinp.type = "time";
      timeinp.id = i + " " + p + "theTimes";
      timeinp.className = "timeInput";
      timeinp.min = "00:00";
      timeinp.max = "12:00";

      timeinp.oninput = function () {
        rememberPeriodInput();
      }
      timeinp.onkeydown = function () {
        rememberPeriodInput();
      }
      timeinp.onclick = function () {
        rememberPeriodInput();
      }

      if (remPeriodTimes[i] != undefined) {
        var current2 = remPeriodTimes[i].substr(1);
        console.log(current2);
        var myNew2 = current2.slice(0, -1);
        var final2 = myNew2.split(',');
        if (final2[p] != undefined) {
          timeinp.value = final2[p]
        } else {
          timeinp.value = "";
        }
      }

      timeinp.className = "periodTimingRemix";
      periodTimeContainer.appendChild(timeinp);

      var myBreak = document.createElement("BR");
      periodTimeContainer.appendChild(myBreak);
    }
    otherContainer.appendChild(periodTimeContainer);
  }
}


function rememberPeriodInput () {

  var numberOfSchedules = document.getElementById("remixSchoolScheduleNumbers").value;
  for (var i = 0; i < numberOfSchedules; i++) {
    remPeriodsPerSchedule[i] = document.getElementById(i + "numberOfPeriodsPerThisSchedule").value;
    remScheduleNames[i] = document.getElementById(i + "scheduleName").value;
    remScheduleAbbs[i] = document.getElementById(i + "remixAbb").value;
    for (var p = 0; p < remPeriodsPerSchedule[i]; p++) {
      var currentName = document.getElementById(i + " " + p + "name").value;
      currentArray[p] = currentName;

      var currentTime = document.getElementById(i + " " + p + "theTimes").value;
      currentTimeArray[p] = currentTime;
    }
    remPeriodNames[i] = "{" + currentArray + "}";
    currentArray = [];

    remPeriodTimes[i] = "{" + currentTimeArray + "}";
    currentTimeArray = [];
  }
}


























var verified = 'no';
var completed = 'no';

function verifyCaptcha() {
  document.getElementById('g-recaptcha-error').innerHTML = '';
  verified = 'yes';
}

var schoolCountry;
var schoolState;
var schoolCity;
var schoolName;

function readRemix() { // happens on captcha press

  schoolName = document.getElementById("remixSchoolName").value;
  schoolCountry = document.getElementById("countryId").value;
  schoolState = document.getElementById("stateId").value;
  schoolCity = document.getElementById("cityId").value;


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
      }
      periodNameURL[i] = arrayTestNew;
      scheduleTimes[i] = arrayTimingTestNew;
      arrayTestNew = [];
      arrayTimingTestNew = [];
    }

     schoolName = document.getElementById("remixSchoolName").value;
     schoolCountry = document.getElementById("countryId").value;
     schoolState = document.getElementById("stateId").value;
     schoolCity = document.getElementById("cityId").value;
    var schoolColor = document.getElementById("schoolColorInput").value;

    var theURL = "?nums=" + numberOfSchedules + "&names=" + periodNameURL +  "&schedNames=" + scheduleNames + "&abbs=" + scheduleAbbs + "&pers=" + periodsPerSchedule + "&school=" + schoolName + "&color=" + schoolColor + "&newvariable=" + scheduleTimes;
    theURL = theURL + "&schoolCountry=" + schoolCountry + "&schoolState=" + schoolState + "&schoolCity=" + schoolCity;

    document.getElementById("longURL").value = theURL;

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
            window.location.href = "https://www.lukegutman.com/" + res;
        }, 200);
  }, 200);
}


// new timers make text black? ohhhhhh wait, it's default color on newcreate. need to change to red;





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


function gogo() {
  var val = document.getElementById("backupCode").value;
  window.location.href = ("https://www.lukegutman.com/" + val);
}
