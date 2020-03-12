var font;

function detectFontSelect() { // this isn't working
  alert("hello")
  var x = document.getElementById("fontSelector").selectedIndex;
  alert(x);
  switch (x) {
  case 0:
    font = "Arial";

    break;
  case 1:
    font = "Arial";

    break;
  case 2:
    font = "Raleway";

    break;
  case 3:
    font = "Times";

    break;
  case 4:
    font = "Wingdings";

  }
  changePresetTheme();
  }
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
    nameDisplay[i].style.fontWeight = "300";
    timeDisplay[i].style.fontWeight = "300";
  }
  }
}
