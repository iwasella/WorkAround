"use strict";

const STARTER_UNIVERSITIES = [
  "Arizona State University", "Boston College", "Boston University", "Brown University",
  "California Institute of Technology", "Carnegie Mellon University", "Case Western Reserve University",
  "Columbia University", "Cornell University", "Dartmouth College", "Duke University", "Emory University",
  "Florida State University", "Georgetown University", "Georgia Institute of Technology", "Harvard University",
  "Johns Hopkins University", "Massachusetts Institute of Technology", "New York University",
  "Northwestern University", "Ohio State University", "Princeton University", "Purdue University",
  "Rice University", "Stanford University", "Tufts University", "Tulane University",
  "University of California, Berkeley", "University of California, Davis", "University of California, Irvine",
  "University of California, Los Angeles", "University of California, San Diego",
  "University of California, Santa Barbara", "University of Chicago", "University of Florida",
  "University of Illinois Urbana-Champaign", "University of Michigan", "University of North Carolina at Chapel Hill",
  "University of Notre Dame", "University of Pennsylvania", "University of Rochester", "University of Southern California",
  "University of Texas at Austin", "University of Virginia", "University of Washington",
  "University of Wisconsin-Madison", "Vanderbilt University", "Wake Forest University",
  "Washington University in St. Louis", "Yale University"
];

const STORAGE_KEY = "in-common-planner-v1";
const ACADEMIC_YEAR = "2026-2027";
const ACADEMIC_YEAR_START = "2026-07-01";
const ACADEMIC_YEAR_END = "2027-06-30";
const SCHOOL_COLORS = [
  "#d4774c", "#607bb5", "#8a68a7", "#478c78", "#bf9b37", "#4d819e",
  "#b45d76", "#789047", "#98764c", "#6675a7", "#bd795e", "#647d6c"
];
const BREAK_WORDS = /\b(break|holiday|recess|vacation|reading days?|study days?|no classes|thanksgiving|winter|spring|fall)\b/i;
const state = loadState();
const schoolSearch = document.querySelector("#school-search");
const schoolResults = document.querySelector("#school-results");
const selectedSchools = document.querySelector("#selected-schools");
const overlapSummary = document.querySelector("#overlap-summary");
const overlapResults = document.querySelector("#overlap-results");
const schoolDialog = document.querySelector("#add-school-dialog");
const breakDialog = document.querySelector("#add-break-dialog");
let toastTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const schools = Array.isArray(saved.schools) ? saved.schools.filter((school) =>
      school && typeof school.id === "string" && typeof school.name === "string"
    ) : [];
    const events = Array.isArray(saved.events) ? saved.events.filter((event) =>
      event && typeof event.schoolId === "string" && typeof event.name === "string" &&
      isDate(event.start) && isDate(event.end) && event.start <= event.end
    ) : [];
    return { schools, events };
  } catch (error) {
    console.error("Could not read saved planner data.", error);
    return { schools: [], events: [] };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("Could not save planner data.", error);
    showToast("Couldn’t save changes in this browser.");
  }
}

function normalizeName(name) {
  return name.trim().replace(/\s+/g, " ").toLocaleLowerCase();
}

function schoolById(id) {
  return state.schools.find((school) => school.id === id);
}

function makeSchool(name, custom = false) {
  return { id: `school-${crypto.randomUUID()}`, name: name.trim(), custom };
}

function addSchool(name, custom = false) {
  const cleanName = name.trim().replace(/\s+/g, " ");
  if (!cleanName) return;
  const existing = state.schools.find((school) =>
    normalizeName(school.name) === normalizeName(cleanName)
  );
  if (existing) {
    showToast(`${existing.name} is already in your crew.`);
    return;
  }
  const school = makeSchool(cleanName, custom);
  state.schools.push(school);
  saveState();
  render();
  showToast(`${school.name} added.`);
}

