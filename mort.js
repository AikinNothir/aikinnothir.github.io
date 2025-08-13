console.log("před DOM")
document.addEventListener("DOMContentLoaded", function() {
    console.log("ready")
  let MortName = document.getElementById("mort");
    console.log(MortName) 

MortName.addEventListener("mouseover", () => {
  MortName.textContent = "Chloe";
})

MortName.addEventListener("mouseout", () => {
  MortName.textContent = "Mort";
})
});

