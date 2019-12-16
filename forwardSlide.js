function slide1() {
  var startDiv = document.getElementById("startDiv");
  startDiv.style.display = "none";
  var slide1 = document.getElementById("slide1");
  slide1.style.display = "block";
}

function slide2() {
  var slide1 = document.getElementById("slide1");
  var slide2 = document.getElementById("slide2");
  slide1.style.display = "none";
  slide2.style.display = "block";
}

var yesno;

function slide3() {
  if (yesno == "yes" || yesno == "no") {
    var slide2 = document.getElementById("slide2");
    var slide3 = document.getElementById("slide3");
    slide2.style.display = "none";
    slide3.style.display = "block";
  } else {
    alert("Please select yes or no to continue.");
  }
}

function yesslide() {
  yesno = "yes";
}

function noslide() {
  yesno = "no";
}


function slide4() {
  alert("slide4");
  var slide3 = document.getElementById("slide3");
  var slide4 = document.getElementById("slide4");
  slide3.style.display = "none";
  slide4.style.display = "block";
}
