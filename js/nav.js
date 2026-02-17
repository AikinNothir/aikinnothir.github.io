function openNav() {
  if (window.matchMedia("(max-width: 980px)").matches) {
    document.getElementById("mysidenav").style.width = "100vw";
  } else {
    document.getElementById("mysidenav").style.width = "290px";
  }
}
function closeNav() {
  document.getElementById("mysidenav").style.width = "0";
}
