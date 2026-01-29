function napisSidebar() {
  document.getElementById(
    "SIDE"
  ).innerHTML = `<a href="/index.html" class="postava azure"><h2>DRUŽINA</h2></a> 
            <h2> Postavy </h2>
            <hr class="solid">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="/brom.html" class="postava">Brom</a> 
            <a href="/emer.html" class="postava">Emer z Dorinu</a>
            <a href="/garth.html" class="postava">Garth McLaughlin</a>
            <a href="/chloe.html" class="postava" id="mort">Chloe</a> 
            <a href="/joe.html" class="postava">Joe</a>
            <a href="/joli.html" class="postava">Joli</a>
            <a href="/kharak.html" class="postava">Kharak Narantl</a> 
            <a href="/pertan.html" class="postava">Pertan Perlík</a> 
            <a href="/sirael.html" class="postava">Sirael Cockven</a>
            <a href="/zuana.html" class="postava">Zuana</a>  
            <br>
            <a href="/mapa.html" class="mapa">Mapa</a>
            <a href="/mapabig.html" class="mapa">VELKÁ MAPA!</a>
            <a href="/cheatsheet.html" class="mapa">Cheatsheet</a>
            <a href="/denik.pdf" class="mapa" download>Deník!</a>
            <br>

            <button class="dropdown-btn" onclick="rozbal('div1')">NPC 
              <span><i class="arrow down"></i></span>
            </button>
            <hr class="solid">
            <div class="dropdown-div" id="div1" style="visibility:hidden;max-height:0px">
            <a href="/NPC/bestie.html" class="postava">Bestie</a>
            <a href="/NPC/dan.html" class="postava">Dan</a>
            <a href="/NPC/dernhelm.html" class="postava">Dernhelm</a> 
            <a href="/NPC/enea.html" class="postava">Enea Mara</a>
            <a href="/folgrim.html" class="postava">Folgrim</a>  
            <a href="/NPC/hugo.html" class="postava">Hugo</a>
            <a href="/NPC/gellis.html" class="postava">Gellis</a>
            <a href="/NPC/ignus.html" class="postava">Ignus</a>
            <a href="/NPC/merion.html" class="postava">Merion</a>
            <a href="/NPC/motieur.html" class="postava">Motieur</a>  
            <a href="/NPC/narmer.html" class="postava">Narmer</a>
            <a href="/NPC/neera.html" class="postava">Neera</a>
            <a href="/NPC/tibalt.html" class="postava">Tibalt</a>  
            <a href="/NPC/tonik.html" class="postava">Toník</a> 
            <a href="/NPC/treti.html" class="postava">Třetí</a>  
            <a href="/NPC/zrzek.html" class="postava">Zrzek</a>  
            </div>
            <br>

            <button class="dropdown-btn" onclick="rozbal('div2')">Místa
                <span><i class="arrow down"></i></span>
            </button>
            <hr class="solid">
            <div class="dropdown-div" id="div2" style="visibility:hidden;max-height:0px">
                <a target="_self" alt="Adanosův chrám" class="misto" href="/mista/adanos/adanos.html">Adanosův chrám</a>
                <a target="_self" alt="Ruiny Al Katu" class="misto" href="/mista/al_kat/al_kat.html">Al-Kat</a>
                <a target="_self" alt="Denthir" class="misto" href="/mista/denthir/denthir.html">Denthir</a>
                <a target="_self" alt="Durnhelm" class="misto" href="/mista/durnhelm/durnhelm.html">Durnhelm</a>
                <a target="_self" alt="Garagor" class="misto" href="/mista/garagor/garagor.html">Garagor</a> 
                <a target="_self" alt="Ghetto" class="misto" href="/mista/ghetto/ghetto.html">Ghetto</a>
                <a target="_self" alt="Les Gost" class="misto" href="/mista/gost/gost.html">Gost</a> 
                <a target="_self" alt="Grabštejn" class="misto" href="/mista/grabstejn/grabstejn.html">Grabštejn</a>
                <a target="_self" alt="Hayax" class="misto" href="/mista/hayax/hayax.html">Hayax</a>
                <a target="_self" alt="Hornická Oblast" class="misto" href="/mista/doly/doly.html">Hornická oblast</a>
                <a target="_self" alt="Horská pevnost" class="misto" href="/mista/horska_pevnost/horska_pevnost.html">Horská pevnost</a>
                <a target="_self" alt="Chvozd" class="misto" href="/mista/chvozd/chvozd.html">Chvozd</a>
                <a target="_self" alt="Ječín" class="misto" href="/mista/jecin/jecin.html">Ječín</a>
                <a target="_self" alt="Kriegberg" class="misto" href="/mista/kriegberg/kriegberg.html">Kriegberg</a>
                <a target="_self" alt="Kriegstein" class="misto" href="/mista/kriegstein/kriegstein.html">Kriegstein</a>
                <a target="_self" alt="Laréze" class="misto" href="/mista/lareze/lareze.html">Laréze</a>
                <a target="_self" alt="Liedemar" class="misto" href="/mista/liedemar/liedemar.html">Liedemar</a>
                <a target="_self" alt="Les Mrtvých Vesnic" class="misto" href="/mista/les_mrtvych_vesnic/les_mrtvych_vesnic.html">Les Mrtvých Vesnic</a>
                <a target="_self" alt="Pełzacz" class="misto" href="/mista/pelzacz/pelzacz.html">Pełzacz </a>
                <a target="_self" alt="Morgstadt" class="misto" href="/mista/morgstadt/morgstadt.html">Morgstadt</a>
                <a target="_self" alt="Mýtinná" class="misto" href="/mista/mytinna/mytinna.html">Mýtinná</a>
                <a target="_self" alt="Pełzacz" class="misto" href="/mista/pelzacz/pelzacz.html">Pełzacz</a>
                <a target="_self" alt="Pole Smutku" class="misto" href="/mista/pole_smutku/pole_smutku.html">Pole Smutku</a>
                <a target="_self" alt="Pons Varoli" class="misto" href="/mista/pons/pons.html">Pons Varoli</a>
                <a target="_self" alt="Přechod" class="misto" href="/mista/prechod/prechod.html">Přechod</a>
                <a target="_self" alt="Pustina" class="misto" href="/mista/pustina/pustina.html">Pustina</a>
                <a target="_self" alt="Sucholes" class="misto" href="/mista/sucholes/sucholes.html">Sucholes</a>
                <a target="_self" alt="Trombus" class="misto" href="/mista/trombus/trombus.html">Trombus</a>
                <a target="_self" alt="Trpasličí Zátoka" class="misto" href="/mista/zatoka/zatoka.html">Trpasličí Zátoka</a>
                <a target="_self" alt="Varka" class="misto" href="/mista/varka/varka.html">Varka</a>
                <a target="_self" alt="Věž" class="misto" href="/mista/vez/vez.html">Věž</a>
                <a target="_self" alt="Všehostrom" class="misto" href="/mista/vsehostrom/vsehostrom.html">Všehostrom</a>
            </div>
            <br>

            <button class="dropdown-btn" onclick="rozbal('div3')">Frakce
                <span><i class="arrow down"></i></span>
            </button>
            <hr class="solid">
            <div class="dropdown-div" style="visibility:hidden;max-height:0px" id="div3">
                <a target="_self" alt="Aloca" class="misto" href="/frakce/aloca.html">Aloca</a>
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
            <hr class="solid">
            <div class="dropdown-div" id="div4" style="visibility:hidden;max-height:0px">
            <a href="/bohove/adanos.html" class="postava">Adanos</a>
            <a href="/bohove/bane.html" class="postava">Bane</a>
            <a href="/bohove/beliar.html" class="postava">Beliar</a>
            <a href="/bohove/bhaal.html" class="postava">Bhaal</a>
            <a href="/bohove/ilmater.html" class="postava">Ilmater</a>
            <a href="/bohove/innos.html" class="postava">Innos</a>
            <a href="/bohove/magran.html" class="postava">Magran</a>
            <a href="/bohove/myrkul.html" class="postava">Myrkul</a>
            <a href="/bohove/slepa.html" class="postava">Slepá</a>
            <a href="/bohove/posledni.html" class="postava">Ten Poslední</a>
            <a href="/bohove/woedika.html" class="postava">Woedika</a>
            <a href="/bohove/zkrouceny.html" class="postava">Zkroucený</a>
            <a href="/bohove/panna.html" class="postava">Žulová Panna</a>   
            </div>
            <br>

            <button class="dropdown-btn" onclick="rozbal('divSpell')">Spellbook
                <span><i class="arrow down"></i></span>
            </button>
            <hr class="solid">
            <div class="dropdown-div" id="divSpell" style="visibility:hidden;max-height:0px">
              <a href="https://dnd5e.wikidot.com/spells:druid" class="postava">Druid</a>
              <a href="https://dnd5e.wikidot.com/spells:cleric" class="postava">Klerik</a>  
              <a href="https://dnd5e.wikidot.com/spells:paladin" class="postava">Paladin</a>
              <a href="https://dnd5e.wikidot.com/spells:sorcerer" class="postava">Sorcerer</a>  
              <a href="https://dnd5e.wikidot.com/spells:ranger" class="postava">Ranger</a> 
              <a href="/Spellbook/fighterSb.html" class="postava">Válečník</a> 
            </div>
            <br>
            <a href="/info.html" class="postava">O stránce</a> 
            `;
  console.log(document.getElementById("SIDE"));

  let MortName = document.getElementById("mort");
  console.log(MortName);

  MortName.addEventListener("mouseover", () => {
    MortName.textContent = "Mort";
  });

  MortName.addEventListener("mouseout", () => {
    MortName.textContent = "Chloe";
  });

  document.querySelectorAll(".dropdown-btn").forEach((d) => {
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
  let aktVisibility = getComputedStyle(tenDiv).visibility;

  if (aktVisibility === "hidden") {
    tenDiv.style.visibility = "visible";
    tenDiv.style.maxHeight = "2000px";
  } else {
    tenDiv.style.visibility = "hidden";
    tenDiv.style.maxHeight = "0px";
  }
}
