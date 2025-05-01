/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
function rozbal(idDivu) {
  if (document.getElementById(idDivu).style.display === "block") {
    document.getElementById(idDivu).style.display = "none";
  } else {
    document.getElementById(idDivu).style.display = "block";
  }
}
