var preset;
var textColor = "white",
    accentColor = "#FF2D2D",
    backgroundColor = "#131417",
    sidebar = "white",
    sidebarText = "black";

function logValue() {

var x = document.getElementById("presetSelector").selectedIndex;

switch (x) {
case 0:
  preset = "default";
  textColor = "white";
  accentColor = "#FF2D2D";
  backgroundColor = "#131417";
  sidebar = "white";
  sidebarText = "black";
  break;
case 1:
  preset = "light";
  textColor = "black";
  accentColor = "#FF2D2D";
  backgroundColor = "white";
  sidebar = "black";
  sidebarText = "white";
  break;
case 2:
  preset = "stealth";
  textColor = "#242424";
  accentColor = "#242424";
  backgroundColor = "black";
  sidebar = "black";
  sidebarText = "white";
  break;
case 3:
  preset = "hacker";
  textColor = "#00FF00";
  accentColor = "#00FF00";
  backgroundColor = "black";
  sidebar = "black";
  sidebarText = "#00FF00";
  break;
case 4:
  preset = "retro";
  textColor = "#E4D8B4";
  accentColor = "#AB9C7D";
  backgroundColor = "#272324";
  sidebar = "#E4D8B4";
  sidebarText = "#272324";
  break;
case 5:
  preset = "terrible";
  textColor = "white";
  accentColor = "#FF2D2D";
  backgroundColor = "#131417";
  sidebar = "black";
  sidebarText = "white";
}
changePresetTheme();
}

select.addEventListener('change', logValue, false);


function changePresetTheme () {
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
}



var accentElement;
var mine;

function configureAccent (accentElement) {
  mine = accentElement;
}