function removeSchool(id) {
  const school = schoolById(id);
  if (!school) return;
  state.schools = state.schools.filter((entry) => entry.id !== id);
  state.events = state.events.filter((event) => event.schoolId !== id);
  saveState();
  render();
}

function isDate(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(new Date(`${value}T00:00:00Z`).getTime()) &&
    new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value;
}

function formatDate(value, options = { month: "short", day: "numeric", timeZone: "UTC" }) {
  return new Intl.DateTimeFormat(undefined, options).format(new Date(`${value}T00:00:00Z`));
}

function daysBetween(start, end) {
  const first = Date.parse(`${start}T00:00:00Z`);
  const last = Date.parse(`${end}T00:00:00Z`);
  return Math.round((last - first) / 86400000) + 1;
}

function renderSchoolResults() {
  const query = normalizeName(schoolSearch.value);
  const available = STARTER_UNIVERSITIES.filter((name) =>
    !state.schools.some((school) => normalizeName(school.name) === normalizeName(name)) &&
    normalizeName(name).includes(query)
  ).slice(0, 12);
  schoolResults.replaceChildren();
  if (!available.length) {
    const empty = document.createElement("p");
    empty.className = "result-empty";
    empty.textContent = query ? "No schools match. Add it below." : "All starter schools are in your crew.";
    schoolResults.append(empty);
    return;
  }
  for (const name of available) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "school-result";
    button.setAttribute("role", "option");
    const label = document.createElement("span");
    label.textContent = name;
    const plus = document.createElement("span");
    plus.setAttribute("aria-hidden", "true");
    plus.textContent = "+";
    button.append(label, plus);
    button.addEventListener("click", () => {
      addSchool(name);
      schoolSearch.value = "";
      renderSchoolResults();
    });
    schoolResults.append(button);
  }
}

