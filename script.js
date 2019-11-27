function ask() {
  var howManyDays = prompt("How many different schedules are at your school?");
  
  for (let step = 1; step <= howManyDays; step++) {
    
  }
  
  
  var howManyPeriods = prompt("How many periods are there in a normal schedule?");
  window.location.href = "https://schooltimernew.glitch.me/?howManyPeriods=" + howManyPeriods;
}

function read() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("howManyPeriods");
  alert(c);
}