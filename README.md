# WorkAround

A university break planner, vibe coded by Ella with GitHub Copilot.

WorkAround compares published 2026–27 academic breaks and holidays across 56 U.S. universities, helping students find dates that overlap. It is an independent planning tool, not an official university calendar or a live sync service.

## Run locally

Open `index.html` in a browser or use any static file server. No build step or dependencies are required.

## Calendar data

Dates are bundled in `academic-calendars.js` and linked to official school calendar sources. Coverage can vary by program, and calendars are marked partial where dates may be missing. Check official sources for updates; universities do not share a single academic-calendar API.

Students can add dates manually or import date-only `.ics` or `.csv` calendars. Selections and imported dates stay in the current browser.

## Deploy and search

GitHub Actions deploys the site to [GitHub Pages](https://iwasella.github.io/WorkAround/) when changes are pushed to `main`. Search engines control indexing and rankings; submit `https://iwasella.github.io/WorkAround/sitemap.xml` in Google Search Console or Bing Webmaster Tools to request discovery.
