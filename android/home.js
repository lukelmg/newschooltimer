var editState = false;

function edit() {
  const exitButtons = document.getElementsByClassName("exit");
  const favorites = document.getElementsByClassName("favorite");
  for (var i = 0; i < 3; i++) {
    if (editState == false) {
      exitButtons[i].style.display = "block";
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
