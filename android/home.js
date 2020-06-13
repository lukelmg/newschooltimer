var editState = false;

function edit() {
  const exitButtons = document.getElementsByClassName("exit");
  const favorites = document.getElementsByClassName("favorite");
  for (var i = 0; i < 4; i++) {
    if (editState == false) {
      if (i == 0) {
        exitButtons[i].style.display = "none";
      } else {
        exitButtons[i].style.display = "block";
      }
      favorites[i].className = "favorite shakeImage"
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

  function addFavoritesToScreen () {
    var favoritesArray = localStorage.getItem('favorites').split(',');
    for (var i = 0; i < favoritesArray.length; i++) {
      var code = favoritesArray[i].substr(0, favoritesArray[i].indexOf('#'));
      var color = favoritesArray[i].replace(code, "");

      var container = document.getElementById("favoriteTimersContainer");

      var timerButton = document.createElement("div");
      timerButton.className = "favorite";
      timerButton.id = code;
      timerButton.backgroundColor = color;

      var exitButton = document.createElement("exit");
      exitButton.class = "exit";
      timerButton.appendChild(exitButton);

      var label = document.createElement("h1");
      label.className = "favoriteCode";
      label.innerHTML = code;
      timerButton.appendChild(label);

      container.appendChild(timerButton);
    }
  }
