$git = "C:\Program Files\Git\cmd\git.exe"

# 1. Update Remote URL to the new repository
& $git remote set-url origin git@github.com:prasobhapuz-cmyk/portfolio.git

Write-Host "Configured Remotes:"
& $git remote -v

# 2. Stage and commit any outstanding changes
& $git add .
$status = & $git status --porcelain
if ($status) {
    & $git commit -m "Update portfolio code for prasobhapuz-cmyk/portfolio"
}

# 3. Push to the new GitHub repository
Write-Host "`nPushing to GitHub (git@github.com:prasobhapuz-cmyk/portfolio.git)..."
& $git push -u origin main