function renderSelectedSchools() {
  selectedSchools.replaceChildren();
  document.querySelector("#selected-count").textContent =
    `${state.schools.length} selected`;
  if (!state.schools.length) {
    const empty = document.createElement("p");
    empty.className = "empty-selection";
    empty.textContent = "Your crew will show up here.";
    selectedSchools.append(empty);
    return;
  }
  for (const school of state.schools) {
    const chip = document.createElement("div");
    chip.className = "school-chip";
    const name = document.createElement("span");
    name.textContent = school.name;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.setAttribute("aria-label", `Remove ${school.name}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => removeSchool(school.id));
    chip.append(name, remove);
    selectedSchools.append(chip);
  }
}

function matchingEvents() {
  const selectedIds = new Set(state.schools.map((school) => school.id));
  return state.schools.flatMap((school) =>
    selectedIds.has(school.id) ? eventsForSchool(school) : []
  );
}

function calendarForSchool(school) {
  const record = window.ACADEMIC_CALENDARS?.[ACADEMIC_YEAR]?.schools?.[school.name];
  if (!record) return null;
  return {
    ...record,
    events: Array.isArray(record.events) ? record.events.filter((event) =>
      event && typeof event.name === "string" && isDate(event.start) && isDate(event.end) &&
      event.start <= event.end && event.end >= ACADEMIC_YEAR_START && event.start <= ACADEMIC_YEAR_END
    ) : []
  };
}

function eventsForSchool(school) {
  const official = calendarForSchool(school)?.events || [];
  const personal = state.events.filter((event) => event.schoolId === school.id);
  return [
    ...official.map((event) => ({ ...event, schoolId: school.id })),
    ...personal
  ]
    .filter((event) => event.end >= ACADEMIC_YEAR_START && event.start <= ACADEMIC_YEAR_END);
}

function renderSchoolCalendars() {
  const container = document.querySelector("#school-calendars");
  container.replaceChildren();
  if (!state.schools.length) return;

  const heading = document.createElement("div");
  heading.className = "calendar-list-heading";
  heading.textContent = "ACADEMIC BREAKS · 2026–27";
  container.append(heading);

  for (const school of state.schools) {
    const record = calendarForSchool(school);
    const events = eventsForSchool(school).sort((a, b) => a.start.localeCompare(b.start));
    const card = document.createElement("article");
    card.className = "school-calendar-card";
    const title = document.createElement("strong");
    title.textContent = school.name;
    card.append(title);

    if (events.length) {
      const list = document.createElement("ul");
      for (const event of events) {
        const item = document.createElement("li");
        const name = document.createElement("span");
        name.textContent = event.name;
        const dates = document.createElement("time");
        dates.dateTime = event.start;
        dates.textContent = event.start === event.end
          ? formatDate(event.start)
          : `${formatDate(event.start)} – ${formatDate(event.end)}`;
        item.append(name, dates);
        list.append(item);
      }
      card.append(list);
      if (record?.status === "partial") {
        const note = document.createElement("p");
        note.className = "calendar-unavailable";
        note.textContent = record.note || "Partial calendar: other breaks may not be verified yet.";
        card.append(note);
      }
    } else {
      const note = document.createElement("p");
      note.className = "calendar-unavailable";
      note.textContent = record?.note || (record?.status === "not-published"
        ? "Official calendar checked; 2026–27 break dates not posted."
        : record
          ? "No break dates verified from this calendar in this check."
          : "No verified 2026–27 calendar dates available.");
      card.append(note);
    }

    if (record?.sourceUrl) {
      const source = document.createElement("a");
      source.href = record.sourceUrl;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = "Official calendar ↗";
      source.className = "calendar-source";
      card.append(source);
    } else if (record?.source) {
      const source = document.createElement("a");
      source.href = record.source;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = "Official calendar ↗";
      source.className = "calendar-source";
      card.append(source);
    }
    if (record?.checkedAt) {
      const checked = document.createElement("span");
      checked.className = "calendar-checked";
      checked.textContent = `Checked ${record.checkedAt}`;
      card.append(checked);
    }
    container.append(card);
  }
}

function findOverlaps() {
  if (state.schools.length < 2) return [];
  const bySchool = state.schools.map((school) => ({
    school,
    events: matchingEvents().filter((event) => event.schoolId === school.id)
  }));
  if (bySchool.some(({ events }) => events.length === 0)) return [];

  const boundaries = [...new Set(bySchool.flatMap(({ events }) =>
    events.flatMap(({ start, end }) => [start, addDays(end, 1)])
  ))].sort();
  const overlaps = [];
  for (let index = 0; index < boundaries.length - 1; index += 1) {
    const start = boundaries[index];
    const end = addDays(boundaries[index + 1], -1);
    const covering = bySchool.map(({ school, events }) => ({
      school,
      events: events.filter((event) => event.start <= start && event.end >= start)
    }));
    if (covering.every(({ events }) => events.length)) {
      const last = overlaps[overlaps.length - 1];
      if (last && addDays(last.end, 1) === start) {
        last.end = end;
        last.eventNames = covering.map(({ events }, schoolIndex) => [
          ...new Set([
            ...last.eventNames[schoolIndex],
            ...events.map((event) => event.name)
          ])
        ]);
      } else {
        overlaps.push({
          start, end,
          eventNames: covering.map(({ events }) => events.map((event) => event.name))
        });
      }
    }
  }
  return overlaps;
}

function addDays(value, amount) {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0, 10);
}

function colorForSchool(index) {
  return SCHOOL_COLORS[index % SCHOOL_COLORS.length];
}

function buildCalendarCoverage() {
  const coverage = new Map();
  for (const [schoolIndex, school] of state.schools.entries()) {
    for (const event of eventsForSchool(school)) {
      const start = event.start < ACADEMIC_YEAR_START ? ACADEMIC_YEAR_START : event.start;
      const end = event.end > ACADEMIC_YEAR_END ? ACADEMIC_YEAR_END : event.end;
      for (let date = start; date <= end; date = addDays(date, 1)) {
        if (!coverage.has(date)) coverage.set(date, new Map());
        const schools = coverage.get(date);
        if (!schools.has(school.id)) {
          schools.set(school.id, { school, schoolIndex, events: [] });
        }
        const entry = schools.get(school.id);
        if (!entry.events.includes(event.name)) entry.events.push(event.name);
      }
    }
  }
  return coverage;
}

function renderCalendarLegend() {
  const legend = document.querySelector("#calendar-legend");
  legend.replaceChildren();
  if (!state.schools.length) {
    const empty = document.createElement("span");
    empty.className = "legend-empty";
    empty.textContent = "Select schools to color the calendar";
    legend.append(empty);
    return;
  }
  for (const [index, school] of state.schools.entries()) {
    const item = document.createElement("span");
    item.className = "legend-school";
    const swatch = document.createElement("span");
    swatch.className = "legend-swatch";
    swatch.style.setProperty("--school-color", colorForSchool(index));
    const name = document.createElement("span");
    name.textContent = school.name;
    item.append(swatch, name);
    legend.append(item);
  }
}

function renderCalendarDayDetail(date, dayCoverage) {
  const detail = document.querySelector("#calendar-day-detail");
  detail.replaceChildren();
  const star = document.createElement("span");
  star.className = "detail-star";
  star.setAttribute("aria-hidden", "true");
  star.textContent = "✳";
  detail.append(star);

  const copy = document.createElement("div");
  copy.className = "day-detail-copy";
  const heading = document.createElement("strong");
  heading.textContent = formatDate(date, {
    weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
  });
  copy.append(heading);
  const schoolEntries = [...(dayCoverage.get(date)?.values() || [])];
  const description = document.createElement("p");
  if (!schoolEntries.length) {
    description.textContent = "No selected school break is recorded for this date.";
  } else {
    description.textContent = schoolEntries.length === state.schools.length
      ? "Everyone is off."
      : `${schoolEntries.length} of ${state.schools.length} selected schools are off.`;
    const schoolList = document.createElement("ul");
    schoolList.className = "day-detail-schools";
    for (const entry of schoolEntries) {
      const item = document.createElement("li");
      const swatch = document.createElement("span");
      swatch.className = "legend-swatch";
      swatch.style.setProperty("--school-color", colorForSchool(entry.schoolIndex));
      const name = document.createElement("strong");
      name.textContent = entry.school.name;
      const events = document.createElement("span");
      events.textContent = entry.events.join(", ");
      item.append(swatch, name, events);
      schoolList.append(item);
    }
    copy.append(description, schoolList);
  }
  if (!schoolEntries.length) copy.append(description);
  detail.append(copy);
}

function renderCalendarView() {
  const months = document.querySelector("#calendar-months");
  months.replaceChildren();
  renderCalendarLegend();
  const coverage = buildCalendarCoverage();

  for (let monthIndex = 0; monthIndex < 12; monthIndex += 1) {
    const year = monthIndex < 6 ? 2026 : 2027;
    const month = monthIndex < 6 ? monthIndex + 6 : monthIndex - 6;
    const monthDate = new Date(Date.UTC(year, month, 1));
    const monthCard = document.createElement("section");
    monthCard.className = "month-card";
    const heading = document.createElement("h4");
    heading.id = `calendar-month-${year}-${month + 1}`;
    heading.textContent = new Intl.DateTimeFormat(undefined, {
      month: "long", year: "numeric", timeZone: "UTC"
    }).format(monthDate);
    monthCard.setAttribute("aria-labelledby", heading.id);
    monthCard.append(heading);

    const grid = document.createElement("div");
    grid.className = "month-grid";
    for (const weekday of ["S", "M", "T", "W", "T", "F", "S"]) {
      const label = document.createElement("span");
      label.className = "weekday-label";
      label.setAttribute("aria-hidden", "true");
      label.textContent = weekday;
      grid.append(label);
    }

    const firstWeekday = monthDate.getUTCDay();
    for (let blank = 0; blank < firstWeekday; blank += 1) {
      const spacer = document.createElement("span");
      spacer.className = "calendar-spacer";
      spacer.setAttribute("aria-hidden", "true");
      grid.append(spacer);
    }

    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const entries = [...(coverage.get(date)?.values() || [])];
      const isAllSchoolsOff = state.schools.length > 0 && entries.length === state.schools.length;
      const button = document.createElement("button");
      button.type = "button";
      button.className = `calendar-day ${entries.length ? (isAllSchoolsOff ? "is-all-off" : "is-partial-off") : "is-no-break"}`;
      button.dataset.date = date;
      button.tabIndex = day === 1 ? 0 : -1;
      button.setAttribute("aria-pressed", "false");
      const schoolNames = entries.map((entry) => entry.school.name);
      button.setAttribute("aria-label", schoolNames.length
        ? `${formatDate(date, { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}. ${isAllSchoolsOff ? "All selected schools are off" : `${schoolNames.length} of ${state.schools.length} selected schools are off`}: ${schoolNames.join(", ")}. Select for break details.`
        : `${formatDate(date, { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}. No selected school break recorded. Select for details.`);
      button.title = schoolNames.length ? schoolNames.join(", ") : "No selected school break recorded";
      const number = document.createElement("span");
      number.className = "calendar-day-number";
      number.textContent = String(day);
      button.append(number);
      if (entries.length) {
        const indicators = document.createElement("span");
        indicators.className = "calendar-day-indicators";
        indicators.setAttribute("aria-hidden", "true");
        for (const entry of entries.slice(0, 4)) {
          const dot = document.createElement("span");
          dot.style.setProperty("--school-color", colorForSchool(entry.schoolIndex));
          indicators.append(dot);
        }
        if (entries.length > 4) {
          const more = document.createElement("span");
          more.className = "indicator-more";
          more.textContent = "+";
          indicators.append(more);
        }
        button.append(indicators);
      } else {
        const spacer = document.createElement("span");
        spacer.className = "calendar-day-indicators empty-indicators";
        spacer.setAttribute("aria-hidden", "true");
        button.append(spacer);
      }
      button.addEventListener("click", () => {
        for (const selected of months.querySelectorAll(".calendar-day.is-selected")) {
          selected.classList.remove("is-selected");
          selected.setAttribute("aria-pressed", "false");
        }
        button.classList.add("is-selected");
        button.setAttribute("aria-pressed", "true");
        renderCalendarDayDetail(date, coverage);
      });
      button.addEventListener("keydown", (event) => {
        const offsets = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
        const offset = offsets[event.key];
        if (offset === undefined) return;
        event.preventDefault();
        const nextDate = addDays(date, offset);
        const nextButton = months.querySelector(`[data-date="${nextDate}"]`);
        if (nextButton) {
          button.tabIndex = -1;
          nextButton.tabIndex = 0;
          nextButton.focus();
        }
      });
      grid.append(button);
    }
    monthCard.append(grid);
    months.append(monthCard);
  }
}

function renderOverlaps() {
  overlapResults.replaceChildren();
  renderCalendarView();
  if (state.schools.length < 2) {
    overlapSummary.querySelector("strong").textContent = "Good plans start here.";
    overlapSummary.querySelector("p").textContent =
      "Add at least two schools and their break calendars to see what lines up.";
    return;
  }
  const events = matchingEvents();
  const schoolsWithoutBreaks = state.schools.filter((school) =>
    !events.some((event) => event.schoolId === school.id)
  );
  if (schoolsWithoutBreaks.length) {
    overlapSummary.querySelector("strong").textContent = "Some dates aren’t available yet.";
    overlapSummary.querySelector("p").textContent =
      `No verified 2026–27 break dates for ${schoolsWithoutBreaks.map((school) => school.name).join(", ")}. Add dates if you have the official calendar.`;
    return;
  }
  const overlaps = findOverlaps();
  if (!overlaps.length) {
    overlapSummary.querySelector("strong").textContent = "No shared break days found.";
    overlapSummary.querySelector("p").textContent =
      "The published break dates don’t overlap. Check the linked official calendars if you expected a match.";
    return;
  }
  const totalDays = overlaps.reduce((sum, overlap) => sum + daysBetween(overlap.start, overlap.end), 0);
  const hasIncompleteSource = state.schools.some((school) =>
    calendarForSchool(school)?.status !== "complete"
  );
  overlapSummary.querySelector("strong").textContent =
    `${totalDays} shared day${totalDays === 1 ? "" : "s"} found!`;
  overlapSummary.querySelector("p").textContent =
    hasIncompleteSource
      ? `Known overlap across ${overlaps.length} date range${overlaps.length === 1 ? "" : "s"}; some school calendar dates may be missing.`
      : `Across ${overlaps.length} date range${overlaps.length === 1 ? "" : "s"} when everyone is off.`;
  for (const overlap of overlaps) {
    const row = document.createElement("div");
    row.className = "overlap-item";
    const head = document.createElement("div");
    head.className = "overlap-item-head";
    const date = document.createElement("span");
    date.className = "overlap-date";
    date.textContent = overlap.start === overlap.end
      ? formatDate(overlap.start)
      : `${formatDate(overlap.start)} – ${formatDate(overlap.end)}`;
    const days = document.createElement("span");
    days.className = "overlap-days";
    const length = daysBetween(overlap.start, overlap.end);
    days.textContent = `${length} day${length === 1 ? "" : "s"}`;
    head.append(date, days);
    const meta = document.createElement("div");
    meta.className = "overlap-meta";
    meta.textContent = state.schools.map((school, index) =>
      `${school.name}: ${overlap.eventNames[index].join(", ")}`
    ).join(" · ");
    row.append(head, meta);
    overlapResults.append(row);
  }
}

function renderBreakSchoolOptions() {
  const select = document.querySelector("#break-school");
  const importSelect = document.querySelector("#import-school");
  select.replaceChildren();
  importSelect.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a university";
  importSelect.append(placeholder);
  for (const school of state.schools) {
    const option = document.createElement("option");
    option.value = school.id;
    option.textContent = school.name;
    select.append(option);
    const importOption = option.cloneNode(true);
    importSelect.append(importOption);
  }
}

function render() {
  renderSchoolResults();
  renderSelectedSchools();
  renderSchoolCalendars();
  renderOverlaps();
  renderBreakSchoolOptions();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function parseIcsDate(value) {
  const compact = value.trim().replace(/Z$/, "");
  const match = compact.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (!match) return null;
  return `${match[1]}-${match[2]}-${match[3]}`;
}

function parseIcs(text, schoolId) {
  const lines = text.replace(/\r\n/g, "\n").replace(/\n[ \t]/g, "").split("\n");
  const events = [];
  let event = null;
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      event = {};
    } else if (line === "END:VEVENT" && event) {
      const start = event.start;
      const end = event.end ? addDays(event.end, -1) : start;
      if (event.name && start && end && isDate(start) && isDate(end) && start <= end &&
          BREAK_WORDS.test(event.name)) {
        events.push({ schoolId, name: event.name, start, end });
      }
      event = null;
    } else if (event) {
      const match = line.match(/^(DTSTART|DTEND)(?:;[^:]*)?:(.+)$/);
      const summary = line.match(/^SUMMARY(?:;[^:]*)?:(.*)$/);
      if (match) event[match[1] === "DTSTART" ? "start" : "end"] = parseIcsDate(match[2]);
      if (summary) event.name = summary[1].replace(/\\([,;\\])/g, "$1").replace(/\\n/gi, " ").trim();
    }
  }
  return events;
}

function parseCsv(text, schoolId) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '"' && quoted && text[index + 1] === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(value.trim());
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      row.push(value.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      value = "";
      if (char === "\r" && text[index + 1] === "\n") index += 1;
    } else {
      value += char;
    }
  }
  row.push(value.trim());
  if (row.some(Boolean)) rows.push(row);
  if (rows.length < 2) return [];
  const header = rows[0].map((cell) => cell.toLowerCase().replace(/[\s_-]+/g, ""));
  const nameIndex = header.findIndex((cell) => ["name", "event", "title", "summary"].includes(cell));
  const startIndex = header.findIndex((cell) => ["start", "startdate", "dtstart"].includes(cell));
  const endIndex = header.findIndex((cell) => ["end", "enddate", "dtend"].includes(cell));
  if (nameIndex < 0 || startIndex < 0 || endIndex < 0) return [];
  return rows.slice(1).flatMap((cells) => {
    const name = cells[nameIndex];
    const start = cells[startIndex];
    const end = cells[endIndex];
    if (!name || !BREAK_WORDS.test(name) || !isDate(start) || !isDate(end) || start > end) return [];
    return [{ schoolId, name, start, end }];
  });
}

document.querySelector("#add-school-open").addEventListener("click", () => {
  document.querySelector("#new-school-name").value = "";
  schoolDialog.showModal();
  document.querySelector("#new-school-name").focus();
});
document.querySelector("#add-school-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addSchool(document.querySelector("#new-school-name").value, true);
  schoolDialog.close();
});
document.querySelector("#add-break-open").addEventListener("click", () => {
  if (!state.schools.length) {
    showToast("Add a university first.");
    schoolSearch.focus();
    return;
  }
  document.querySelector("#break-start").value = "";
  document.querySelector("#break-end").value = "";
  document.querySelector("#break-name").value = "";
  renderBreakSchoolOptions();
  breakDialog.showModal();
});
document.querySelector("#add-break-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const schoolId = document.querySelector("#break-school").value;
  const name = document.querySelector("#break-name").value.trim();
  const start = document.querySelector("#break-start").value;
  const end = document.querySelector("#break-end").value;
  if (!schoolById(schoolId) || !name || !isDate(start) || !isDate(end) || start > end) {
    showToast("Check the school and date range, then try again.");
    return;
  }
  state.events.push({ schoolId, name, start, end });
  saveState();
  breakDialog.close();
  render();
  showToast("Break dates saved.");
});
document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});
document.querySelector("#calendar-help").addEventListener("click", () => {
  document.querySelector("#calendar-sources").scrollIntoView({ behavior: "smooth" });
  document.querySelector("#calendar-sources details").open = true;
});
schoolSearch.addEventListener("input", renderSchoolResults);
schoolSearch.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    schoolSearch.focus();
  }
});
document.querySelector("#calendar-upload").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const schoolId = document.querySelector("#import-school").value;
  const selectedSchool = schoolById(schoolId);
  if (!selectedSchool) {
    showToast("Choose which university this calendar belongs to.");
    event.target.value = "";
    return;
  }
  try {
    const text = await file.text();
    const imported = /\.ics$/i.test(file.name)
      ? parseIcs(text, selectedSchool.id)
      : parseCsv(text, selectedSchool.id);
    if (!imported.length) {
      showToast("No break dates found. Check the file format and try again.");
      event.target.value = "";
      return;
    }
    const existing = new Set(state.events.map((entry) =>
      `${entry.schoolId}|${entry.name}|${entry.start}|${entry.end}`
    ));
    const unique = imported.filter((entry) => {
      const key = `${entry.schoolId}|${entry.name}|${entry.start}|${entry.end}`;
      if (existing.has(key)) return false;
      existing.add(key);
      return true;
    });
    state.events.push(...unique);
    saveState();
    render();
    showToast(`Imported ${unique.length} break date${unique.length === 1 ? "" : "s"} for ${selectedSchool.name}.`);
  } catch (error) {
    console.error("Could not read the selected calendar file.", error);
    showToast("Couldn’t read this file. Try another calendar export.");
  } finally {
    event.target.value = "";
  }
});

render();
