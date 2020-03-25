
  function openCustomize() {
    document.getElementById("customizeModal").style.display = "block";
  }

function closeCustomize() {
  document.getElementById("customizeModal").style.display = "none";
}


var myUrl = window.location.href;

if (myUrl !== "https://www.lukegutman.com/") {
  //  document.getElementsByTagName("BODY")[0].style.display = "none";
  var timerBody = document.getElementById("timerBody");
  document.getElementsByTagName('BODY')[0].innerHTML = timerBody.innerHTML;
  document.body.style.backgroundColor = "#131417";
  document.body.style.overflow = "hidden";
  startTimer();
}


var numberOfSchedules;
var scheduleNames;
var scheduleAbbreviations;
var periodsPerSchedule;
var periodTimes;

var periodScheduleArray = [];
var nameArray = [];
var timeArray = [];

var scheduleSplit = [];


var schoolName = "";
var schoolColor = "";

var scheduleAbbreviationsArray = [];

var newDatabaseURL;

var remixColor;

function startTimer() {

  var redirect;

  var currenturl = window.location.href;


  var code = currenturl.replace("https://www.lukegutman.com/", "");
  showCustomer(code);
  setTimeout(function() {
    newDatabaseURL = document.getElementById("longp").textContent;
    if (newDatabaseURL == "") {
      document.getElementById("looking").style.display = "none";
      document.getElementById("cantFind").style.display = "block";
      document.getElementById("backupCode").style.display = "block";
      document.getElementById("waiting").style.display = "block";
      document.getElementById("sidebar").style.display = "none";

    } else {
      document.getElementById("looking").style.display = "none";
      document.getElementById("cantFind").style.display = "none";
      document.getElementById("backupCode").style.display = "none";
      document.getElementById("waiting").style.display = "none";
      document.getElementById("customizeButton").style.display = "block";
      document.getElementById("sidebar").style.display = "block";

      read();
      readCustomize();
      readFont();
    }
  }, 750);
}

var realScheduleNames = [];
var realScheduleNamesArray = [];

