var schedule = [];
var scheduleAbb = [];
var daysURL = "";

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
  alert(daysURL);
  
   window.location.href = "https://schooltimernew.glitch.me/?" + daysURL;
  
}

function read() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("d2");
  alert(c);
}








/*


var markers = [];
for (var i = 0; i < coords.length; ++i) {
    markers[i] = "some stuff";
}


*/