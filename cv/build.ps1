# Rebuilds the CV PDFs from cv/cv-en.html and cv/cv-pt.html using headless Chrome.
# Usage:  powershell -ExecutionPolicy Bypass -File cv/build.ps1
$root   = Split-Path -Parent $PSScriptRoot
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) { $chrome = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" }

foreach ($lang in @("en", "pt")) {
  $src = Join-Path $PSScriptRoot "cv-$lang.html"
  $out = Join-Path $root "pedro-delgado-henriques-cv-$lang.pdf"
  & $chrome --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$out" "file:///$($src -replace '\','/')" 2>$null | Out-Null
  Write-Host "built $out"
}
