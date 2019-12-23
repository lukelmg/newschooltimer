function periodTimingAddSchedules() {
  //Period Timing Input Per Schedule
  var container = document.getElementById("schedulePeriodTimingDiv");

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  for (var i = 0; i < numberOfSchedules; i++) {
    var scheduleDiv = document.createElement("div");
    scheduleDiv.className = "scheduleTimeDiv";
    container.appendChild(scheduleDiv);

    var scheduleHeader = document.createElement("H3");
    var scheduleHeaderText = document.createTextNode(scheduleNames[i] + " Schedule");
    scheduleHeader.className = "periodHeader";
    scheduleHeader.appendChild(scheduleHeaderText);
    scheduleDiv.appendChild(scheduleHeader);

    for (var e = 0; e < periodsPerSchedule[i]; e++) {
      var nameOfPeriod = document.createElement("input");
      nameOfPeriod.type = "text";
      nameOfPeriod.className = "periodNameInput";
      nameOfPeriod.placeholder = "Period Name";
      nameOfPeriod.id = i + " " + e + "name";
      nameOfPeriod.oninput = function() {
        detectPeriodTimeChange(this.id);
      };
      scheduleDiv.appendChild(nameOfPeriod);

      var time = document.createElement("input");
      time.type = "time";
      time.className = "timeInput";
      time.id = i + " " + e + "time";
      time.oninput = function() {
        detectPeriodTimeChange(this.id);
      };
      if ((e+7) < 10) {
        time.defaultValue = "0" + (e+7) + ":00";
      } else {
      time.defaultValue = (e+7) + ":00";
      }
      scheduleDiv.appendChild(time);
      scheduleDiv.appendChild(document.createElement("br"));
    }
  }

}

var initId;
var hasChanged = "no";

function detectPeriodTimeChange (initId) {
  var schedule = initId.charAt(0);
  var periodThing = initId.substr(1);
  periodThing = periodThing.replace(/\D/g,'');

  if (schedule == 0) {
    if (hasChanged == "no") {
      for (var i = 0; i < numberOfSchedules; i++) {
        //alert(i + " " + periodThing + "name");
        var myInput = document.getElementById("0 " + periodThing + "name").value;
        document.getElementById(i + " " + periodThing + "name").value = myInput;

        var myTime = document.getElementById("0 " + periodThing + "time").value;
        document.getElementById(i + " " + periodThing + "time").value = myTime;
      }
    }else {
      //alert("can't i already changed");
    }
  }

  if (schedule !== "0") {
    hasChanged = "yes";
  }

}

var scheduleNames = [];
var scheduleAbbreviations = [];
var periodsPerSchedule = [];

function getScheduleNameInfo () {
  for (var i = 0; i < numberOfSchedules; i++) {
    scheduleNames[i] = document.getElementById("d" + i + "n").value;
    scheduleAbbreviations[i] = document.getElementById("d" + i + "a").value;
    periodsPerSchedule[i] = document.getElementById("s" + (i + 1) + "periods").value;
    periodsPerSchedule[i] = periodsPerSchedule[i].replace(/\D/g,'');
  }
  periodTimingAddSchedules();
//alert("Schedule Names \n" + scheduleNames + "\n \n ScheduleAbbreviations \n" + scheduleAbbreviations + "\n \n Periods \n" + periodsPerSchedule);
}



var numberOfPeriods = [];

var currentSchedule;

var sameYesNo;

