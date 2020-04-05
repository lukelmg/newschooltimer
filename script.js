var isMobile = false;

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}






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
  document.getElementById("bigDiv").style.backgroundColor = "#131417";
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

var cantFind;

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
      document.getElementById("bigDiv").style.backgroundColor = "white";
      cantFind = true;

    } else {
      document.getElementById("looking").style.display = "none";
      document.getElementById("cantFind").style.display = "none";
      document.getElementById("backupCode").style.display = "none";
      document.getElementById("waiting").style.display = "none";
      document.getElementById("customizeButton").style.display = "block";
      document.getElementById("sidebar").style.display = "block";
      cantFind = false;

      read();
      readCustomize();
      readFont();
      setupSidebarCode();
    }
    if (cantFind == true) {
      setTimeout(doSomething, 350);
    }
    if (isMobile == true) {
      removeSidebar();
    }
  }, 750);
}

function setupSidebarCode () {
  var code = window.location.pathname;
  code = code.substr(1);
  document.getElementById("timerCode").innerHTML = code.toUpperCase();
  document.getElementById("myInput").value = "https://www.lukegutman.com/" + code.toUpperCase();
}

function removeSidebar() {
  document.getElementById("sidebar").style.display = "none";
}

function doSomething() {
  document.getElementById("bigDiv").style.backgroundColor = "white";
}

var realScheduleNames = [];
var realScheduleNamesArray = [];


var schoolCountry;
var schoolState;
var schoolCity;

function read() {

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


  schoolCountry = url.searchParams.get("schoolCountry");
  schoolState = url.searchParams.get("schoolState");
  schoolCity = url.searchParams.get("schoolCity");


  getAccent(selectedColor);

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
      var abbreviationLabel = document.createTextNode(scheduleAbbreviationsArray[i]);
      var abbreviationLabelElement = document.createElement("span");

      abbreviationLabelElement.appendChild(abbreviationLabel);
      abbreviationLabelElement.className = "actualAbbreviationLetter";

  //    var tooltipLabel = document.createTextNode(realScheduleNamesArray[i]);
  //    var tooltipLabelElement = document.createElement("span")

  //    tooltipLabelElement.appendChild(tooltipLabel);

    //  tooltipLabelElement.className = "myTooltip";
  //    tooltipLabelElement.id = i + "outer" + "tooltip"

      var outer = document.createElement('div');
      outer.className = "radioButton";
      outer.id = i + "outer";
      outer.onclick = function () {
        myChangeSelected(this.id);
      }
    outer.onmouseover = function () {

        for (var p = 0; p < numberOfSchedules; p++) {
          document.getElementById(p + "outer" + "tooltip").style.display = "none";
        }
        document.getElementById(this.id + "tooltip").style.display = "inline-block";
      }

      outer.onmouseout = function () {
        for (var q= 0; q < numberOfSchedules; q++) {
          document.getElementById(q + "outer" + "tooltip").style.display = "none";
        }
      }


      var inner = document.createElement('div');
      inner.className = "inner";
      inner.id = i + "inner";

    //  container.appendChild(tooltipLabelElement);

      outer.appendChild(inner);
      container.appendChild(abbreviationLabelElement);
      container.appendChild(outer);




      var myBreak = document.createElement("BR");
      container.appendChild(myBreak);





  //  var node = document.createTextNode(scheduleAbbreviationsArray[i]);
  //  var tool = document.createTextNode(realScheduleNamesArray[i])
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


var changer = [];


function myChangeSelected(id) {
    for (var i = 0; i < numberOfSchedules; i++) {
      changer[i] = document.getElementById(i + "inner");
      changer[i].style.display = "none";
    }
    document.getElementById(id.charAt(0) + "inner").style.display = "block";
    localStorage.setItem('setSchedule', id);
    currentScheduleSelected = (id.charAt(0));
    getSchedulesReadyForTimer();
  }



/*
function radioButtonDetection(which) {
  var ele = document.getElementsByName('schedulesRadioName');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      currentScheduleSelected = which.charAt(0);
  }
  getSchedulesReadyForTimer();
}

*/

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
    var blah = document.createElement("BR");
    timer.id = "realTimer" + i;
    timer.className = "timeDisplay";
    blah.class = "timeDisplay";
    node.className = "nameOfPeriod";

    var sizeOfFont = periodScheduleArray[currentScheduleSelected] / 2;


  var eToThe = Math.exp(-0.113 * periodScheduleArray[currentScheduleSelected]);

  sizeOfFont = 15.5 * eToThe;

  if (periodScheduleArray[currentScheduleSelected] == 4) {
    sizeOfFont = 10;
  }

  sizeOfFont = (9.1) + (0.0746 * periodScheduleArray[currentScheduleSelected]) + (-0.018 * (periodScheduleArray[currentScheduleSelected] * periodScheduleArray[currentScheduleSelected]));
  var lineHeightNew = (24.5) + (-1.99 * periodScheduleArray[currentScheduleSelected]) + (0.0514 * (periodScheduleArray[currentScheduleSelected] * periodScheduleArray[currentScheduleSelected]));

  para.style.lineHeight = lineHeightNew + "vh";
  timer.style.lineHeight = lineHeightNew + "vh";

  para.style.fontSize = sizeOfFont + "vh";
  timer.style.fontSize = sizeOfFont + "vh";

    para.appendChild(node);
    timer.appendChild(blah);

    track.appendChild(para);
    //isMobile = true;
    if (isMobile == true) {
      var myBreak = document.createElement("BR");
      track.appendChild(myBreak);
    }
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

var alertLineHeight;

function getLineHeight () {
  alert(alertLineHeight)
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

  var s = split2;
  var n = s.indexOf('&');
  s = s.substring(0, n != -1 ? n : s.length);

  split2 = s;


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
        stateOfPeriod[i] = "over";
        document.getElementById("nameTimer" + i).innerHTML = testNewTestNameNew[i] + " is Over";
        document.getElementById('realTimer' + i).innerHTML = "";
        //document.getElementById('realTimer' + i).innerHTML = hh + ":" + mm + ":" + ss + "<br>";

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

   var path = window.location.pathname;

    if (localStorage.getItem(path + "hasCodeRunBefore") === null) {
          setTimeout(newDeafult, 1000);
          setSchedule = 0 + "outer";
        localStorage.setItem(path + "hasCodeRunBefore", true);
    } else {
     readCustomize();
     readFont();
     setSchedule = localStorage.getItem('setSchedule');
    }
        changeSelected(setSchedule);

})();

