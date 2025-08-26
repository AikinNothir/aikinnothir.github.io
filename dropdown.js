function rozbal(idDivu) {
  const tenDiv = document.getElementById(idDivu);
  let aktVisibility = getComputedStyle(tenDiv).visibility;

  if (aktVisibility === "hidden") {
    tenDiv.style.visibility = "visible";
    tenDiv.style.maxHeight = "2000px";
  } else {
    tenDiv.style.visibility = "hidden";
    tenDiv.style.maxHeight = "0px";
  };
}