function downPeriod(currentSchedule) {
  if (yesnoperiod == "yes") {
    //alert("same");
    if (currentNumberOfPeriods > 1) {
      currentNumberOfPeriods--;
    }
    var elements = document.getElementsByClassName("numberSelectPeriodNumber"); // get all elements
    for (var i = 0; i < elements.length; i++) {
      if (currentNumberOfPeriods == 1) {
        elements[i].value = currentNumberOfPeriods + " Period";
      } else {
        elements[i].value = currentNumberOfPeriods + " Periods";
      }
    }
  } else {
  //  alert("not same");
    if (previousSchedule !== currentSchedule) {
      currentNumberOfPeriods = 1;
    }
    if (currentNumberOfPeriods == 1) { } else {
      currentNumberOfPeriods--;
      var shortCurrent = currentSchedule.substr(1);
      var output;
      if (currentNumberOfPeriods == 1) {
        output = currentNumberOfPeriods + " Period";
        document.getElementById(shortCurrent + "periods").value =
          currentNumberOfPeriods + " Period";
      } else {
        output = currentNumberOfPeriods +  " Periods";
        document.getElementById(shortCurrent + "periods").value =
          currentNumberOfPeriods + " Periods";
      }
      numberOfPeriods[currentSchedule] = currentNumberOfPeriods;
      previousSchedule = currentSchedule;
    }
  }
}

var currentNumberOfPeriods = 1;
var eee = 0;
var previousSchedule;

function upPeriod(currentSchedule) {
  if (yesnoperiod == "yes") {
  //  alert("same");
    if (currentNumberOfPeriods < 15) {
      currentNumberOfPeriods++;
    }
    var elements = document.getElementsByClassName("numberSelectPeriodNumber"); // get all elements
    for (var i = 0; i < elements.length; i++) {
      elements[i].value = currentNumberOfPeriods + " Periods";
    }
  } else {
  //  alert("not same");
    if (previousSchedule !== currentSchedule) {
      currentNumberOfPeriods = 1;
    }
    if (currentNumberOfPeriods == 15) {
      alert("Max Number of Periods is 15 per Schedule");
    } else {
      currentNumberOfPeriods++;
      var shortCurrent = currentSchedule.substr(1);
      if (currentNumberOfPeriods == 1) {
        document.getElementById(shortCurrent + "periods").value =
          currentNumberOfPeriods + " Period";
      } else {
        document.getElementById(shortCurrent + "periods").value =
          currentNumberOfPeriods + " Periods";
      }
      numberOfPeriods[currentSchedule] = currentNumberOfPeriods;
      previousSchedule = currentSchedule;
    }
  }
}

function readNumberOfPeriods() {
  alert(numberOfPeriods);
}

var numberOfSchedules = 1;

function plusSchedule() {
  if (numberOfSchedules < 8) {
    numberOfSchedules++;
  }
  if (numberOfSchedules == 1) {
    document.getElementById("numSchedule").value =
      numberOfSchedules + " Schedule";
  } else {
    document.getElementById("numSchedule").value =
      numberOfSchedules + " Schedules";
  }
  addFields();
}

function subSchedule() {
  if (numberOfSchedules > 1) {
    numberOfSchedules--;
  }
  if (numberOfSchedules == 1) {
    document.getElementById("numSchedule").value =
      numberOfSchedules + " Schedule";
  } else {
    document.getElementById("numSchedule").value =
      numberOfSchedules + " Schedules";
  }
  addFields();
}

function addFields() {
  //Schedule Names, Abbreviations, and Period Input
  var container = document.getElementById("scheduleNameInputContainer");

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < numberOfSchedules; i++) {
    var scheduleDiv = document.createElement("div");
    scheduleDiv.className = "scheduleDiv";
    container.appendChild(scheduleDiv);

    var scheduleHeader = document.createElement("H3");
    var scheduleHeaderText = document.createTextNode("Schedule " + (i + 1));
    scheduleHeader.className = "periodHeader";
    scheduleHeader.appendChild(scheduleHeaderText);
    scheduleDiv.appendChild(scheduleHeader);

    scheduleDiv.appendChild(document.createElement("br"));
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Schedule Full Name";
    input.id = "d" + i + "n";
    input.className = "scheduleNameInput";
    scheduleDiv.appendChild(input);

    var abb = document.createElement("input");
    abb.type = "text";
    abb.placeholder = "Abbreviation";
    abb.name = "member" + i;
    abb.id = "d" + i + "a";
    abb.className = "scheduleAbbInput";
    scheduleDiv.appendChild(abb);

    scheduleDiv.appendChild(document.createElement("br"));

    var down = document.createElement("input");
    down.type = "button";
    down.id = "ps" + (i + 1);
    down.className = "updownPeriod";
    down.value = "-";
    down.tabIndex = "-1";
    down.onclick = function() {
      downPeriod(this.id);
    };

    scheduleDiv.appendChild(down);

    var disp = document.createElement("input");
    disp.type = "text";
    disp.id = "s" + (i + 1) + "periods";
    disp.className = "numberSelectPeriodNumber";
    disp.disabled = "true";
    disp.value = 1 + " Period";
    disp.tabIndex = "-1";
    scheduleDiv.appendChild(disp);

    var up = document.createElement("input");
    up.type = "button";
    up.id = "ps" + (i + 1);
    up.className = "updownPeriod downperiod";
    up.value = "+";
    up.tabIndex = "-1";
    up.onclick = function() {
      upPeriod(this.id);
    };
    scheduleDiv.appendChild(up);
  }
}

