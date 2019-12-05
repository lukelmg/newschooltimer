
var numberOfSchedules;

function initialInputs() {
  numberOfSchedules = 1;
  var container = document.getElementById("scheduleNameInputContainer");

  while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
  }
  for (i=0;i<numberOfSchedules;i++){
      container.appendChild(document.createTextNode("Schedule " + (i+1)));
      var input = document.createElement("input");
      input.type = "text";
      input.placeholder = "(Normal, Homeroom, Early Dissmissal, etc.)";
      input.id = "d" + i + "n";
      input.className = "scheduleNameInput"
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
  }
  var container = document.getElementById("scheduleAbbreviationContainer");

  while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
  }
  for (i=0;i<numberOfSchedules;i++){
      container.appendChild(document.createTextNode("Schedule " + (i+1) + " Abbreviation"));
      var input = document.createElement("input");
      input.type = "text";
      input.placeholder = "(A, B, C, 1, 2, 3) "
      input.name = "member" + i;
      input.id = "d" + i + "a";
      input.className = "scheduleNameInput"
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
  }
}

  function addFields(){
      numberOfSchedules = document.getElementById("numSchedule").value;
      var container = document.getElementById("scheduleNameInputContainer");

      while (container.hasChildNodes()) {
          container.removeChild(container.lastChild);
      }
      for (i=0;i<numberOfSchedules;i++){
          container.appendChild(document.createTextNode("Schedule " + (i+1)));
          var input = document.createElement("input");
          input.type = "text";
          input.placeholder = "(Normal, Homeroom, Early Dissmissal, etc.)";
          input.id = "d" + i + "n";
          input.className = "scheduleNameInput"
          container.appendChild(input);
          container.appendChild(document.createElement("br"));
      }
      abbreviations();
  }


  function abbreviations(){

      var container = document.getElementById("scheduleAbbreviationContainer");

      while (container.hasChildNodes()) {
          container.removeChild(container.lastChild);
      }
      for (i=0;i<numberOfSchedules;i++){
          container.appendChild(document.createTextNode("Schedule " + (i+1) + " Abbreviation"));
          var input = document.createElement("input");
          input.type = "text";
          input.placeholder = "(A, B, C, 1, 2, 3) "
          input.name = "member" + i;
          input.id = "d" + i + "a";
          input.className = "scheduleNameInput"
          container.appendChild(input);
          container.appendChild(document.createElement("br"));
      }
  }

var sameNumerOfPeriods = "yes";

function differentNumberSchedules() {
  var radios = document.getElementsByName('samePeriod');

for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  if (i == 0) {
    sameNumberOfPeriods = "yes";
  } else {
    sameNumberOfPeriods = "no";
  }
  break;
 }
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
      schedule[i] = prompt("What is the name of schedule day " + i + "? \n \n Ex. Normal, Homeroom, etc.");
    }

    for (var i = 1; i <= howManyDays; ++i) {
      scheduleAbb[i] = prompt("What an abbreviation for schedule " + schedule[i] + "?");
    }

    for (var i = 1; i <= howManyDays; ++i) {
      daysURL = daysURL + "d" + i + "=" + schedule[i] + "&" + "d" + i + "a" + "=" + scheduleAbb[i] + "&";
    }

    var sameperiods = prompt("Is there the same number of periods everyday? (yes or no)");
    if (sameperiods == "no") {

    } else if (sameperiods == "yes") {
      var numPeriod = prompt("How many periods are there in a day?");




      for (var e = 1; e <= numPeriod; ++e) {
        d1h[e] = prompt("What hour does period " + e + " end at on a " + schedule[1] + " day?");
      }
      for (var e = 1; e <= numPeriod; ++e) {
        d1m[e] = prompt("What minute does period " + e + " end at on a " + schedule[1] + " day?");
      }
      var daysDone = 1;
      if (daysDone < howManyDays) {
        for (var e = 1; e <= numPeriod; ++e) {
          d2h[e] = prompt("What hour does period " + e + " end at on a " + schedule[2] + " day?");
        }
        daysDone = 2;
      }
      if (daysDone < howManyDays) {
        for (var e = 1; e <= numPeriod; ++e) {
          d3h[e] = prompt("What hour does period " + e + " end at on a " + schedule[3] + " day?");
        }
        daysDone = 3;
      }
      if (daysDone < howManyDays) {
        for (var e = 1; e <= numPeriod; ++e) {
          d4h[e] = prompt("What hour does period " + e + " end at on a " + schedule[4] + " day?");
        }
        daysDone = 4;
      }
      if (daysDone < howManyDays) {
        for (var e = 1; e <= numPeriod; ++e) {
          d5h[e] = prompt("What hour does period " + e + " end at on a " + schedule[5] + " day?");
        }
        daysDone = 5;
      }
      if (daysDone < howManyDays) {
        for (var e = 1; e <= numPeriod; ++e) {
          d6h[e] = prompt("What hour does period " + e + " end at on a " + schedule[6] + " day?");
        }
        daysDone = 6;
      }


      alert(d1 + "++++" + d2 + "++++" + d3 + "++++" + d4 + "++++++" + d5 + "+++++" + d6);



    } else {
      alert("why are you typing anything other than yes or no like you were told?");
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
