import { readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";

const file = new URL("../academic-calendars.js", import.meta.url);
const targets = ["Arizona State University", "Boston College"];
const breakKinds = [
  { pattern: /fall\s+break/i, term: "Fall" },
  { pattern: /thanksgiving/i, term: "Fall" },
  { pattern: /winter\s+(?:break|recess)/i, term: "Winter" },
  { pattern: /spring\s+(?:break|recess|vacation)/i, term: "Spring" }
];
const monthNumbers = new Map("January February March April May June July August September October November December"
  .split(" ").map((month, index) => [month.toLowerCase(), index + 1]));

function readCalendar(source) {
  const context = { window: {} };
  vm.runInNewContext(source, context);
  return context.window.ACADEMIC_CALENDARS;
}

function plainText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&ndash;|&mdash;|&#8211;|&#8212;/gi, "-")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ").trim();
}

function rowTexts(html) {
  const chunks = [...html.matchAll(/<(tr|li)\b[^>]*>([\s\S]*?)<\/(?:tr|li)>/gi)].map((match) => match[2]);
  return chunks.map(plainText).filter(Boolean);
}

function dateSpan(text, school) {
  const month = "January|February|March|April|May|June|July|August|September|October|November|December";
  const range = new RegExp(`\\b(${month})\\.?\\s+(\\d{1,2})(?:,?\\s+(20\\d{2}))?(?:\\s*[-–—]\\s*(?:(${month})\\.?\\s+)?(\\d{1,2})(?:,?\\s+(20\\d{2}))?)?`, "i");
  const match = text.match(range);
  if (!match) return null;
  const startMonth = monthNumbers.get(match[1].toLowerCase());
  const endMonth = match[4] ? monthNumbers.get(match[4].toLowerCase()) : startMonth;
  let startYear = Number(match[3] ?? (startMonth < 8 ? "2027" : "2026"));
  let endYear = Number(match[6] ?? String(startYear));
  if (!match[6] && endMonth < startMonth) endYear += 1;
  const iso = (year, monthNumber, day) => `${year}-${String(monthNumber).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const start = iso(startYear, startMonth, Number(match[2]));
  const end = iso(endYear, endMonth, Number(match[5] ?? match[2]));
  const valid = (date) => {
    const parsed = new Date(`${date}T00:00:00Z`);
    return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
  };
  if (!valid(start) || !valid(end) || end < start) return null;
  // The selected feeds are for 2026-27; reject dates outside that academic year.
  if (start.slice(0, 4) < "2026" || start.slice(0, 4) > "2027" || end.slice(0, 4) > "2027") return null;
  return { start, end };
}

function eventDates(html, kind, school) {
  const candidates = rowTexts(html).filter((row) => kind.pattern.test(row)).map((row) => dateSpan(row, school)).filter(Boolean);
  const unique = [...new Map(candidates.map((date) => [`${date.start}/${date.end}`, date])).values()];
  return unique.length === 1 ? unique[0] : null;
}

let source = await readFile(file, "utf8");
const calendar = readCalendar(source);
let changed = false;
const checkedAt = new Date().toISOString().slice(0, 10);

for (const name of targets) {
  const school = calendar?.["2026-2027"]?.schools?.[name];
  if (!school) {
    console.warn(`Skipping ${name}: school is not present in the calendar data.`);
    continue;
  }
  try {
    const response = await fetch(school.sourceUrl, { headers: { "user-agent": "WorkAround-calendar-updater/1.0" }, signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    if (!/<(?:tr|li)\b/i.test(html)) throw new Error("no recognizable table or list entries");

    let schoolChanged = false;
    for (const kind of breakKinds) {
      const existing = school.events.filter((event) => event.term === kind.term && kind.pattern.test(event.name));
      if (!existing.length) continue;
      const dates = eventDates(html, kind, school);
      if (!dates) continue;
      // Only replace a date when exactly one existing event and one source row match.
      if (existing.length !== 1) continue;
      if (existing[0].start === dates.start && existing[0].end === dates.end) continue;
      Object.assign(existing[0], dates);
      schoolChanged = true;
    }
    if (schoolChanged) {
      school.checkedAt = checkedAt;
      changed = true;
      console.log(`Updated recognized break dates for ${name}.`);
    } else {
      console.warn(`Skipping ${name}: no unambiguous supported break dates were found.`);
    }
  } catch (error) {
    console.warn(`Skipping ${name}: ${error.message}`);
  }
}

if (changed) {
  source = source.replace(/window\.ACADEMIC_CALENDARS\s*=\s*/, "");
  source = `"use strict";\n\nwindow.ACADEMIC_CALENDARS = ${JSON.stringify(calendar, null, 2)};\n`;
  await writeFile(file, source);
  console.log("Saved academic-calendars.js.");
} else {
  console.log("No calendar data changed.");
}
