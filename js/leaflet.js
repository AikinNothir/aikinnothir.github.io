var map = L.map('mapa-leaflet', {
crs: L.CRS.Simple,
minZoom: -2
});

var imageWidth = 4096;   // ← ZMĚŇ podle své mapy
var imageHeight = 3378;  // ← ZMĚŇ podle své mapy

var bounds = [[0,0], [imageHeight, imageWidth]];

L.imageOverlay('/obrazky/velkovarka.jpg', bounds).addTo(map);
map.fitBounds(bounds);

L.marker([830, 1420]).addTo(map)
.bindPopup(`
<b>Město Varka</b><br>
Hlavní město království.<br><br>
<a href="varka.html">Více informací</a>
`);

// =============================
// DATA PODLE TYPU
// =============================

const Vesnice = [
  { name: "Dornfeld", y: 3293, x: 792, url: "/mista/sardot/dornfeld.html", popis: "Nezávislá vesnice na severu Sardotského království" },
  { name: "Mýtinná", y: 2419, x: 3146, url: "/mista/lareze/mytinna.html", popis: "První vesnice na hranicích Laréze" },
  { name: "Vrieugh", y: 2468, x: 744, url: "/mista/sardot/vrieugh.html", popis: "Vesnice která působí jako spojnice mezi velkými dodavateli Sardotského království" },
  { name: "Poddubí", y: 2030, x: 1202, url: "/mista/varka/poddubi.html", popis: "Vesnice na jihu Sardotského království" },
  { name: "Hraničná", y: 2140, x: 2166, url: "/mista/varka/hranicna.html", popis: "Vesnice na hranici Sardotu a Varky" },
  { name: "Pełzacz", y: 1798, x: 3104, url: "/mista/varka/pelzacz.html", popis: "Vesnice na východě Varky, hlavní producent tvrdého alkoholu Varky"},
  { name: "Polná", y: 1676, x: 3060, url: "/mista/varka/polna.html", popis: "Vesnice, která byla vypálena fanatikem Plamenů" },
  { name: "Hornická oblast", y: 1024, x: 2879, url: "/mista/varka/doly.html", popis: "Hornická oblast na jihu Varky" }
];

const Mesto = [
  { name: "Stalwart", y: 3293, x: 1176, url: "/mista/sardot/stalwart.html", popis: "Nejsevernější město" },
  { name: "Sardot", y: 2735, x: 1046, url: "/mista/sardot/sardot.html", popis: "Hlavní město Sardotského království oplývající bohatstvím" },
  { name: "Deucreux", y: 2829, x: 1494, url: "/mista/sardot/deucreux.html", popis: "Město na severovýchod od Sardotu - hlavní obilnice Sardotu" },
  { name: "Denthir", y: 2328, x: 1627, url: "/mista/sardot/denthir.html", popis: "Město na hranicích Sardotského království a Varky" },
  { name: "Fenwn", y: 2671, x: 2504, url: "/mista/lareze/fenwn.html", popis: "Bájné město Fenwn schované kdesi v hlubinách Laréze" },
  { name: "Hayax", y: 2458, x: 3426, url: "/mista/lareze/hayax.html", popis: 'Hlavní "město" Laréze obklopující Všehostrom' },
  { name: "Sontieu", y: 2598, x: 452, url: "/mista/sardot/sontieu.html", popis: "Vinice Sardotu - nejlepší vína na světě" },
  { name: "Venemor", y: 2338, x: 550, url: "/mista/sardot/venemor.html", popis: "Rolnické město na jihozápadě Sardotského království" },
  { name: "Přechod", y: 2016, x: 2458, url: "/mista/varka/prechod.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Ječín", y: 2120, x: 2822, url: "/mista/varka/jecin.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Garagor", y: 1796, x: 2616, url: "/mista/varka/garagor.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Ghetto", y: 1720, x: 2760, url: "/mista/varka/ghetto.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Limris", y: 1540, x: 1442, url: "/mista/varka/limris.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Morgstadt", y: 1554, x: 1658, url: "/mista/varka/morgstadt.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Okraj", y: 1288, x: 922, url: "/mista/varka/okraj.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Durnhelm", y: 1336, x: 3096, url: "/mista/varka/durnhelm.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Pons Varoli", y: 1232, x: 3520, url: "/mista/varka/pons.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Bílé údolí", y: 484, x: 2556, url: "/mista/tarkir/bile_udoli.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Dračí Rohy", y: 280, x: 2374, url: "/mista/tarkir/draci_rohy.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Ocas Draka", y: 236, x: 3360, url: "/mista/tarkir/ocas_draka.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Dračí Sedlo", y: 78, x: 2868, url: "/mista/tarkir/draci_sedlo.html", popis:"Město na východě Varky, známé svými obchodními centry" }
];

