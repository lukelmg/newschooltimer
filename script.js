var schedule = [];
var scheduleAbb = [];

function ask() {
  var howManyDays = prompt("How many different schedules are at your school?");
  
  for (var i = 1; i <= howManyDays; ++i) {
    schedule[i] = prompt("What is the name of schedule day " + i + "? \n \n Ex. Normal, Homeroom, etc.");
  }
  
   for (var i = 1; i <= howManyDays; ++i) {
    scheduleAbb[i] = prompt("What an abbreviation for schedule " + schedule[i] + "?");
  }

  window.location.href = "https://schooltimernew.glitch.me/?d=";
}

function read() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("howManyPeriods");
  alert(c);
}








/*


var markers = [];
for (var i = 0; i < coords.length; ++i) {
    markers[i] = "some stuff";
}


*/