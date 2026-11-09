# In Common

A static, client-side university break planner for GitHub Pages.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. No build step, backend, or package installation is required. To publish, enable GitHub Pages for the repository's `main` branch and root folder.

## University list and calendar data

The starter directory contains 50 well-known U.S. universities, alphabetized for discovery; it is a curated starting point, not a particular publisher's ranked top 50. Add any other school with **Add a university not listed**.

The planner includes official-source links for all 50 starter schools. In checks on November 8, 2026, 119 exact 2026–27 break or academic-calendar holiday dates were verified across 35 schools. Those entries are intentionally marked as partial because a checked source excerpt may omit other breaks; for 15 schools, a source link is provided but no exact date was verified in those checks. Some sources list holidays without specifying whether every class is canceled, or have program-specific calendars; source notes identify these cases. These gaps do not mean the schools have no breaks. The UI shows the verified dates and clearly marks incomplete or unverified calendars instead of guessing.

The bundled source data lives in `academic-calendars.js`. Break ranges use inclusive `start` and `end` dates (`YYYY-MM-DD`), with each school's official calendar URL, verification status, and check date recorded alongside its events.

The planner also renders July 2026 through June 2027 as a color-coded month grid. Muted dates have no selected-school break recorded, warm-colored dates show only some selected schools off, and green dates show all selected schools off. The school legend and selecting a date show exactly which schools and breaks are included; keyboard users can move between days with the arrow keys.

GitHub Pages is static hosting, so the browser does not crawl university sites live. There is no single reliable API for every institution, and calendar formats and update schedules vary. The bundled dataset should be checked against each official source when schools announce new academic years and when calendars change, usually each term. This can be maintained as a small data file without an API; automation can help collect candidate updates but cannot replace verification.

If an official calendar is not available in the bundled data, students can download that school's `.ics` calendar and import it, upload a `.csv`, or enter dates manually. CSV files must have a header row with `name`, `start`, and `end` columns; dates must use `YYYY-MM-DD`. Imports keep events whose names identify breaks, holidays, recess, vacation, reading days, or no-class days. All-day iCalendar `DTEND` values are treated as exclusive, as specified by the format. Only date-only `VEVENT` entries are currently supported.

Selected schools and imported or manually entered events are saved in that browser's local storage. They are not uploaded to a server and do not sync between people or devices. Each person can import dates from their own school's official calendar on the device they are using.

For a shared, pre-populated calendar dataset, dates would need to be collected from each school's official source, checked for the correct academic year, and updated on a schedule (for example, once per term). A scheduled job could publish a static JSON data file alongside the site; that still requires source-specific collection and human verification. An API is only useful where a school provides a stable, public feed.