var sameNumberOfPeriods = "yes";

 // need button function to work!!!

function differentNumberSchedules() {
  var radios = document.getElementsByName("samePeriod");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      if (i == 0) {
        sameNumberOfPeriods = "yes";
        document.getElementById("numPeriodSame").style.display = "inline-block";
        displaySamePeriods();
      } else {
        sameNumberOfPeriods = "no";
        document.getElementById("numPeriodSame").style.display = "none";
      }
    }
  }
}
var i;

//Big display blocks for periods below

function displaySamePeriods() {
  var container = document.getElementById("periodContainer");

  var numberOfSamePeriods = document.getElementById("numPeriodSame").value;

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  for (i = 0; i < numberOfSamePeriods; i++) {
    var periodDiv = document.createElement("div");
    periodDiv.className = "periodDiv";
    container.appendChild(periodDiv);

    var periodHeader = document.createElement("H3");
    var periodHeaderText = document.createTextNode("Period " + (i + 1));
    periodHeader.className = "periodHeader";
    periodHeader.appendChild(periodHeaderText);
    periodDiv.appendChild(periodHeader);

    periodDiv.appendChild(document.createElement("br"));
    periodDiv.appendChild(document.createTextNode("Name"));
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder =
      "(Period " + (i + 1) + ", Lunch A, Activity Period, etc.)";
    input.name = "member" + i;
    input.id = "d" + i + "a";
    input.className = "periodNameInput";
    periodDiv.appendChild(input);
    var hour = document.createElement("input");
    hour.type = "time";
    hour.id = "d" + i + "t";
    hour.className = "timeInput";
    periodDiv.appendChild(document.createElement("br"));
    periodDiv.appendChild(document.createTextNode("Dissmissal Time"));
    periodDiv.appendChild(hour);
  }
}

var yesnoperiod;

function periodSameYes() {
  var yesButton = document.getElementById("yes");
  var noButton = document.getElementById("no");

  //var div = document.getElementById("yesSame");

  //div.style.display = "inline-block";

  yesnoperiod = "yes";

  yesButton.style.backgroundColor = "white";
  yesButton.style.color = "black";

  noButton.style.backgroundColor = "Transparent";
  noButton.style.color = "white";
}

function periodSameNo() {
  var yesButton = document.getElementById("yes");
  var noButton = document.getElementById("no");

  var div = document.getElementById("yesSame");

  div.style.display = "none";

  yesnoperiod = "no";

  yesButton.style.backgroundColor = "Transparent";
  yesButton.style.color = "white";

  noButton.style.backgroundColor = "white";
  noButton.style.color = "black";
}

var numberSamePeriods = 1;

function upSame() {
  if (numberSamePeriods < 15) {
    numberSamePeriods++;
  }
  if (numberSamePeriods == 1) {
    document.getElementById("numSamePeriod").value =
      numberSamePeriods + " Period";
  } else {
    document.getElementById("numSamePeriod").value =
      numberSamePeriods + " Periods";
  }
}