function read() {

  //// for testing only ///////
  //  newDatabaseURL = "?nums=4&schedNames=Normal,Homeroom,EarlyDismissal,2HourDelay&names=Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209,Period%201,Period%202,Period%203,Period%204,Period%205,Period%206,Period%207,Period%208,Period%209&abbs=A,B,C,D&pers=9,9,9,9&school=ParklandHighSchool&color=#ff2d2d&newvariable=08:29,09:17,10:05,10:53,11:41,00:29,01:17,02:05,02:53,08:37,09:24,10:11,10:58,11:45,00:32,01:19,02:06,02:53,08:22,09:04,09:46,10:20,10:54,11:28,00:02,00:31,01:00,10:09,10:39,11:09,11:43,00:17,00:51,01:25,02:09,02:53"

  var url_string = "https://www.test.com/" + newDatabaseURL;
  var url = new URL(url_string);

  numberOfSchedules = url.searchParams.get("nums");
  scheduleNames = url.searchParams.get("names");
  realScheduleNames = url.searchParams.get("schedNames");
  scheduleAbbreviations = url.searchParams.get("abbs");
  periodsPerSchedule = url.searchParams.get("pers");
  schoolName = url.searchParams.get("school");
  selectedColor = url.searchParams.get("color");

  var colorTest = url_string.split('&color=')[1];
  selectedColor = colorTest.substring(0, 7);

  periodTimes = url_string.split('newvariable=')[1];

  //    document.getElementById("schoolTitle").innerHTML = schoolName + " Timer";
  /*
      document.getElementById("output").innerHTML = "# of Schedules:" + numberOfSchedules + "<br> Schedule Names: " + scheduleNames + "<br> Schedule Times: " + periodTimes +
        "<br> Schedule Abbrevaitions: " + scheduleAbbreviations + "<br> Periods per schedule: " + periodsPerSchedule;
  */
  remixColor = selectedColor;

  scheduleAbbreviationsArray = scheduleAbbreviations.split(",");

  periodScheduleArray = periodsPerSchedule.split(",");

  nameArray = scheduleNames.split(",");

  timeArray = periodTimes.split(",");

  if (realScheduleNames != null) {
    realScheduleNamesArray = realScheduleNames.split(",");
  }

  var container = document.getElementById("selectorDiv");

  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  for (var i = 0; i < (numberOfSchedules); i++) {
    var rad = document.createElement("input");
    if (i == 0) {
      rad.checked = true;
    }
    rad.type = "radio";
    rad.className = "actualRadioButton";
    rad.name = "schedulesRadioName";
    rad.id = i + "scheduleCheckRadio";
    rad.oninput = function() {
      radioButtonDetection(this.id);
    };
    var para = document.createElement("div");
    var node = document.createTextNode(scheduleAbbreviationsArray[i]);
    para.color = "white";
    node.color = "white";
    para.className = "tooltip";
    node.className = "tooltip";
    var check = document.createElement("span");
    var tool = document.createTextNode(realScheduleNamesArray[i])
    check.appendChild(tool);
    check.className = "tooltiptext";
    para.appendChild(node);
    para.appendChild(rad);
    para.appendChild(check);
    container.appendChild(para);
    var breakit = document.createElement("br");
    container.appendChild(breakit);
  }
  // end of make radios buttons

  var k = 0;
  var p, j, timeSplitArray, nameSplitArray, chunk;
  for (p = 0, j = nameArray.length; p < j; p += chunk) {

    var prtest = parseInt(periodScheduleArray[k]);
    p, j, timeSplitArray, nameSplitArray, chunk = prtest;
    timeSplitArray = timeArray.slice(p, p + chunk);
    nameSplitArray = nameArray.slice(p, p + chunk);

    scheduleSplit[k] = timeSplitArray + "#" + nameSplitArray + "|||";

    k++;
  }





  getSchedulesReadyForTimer();
}


function newChunk(array, size) {
  const chunked_arr = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunked_arr[chunked_arr.length - 1];
    if (!last || last.length === size) {
      chunked_arr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunked_arr;
}


var which;

var currentScheduleSelected = 0;

function radioButtonDetection(which) {
  var ele = document.getElementsByName('schedulesRadioName');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      currentScheduleSelected = which.charAt(0);
  }
  getSchedulesReadyForTimer();
}

var newTest = [];

function getSchedulesReadyForTimer() {
  for (var i = 0; i < numberOfSchedules; i++) {
    newTest[i] = scheduleSplit[i].split("|||");
  }
  addTimersPerSchedule();
}

var newNameArrayTest = [];

var timerContainer = document.getElementById("timerContainer");

var testNewTestNameNew = [];

