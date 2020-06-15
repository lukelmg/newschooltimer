var editState = false;

function edit() {
  const exitButtons = document.getElementsByClassName("exit");
  const favorites = document.getElementsByClassName("favorite");
  for (var i = 0; i < (numberOfFavorites + 1); i++) {
    if (editState == false && i > 0) {
      exitButtons[i].style.display = "block";
      favorites[i].className = "favorite shakeImage";
    } else {
      exitButtons[i].style.display = "none";
      favorites[i].className = "favorite"
    }
  }
  if (editState == false) {
    document.getElementById("editButton").innerHTML = "Save";
    document.getElementById("addFavorite").style.display = "inline-block";
    document.getElementById("addFavorite").className = "favorite";
    editState = true;
  } else {
    document.getElementById("editButton").innerHTML = "Edit";
    document.getElementById("addFavorite").style.display = "none";
    editState = false;
  }
}



$(".favorite").on('click', function(event){
    window.location.href = "https://www.lukegutman.com/android/index.html?code=" + this.id;
});



document.getElementById('customCode').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      var thisCode = document.getElementById('customCode').value;
      window.location.href = "https://www.lukegutman.com/android?code=" + thisCode;
      return false;
    }
  }

  function setToCaps() {
    var current = document.getElementById('customCode').value;
    var fixed = current.toUpperCase();
    document.getElementById("customCode").value = fixed;
  }

addFavoritesToScreen();

var favoritesArray = [];
var numberOfFavorites;

  function addFavoritesToScreen () {
    favoritesArray = localStorage.getItem('favorites').split(',');
    favoritesArray = favoritesArray.reverse();
    numberOfFavorites = favoritesArray.length;
    for (var i = 0; i < favoritesArray.length; i++) {
      var code = favoritesArray[i].substr(0, favoritesArray[i].indexOf('#'));
      var color = favoritesArray[i].replace(code, "");

      var container = document.getElementById("favoriteTimersContainer");

      var timerButton = document.createElement("div");
      timerButton.className = "favorite";
      timerButton.id = code;
      timerButton.style.backgroundColor = color;

      var exitButton = document.createElement("exit");
      exitButton.className = "exit";
      exitButton.innerHTML = "-"
      timerButton.appendChild(exitButton);

      var label = document.createElement("h1");
      label.className = "favoriteCode";
      if (code.length < 9) {
        label.innerHTML = code;
      } else {
        label.innerHTML = "toolong";
      }
      timerButton.appendChild(label);

      container.appendChild(timerButton);

      color = "";
      code = "";
    }
  }



  //Color text change

  var rgb = ['255', '0', '0'];

function blackandwhitetext () {
  
      var c = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';

      //http://www.w3.org/TR/AERT#color-contrast

      var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);

      //console.log(o);

      if(o > 125) {
          $('#bg').css('color', 'black');
      }else{
          $('#bg').css('color', 'white');
      }

      $('#bg').css('background-color', c);

      var r = Math.round(Math.random() * 255);
      var g = Math.round(Math.random() * 255);
      var b = Math.round(Math.random() * 255);

      rgb[0] = r;
      rgb[1] = g;
      rgb[2] = b;


  }
