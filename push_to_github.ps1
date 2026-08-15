$git = "C:\Program Files\Git\cmd\git.exe"

# 1. Set Remote URL
$remotes = & $git remote
if ($remotes -contains "origin") {
    & $git remote set-url origin https://github.com/prasobhapuz-cmyk/prasobh-kumar-portfolio.git
} else {
    & $git remote add origin https://github.com/prasobhapuz-cmyk/prasobh-kumar-portfolio.git
}

Write-Host "Configured Remotes:"
& $git remote -v

# 2. Stage and commit any outstanding changes
& $git add .
$status = & $git status --porcelain
if ($status) {
    & $git commit -m "Update portfolio with Apple-style 300-frame hero sequence"
}

# 3. Rename branch to main
& $git branch -M main

# 4. Push to remote
Write-Host "`nPushing to GitHub (origin main)..."
& $git push -u origin main
