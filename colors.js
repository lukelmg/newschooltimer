//needs to remember per timer

var preset;
var   textColor = "white",
  backgroundColor = "blue",
  sidebar = "black",
  sidebarText = "white",
  sidebarButtons = "white";

var myX;

var accentColor = "white";
var thisAccent;

function getAccent(accent) {
  thisAccent = accent;
}

function setToDefault () {
  preset = "default";
  textColor = "white";
  accentColor = thisAccent;
  backgroundColor = "#131417";
  sidebar = "#21252B";
  sidebarText = "white";
  sidebarButtons = "white";
  setColors();
  saveCustomize();
}


function logValue() {

myX = document.getElementById("presetSelector").selectedIndex;

switch (myX) {
case 0:
  preset = "default";
  textColor = "white";
  accentColor = thisAccent;
  backgroundColor = "#131417";
  sidebar = "#21252B";
  sidebarText = "white";
  sidebarButtons = "white";
  break;
case 1:
  preset = "light";
  textColor = "black";
  accentColor = thisAccent;
  backgroundColor = "white";
  sidebar = "black";
  sidebarText = "white";
  sidebarButtons = "white";
  break;
case 2:
  preset = "stealth";
  textColor = "#242424";
  accentColor = "#242424";
  backgroundColor = "black";
  sidebar = "black";
  sidebarText = "#242424";
  sidebarButtons = "black";
  break;
case 3:
  preset = "hacker";
  textColor = "#00FF00";
  accentColor = "#00FF00";
  backgroundColor = "black";
  sidebar = "black";
  sidebarText = "#00FF00";
  sidebarButtons = "#00FF00";
  break;
case 4:
  preset = "retro";
  textColor = "#E4D8B4";
  accentColor = "#AB9C7D";
  backgroundColor = "#272324";
  sidebar = "#E4D8B4";
  sidebarText = "#272324";
  sidebarButtons = "#f2e5bd";
  break;
case 5:
  preset = "terrible";
  textColor = "green";
  accentColor = "red";
  backgroundColor = "yellow";
  sidebar = "blue";
  sidebarText = "red";
  sidebarButtons = "#F0F0F0";
}
setColors();
saveCustomize();
}

function setColors () {
  var nameDisplay = document.getElementsByClassName("nameDisplay");
  var timeDisplay = document.getElementsByClassName("timeDisplay");
  document.getElementById("bigDiv").style.backgroundColor = backgroundColor;
  for (var i = 0; i < nameDisplay.length; i++) {
    nameDisplay[i].style.color = textColor;
    timeDisplay[i].style.color = textColor;
  }

  document.getElementById("sidebar").style.backgroundColor = sidebar;

  var inner = document.getElementsByClassName("inner");
  for (var i = 0; i < inner.length; i++) {
      inner[i].style.backgroundColor=sidebar;
  }

  var outer = document.getElementsByClassName("radioButton");
  for (var i = 0; i < outer.length; i++) {
      outer[i].style.backgroundColor=sidebarText;
  }

  var fa = document.getElementsByClassName("fa");
  for (var i = 0; i < fa.length; i++) {
      fa[i].style.color=sidebarText;
  }

  document.getElementById("sidebar").style.color = sidebarText;

  document.getElementById("realTimer" + mine).style.color = accentColor;
  document.getElementById("nameTimer" + mine).style.color = accentColor;

  var buttons = document.getElementsByClassName("sidebarButtons");
  for (var p = 0; p < buttons.length; p++) {
    buttons[p].style.backgroundColor = sidebarButtons;
  }

  document.getElementById("timerCode").style.color = sidebarText;
  document.getElementById("timerCode").style.borderColor = sidebarText;
}

function getAccentColorFunction() {
  return accentColor;
}




function saveCustomize () {

  var path = window.location.pathname;

  localStorage.setItem(path + "preset", preset);
  localStorage.setItem(path + "myX", myX);
  localStorage.setItem(path + "textColor", textColor);
  localStorage.setItem(path + "accentColor", accentColor);
  localStorage.setItem(path + "backgroundColor", backgroundColor);
  localStorage.setItem(path + "sidebar", sidebar);
  localStorage.setItem(path + "sidebarText", sidebarText);
  localStorage.setItem(path + "sidebarButtons", sidebarButtons);
}

function readCustomize () {

  var path = window.location.pathname;

  preset = localStorage.getItem(path + "preset");
  myX = localStorage.getItem(path + "myX");
  textColor = localStorage.getItem(path + "textColor");
  accentColor = localStorage.getItem(path + "accentColor");
  backgroundColor = localStorage.getItem(path + "backgroundColor");
  sidebar = localStorage.getItem(path + "sidebar");
  sidebarText = localStorage.getItem(path + "sidebarText");
  sidebarButtons = localStorage.getItem(path + "sidebarButtons")


  document.getElementById("presetSelector").selectedIndex = myX;

  setColors();
}



var accentElement;
var mine;

function configureAccent (accentElement) {
  mine = accentElement;
}




var myElement;
var currentElementSelected;
var currentColor;

function customColors () {

myElement = document.getElementById("custom").selectedIndex;

switch (myElement) {
case 0:
  currentElementSelected = "Accent";
  accentColor = currentColor;
  break;
case 1:
  currentElementSelected = "Background";
  backgroundColor = currentColor;
  break;
case 2:
  currentElementSelected = "Main Text";
  textColor = currentColor;
  var nameDisplay = document.getElementsByClassName("nameDisplay");
  var timeDisplay = document.getElementsByClassName("timeDisplay");
  for (var i = 0; i < nameDisplay.length; i++) {
    nameDisplay[i].style.color = textColor;
    timeDisplay[i].style.color = textColor;
  }
  break;
case 3:
  currentElementSelected = "Other Text";
  otherText = currentColor;
  break;
case 4:
  currentElementSelected = "Sidebar";
  sidebar = currentColor;
  break;
case 5:
  currentElementSelected = "Sidebar Text";
  sidebarText = currentColor;
  break;
case 6:
  currentElementSelected = "Sidebar Buttons";
  sidebarButtons = currentColor;
  }
  saveCustomize();
}



function readCustomColor () {
  currentColor = document.getElementById("colorSelector").value;
  customColors();
  setColors();
}