function addTimersPerSchedule() {
  while (timerContainer.hasChildNodes()) {
    timerContainer.removeChild(timerContainer.lastChild);
  }
  for (var i = 0; i < periodScheduleArray[currentScheduleSelected]; i++) {
    testNewTestNameNew = [];
    var split1 = newTest[currentScheduleSelected];
    var split2 = String(split1);
    split2 = split2.split('#')[1]
    testNewTestNameNew = split2.split(',');

    var lastPeriod = testNewTestNameNew.slice(-2)[0];

    var track = document.createElement("tr")

    var para = document.createElement("td");
    para.id = "nameTimer" + i;
    para.className = "nameDisplay"
    var node = document.createTextNode(testNewTestNameNew[i] + " Ends In ");

    var timer = document.createElement("td");
    var blah = document.createTextNode("<br>");
    timer.id = "realTimer" + i;
    timer.className = "timeDisplay";
    blah.class = "timeDisplay";
    node.className = "nameOfPeriod";

    var sizeOfFont = periodScheduleArray[currentScheduleSelected] / 2;


    var eToThe = Math.exp(-0.113 * periodScheduleArray[currentScheduleSelected]);

    sizeOfFont = 15.5 * eToThe;

    //  alert(sizeOfFont);


    if (periodScheduleArray[currentScheduleSelected] == 4) {
      sizeOfFont = 10;
    }



    /*
        Equation ->     15.5e^-0.113x

        Equation 2
        19.2 - 1.1x + 0.0121x^2

    */

    sizeOfFont = (9.1) + (0.0746 * periodScheduleArray[currentScheduleSelected]) + (-0.018 * (periodScheduleArray[currentScheduleSelected] * periodScheduleArray[currentScheduleSelected]));
    var lineHeightNew = (24.7) + (-1.99 * periodScheduleArray[currentScheduleSelected]) + (0.0514 * (periodScheduleArray[currentScheduleSelected] * periodScheduleArray[currentScheduleSelected]));

    para.style.lineHeight = lineHeightNew + "vh";
    timer.style.lineHeight = lineHeightNew + "vh";

    para.style.fontSize = sizeOfFont + "vh";
    timer.style.fontSize = sizeOfFont + "vh";

    para.appendChild(node);
    timer.appendChild(blah);

    track.appendChild(para);
    track.appendChild(timer);

    timerContainer.appendChild(track);

    if (lastPeriod == testNewTestNameNew[i]) {
      var newColor = String(selectedColor);

      document.getElementById("realTimer" + i).style.color = newColor;
      document.getElementById("nameTimer" + i).style.color = newColor;

      configureAccent(i);


    } else {
      document.getElementById("realTimer" + i).style.color = "white";
    }
  }
  setUpTimesForTimers();
}

var timeForMathArray = [];
var newTimeForMathArray = [];
var hourArray = [];
var minuteArray = [];
var orderArray = [];

function setUpTimesForTimers() {
  hourArray = [];
  minuteArray = [];
  timeForMathArray = [];
  newTimeForMathArray = [];
  split1 = newTest[currentScheduleSelected];
  split2 = String(split1);
  split2 = split2.split('#')[0]

  timeForMathArray = split2.split(":");
  timeForMathArray = String(timeForMathArray);
  newTimeForMathArray = timeForMathArray.split(",");

  var k = 0;
  for (var i = 0; i < periodScheduleArray[currentScheduleSelected]; i++) {
    hourArray[i] = newTimeForMathArray[k];
    minuteArray[i] = newTimeForMathArray[(k + 1)];
    k = k + 2;
  }

  for (var i = 0; i < periodScheduleArray[currentScheduleSelected]; i++) {
    if (hourArray[i] == "00") {
      hourArray[i] = "12";
    } else if (hourArray[i] == "01") {
      hourArray[i] = "13";
    } else if (hourArray[i] == "02") {
      hourArray[i] = "14";
    } else if (hourArray[i] == "03") {
      hourArray[i] = "15";
    } else if (hourArray[i] == "04") {
      hourArray[i] = "16";
    } else if (hourArray[i] == "05") {
      hourArray[i] = "17";
    } else if (hourArray[i] == "06") {
      hourArray[i] = "18";
    }
    orderArray[i] = hourArray[i] + minuteArray[i];
    k = k + 2;
  }
  // issue happens before this ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




}

var stateOfPeriod = [];


(function() {
  var start = new Date;



  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tick() {
    var now = new Date;

    for (var i = 0; i < periodScheduleArray[currentScheduleSelected]; i++) {

      start.setHours(hourArray[i], minuteArray[i], 0); // 11pm
      if (now > start) { // too late, go to tomorrow
        start.setDate(start.getDate() + 1);
      }
      var remain = ((start - now) / 1000);
      var hh = pad((remain / 60 / 60) % 60);
      var mm = pad((remain / 60) % 60);
      var ss = pad(remain % 60);
      if (hh >= 24) {
        hh = hh - 24;
      }

      if (hh < 10) {
        hh = "0" + hh;
      }

      if (hh >= 10) {

        document.getElementById('realTimer' + i).innerHTML = "Over <br>";
        document.getElementById('realTimer' + i).innerHTML = hh + ":" + mm + ":" + ss + "<br>";
        stateOfPeriod[i] = "over";

      } else {
        if (hh != "" || mm != "") {
          stateOfPeriod[i] = "notover"


          var a = stateOfPeriod.indexOf("notover");



          if (hh < 10 && a == i) {

            document.title = hh + ":" + mm + ":" + ss;

          }

          document.getElementById('realTimer' + i).innerHTML = hh + ":" + mm + ":" + ss + "<br>";
        }
      }

    }
    setTimeout(tick, 0);
  }

  document.addEventListener('DOMContentLoaded', tick);
  readCustomize();
  readFont();
})();


