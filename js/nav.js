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

const mistaMapButtons = {
    "/mista/lareze/fenwn.html": { y: 2671, x: 2504 },
    "/mista/lareze/hayax.html": { y: 2458, x: 3426 },
    "/mista/lareze/liedemar.html": { y: 1244, x: 3910 },
    "/mista/lareze/mytinna.html": { y: 2419, x: 3146 },
    "/mista/lareze/tenya.html": { y: 2865, x: 3306 },
    "/mista/lareze/vsehostrom.html": { y: 2534, x: 3534 },
    "/mista/sardot/auvergn.html": { y: 2787, x: 210 },
    "/mista/sardot/denthir.html": { y: 2328, x: 1627 },
    "/mista/sardot/deucreux.html": { y: 2829, x: 1494 },
    "/mista/sardot/dornfeld.html": { y: 3293, x: 792 },
    "/mista/sardot/poddubi.html": { y: 2030, x: 1202 },
    "/mista/sardot/sardot-city.html": { y: 2735, x: 1046 },
    "/mista/sardot/sontieu.html": { y: 2598, x: 452 },
    "/mista/sardot/stalwart.html": { y: 3293, x: 1176 },
    "/mista/sardot/tilon.html": { y: 2406, x: 1288 },
    "/mista/sardot/trpaslici-pevnost.html": { y: 3199, x: 1866 },
    "/mista/sardot/venemor.html": { y: 2338, x: 550 },
    "/mista/sardot/vrieugh.html": { y: 2468, x: 744 },
    "/mista/tarkir/bile_udoli.html": { y: 484, x: 2556 },
    "/mista/tarkir/draci_rohy.html": { y: 280, x: 2374 },
    "/mista/tarkir/draci_sedlo.html": { y: 78, x: 2868 },
    "/mista/tarkir/ocas_draka.html": { y: 236, x: 3360 },
    "/mista/varka/adanos.html": { y: 1790, x: 1786 },
    "/mista/varka/al_kat.html": { y: 1046, x: 2492 },
    "/mista/varka/doly.html": { y: 1024, x: 2879 },
    "/mista/varka/durnhelm.html": { y: 1336, x: 3096 },
    "/mista/varka/garagor.html": { y: 1796, x: 2616 },
    "/mista/varka/ghetto.html": { y: 1720, x: 2760 },
    "/mista/varka/gost.html": { y: 1976, x: 3914 },
    "/mista/varka/grabstejn.html": { y: 1608, x: 2234 },
    "/mista/varka/horska_pevnost.html": { y: 2287, x: 3702 },
    "/mista/varka/hranicna.html": { y: 2140, x: 2166 },
    "/mista/varka/chvozd.html": { y: 2074, x: 3148 },
    "/mista/varka/jecin.html": { y: 2120, x: 2822 },
    "/mista/varka/kriegberg.html": { y: 1218, x: 2172 },
    "/mista/varka/kriegstein.html": { y: 1356, x: 2474 },
    "/mista/varka/les_mrtvych_vesnic.html": { y: 1270, x: 2658 },
    "/mista/varka/limris.html": { y: 1540, x: 1442 },
    "/mista/varka/morgstadt.html": { y: 1554, x: 1658 },
    "/mista/varka/okraj.html": { y: 1288, x: 922 },
    "/mista/varka/pelzacz.html": { y: 1798, x: 3104 },
    "/mista/varka/pole_smutku.html": { y: 1312, x: 1912 },
    "/mista/varka/polna.html": { y: 1676, x: 3060 },
    "/mista/varka/pons.html": { y: 1232, x: 3520 },
    "/mista/varka/prechod.html": { y: 2016, x: 2458 },
    "/mista/varka/sucholes.html": { y: 1900, x: 2928 },
    "/mista/varka/trombus.html": { y: 1498, x: 2866 },
    "/mista/varka/vez.html": { y: 1892, x: 3302 },
    "/mista/varka/zatoka.html": { y: 1768, x: 3728 },
};

function pridatButtonMapyMista() {
    if (!window.location.pathname.startsWith("/mista/")) {
        return;
    }

    const coords = mistaMapButtons[window.location.pathname];
    if (!coords) {
        return;
    }

    const gallery = document.querySelector(".postrani_obr.gallery");
    if (!gallery || gallery.querySelector('button.intro_button_slower[onclick*="mapa1.html"]')) {
        return;
    }

    const button = document.createElement("button");
    button.className = "intro_button_slower";
    button.type = "button";
    button.textContent = "Zobrazit místo na mapě";
    button.onclick = () => {
        window.open(`/mapa1.html?y=${coords.y}&x=${coords.x}&zoom=0`);
    };

    const firstImage = gallery.querySelector("a[href], img");
    if (firstImage) {
        firstImage.insertAdjacentElement("afterend", button);
    } else {
        gallery.appendChild(button);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", pridatButtonMapyMista);
} else {
    pridatButtonMapyMista();
}

document.querySelectorAll("dl dt").forEach(dt => {
        dt.addEventListener("click", () => {
                const dd = dt.nextElementSibling;

                if (dd && dd.tagName === "DD") {
                        dd.classList.toggle("open");
                }

                dt.classList.toggle("activedt");
        });
});