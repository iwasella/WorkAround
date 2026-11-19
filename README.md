# WorkAround

**Find the days your university breaks line up with your friends’ calendars.** WorkAround compares academic breaks and holidays across 56 U.S. universities for the 2026–27 school year.

Try the live planner: [iwasella.github.io/WorkAround](https://iwasella.github.io/WorkAround/)

## What you can do

- Select universities and see shared days off across their published breaks.
- View each university’s break dates alongside a year calendar.
- Share a comparison with a link, or save the link for later.
- Add missing dates manually or import a date-only `.ics` or `.csv` calendar.

Your selections and added dates are stored in your browser. WorkAround does not require an account or connect to university registration systems.

## Run locally

No build step or package installation is needed. Open `index.html` directly, or serve the project directory with any static file server. For example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Validate the calendar data

The project uses Node.js’s built-in test runner; it has no npm dependencies. Run the data and calendar-import checks with:

```sh
node --test
```

GitHub Actions runs this command on pushes and pull requests to `main`. A failed check prevents a Pages deployment.

## Calendar data and limitations

Calendar entries are bundled in [`academic-calendars.js`](academic-calendars.js) and link to official university sources. Coverage and dates may vary by campus, program, or course. Some entries are marked partial when the published source does not establish a complete calendar. Always confirm important dates with the university’s official calendar.

WorkAround is an independent planning tool, not an official university service. It does not sync calendars or automatically detect changes to university schedules.

## Suggest a correction

Dates may be inaccurate or become outdated. If you find a mistake or have a newer official source, feel free to make a PR thank u thank u thank u lol

## Deployment

The site is hosted on GitHub Pages. Pushes to `main` run the validation suite and, if it passes, deploy the static site. You can also start a deployment manually from the **Actions** tab with **Deploy static site to GitHub Pages**.

The sitemap is available at [`sitemap.xml`](https://iwasella.github.io/WorkAround/sitemap.xml). Search engines control whether and when pages appear in results.

## Automated calendar refresh

The `Update academic calendars` workflow runs every Monday at 08:00 UTC. It currently checks a small set of supported university pages, validates any resulting data changes, and opens a pull request for review. Unsupported page layouts are skipped with a warning. No API key or paid service is required.

To run it manually, open the repository’s **Actions** tab, choose **Update academic calendars**, select **Run workflow**, then confirm with **Run workflow**. If you later configure an updater that uses Gemini, add `GEMINI_API_KEY` under **Settings → Secrets and variables → Actions → New repository secret**; the current proof of concept does not use it.
