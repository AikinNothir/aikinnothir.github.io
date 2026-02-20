/*<button class="dropdown-btn" onclick="rozbal('lokVar')">
  Varka
  <span><i class="arrow down"></i></span>
</button>
<div class="dropdown-div" id="lokVar" style="max-height:0px">
  
</div>*/

function napisSidebar() {
  document.getElementById("SIDE").innerHTML =
    `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="/index.html" class="postava azure"><h2>DRUŽINA</h2></a> 
            <button class="dropdown-btn" onclick="rozbal('postavy')">
              Postavy
              <span><i class="arrow down"></i></span>
            </button>
            <div class="dropdown-div" id="postavy" style="max-height:0px">
              <a href="/postavy/brom.html" class="postava">Brom Forgeborn</a> 
              <a href="/postavy/emer.html" class="postava">Emer z Dorinu</a>
              <a href="/postavy/garth.html" class="postava">Garth McLaughlin</a>
              <a href="/postavy/chloe.html" class="postava" id="mort">Chloe Lionfell</a> 
              <a href="/postavy/joe.html" class="postava">Jonathan O. Edwards</a>
              <a href="/postavy/joli.html" class="postava">Joli Rouge</a>
              <a href="/postavy/kharak.html" class="postava">Kharak Narantl</a> 
              <a href="/postavy/pertan.html" class="postava">Pertan Perlík</a> 
              <a href="/postavy/sirael.html" class="postava">Sirael Cockven</a>
              <a href="/postavy/zuana.html" class="postava">Zuana</a>  
            </div>
            <br>
            <button class="dropdown-btn" onclick="rozbal('div1')">NPC 
              <span><i class="arrow down"></i></span>
            </button>
            <div class="dropdown-div" id="div1" style="max-height:0px">
              <button class="dropdown-btn2 sardot" onclick="rozbal('npcSar')">
                Sardot
                <span><i class="arrow down"></i></span>
              </button>
              <div class="dropdown-div2" id="npcSar" style="max-height:0px">
                <a href="/npc/elisa.html" class="postava">Elisa</a>
                <a href="/npc/motieur.html" class="postava">Motieur</a>
                <a href="/npc/tibalt.html" class="postava">Tibalt</a>  
              </div>
              <button class="dropdown-btn2 varka" onclick="rozbal('npcVar')">
                Varka
                <span><i class="arrow down"></i></span>
              </button>
              <div class="dropdown-div2" id="npcVar" style="max-height:0px">
                <a href="/npc/dan.html" class="postava">Dan</a>
                <a href="/npc/darub.html" class="postava">Darub</a>
                <a href="/npc/enea.html" class="postava">Enea Mara</a>
                <a href="/npc/dernhelm.html" class="postava">Dernhelm</a>
                <a href="/npc/hugo.html" class="postava">Hugo</a>
                <a href="/npc/koril.html" class="postava">Koril</a>
                <a href="/npc/merion.html" class="postava">Merion</a>
                <a href="/npc/tonik.html" class="postava">Toník</a> 
                <a href="/npc/treti.html" class="postava">Třetí</a>  
                <a href="/npc/zrzek.html" class="postava">Zrzek</a>
              </div>
              <a href="/npc/bestie.html" class="postava">Bestie</a>
              <a href="/postavy/folgrim.html" class="postava">Folgrim</a>
              <a href="/npc/ignus.html" class="postava">Ignus</a>
              <a href="/npc/narmer.html" class="postava">Narmer</a>
              <a href="/npc/neera.html" class="postava">Neera</a>
              <a href="/npc/sgreti.html" class="postava">Sgréti</a>
            </div>
            <br>
            <button class="dropdown-btn" onclick="rozbal('div2')">
              Místa
                <span><i class="arrow down"></i></span>
            </button>
            <div class="dropdown-div" id="div2" style="max-height:0px">
              <button class="dropdown-btn2 lareze" onclick="rozbal('lokLar')">
                Laréze
                <span><i class="arrow down"></i></span>
              </button>
              <div class="dropdown-div2" id="lokLar" style="max-height:0px">
                <br>
                <a target="_self" alt="Laréze" class="lareze" href="/mista/lareze/lareze.html">o Laréze</a>
                <hr>
                <a target="_self" alt="Fenwn" class="misto" href="/mista/lareze/fenwn.html">Fenwn</a>
                <a target="_self" alt="Hayax" class="misto" href="/mista/lareze/hayax.html">Hayax</a>
                <a target="_self" alt="Mýtinná" class="misto" href="/mista/lareze/mytinna.html">Mýtinná</a>
                <a target="_self" alt="Tenya" class="misto" href="/mista/lareze/tenya.html">Tenya</a>
                <a target="_self" alt="Všehostrom" class="misto" href="/mista/lareze/vsehostrom.html">Všehostrom</a>
              </div>

              <button class="dropdown-btn2 sardot" onclick="rozbal('lokSar')">
                Sardot
                <span><i class="arrow down"></i></span>
              </button>
              <div class="dropdown-div2" id="lokSar" style="max-height:0px">
                <br>
                <a target="_self" alt="Varka" class="sardot" href="/mista/sardot/sardot.html">o Sardotu</a>
                <hr>
                <a target="_self" alt="Auvergn" class="misto" href="/mista/sardot/auvergn.html">Auvergn</a>
                <a target="_self" alt="Denthir" class="misto" href="/mista/sardot/denthir.html">Denthir</a>
                <a target="_self" alt="Deucreux" class="misto" href="/mista/sardot/deucreux.html">Deucreux</a>
                <a target="_self" alt="Sontieu" class="misto" href="/mista/sardot/sontieu.html">Sontieu</a>
                <a target="_self" alt="Venemor" class="misto" href="/mista/sardot/venemor.html">Venemor</a>
                <a target="_self" alt="Vrieugh" class="misto" href="/mista/sardot/vrieugh.html">Vrieugh</a>
              </div>

              <button class="dropdown-btn2 tarkir" onclick="rozbal('lokTar')">
                Tarkir
                <span><i class="arrow down"></i></span>
              </button>
              <div class="dropdown-div2" id="lokTar" style="max-height:0px">
              <br>
                <a target="_self" alt="Tarkir" class="tarkir" href="/mista/tarkir/tarkir.html">o Tarkiru</a>
                <hr>
                <a target="_self" alt="Bílé Údolí" class="misto" href="/mista/tarkir/bile_udoli.html">Bílé údolí</a>
                <a target="_self" alt="Dračí Rohy" class="misto" href="/mista/tarkir/draci_rohy.html">Dračí rohy</a>
                <a target="_self" alt="Dračí Sedlo" class="misto" href="/mista/tarkir/draci_sedlo.html">Dračí sedlo</a>
                <a target="_self" alt="Ocas Draka" class="misto" href="/mista/tarkir/ocas_draka.html">Ocas Draka</a>
              </div>

              <button class="dropdown-btn2 varka" onclick="rozbal('lokVar')">
                Varka
                <span><i class="arrow down"></i></span>
              </button>
              <div class="dropdown-div2" id="lokVar" style="max-height:0px">
                <br>
                <a target="_self" alt="Varka" class="varka" href="/mista/varka.html">o Varce</a>
                <hr>
                <a target="_self" alt="Adanosův chrám" class="misto" href="/mista/varka/adanos.html">Adanosův chrám</a>
                <a target="_self" alt="Ruiny Al Katu" class="misto" href="/mista/varka/al_kat.html">Al-Kat</a>
                <a target="_self" alt="Durnhelm" class="misto" href="/mista/varka/durnhelm.html">Durnhelm</a>
                <a target="_self" alt="Garagor" class="misto" href="/mista/varka/garagor.html">Garagor</a> 
                <a target="_self" alt="Ghetto" class="misto" href="/mista/varka/ghetto.html">Ghetto</a>
                <a target="_self" alt="Les Gost" class="misto" href="/mista/varka/gost.html">Gost</a> 
                <a target="_self" alt="Grabštejn" class="misto" href="/mista/varka/grabstejn.html">Grabštejn</a>
                <a target="_self" alt="Hornická Oblast" class="misto" href="/mista/varka/doly.html">Hornická oblast</a>
                <a target="_self" alt="Horská pevnost" class="misto" href="/mista/varka/horska_pevnost.html">Horská pevnost</a>
                <a target="_self" alt="Hraničná" class="misto" href="/mista/varka/hranicna.html">Hraničná</a>
                <a target="_self" alt="Chvozd" class="misto" href="/mista/varka/chvozd.html">Chvozd</a>
                <a target="_self" alt="Ječín" class="misto" href="/mista/varka/jecin.html">Ječín</a>
                <a target="_self" alt="Kriegberg" class="misto" href="/mista/varka/kriegberg.html">Kriegberg</a>
                <a target="_self" alt="Kriegstein" class="misto" href="/mista/varka/kriegstein.html">Kriegstein</a>
                <a target="_self" alt="Les Mrtvých Vesnic" class="misto" href="/mista/varka/les_mrtvych_vesnic.html">Les Mrtvých Vesnic</a>
                <a target="_self" alt="Limris" class="misto" href="/mista/varka/limris.html">Limris</a>
                <a target="_self" alt="Morgstadt" class="misto" href="/mista/varka/morgstadt.html">Morgstadt</a>
                <a target="_self" alt="Okraj" class="misto" href="/mista/varka/okraj.html">Okraj</a>
                <a target="_self" alt="Pełzacz" class="misto" href="/mista/varka/pelzacz.html">Pełzacz</a>
                <a target="_self" alt="Poddubí" class="misto" href="/mista/varka/poddubi.html">Poddubí</a>
                <a target="_self" alt="Pole Smutku" class="misto" href="/mista/varka/pole_smutku.html">Pole Smutku</a>
                <a target="_self" alt="Pons Varoli" class="misto" href="/mista/varka/pons.html">Pons Varoli</a>
                <a target="_self" alt="Přechod" class="misto" href="/mista/varka/prechod.html">Přechod</a>
                <a target="_self" alt="Sucholes" class="misto" href="/mista/varka/sucholes.html">Sucholes</a>
                <a target="_self" alt="Trombus" class="misto" href="/mista/varka/trombus.html">Trombus</a>
                <a target="_self" alt="Trpasličí Zátoka" class="misto" href="/mista/varka/zatoka.html">Trpasličí Zátoka</a>
                <a target="_self" alt="Věž" class="misto" href="/mista/varka/vez.html">Věž</a>
              </div>
              
              <a target="_self" alt="Dornfeld" class="misto" href="/mista/dornfeld.html">Dornfeld</a>
              <a target="_self" alt="Liedemar" class="misto" href="/mista/liedemar.html">Liedemar</a>
              <a target="_self" alt="Stalwart" class="misto" href="/mista/stalwart.html">Stalwart</a>
            </div>
            <br>

            <button class="dropdown-btn" onclick="rozbal('div3')">Frakce
                <span><i class="arrow down"></i></span>
            </button>
            <div class="dropdown-div" style="max-height:0px" id="div3">
              <a target="_self" alt="Aloka" class="misto" href="/frakce/aloka.html">Aloka</a>
              <a target="_self" alt="Alchymistický cech" class="misto" href="/frakce/alchym_cech.html">Alchymistický cech</a>
              <a target="_self" alt="bratrstvo lovu" class="misto" href="/frakce/lov.html">Bratrstvo lovu</a>
              <a target="_self" alt="stráž garagoru" class="misto" href="/frakce/straz.html">Gargorská stráž</a>
              <a target="_self" alt="GGG" class="misto" href="/frakce/ggg.html">Gargorský Gang Gaunerů</a>
              <a target="_self" alt="Kult očistného plamene" class="misto" href="/frakce/kultop.html">Kult Očistného Plamene</a>
              <a target="_self" alt="Stříbro" class="misto" href="/frakce/stribro.html">Stříbrné lemování</a>
              <a target="_self" alt="Stráž Al-katu" class="misto" href="/frakce/straze_al-katu.html">Stráž Al-Katu</a>
            </div>
            <br>

            <button class="dropdown-btn" onclick="rozbal('div4')">Bohové 
              <span><i class="arrow down"></i></span>
            </button>
            <div class="dropdown-div" id="div4" style="max-height:0px">
              <a href="/bohove/aaauph.html" class="postava">Aaauph</a>
              <a href="/bohove/adanos.html" class="postava">Adanos</a>
              <a href="/bohove/bane.html" class="postava">Bane</a>
              <a href="/bohove/beliar.html" class="postava">Beliar</a>
              <a href="/bohove/bhaal.html" class="postava">Bhaal</a>
              <a href="/bohove/ilmater.html" class="postava">Ilmater</a>
              <a href="/bohove/innos.html" class="postava">Innos</a>
              <a href="/bohove/magran.html" class="postava">Magran</a>
              <a href="/bohove/myrkul.html" class="postava">Myrkul</a>
              <a href="/bohove/posledni.html" class="postava">Ten Poslední</a>
              <a href="/bohove/slepa.html" class="postava">Slepá</a>
              <a href="/bohove/tlem.html" class="postava">Tlem</a>
              <a href="/bohove/woedika.html" class="postava">Woedika</a>
              <a href="/bohove/zkrouceny.html" class="postava">Zkroucený</a>
              <a href="/bohove/panna.html" class="postava">Žulová Panna</a>   
            </div>
            <br>

            <button class="dropdown-btn" onclick="rozbal('divSpell')">Spellbook
                <span><i class="arrow down"></i></span>
            </button>
            <div class="dropdown-div" id="divSpell" style="max-height:0px">
              <a href="https://dnd5e.wikidot.com/spells:druid" class="postava">Druid</a>
              <a href="https://dnd5e.wikidot.com/spells:cleric" class="postava">Klerik</a>  
              <a href="https://dnd5e.wikidot.com/spells:paladin" class="postava">Paladin</a>
              <a href="https://dnd5e.wikidot.com/spells:sorcerer" class="postava">Sorcerer</a>  
              <a href="https://dnd5e.wikidot.com/spells:ranger" class="postava">Ranger</a> 
              <a href="/Spellbook/fighterSb.html" class="postava">Válečník</a> 
            </div>
            <br>
            <a href="/mapa.html" class="mapa">Interaktivní Mapa</a>
            <a href="/mapabig.html" class="mapa">VELKÁ MAPA!</a>
            <a href="/cheatsheet.html" class="mapa">Cheatsheet</a>
            <a href="/denik.pdf" class="mapa" download>Deník!</a>
            <br>
            <br>
            <a href="/info.html" class="postava">O stránce</a> `;
  console.log(document.getElementById("SIDE"));

  let MortName = document.getElementById("mort");
  console.log(MortName);

  const mortNames = [
    "Mort Songbird",
    "Stark Brund",
    "Chloe Lionrise",
    "Kain Tork",
    "Margaret Hopsová",
    "C̵͎̤̃͑̀͂̀͊̃́͆͂͐̂̓̔̅̈́̕̚̚͝ḩ̴͕̟̤̞͎̭͚͈̩̣̱̱̙̟̠͗̌́͒̈́́͐̅͛͋̿͌̀͗͘̚͜͜͠ļ̸̡͔̜̻̮͈͕͔͚̺̱̟̥͙̥̬̰͚̳̾̄̂̎͜͜ͅǫ̷̨̨̱̟͓͖̮̥̻̭̬͔̰̠̻̲̤̮̥̘̚͜ė̴̯̘̩̩̜̫̣̪͓͍̑̀͘ͅ",
  ];

  let intervalId = null;

  MortName.addEventListener("mouseover", () => {
    let index = 0;
    intervalId = setInterval(() => {
      MortName.textContent = mortNames[index];
      index = (index + 1) % mortNames.length;
    }, 1000);
  });

  MortName.addEventListener("mouseout", () => {
    clearInterval(intervalId);
    MortName.textContent = "Chloe Lionfell";
  });

  document.querySelectorAll(".dropdown-btn, .dropdown-btn2").forEach((d) => {
    d.addEventListener("click", () => {
      const icon = d.querySelector("i.arrow");
      if (icon) {
        icon.classList.toggle("down");
        icon.classList.toggle("up");
      }
    });
  });
}

function rozbal(idDivu) {
  const tenDiv = document.getElementById(idDivu);

  if (tenDiv.classList.contains("open")) {
    tenDiv.style.maxHeight = tenDiv.scrollHeight + "px";
    requestAnimationFrame(() => {
      tenDiv.style.maxHeight = "0px";
    });
    tenDiv.classList.remove("open");
  } else {
    tenDiv.style.maxHeight = tenDiv.scrollHeight + "px";
    tenDiv.classList.add("open");

    tenDiv.addEventListener("transitionend", function handler() {
      tenDiv.style.maxHeight = "none";
      tenDiv.removeEventListener("transitionend", handler);
    });
  }
}
