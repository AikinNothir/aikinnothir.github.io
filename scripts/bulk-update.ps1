# PowerShell skript pro hromadnou úpravu HTML souborů
$rootPath = "c:\Users\Fischa\Desktop\DnD - Web"

# Seznam souborů k úpravě (relativní cesty)
$files = @(
    "info.html",
    "cheatsheet.html",
    "bohove\adanos.html",
    "bohove\bane.html",
    "bohove\beliar.html",
    "bohove\bhaal.html",
    "bohove\ilmater.html",
    "bohove\innos.html",
    "bohove\magran.html",
    "bohove\myrkul.html",
    "bohove\panna.html",
    "bohove\posledni.html",
    "bohove\slepa.html",
    "bohove\woedika.html",
    "bohove\zkrouceny.html",
    "frakce\aloca.html",
    "frakce\ggg.html",
    "frakce\kultop.html",
    "frakce\lov.html",
    "frakce\straz.html",
    "frakce\straze_al-katu.html",
    "frakce\stribro.html"
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
        $content = $content -replace '</div>\s*</div>\s*<div class="obsah_subpage">', '</nav>
    <main>
        <div class="obsah_subpage">'
        
        # 3. Odstranění div#main - najít začátek a konec
        $content = $content -replace '<div id="main">\s*<header', '<header'
        $content = $content -replace '<body([^>]*)>\s*<div id="main">', '<body$1>'
        
        # 4. Určit správnou cestu k nav.html
        $navPath = if ($relPath.Contains('\')) { "../nav.html" } else { "nav.html" }
        
        # 5. Přidat main tag a uzavření před scripts
        # Najít pozici před scripts
        if ($content -match '(\s*)<div class="container" id="Ini"></div>') {
            $beforeScripts = $matches[1]
            $content = $content -replace '(\s*)</div>\s*<div class="container" id="Ini"></div>', "$beforeScripts    </main>
    <noscript>
        <nav>
            <iframe src=""$navPath""></iframe>
        </nav>
    </noscript>
    <div class=""container"" id=""Ini""></div>"
        }
        
        # 6. Přidat footer pokud chybí
        if ($content -notmatch '<footer>') {
            $content = $content -replace '(<div class="container" id="Ini"></div>)', '$1
    <footer><a href="/info.html">Jindřich "Aikin" Dušek</a> - Varka (toto je pouze demonstrativní část pro školní projekt)©<script>var year = new Date();document.write(year.getFullYear());</script></footer>'
        }
        
        # 7. Upravit body třídu
        if ($content -match '<body>\s*$') {
            $content = $content -replace '<body>', '<body class="main-body">'
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
        Write-Host "✗ Chyba: $relPath" -ForegroundColor Red
    }
}

Write-Host "`n=== SHRNUTÍ ===" -ForegroundColor Cyan
Write-Host "Upraveno souborů: $count" -ForegroundColor Green
if ($errors.Count -gt 0) {
    Write-Host "Chyby ($($errors.Count)):" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
}
