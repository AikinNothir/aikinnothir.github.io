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
                <div class="player">
                    <iframe data-testid="embed-iframe" class="br12" src="https://open.spotify.com/embed/playlist/3XQugI7y1syceNQmEtfUyh?utm_source=generator" width="80%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                    </iframe>
                </div>
            </div>`;
}
