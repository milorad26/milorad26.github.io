# milorad26.github.io

Personal portfolio of **Milorad Dakic**, Java Backend Developer.

Live: https://milorad26.github.io

## Stack

Plain HTML, CSS and vanilla JavaScript. No build step, no dependencies. GitHub Pages serves the repository root as is.

## Structure

```
index.html            single-page site (Home, About me, Experience, Education, Skills, Projects, Contact)
assets/style.css      styling (dark theme, responsive)
assets/main.js        nav highlighting, mobile menu, reveal-on-scroll
assets/CV_*.pdf       downloadable CV
```

## Local preview

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Updating

- Edit text directly in `index.html`.
- Replace `assets/CV_Milorad_Dakic.pdf` to update the CV.
- Push to `main`; GitHub Pages redeploys automatically.