var setSchedule;


function newDeafult() {
  setToDefault();
}


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









// remixing below








var weirdArray = [];

function getReadyForEdit() {
  document.getElementById("remixSchoolName").value = schoolName;
  document.getElementById("remixSchoolScheduleNumbers").value = numberOfSchedules;
  document.getElementById("schoolColorInput").value = remixColor;

  var remixScheduleContainer = document.getElementById("remixScheduleContainer");

  for (var i = 0; i < (numberOfSchedules); i++) {

    var otherContainer = document.createElement("DIV");
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

    if (realScheduleNamesArray[i] == undefined || realScheduleNamesArray[i] == "") {
      thisinp.value = "";
      abb.value = "";
    } else {
      thisinp.value = realScheduleNamesArray[i];
      abb.value = scheduleAbbreviationsArray[i];
    }
    //scheduleAbbreviationsArray

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
    inp.value = periodScheduleArray[i];
    inp.className = "remixNumberOfPeriodsInput";
    inp.id = i + "numberOfPeriodsPerThisSchedule";
    inp.oninput = function () {
      updateRemixPeriods(this.id);
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


    otherContainer.appendChild(thisspan);
    otherContainer.appendChild(inplabel);
    otherContainer.appendChild(inp);



    remixScheduleContainer.appendChild(otherContainer);

    var myBreak = document.createElement("BR");
    otherContainer.appendChild(myBreak);

    periodTimeContainer = document.createElement("div");
    periodTimeContainer.id = i + "periodTimeContainer";

    for (var e = 0; e < periodScheduleArray[i]; e++) {

      var perinp = document.createElement("input");
      var timeinp = document.createElement("input");

      var mineminemine = [];
      var split1 = newTest[i];
      var split2 = String(split1);
      split2 = split2.split('#')[1]
      mineminemine = split2.split(',');

      perinp.value = mineminemine[e];
      perinp.maxLength = 30;
      perinp.className = "remixPeriodNameInput";
      perinp.id = i + " " + e + "name";

      periodTimeContainer.appendChild(perinp);
      timeinp.type = "time";

      var mytimemytime = [];
      split1 = newTest[i];
      split2 = String(split1);
      split2 = split2.split('#')[0]

      var s = split2;
      var n = s.indexOf('&');
      s = s.substring(0, n != -1 ? n : s.length);

      mytimemytime = s.split(",");

      timeinp.value = mytimemytime[e];
      timeinp.id = i + " " + e + "theTimes";
      timeinp.name = i + " " + e + "theTimes";
      timeinp.className = "periodTimingRemix";
      periodTimeContainer.appendChild(timeinp);

      var myBreak = document.createElement("BR");
      periodTimeContainer.appendChild(myBreak);

      otherContainer.appendChild(periodTimeContainer);
    }
  }
}

    var periodTimeContainer;







function updateRemixSchedules() {
  myNewPeriodArray = periodScheduleArray;
  var remixScheduleContainer = document.getElementById("remixScheduleContainer");

  while (remixScheduleContainer.hasChildNodes()) {
    remixScheduleContainer.removeChild(remixScheduleContainer.lastChild);
  }

  var currentNumberOfSchedules = document.getElementById("remixSchoolScheduleNumbers").value;


  for (var i = 0; i < (currentNumberOfSchedules); i++) {

    var otherContainer = document.createElement("DIV");
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
    thisinp.placeholder = "Schedule Name";
    thisinp.maxLength = 50;

    if (realScheduleNamesArray[i] == undefined || realScheduleNamesArray[i] == "") {
      thisinp.value = "";
      abb.value = "";
    } else {
      thisinp.value = realScheduleNamesArray[i];
      abb.value = scheduleAbbreviationsArray[i];
    }

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
    inp.value = myNewPeriodArray[i];
    inp.className = "remixNumberOfPeriodsInput";
    inp.id = i + "numberOfPeriodsPerThisSchedule";
    inp.oninput = function () {
      updateRemixPeriods(this.id);
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

    otherContainer.appendChild(thisspan);
    otherContainer.appendChild(inplabel);
    otherContainer.appendChild(inp);

    remixScheduleContainer.appendChild(otherContainer);

    var myBreak = document.createElement("BR");
    otherContainer.appendChild(myBreak);

    periodTimeContainer = document.createElement("div");
    periodTimeContainer.id = i + "periodTimeContainer";
    for (var e = 0; e < myNewPeriodArray[i]; e++) {

      var perinp = document.createElement("input");
      var timeinp = document.createElement("input");

      var mineminemine = [];
      var split1 = newTest[i];
      var split2 = String(split1);
      split2 = split2.split('#')[1]
      mineminemine = split2.split(',');

      perinp.value = mineminemine[e];
      perinp.maxLength = 30;
      perinp.className = "remixPeriodNameInput"
      perinp.id = i + " " + e + "name";

      periodTimeContainer.appendChild(perinp);
      timeinp.type = "time";

      var mytimemytime = [];
      split1 = newTest[i];
      split2 = String(split1);
      split2 = split2.split('#')[0]

      var s = split2;
      var n = s.indexOf('&');
      s = s.substring(0, n != -1 ? n : s.length);

      mytimemytime = s.split(",");

      timeinp.value = mytimemytime[e];
      timeinp.id = i + " " + e + "theTimes";
      timeinp.name = i + " " + e + "theTimes";
      timeinp.className = "periodTimingRemix";
      periodTimeContainer.appendChild(timeinp);

      var myBreak = document.createElement("BR");
      periodTimeContainer.appendChild(myBreak);
    }

    otherContainer.appendChild(periodTimeContainer);
  }

}

var myNewPeriodArray = [];

function readPeriods () {
  var newPeriodScheduleArray = [];
  var myCurrentBlah = document.getElementById("remixSchoolScheduleNumbers").value;
  for (var i = 0; i < myCurrentBlah; i++) {
    newPeriodScheduleArray[i] = document.getElementById(i + "numberOfPeriodsPerThisSchedule").value;
  }
  myNewPeriodArray = newPeriodScheduleArray;
}

var myCurrentScheduleSelected;


function updateRemixPeriods(idOfThis) {
  var currentNumberOfSchedules = document.getElementById("remixSchoolScheduleNumbers").value;
  var currentNumberOfPeriods = document.getElementById(idOfThis).value; // number of periods for the current schedule
  var one = String(idOfThis).charAt(0);
  myCurrentScheduleSelected =  Number(one); // the number the schedule is on

  nameAndTimeContainer = document.getElementById(myCurrentScheduleSelected + "periodTimeContainer");

  while (nameAndTimeContainer.hasChildNodes()) {
    nameAndTimeContainer.removeChild(nameAndTimeContainer.lastChild);
  }

  var newContainer = document.createElement("div");

  for (var i = 0; i < currentNumberOfPeriods; i++) {
    var perinp = document.createElement("input");

//alert("current: " + currentNumberOfSchedules + "      ------- number: " + numberOfSchedules);

if (myCurrentScheduleSelected < (numberOfSchedules)) {

    var mineminemine = [];
    var split1 = newTest[myCurrentScheduleSelected];
    var split2 = String(split1);
    split2 = split2.split('#')[1]
    mineminemine = split2.split(',');

    perinp.value = mineminemine[i];

    if (mineminemine[i] == "" || mineminemine[i] == undefined) {
      perinp.value = "Period Name"
    }

  } else {
    perinp.value = "Period " + (i+1);
  }
    perinp.id = myCurrentScheduleSelected + " " + i + "name";

    newContainer.appendChild(perinp);

    var timeinp = document.createElement("input");
    timeinp.type = "time";

    if (myCurrentScheduleSelected < (numberOfSchedules)) {

      var mytimemytime = [];
      split1 = newTest[myCurrentScheduleSelected];
      split2 = String(split1);
      split2 = split2.split('#')[0]
      mytimemytime = split2.split(",");

      timeinp.value = mytimemytime[i];

      } else {
        timeinp.value = "5:00 PM";
      }

      timeinp.className = "periodTimingRemix";

    timeinp.id = myCurrentScheduleSelected + " " + i + "time";

    newContainer.appendChild(timeinp);

    var myBreak = document.createElement("BR");
    newContainer.appendChild(myBreak);
  }
  newContainer.id = i + "newContainer";
  nameAndTimeContainer.appendChild(newContainer);
  readPeriods();
}
