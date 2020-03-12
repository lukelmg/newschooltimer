var font;

var myX;

function detectFontSelect() { // this isn't working
  myX = document.getElementById("fontSelector").selectedIndex;
  switch (myX) {
  case 0:
    font = "Arial";

    break;
  case 1:
    font = "Play";

    break;
  case 2:
    font = "Raleway";

    break;
  case 3:
    font = "Times";

    break;
  case 4:
    font = "Wingdings";
      
    break;
  case 5:
    font = "Comic Sans MS";
  }
  changeFont();
  saveFont();
}


function saveFont() {
  localStorage.setItem("myX", myX);
  localStorage.setItem("font", font);
}

function readFont () {
  myX = localStorage.getItem("myX");
  font = localStorage.getItem("font");
  document.getElementById("fontSelector").selectedIndex = myX;
  changeFont();
}


function changeFont() {
  var nameDisplay = document.getElementsByClassName("nameDisplay");
  var timeDisplay = document.getElementsByClassName("timeDisplay");
  for (var i = 0; i < nameDisplay.length; i++) {
    nameDisplay[i].style.fontFamily = font;
    timeDisplay[i].style.fontFamily = font;
    if (font == "Raleway") {
    nameDisplay[i].style.fontWeight = "100";
    timeDisplay[i].style.fontWeight = "100";
  } else {
    nameDisplay[i].style.fontWeight = "Bold";
    timeDisplay[i].style.fontWeight = "Bold";
  }
  }
}
