function backSlide1 () {
  var startDiv = document.getElementById("startDiv");
  startDiv.style.display = "block";
  var slide1 = document.getElementById("slide1");
  slide1.style.display = "none";
}

function backSlide2 () {
  var slide1 = document.getElementById("slide1");
  var slide2 = document.getElementById("slide2");
  slide1.style.display = "block";
  slide2.style.display = "none";
}

function backSlide3 () {
  var slide2 = document.getElementById("slide2");
  var slide3 = document.getElementById("slide3");
  slide2.style.display = "block";
  slide3.style.display = "none";
}
