var schoolName, numberOfSchedules, schoolColor;
var remNumberOfSchedules;
var remPeriodsPerSchedule = [1,1,1,1,1,1,1,1];

var remPeriodNames = [];
var remPeriodTimes = [];

var currentArray = [];
var currentTimeArray = [];

var remScheduleNames = [];
var remScheduleAbbs = [];


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

      timeinp.oninput = function () {
        alert("hello");
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
