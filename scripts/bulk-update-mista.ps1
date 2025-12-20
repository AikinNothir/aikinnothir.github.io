# PowerShell skript pro hromadnou úpravu zbývajících HTML souborů
$rootPath = "c:\Users\Fischa\Desktop\DnD - Web"

# Získat všechny HTML soubory ve složkách mista/ a Spellbook/
$mistaFiles = Get-ChildItem -Path "$rootPath\mista" -Filter "*.html" -Recurse | Where-Object { $_.FullName -notlike "*vzorovy_web*" }
$spellbookFiles = Get-ChildItem -Path "$rootPath\Spellbook" -Filter "*.html" -Recurse

$allFiles = @($mistaFiles) + @($spellbookFiles)

$count = 0
$errors = @()

foreach ($file in $allFiles) {
    $filePath = $file.FullName
    $relPath = $filePath.Replace("$rootPath\", "")
    
    try {
        $content = Get-Content $filePath -Raw -Encoding UTF8
        $originalContent = $content
        
        # 1. Změna CSS linku
        $content = $content -replace 'href="/druzinka\.css"', 'href="/css/druzinka2.css"'
        
        # 2. Změna div#mysidenav na nav#mysidenav
        $content = $content -replace '<div id="mysidenav" class="sidenav">', '<nav id="mysidenav" class="sidenav">'
        
        # 3. Změna uzavíracího </div> na </nav> před obsah
        $content = $content -replace '</div>\s*</div>\s*<div class="obsah_subpage">', '</nav>
    <main>
        <div class="obsah_subpage">'
        
        # Pro Spellbook možná jiná struktura
        $content = $content -replace '</div>\s*</div>\s*<div class="cheatsheet', '</nav>
    <main>
        <div class="cheatsheet'
        
        # 4. Odstranění div#main
        $content = $content -replace '<div id="main">\s*<header', '<header'
        $content = $content -replace '<body([^>]*)>\s*<div id="main">', '<body$1>'
        
        # 5. Určit správnou cestu k nav.html (vždy relativní z podložek)
        $depth = ($relPath.Split('\').Count) - 1
        $navPath = "../" * $depth + "nav.html"
        
        # 6. Přidat main tag a uzavření
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
        
        # Pro soubory bez container#Ini
        if ($content -match '</div>\s*</div>\s*<script src="/nav\.js">') {
            $content = $content -replace '</div>\s*</div>\s*<script', '    </main>
    <noscript>
        <nav>
            <iframe src="' + $navPath + '"></iframe>
        </nav>
    </noscript>
    <div class="container" id="Ini"></div>
    <script'
        }
        
        # 7. Přidat footer pokud chybí
        if ($content -notmatch '<footer>') {
            $content = $content -replace '(<script src="/nav\.js">)', '<footer><a href="/info.html">Jindřich "Aikin" Dušek</a> - Varka (toto je pouze demonstrativní část pro školní projekt)©<script>var year = new Date();document.write(year.getFullYear());</script></footer>
    $1'
        }
        
        # 8. Upravit body třídu pokud je prázdná
        if ($content -match '<body>\s') {
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
        Write-Host "✗ Chyba: $relPath - $_" -ForegroundColor Red
    }
}

Write-Host "`n=== SHRNUTÍ ===" -ForegroundColor Cyan
Write-Host "Celkem souborů ke zpracování: $($allFiles.Count)" -ForegroundColor Cyan
Write-Host "Upraveno souborů: $count" -ForegroundColor Green
if ($errors.Count -gt 0) {
    Write-Host "Chyby ($($errors.Count)):" -ForegroundColor Red
    $errors | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
}