function chunkArray(myArray, chunk_size) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    myChunk = myArray.slice(index, index + chunk_size);

    tempArray.push(myChunk);
  }

  return tempArray;
}


function showCustomer(str) {
  var xhttp;
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "read.php?q=" + str, true);
  xhttp.send();
}


alert("hello")

function getReadyForEdit() {
  document.getElementById("remixSchoolName").value = schoolName;
  document.getElementById("remixSchoolScheduleNumbers").value = numberOfSchedules;
  document.getElementById("schoolColorInput").value = remixColor;

  var remixScheduleContainer = document.getElementById("remixScheduleContainer");

  alert(numberOfSchedules);

  for (var i = 0; i < (numberOfSchedules); i++) {

    alert(i);



    var otherContainer = document.createElement("DIV");
    otherContainer.className = "remixElement"

    var thisinp = document.createElement("input");
    thisinp.className = "actualScheduleName";
    thisinp.oninput = function() {
      this.style.width = ((this.value.length + 0) * 7) + 'px';
      if (this.value.length == 0) {
        this.style.width = '20px';
      }
    };

    thisinp.value = realScheduleNamesArray[i];

    var h = document.createElement("H5");
    var t = document.createTextNode(" Schedule");
    h.className = "boringSchedule";
    h.appendChild(t);

    var thisspan = document.createElement("div");
    thisspan.className = "divtest";
    thisspan.appendChild(thisinp);
    thisspan.appendChild(h);

    var inp = document.createElement("input");
    inp.type = "number"
    inp.value = periodScheduleArray[i];
    inp.className = "remixNumberOfPeriodsInput";

    var text = document.createTextNode("Number Of Periods: ");
    var inplabel = document.createElement("H5");
    inplabel.className = "otherboring";
    inplabel.appendChild(text);


    otherContainer.appendChild(thisspan);
    otherContainer.appendChild(inplabel);
    otherContainer.appendChild(inp);



    remixScheduleContainer.appendChild(otherContainer);

    var myBreak = document.createElement("BR");
    otherContainer.appendChild(myBreak);

    for (var e = 0; e < periodScheduleArray[i]; e++) {
      var perinp = document.createElement("input");
      var timeinp = document.createElement("input");

      var mineminemine = [];
      var split1 = newTest[i];
      var split2 = String(split1);
      split2 = split2.split('#')[1]
      mineminemine = split2.split(',');

      perinp.value = mineminemine[e];
      perinp.id = i + " " + e + "name";

      otherContainer.appendChild(perinp);
      timeinp.type = "time";

      var mytimemytime = [];

      split1 = newTest[i];
      split2 = String(split1);
      split2 = split2.split('#')[0]


      mytimemytime = split2.split(",");


      timeinp.value = mytimemytime[e];
      timeinp.id = i + " " + e + "time";
      otherContainer.appendChild(timeinp);

      var myBreak = document.createElement("BR");
      otherContainer.appendChild(myBreak);
    }

    var currentLength;
    var x = document.getElementsByClassName("actualScheduleName");
    for (var t = 0; t < x.length; t++) {
      var valueOfX = x[t].value;
      var lengthOfX = valueOfX.length;
      x[t].style.width = lengthOfX * 7 + 'px';
    }
        
  }
}

function updateRemix() {

}
