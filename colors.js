var preset;
var   textColor = "white",
  accentColor = "#FF2D2D",
  backgroundColor = "#131417",
  sidebar = "#21252B",
  sidebarText = "white",
  sidebarButtons = "#F0F0F0";

var myX;

function logValue() {

myX = document.getElementById("presetSelector").selectedIndex;

switch (myX) {
case 0:
  preset = "default";
  textColor = "white";
  accentColor = "#FF2D2D";
  backgroundColor = "#131417";
  sidebar = "#21252B";
  sidebarText = "white";
  sidebarButtons = "#24344b";
  break;
case 1:
  preset = "light";
  textColor = "black";
  accentColor = "#FF2D2D";
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
  sidebarButtons = "#F0F0F0";
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
  sidebarButtons = "#E4D8B4";
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
  document.body.style.backgroundColor = backgroundColor;
  for (var i = 0; i < nameDisplay.length; i++) {
    nameDisplay[i].style.color = textColor;
    timeDisplay[i].style.color = textColor;
  }

  document.getElementById("sidebar").style.backgroundColor = sidebar;
  document.getElementById("sidebar").style.color = sidebarText;

  document.getElementById("realTimer" + mine).style.color = accentColor;
  document.getElementById("nameTimer" + mine).style.color = accentColor;

  var buttons = document.getElementsByClassName("sidebarButtons");
  for (var p = 0; p < buttons.length; p++) {
    buttons[p].style.backgroundColor = sidebarButtons;
  }
}




function saveCustomize () {
  localStorage.setItem("preset", preset);
  localStorage.setItem("myX", myX);
  localStorage.setItem("textColor", textColor);
  localStorage.setItem("accentColor", accentColor);
  localStorage.setItem("backgroundColor", backgroundColor);
  localStorage.setItem("sidebar", sidebar);
  localStorage.setItem("sidebarText", sidebarText);
  localStorage.setItem("sidebarButtons", sidebarButtons);
}

function readCustomize () {
  preset = localStorage.getItem("preset");
  myX = localStorage.getItem("myX");
  textColor = localStorage.getItem("textColor");
  accentColor = localStorage.getItem("accentColor");
  backgroundColor = localStorage.getItem("backgroundColor");
  sidebar = localStorage.getItem("sidebar");
  sidebarText = localStorage.getItem("sidebarText");
  sidebarButtons = localStorage.getItem("sidebarButtons")

  document.getElementById("presetSelector").selectedIndex = myX;

  setColors();
}



var accentElement;
var mine;

function configureAccent (accentElement) {
  mine = accentElement;
}




switch (ss) {
  case expression:

    break;
  default:

}var myElement;
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
