# Publish to github.com/Selgadis84/mareva-playa
$ErrorActionPreference = "Stop"

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

Set-Location $PSScriptRoot\..

Write-Host "Checking GitHub authentication..."
gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Not logged in. Run: gh auth login"
    Write-Host "  - Account: Selgadis84 (selgadis84@gmail.com)"
    Write-Host "  - Protocol: HTTPS"
    Write-Host ""
    exit 1
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
    git remote add origin https://github.com/Selgadis84/mareva-playa.git
}

Write-Host "Creating repository (if needed) and pushing..."
gh repo create Selgadis84/mareva-playa --public --source=. --remote=origin `
    --description "Mareva Playa hotel website - Astro static site (ES/EN)" `
    --push

if ($LASTEXITCODE -ne 0) {
    Write-Host "Repo may already exist — trying push only..."
    git push -u origin main
}

Write-Host ""
Write-Host "Done: https://github.com/Selgadis84/mareva-playa"
