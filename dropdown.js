function rozbal(idDivu) {
  const tenDiv = document.getElementById(idDivu);
  let displayDivu = getComputedStyle(tenDiv).display;

  if (document.getElementById(idDivu).style.display === "block") {
    document.getElementById(idDivu).style.display = "none";
  } else {
    document.getElementById(idDivu).style.display = "block";
  }
}
