$urls = @(
    "http://localhost:8080/",
    "http://localhost:8080/css/style.css",
    "http://localhost:8080/css/animations.css",
    "http://localhost:8080/js/data.js",
    "http://localhost:8080/js/hero-canvas.js",
    "http://localhost:8080/js/main.js",
    "http://localhost:8080/assets/images/prasobh-portrait.jpg",
    "http://localhost:8080/assets/images/project-aerospace-wing.svg",
    "http://localhost:8080/assets/images/project-turbine.svg",
    "http://localhost:8080/assets/images/project-gearbox.svg"
)

$allPassed = $true
foreach ($url in $urls) {
    try {
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 3
        if ($response.StatusCode -eq 200) {
            Write-Host "✅ [200 OK] $url ($($response.Content.Length) bytes, ContentType: $($response.Headers['Content-Type']))" -ForegroundColor Green
        } else {
            Write-Host "⚠️ [$($response.StatusCode)] $url" -ForegroundColor Yellow
            $allPassed = $false
        }
    } catch {
        Write-Host "❌ [FAIL] $url : $_" -ForegroundColor Red
        $allPassed = $false
    }
}

if ($allPassed) {
    Write-Host "`n🎉 ALL ASSETS & ENDPOINTS VERIFIED AND RESPONDING WITH 200 OK!" -ForegroundColor Cyan
} else {
    Write-Host "`n⚠️ SOME ENDPOINTS ENCOUNTERED ERRORS" -ForegroundColor Yellow
}
