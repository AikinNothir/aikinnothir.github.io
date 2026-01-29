# PowerShell skript pro finální úpravy zbývajících souborů
$rootPath = "c:\Users\Fischa\Desktop\DnD - Web"

# Seznam zbývajících souborů (kromě vzorovy_web)
$files = @(
    "mapa.html",
    "mapa-iframe.html",
    "mapabig.html",
    "roll.html",
    "pertanTest.html",
    "NPC\dan.html",
    "NPC\enea.html",
    "NPC\gellis.html",
    "NPC\hugo.html",
    "NPC\ignus.html",
    "NPC\merion.html",
    "NPC\motieur.html",
    "NPC\narmer.html",
    "NPC\neera.html",
    "NPC\tibalt.html",
    "NPC\tonik.html",
    "NPC\treti.html",
    "NPC\zrzek.html"
)

$count = 0
$errors = @()

foreach ($relPath in $files) {
    $filePath = Join-Path $rootPath $relPath
    
    if (-not (Test-Path $filePath)) {
        $errors += "Soubor nenalezen: $filePath"
        continue
    }
    
    try {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        $originalContent = $content
        
        # 1. Změna CSS linku
        $content = $content -replace 'href="/druzinka\.css"', 'href="/css/druzinka2.css"'
        
        # 2. Změna div#mysidenav na nav#mysidenav
        $content = $content -replace '<div id="mysidenav" class="sidenav">', '<nav id="mysidenav" class="sidenav">'
        
        # 3. Odstranění div#main a změna struktury
        $content = $content -replace '<div id="main">\s*<header', '<header'
        $content = $content -replace '<body([^>]*)>\s*<div id="main">', '<body$1>'
        
        # Změna uzavíracího divu před obsah
        $content = $content -replace '</div>\s*</div>\s*<div class="obsah_subpage">', '</nav>
    <main>
        <div class="obsah_subpage">'
        
        # Pro roll.html nebo jiné speciální
        $content = $content -replace '</div>\s*</div>\s*<div class="new-map', '</nav>
    <main>
        <div class="new-map'
        
        # 4. Určit správnou cestu k nav.html
        $navPath = if ($relPath.Contains('\')) { "../nav.html" } else { "nav.html" }
        
        # 5. Přidat main tag a uzavření
        if ($content -match '(\s*)</div>\s*<div class="container" id="Ini"></div>') {
            $beforeScripts = $matches[1]
            $content = $content -replace '(\s*)</div>\s*<div class="container" id="Ini"></div>', "$beforeScripts    </main>
    <noscript>
        <nav>
            <iframe src=""$navPath""></iframe>
        </nav>
    </noscript>
    <div class=""container"" id=""Ini""></div>"
        }
        
        # Pro soubory bez standardní struktury
        if ($content -match '</div>\s*</div>\s*<script src="/nav\.js">') {
            $content = $content -replace '</div>\s*</div>\s*(<script src="/nav\.js">)', '    </main>
    <noscript>
        <nav>
            <iframe src="' + $navPath + '"></iframe>
        </nav>
    </noscript>
    <div class="container" id="Ini"></div>
    $1'
        }
        
        # 6. Přidat footer pokud chybí
        if ($content -notmatch '<footer>') {
            $content = $content -replace '(<script src="/nav\.js">)', '<footer><a href="/info.html">Jindřich "Aikin" Dušek</a> - Varka ©2025 -<script>var year = new Date();document.write(year.getFullYear());</script></footer>
    $1'
        }
        
        # 7. Upravit body třídu
        if ($content -match '<body>\s*$') {
            $content = $content -replace '<body>', '<body class="main-body">'
        } elseif ($content -match '<body>\s*<') {
            $content = $content -replace '<body>\s*<', '<body class="main-body">
    <'
        }
        
        # Uložit pouze pokud se změnil
        if ($content -ne $originalContent) {
            Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
            $count++
            Write-Host "✓ Upraven: $relPath" -ForegroundColor Green
        } else {
            Write-Host "- Beze změn: $relPath" -ForegroundColor Yellow
        }
        
    } catch {
        $errors += "Chyba při úpravě $relPath : $_"
        Write-Host "✗ Chyba: $relPath - $_" -ForegroundColor Red
    }
}

Write-Host "`n=== SHRNUTÍ ===" -ForegroundColor Cyan
Write-Host "Upraveno souborů: $count" -ForegroundColor Green
if ($errors.Count -gt 0) {
    Write-Host "Chyby ($($errors.Count)):" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
}
