# Publish Mareva Playa to GitHub (Selgadis84)

Run from the project root after [GitHub CLI](https://cli.github.com/) is installed.

## One-time: sign in to GitHub

```powershell
gh auth login
```

Choose: **GitHub.com** → **HTTPS** → **Login with a web browser**  
Sign in as **Selgadis84** (selgadis84@gmail.com).

## Create repo and push

```powershell
cd d:\Personal\Mareva
.\scripts\publish-github.ps1
```

Or manually:

```powershell
gh repo create Selgadis84/mareva-playa --public --source=. --remote=origin --description "Mareva Playa hotel website — Astro static site (ES/EN)" --push
```

If the repo already exists on GitHub:

```powershell
git push -u origin main
```

**Repository URL:** https://github.com/Selgadis84/mareva-playa