const Hrad = [
  { name: "Auvergn", y: 2787, x: 210, url: "/mista/sardot/auvergn.html", popis: "Vesnice na východě Varky, hlavní producent tvrdého alkoholu Varky" },
  { name: "Tilonská pevnost", y: 2406, x: 1288, url: "/mista/sardot/tilon.html", popis:"Pevnost na východě Varky, známá svými obchodními centry" },
  { name: "Trpasličí pevnost", y: 3199, x: 1866, url: "/mista/trpaslici-pevnost.html", popis:"Pevnost na východě Varky, známá svými obchodními centry" },
  { name: "Grabštejn", y: 1608, x: 2234, url: "/mista/varka/grabstejn.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Kriegstein", y: 1356, x: 2474, url: "/mista/varka/kriegstein.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Horská pevnost", y: 2287, x: 3702, url: "/mista/varka/horska_pevnost.html", popis:"Město na východě Varky, známé svými obchodními centry" }
];

const Klaster = [
  { name: "Tenya", y: 2865, x: 3306, url: "/mista/lareze/tenya.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Adanosův Chrám", y: 1790, x: 1786, url: "/mista/varka/adanos.html", popis:"Město na východě Varky, známé svými obchodními centry" }
];

const Zajimavost = [
  { name: "Všehostrom", y: 2534, x: 3534, url: "/mista/lareze/vsehostrom.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Věž", y: 1892, x: 3302, url: "/mista/varka/vez.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Gost", y: 1976, x: 3914, url: "/mista/varka/gost.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Trpasličí Zátoka", y: 1768, x: 3728, url: "/mista/varka/zatoka.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Trombus", y: 1498, x: 2866, url: "/mista/varka/trombus.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Pole Smutku", y: 1312, x: 1912, url: "/mista/varka/pole_smutku.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Kriegberg", y: 1218, x: 2172, url: "/mista/varka/kriegberg.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Les Mrtvých Vesnic", y: 1270, x: 2658, url: "/mista/varka/les_mrtvych_vesnic.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Liedemar", y: 1244, x: 3910, url: "/mista/lareze/liedemar.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Ruiny Al-Katu", y: 1046, x: 2492, url: "/mista/varka/al_kat.html", popis:"Město na východě Varky, známé svými obchodními centry" }
];

const Hvozd = [
  { name: "Chvozd", y: 2074, x: 3148, url: "/mista/varka/chvozd.html", popis:"Město na východě Varky, známé svými obchodními centry" },
  { name: "Sucholes", y: 1900, x: 2928, url: "/mista/varka/sucholes.html", popis:"Město na východě Varky, známé svými obchodními centry" }
];



function pridatMarkery(pole) {
  pole.forEach(misto => {
    L.marker([misto.y, misto.x])
      .addTo(map)
      .bindPopup(`
        <b>${misto.name}</b><br><br>
        <p>${misto.popis}</p><br>
        <a href="${misto.url}" style="text-align:center;">Víc o místě</a>
      `);
  });
}


pridatMarkery(Vesnice);
pridatMarkery(Mesto);
pridatMarkery(Hrad);
pridatMarkery(Klaster);
pridatMarkery(Zajimavost);
pridatMarkery(Hvozd);