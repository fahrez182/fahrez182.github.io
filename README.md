# fahrez182.github.io

Static site for FRB Project, built with Vite and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

```bash
npm install
npm run dev
```

## Structure

| Path | Content |
|---|---|
| `index.html` | Home page |
| `redcorner/terms.html` | Red Corner Terms of Service |
| `redcorner/privacy.html` | Red Corner Privacy Policy |
| `src/partials/` | Shared header and footer, injected at build time via `<!-- include:name -->` |
| `src/styles/` | `main.css` (base) and `legal.css` (legal pages) |
| `public/` | Copied as-is to the site root (`app-ads.txt`) |

New pages must also be added to `build.rollupOptions.input` in `vite.config.js`.

## Pages setup

Repository Settings → Pages → Build and deployment → Source: **GitHub Actions**.
