function slide1 () {
  var startDiv = document.getElementById("startDiv");
  startDiv.style.display = "none";
  var slide1 = document.getElementById("slide1");
  slide1.style.display = "block";
  slide1.style.opacity = "1";
}

function slide2 () {
  var slide1 = document.getElementById("slide1");
  var slide2 = document.getElementById("slide2");
  slide1.style.display = "none";
  slide1.style.opacity = "0";
  slide2.style.display = "block";
  slide2.style.opacity = "1";

  
}
