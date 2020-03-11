var preset;
var textColor = "white",
    accentColor = "#FF2D2D",
    backgroundColor = "#131417";

function logValue() {

var x = document.getElementById("presetSelector").selectedIndex;

switch (x) {
case 0:
  preset = "default";
  textColor = "white",
  accentColor = "#FF2D2D",
  backgroundColor = "#131417";
  break;
case 1:
  preset = "light";
  textColor = "black",
  accentColor = "#FF2D2D",
  backgroundColor = "white";
  break;
case 2:
  preset = "stealth";
  textColor = "#242424",
  accentColor = "#242424",
  backgroundColor = "black";
  break;
case 3:
  preset = "hacker";
  textColor = "#9BFF9B",
  accentColor = "#00FF00",
  backgroundColor = "black";
  break;
case 4:
  preset = "retro";
  textColor = "#C2B28F",
  accentColor = "#E4D8B4",
  backgroundColor = "#272324";
  break;
case 5:
  preset = "terrible";
  textColor = "white",
  accentColor = "#FF2D2D",
  backgroundColor = "#131417";
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

  document.getElementById("realTimer" + mine).style.color = accentColor;
  document.getElementById("nameTimer" + mine).style.color = accentColor;
}

var accentElement;
var mine;

function configureAccent (accentElement) {
  mine = accentElement;
}