function downSame() {
  if (numberSamePeriods > 1) {
    numberSamePeriods--;
  }
  if (numberSamePeriods == 1) {
    document.getElementById("numSamePeriod").value =
      numberSamePeriods + " Period";
  } else {
    document.getElementById("numSamePeriod").value =
      numberSamePeriods + " Periods";
  }
}













var schedule = [];
var scheduleAbb = [];
var daysURL = "";

var samePURL = "";
var diffP = [];
var sameP = [];

var o = 1;

var d1h = [];
var d2h = [];
var d3h = [];
var d4h = [];
var d5h = [];
var d6h = [];

var d1m = [];
var d2m = [];
var d3m = [];
var d4m = [];
var d5m = [];
var d6m = [];

function ask() {
  var howManyDays = prompt("How many different schedules are at your school?");
  window.location.href = "https://schooltimernew.glitch.me/?d=" + howManyDays;

  for (var i = 1; i <= howManyDays; ++i) {
    schedule[i] = prompt(
      "What is the name of schedule day " +
        i +
        "? \n \n Ex. Normal, Homeroom, etc."
    );
  }

  for (var i = 1; i <= howManyDays; ++i) {
    scheduleAbb[i] = prompt(
      "What an abbreviation for schedule " + schedule[i] + "?"
    );
  }

  for (var i = 1; i <= howManyDays; ++i) {
    daysURL =
      daysURL +
      "d" +
      i +
      "=" +
      schedule[i] +
      "&" +
      "d" +
      i +
      "a" +
      "=" +
      scheduleAbb[i] +
      "&";
  }

  var sameperiods = prompt(
    "Is there the same number of periods everyday? (yes or no)"
  );
  if (sameperiods == "no") {
  } else if (sameperiods == "yes") {
    var numPeriod = prompt("How many periods are there in a day?");

    for (var e = 1; e <= numPeriod; ++e) {
      d1h[e] = prompt(
        "What hour does period " + e + " end at on a " + schedule[1] + " day?"
      );
    }
    for (var e = 1; e <= numPeriod; ++e) {
      d1m[e] = prompt(
        "What minute does period " + e + " end at on a " + schedule[1] + " day?"
      );
    }
    var daysDone = 1;
    if (daysDone < howManyDays) {
      for (var e = 1; e <= numPeriod; ++e) {
        d2h[e] = prompt(
          "What hour does period " + e + " end at on a " + schedule[2] + " day?"
        );
      }
      daysDone = 2;
    }
    if (daysDone < howManyDays) {
      for (var e = 1; e <= numPeriod; ++e) {
        d3h[e] = prompt(
          "What hour does period " + e + " end at on a " + schedule[3] + " day?"
        );
      }
      daysDone = 3;
    }
    if (daysDone < howManyDays) {
      for (var e = 1; e <= numPeriod; ++e) {
        d4h[e] = prompt(
          "What hour does period " + e + " end at on a " + schedule[4] + " day?"
        );
      }
      daysDone = 4;
    }
    if (daysDone < howManyDays) {
      for (var e = 1; e <= numPeriod; ++e) {
        d5h[e] = prompt(
          "What hour does period " + e + " end at on a " + schedule[5] + " day?"
        );
      }
      daysDone = 5;
    }
    if (daysDone < howManyDays) {
      for (var e = 1; e <= numPeriod; ++e) {
        d6h[e] = prompt(
          "What hour does period " + e + " end at on a " + schedule[6] + " day?"
        );
      }
      daysDone = 6;
    }

    alert(
      d1 +
        "++++" +
        d2 +
        "++++" +
        d3 +
        "++++" +
        d4 +
        "++++++" +
        d5 +
        "+++++" +
        d6
    );
  } else {
    alert(
      "why are you typing anything other than yes or no like you were told?"
    );
    ask();
  }

  window.location.href = "https://schooltimernew.glitch.me/?" + daysURL;
}

function read() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("d2");
  alert(c);
}
