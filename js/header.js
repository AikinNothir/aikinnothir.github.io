function napisHeader() {
    document.getElementById(
    "header"
    ).innerHTML = `<div class="podlogoFirstDiv">
        <span class="spanNahore" onclick="openNav();napisSidebar()">&#9776; </span>
    </div>
    <div class="logo w33">
                    <a href="/index.html" class="logo">
                        DRUŽINA
                    </a>
                </div>
                <div class="w33">
                <div id="player">
                </div>
            </div>`;
}
