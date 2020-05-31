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
