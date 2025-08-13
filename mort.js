let MortName = document.getElementById("mort")

MortName.addEventListener("mouseover", () => {
  MortName.textContent = "Chloe"
})

MortName.addEventListener("mouseout", () => {
  MortName.textContent = "Mort"
})