function napisHeader() {
  document.getElementById(
    "header"
  ).innerHTML = `<div style="text-align:left;margin-left:12px;width:18%;align-content: center;justify-content: center;">
        <span style="font-size:30px;cursor:pointer;" onclick="openNav();napisSidebar()">&#9776; </span>
    </div>
    <div class="logo w33">
                    <a href="/index.html" class="logo">
                        DRUŽINA
                    </a>
                </div>
                <div class="w33">
                </div>`;
}
