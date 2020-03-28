var stateOfRemixModal = 0;

function openEditModal () {
  if (stateOfRemixModal == 0) {
    getReadyForEdit();
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
