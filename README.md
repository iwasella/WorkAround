# WorkAround

A static, client-side university break planner for GitHub Pages.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. No build step, backend, or package installation is required. To publish, enable GitHub Pages for the repository's `main` branch and root folder.

## University list and calendar data

The starter directory contains 56 well-known U.S. universities, alphabetized for discovery; it is a curated starting point, not a particular publisher's ranked top 50. Add any other school with **Add a university not listed**.

The planner includes official-source links and at least one dated 2026–27 calendar entry for all 56 starter schools. In checks on November 9, 2026, 346 dated break, recess, inter-term, or academic-holiday entries were verified across all 56 schools. Every calendar remains marked partial because a checked source excerpt may omit other breaks; some schools publish program-specific calendars or active winter sessions instead of a winter break. Source notes identify these scope limits and cases where an event does not explicitly say whether every class is canceled. The UI shows the verified dates and source notes rather than treating missing dates as proof that no break exists.

The bundled source data lives in `academic-calendars.js`. Dates were manually transcribed from official registrar or college calendars, including published PDFs and dated events in official embedded calendar feeds. Recess dates were cross-checked against the source's stated resumption date when available. We include source-labeled breaks, recesses, explicit class-free holidays, and session gaps only when official term dates establish both boundaries; exceptions such as optional winter sessions or program-specific mini-sessions are called out. Residence closures and holidays without a class-cancellation statement are not assumed to be breaks. Division- or school-specific calendars are labeled as such. Break ranges use inclusive `start` and `end` dates (`YYYY-MM-DD`), with each school's official calendar URL, verification status, and check date recorded alongside its events.

The planner also renders July 2026 through June 2027 as a color-coded month grid. Muted dates have no selected-school break recorded, warm-colored dates show only some selected schools off, and green dates show all selected schools off. The school legend and selecting a date show exactly which schools and breaks are included; keyboard users can move between days with the arrow keys.

GitHub Pages is static hosting, so the browser does not crawl university sites live. There is no single reliable API for every institution; some schools publish PDFs, some use filter-based calendars or embedded event feeds, and formats and update schedules vary. The dates in this version were checked individually against the official sources, not imported from a single API. The bundled dataset should be checked against each official source when schools announce new academic years and when calendars change, usually each term. This can be maintained as a small data file without an API; automation can help collect candidate updates but cannot replace verification.

If an official calendar is not available in the bundled data, students can download that school's `.ics` calendar and import it, upload a `.csv`, or enter dates manually. CSV files must have a header row with `name`, `start`, and `end` columns; dates must use `YYYY-MM-DD`. Imports keep events whose names identify breaks, holidays, recess, vacation, reading days, or no-class days. All-day iCalendar `DTEND` values are treated as exclusive, as specified by the format. Only date-only `VEVENT` entries are currently supported.

Selected schools and imported or manually entered events are saved in that browser's local storage. They are not uploaded to a server and do not sync between people or devices. Each person can import dates from their own school's official calendar on the device they are using.

For a shared, pre-populated calendar dataset, dates would need to be collected from each school's official source, checked for the correct academic year, and updated on a schedule (for example, once per term). A scheduled job could publish a static JSON data file alongside the site; that still requires source-specific collection and human verification. An API is only useful where a school provides a stable, public feed.
