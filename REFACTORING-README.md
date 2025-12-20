# Refaktorování webu DnD - Web podle vzoru

## Datum: 20. prosince 2025

## Provedené změny

### 1. Nová struktura CSS

Vytvořena nová složka `/css/` s modulárními styly:

- **reset.css** - Reset stylů, import colors.css
- **theming.css** - Design tokeny (spacing, border-radius, font-sizes, background-themes)
- **base.css** - Základní styly pro body, typography, odkazy
- **layout.css** - Layout komponenty (header, nav, sidenav, page structure, responsive)
- **components.css** - UI komponenty (tlačítka, dropdown, gallery, scrollbar, footer)
- **utilities.css** - Utility třídy (flex, spacing m-_/p-_, width, text-align)
- **druzinka2.css** - Agregovaný soubor importující všechny vrstvy

### 2. Sémantické HTML5 prvky

Nahrazeny `div` obalové prvky za sémantické tagy:

- `<div id="main">` → odstráněno, nahrazeno `<main>`
- `<div id="mysidenav" class="sidenav">` → `<nav id="mysidenav" class="sidenav">`
- Přidány `<section>` pro logické bloky obsahu
- Doplněn `<footer>` s autorskými informacemi a copyrightem
- Přidán `<noscript>` blok s iframe navigací pro uživatele bez JS

### 3. Jednotné třídy a konvence

- Body třídy: `main-body`, `main-body-cave`, `main-body-forest`, atd. (podle pozadí)
- Všechny stránky nyní používají jednotný CSS systém
- Zachovány existující třídy kompatibilní s JS (`podlogo`, `sidenav`, `introMainPage`, `gallery`)

### 4. JavaScript

- Bez změn - selektory zůstaly kompatibilní (ID: `mysidenav`, `SIDE`, `header`)
- Funkce `openNav()`, `closeNav()`, `napisSidebar()` fungují beze změn

### 5. Soubory upraveny (85+ souborů)

**Kořenová složka:**

- index.html, brom.html, info.html, cheatsheet.html, roll.html, mapa.html, mapabig.html, atd.

**Podsložky:**

- `/NPC/` - všechny NPC profily (bestie.html, dan.html, hugo.html, atd.)
- `/bohove/` - všechny stránky bohů (adanos.html, innos.html, atd.)
- `/frakce/` - všechny stránky frakcí (ggg.html, straz.html, atd.)
- `/mista/` - všechna místa (garagor, denthir, morgstadt, atd.)
- `/Spellbook/` - všechny spellbooky

**Nezměněno:**

- `/vzorovy_web/` - ponechán jako referenční vzor
- `nav.html` - ponechán jako iframe pro non-JS uživatele (přidána poznámka)

### 6. Zachování zpětné kompatibility

- Staré CSS soubory (`druzinka.css`, `colors.css`) ponechány pro případné reference
- Nový CSS systém importuje `colors.css` pro zachování barevných proměnných
- Všechny odkazy a cesty zachovány

## Jak to testovat

1. Otevřít `index.html` v prohlížeči
2. Ověřit:
   - Zobrazení pozadí a barev
   - Fungování hamburger menu (sidenav)
   - Responsive design na menších obrazovkách
   - Odkazy mezi stránkami
   - Lightbox na obrázcích

## Použité skripty

V `/scripts/` jsou uloženy PowerShell skripty použité pro hromadnou úpravu:

- `bulk-update.ps1` - Úprava bohove/, frakce/, info.html, cheatsheet.html
- `bulk-update-mista.ps1` - Úprava mista/ a Spellbook/
- `bulk-update-final.ps1` - Finální úpravy NPC/, map, roll.html

## Návratový plán

Pokud by bylo potřeba vrátit změny:

1. Obnovit odkazy na `/druzinka.css` místo `/css/druzinka2.css`
2. Vrátit `<div id="main">` obal
3. Vrátit `<div id="mysidenav">` místo `<nav>`
4. Odstranit `<main>` tagy

## Poznámky

- Všechny změny byly provedeny s ohledem na zachování funkčnosti
- CSS je nyní modulární a snadno udržovatelný
- HTML je sémantičtější a přístupnější
- Responzivita zachována a vylepšena
