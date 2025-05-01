function napisSidebar() {
  document.getElementById(
    "SIDE"
  ).innerHTML = `<a href="/index.html" class="postava" style="color: azure;">DRUŽINA</a> 
            <h2> Postavy </h2>
            <hr class="solid">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="/emer.html" class="postava">Emer z Dorinu</a> 
            <a href="/joe.html" class="postava">Joe</a>
            <a href="/kharak.html" class="postava">Kharak Narantl</a> 
            <a href="/margaret.html" class="postava">Margaret</a> 
            <a href="/pertan.html" class="postava">Pertan Perlík</a> 
            <a href="/sirael.html" class="postava">Sirael Cockven</a> 
            <a href="/stark.html" class="postava">Stark</a> 
            <a href="/zuana.html" class="postava">Zuana</a>  
            <br>
            <button class="dropdown-btn" onclick="rozbal('1')">NPC 
              <span style="color:white"><i class="fa-solid fa-caret-down"></i></span>
              <hr class="solid">
            </button>
            <div class="dropdown-div" id="1" style="display:none">
            <a href="/NPC/neera.html" class="postava podtrh">Neera</a> 
            <a href="/NPC/narmer.html" class="postava podtrh">Narmer</a>
            <a href="/NPC/dan.html" class="postava podtrh">Dan</a> 
            </div>
            <br>
            <h2> Svět </h2>
            <hr class="solid">
            <a href="/mapa.html" class="mapa">Mapa </a>
            <button class="dropdown-btn" onclick="rozbal('2')">Místa
                <span style="color:white"><i class="fa-solid fa-caret-down"></i></span>
                <hr class="solid">
            </button>
            <div class="dropdown-div" id="2" style="display:none">
                <a target="_self" alt="Adanosův chrám" title="Adanosův chrám" class="misto podtrh" href="/mista/adanos/adanos.html">Adanosův chrám</a>
                <a target="_self" alt="Ruiny Al Katu" title="Ruiny Al Katu" class="misto podtrh" href="/mista/al_kat/al_kat.html">Al-Kat</a>
                <a target="_self" alt="Denthir" title="Denthir" class="misto podtrh" href="/mista/denthir/denthir.html">Denthir</a>
                <a target="_self" alt="Durnhelm" title="Durnhelm" class="misto podtrh" href="/mista/durnhelm/durnhelm.html">Durnhelm</a>
                <a target="_self" alt="Garagor" title="Garagor" href="/mista/garagor/garagor.html" class="misto podtrh">Garagor</a> 
                <a target="_self" alt="Ghetto" title="Ghetto" class="misto podtrh" href="/mista/ghetto/ghetto.html">Ghetto</a>
                <a target="_self" alt="Grabštejn" title="Grabštejn" class="misto podtrh" href="/mista/grabstejn/grabstejn.html">Grabštejn</a>
                <a target="_self" alt="Hayax" title="Hayax" class="misto podtrh" href="/mista/hayax/hayax.html">Hayax</a>
                <a target="_self" alt="Hornická Oblast" title="Hornická Oblast" class="misto podtrh" href="/mista/doly/doly.html">Hornická oblast</a>
                <a target="_self" alt="Horská pevnost" title="Horská pevnost" class="misto podtrh" href="/mista/horska_pevnost/horska_pevnost.html">Horská pevnost</a>
                <a target="_self" alt="Chvozd" title="Chvozd" class="misto podtrh" href="/mista/chvozd/chvozd.html">Chvozd</a>
                <a target="_self" alt="Ječín" title="Ječín" class="misto podtrh" href="/mista/jecin/jecin.html">Ječín</a>
                <a target="_self" alt="Kriegberg" title="Kriegberg" class="misto podtrh" href="/mista/kriegberg/kriegberg.html">Kriegberg</a>
                <a target="_self" alt="Kriegstein" title="Kriegstein" class="misto podtrh" href="/mista/kriegstein/kriegstein.html">Kriegstein</a>
                <a target="_self" alt="Laréze" title="Laréze" class="misto podtrh" href="/mista/lareze/lareze.html">Laréze</a>
                <a target="_self" alt="Liedemar" title="Liedemar" class="misto podtrh" href="/mista/liedemar/liedemar.html">Liedemar</a>
                <a target="_self" alt="Pełzacz" title="Pełzacz" href="/mista/pelzacz/pelzacz.html" class="misto podtrh">Pełzacz </a>
                <a target="_self" alt="Morgstadt" title="Morgstadt" class="misto podtrh" href="/mista/morgstadt/morgstadt.html">Morgstadt</a>
                <a target="_self" alt="Mýtinná" title="Mýtinná" class="misto podtrh" href="/mista/mytinna/mytinna.html">Mýtinná</a>
                <a target="_self" alt="Pełzacz" title="Pełzacz" class="misto podtrh" href="/mista/pelzacz/pelzacz.html">Pełzacz</a>
                <a target="_self" alt="Pole Smutku" title="Pole Smutku" class="misto podtrh" href="/mista/pole_smutku/pole_smutku.html">Pole Smutku</a>
                <a target="_self" alt="Pons Varoli" title="Pons Varoli" class="misto podtrh" href="/mista/pons/pons.html">Pons Varoli</a>
                <a target="_self" alt="Přechod" title="Přechod" class="misto podtrh" href="/mista/prechod/prechod.html">Přechod</a>
                <a target="_self" alt="Pustina" title="Pustina" class="misto podtrh" href="/mista/pustina/pustina.html">Pustina</a>
                <a target="_self" alt="Sucholes" title="Sucholes" class="misto podtrh" href="/mista/sucholes/sucholes.html">Sucholes</a>
                <a target="_self" alt="Trombus" title="Trombus" class="misto podtrh" href="/mista/trombus/trombus.html">Trombus</a>
                <a target="_self" alt="Trpasličí Zátoka" title="Trpasličí Zátoka" class="misto podtrh" href="/mista/zatoka/zatoka.html">Trpasličí Zátoka</a>
                <a target="_self" alt="Varka" title="Varka"  href="/mista/varka/varka.html" class="misto podtrh">Varka</a>
                <a target="_self" alt="Věž" title="Věž" class="misto podtrh" href="/mista/vez/vez.html">Věž</a>
                <a target="_self" alt="Všehostrom" title="Všehostrom" class="misto podtrh" href="/mista/vsehostrom/vsehostrom.html">Všehostrom</a>
            </div>
            <button class="dropdown-btn" onclick="rozbal('3')">Frakce
                <span style="color:white"><i class="fa-solid fa-caret-down"></i></span>
                <hr class="solid">
            </button>
            <div class="dropdown-div" style="display:none" id="3">
                <a target="_self" alt="Aloca" title="Aloca" class="misto podtrh" href="/frakce/aloca.html">Aloca</a>
                <a target="_self" alt="GGG" title="Garagorský gang gaunerů" class="misto podtrh" href="/frakce/ggg.html">Gargorský Gang Gaunerů</a>
                <a target="_self" alt="Stříbro" title="Stříbrné lemování" class="misto podtrh" href="/frakce/stribro.html">Stříbrné lemování</a>
            </div>`;
  console.log(document.getElementById(SIDE));
}
