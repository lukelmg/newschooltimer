function numSchedule () {
  var numberSchedule = document.getElementById("numSchedule").value;
  alert(numberSchedule);
  var para = document.createElement("P");
  var mine = document.createElement("input");
  //input.setAttribute("id", "Div1");
  //para.innerHTML = "This is a paragraph.";
  //document.getElementById("scheduleNames").appendChild(para);
  //document.getElementById("scheduleNames").appendChild(input);
  
  
  for (var i = 1; i <= numberSchedule; ++i) {
    
    document.getElementById("scheduleNames").appendChild(mine);

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
          d1h[e]= prompt("What hour does period " + e + " end at on a "+ schedule[1] + " day?");
        }
        for (var e = 1; e <= numPeriod; ++e) {
          d1m[e]= prompt("What minute does period " + e + " end at on a "+ schedule[1] + " day?");
        }
        var daysDone = 1;
        if (daysDone < howManyDays) {
          for (var e = 1; e <= numPeriod; ++e) {
          d2h[e]= prompt("What hour does period " + e + " end at on a "+ schedule[2] + " day?");
        }
          daysDone = 2;
        }
    if (daysDone < howManyDays) {
          for (var e = 1; e <= numPeriod; ++e) {
          d3h[e]= prompt("What hour does period " + e + " end at on a "+ schedule[3] + " day?");
        }
          daysDone = 3;
        }
        if (daysDone < howManyDays) {
          for (var e = 1; e <= numPeriod; ++e) {
          d4h[e]= prompt("What hour does period " + e + " end at on a "+ schedule[4] + " day?");
        }
          daysDone = 4;
        }
    if (daysDone < howManyDays) {
          for (var e = 1; e <= numPeriod; ++e) {
          d5h[e]= prompt("What hour does period " + e + " end at on a "+ schedule[5] + " day?");
        }
          daysDone = 5;
        }
    if (daysDone < howManyDays) {
          for (var e = 1; e <= numPeriod; ++e) {
          d6h[e]= prompt("What hour does period " + e + " end at on a "+ schedule[6] + " day?");
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