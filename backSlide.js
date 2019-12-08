function backSlide1 () {
  var startDiv = document.getElementById("startDiv");
  startDiv.style.display = "block";
  startDiv.style.opacity = "1";
  var slide1 = document.getElementById("slide1");
  slide1.style.display = "none";
  slide1.style.opacity = "0";
}

function backSlide2 () {
  var slide1 = document.getElementById("slide1");
  var slide2 = document.getElementById("slide2");
  slide1.style.display = "block";
  slide1.style.opacity = "1";
  slide2.style.display = "none";
  slide2.style.opacity = "0";
}
