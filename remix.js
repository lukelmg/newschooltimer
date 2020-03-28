var stateOfRemixModal = 0;
var permState = 0;

function openEditModal () {
  if (stateOfRemixModal == 0) {
    if (permState == 0) {
      getReadyForEdit();
      permState = 1;
    }
    stateOfRemixModal = 1;
    document.getElementById("editModal").style.display = "block";
  } else {
    closeEditModal();
  }
}

function closeEditModal () {
  stateOfRemixModal = 0;
  document.getElementById("editModal").style.display = "none";
}
