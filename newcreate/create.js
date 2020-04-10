var schoolName, numberOfSchedules, schoolColor;

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
      //updateRemixPeriods(this.id);
    }
    inp.onkeydown = function () {
      return false;
    }
    inp.max = 15;
    inp.min = 1;

    var text = document.createTextNode("Number Of Periods: ");
    var inplabel = document.createElement("H5");
    inplabel.className = "otherboring";
    inplabel.appendChild(text);

    otherContainer.appendChild(thisinp);
    otherContainer.appendChild(abb);
    otherContainer.appendChild(thisspan);
    otherContainer.appendChild(inplabel);
    otherContainer.appendChild(inp);
    container.appendChild(otherContainer);
  }
}
