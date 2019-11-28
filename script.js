var schedule = [];
var scheduleAbb = [];
var daysURL = "";

var samePURL = "";
var diffP = [];
var sameP = [];

var d1 = [];
var d2 = [];
var d3 = [];
var d4 = [];
var d5 = [];
var d6 = [];

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
          d1[e]= prompt("What hour does period " + e + " end at on a "+ schedule[1] + " day?");
      }
    
    alert(d1[1]);
    alert(d1[2]);
    alert(d1[3]);
    alert(d1[4]);
    alert(d1[5]);
    
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