$paths = @(
    "C:\Program Files\nodejs\node.exe",
    "C:\Program Files\nodejs\npm.cmd",
    "C:\Program Files\nodejs\npx.cmd",
    "C:\Users\praso\AppData\Roaming\npm\vercel.cmd",
    "C:\Users\praso\AppData\Local\Programs\node\node.exe"
)

foreach ($p in $paths) {
    if (Test-Path $p) {
        Write-Host "FOUND: $p"
    }
}

$winget = Get-Command winget -ErrorAction SilentlyContinue
if ($winget) {
    Write-Host "WINGET_PATH: $($winget.Source)"
}
