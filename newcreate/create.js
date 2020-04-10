var schoolName, numberOfSchedules, schoolColor;
var remNumberOfSchedules;
var remPeriodsPerSchedule = [1,1,1,1,1,1,1,1];
var remPeriodNames = [];


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

    var thisinp = document.createElement("input");
    thisinp.className = "actualScheduleName";
    thisinp.id = i + "scheduleName";
    thisinp.maxLength = 50;
    thisinp.placeholder = "Schedule Name";

    var h = document.createElement("H5");
    var t = document.createTextNode("");
    h.className = "boringSchedule";
    h.appendChild(t);

    var thisspan = document.createElement("div");
    thisspan.className = "divtest";
    thisspan.appendChild(thisinp);
    thisspan.appendChild(h);
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
    otherContainer.appendChild(abb);
    otherContainer.appendChild(thisspan);
    otherContainer.appendChild(inplabel);
    otherContainer.appendChild(inp);

    var periodTimeContainer = document.createElement("div");
    periodTimeContainer.id = i + "periodTimeContainer";

    otherContainer.appendChild(periodTimeContainer);

    container.appendChild(otherContainer);
  }
  setAllPeriods();
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
      perinp.className = "remixPeriodNameInput"

      periodTimeContainer.appendChild(perinp);
      timeinp.type = "time";

      timeinp.className = "periodTimingRemix";
      periodTimeContainer.appendChild(timeinp);

      var myBreak = document.createElement("BR");
      periodTimeContainer.appendChild(myBreak);
    }
    otherContainer.appendChild(periodTimeContainer);
  }
}
