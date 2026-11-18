"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const calendarContext = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "academic-calendars.js"), "utf8"), calendarContext);
const calendar = calendarContext.window.ACADEMIC_CALENDARS["2026-2027"];

function loadParsers() {
  const source = fs.readFileSync(path.join(root, "app.js"), "utf8");
  const start = source.indexOf("function parseIcsDate(value)");
  const end = source.indexOf('document.querySelector("#add-school-open")', start);
  assert.notEqual(start, -1, "ICS and CSV parsers exist in app.js");
  assert.notEqual(end, -1, "parser section has an end boundary");

  const sandbox = {
    BREAK_WORDS: /\b(break|holiday|recess|vacation|reading days?|study days?|no classes|thanksgiving|winter|spring|fall)\b/i,
    isDate(value) {
      return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
        !Number.isNaN(new Date(`${value}T00:00:00Z`).getTime()) &&
        new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value;
    },
    addDays(value, amount) {
      const date = new Date(`${value}T00:00:00Z`);
      date.setUTCDate(date.getUTCDate() + amount);
      return date.toISOString().slice(0, 10);
    }
  };
  vm.runInNewContext(`${source.slice(start, end)}\nglobalThis.parsers = { parseIcs, parseCsv };`, sandbox);
  return sandbox.parsers;
}

test("each university has required metadata and valid break dates", () => {
  assert.ok(calendar && calendar.schools, "2026–27 schools are present");
  const ids = new Set();

  for (const [schoolName, school] of Object.entries(calendar.schools)) {
    assert.equal(typeof schoolName, "string");
    assert.ok(schoolName.trim(), "school name is nonempty");
    // The object key is the stable school identifier in this data format.
    const id = school.id ?? schoolName;
    assert.equal(typeof id, "string", `${schoolName} has an identifier`);
    assert.ok(id.trim(), `${schoolName} identifier is nonempty`);
    assert.ok(!ids.has(id), `duplicate school identifier: ${id}`);
    ids.add(id);
    assert.ok(Array.isArray(school.events), `${schoolName} has a breaks/holidays array`);
    assert.match(school.sourceUrl, /^https:\/\//, `${schoolName} has an HTTPS source URL`);

    const entries = new Set();
    for (const event of school.events) {
      assert.equal(typeof event.name, "string", `${schoolName} break has a name`);
      assert.ok(event.name.trim(), `${schoolName} break name is nonempty`);
      for (const field of ["start", "end"]) {
        assert.match(event[field] ?? "", /^\d{4}-\d{2}-\d{2}$/, `${schoolName} ${event.name} ${field} is YYYY-MM-DD`);
        const date = new Date(`${event[field]}T00:00:00Z`);
        assert.ok(!Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === event[field],
          `${schoolName} ${event.name} ${field} is a real calendar date`);
      }
      assert.ok(event.end >= event.start, `${schoolName} ${event.name} ends on or after it starts`);
      const signature = JSON.stringify([event.name, event.start, event.end, event.term ?? ""]);
      assert.ok(!entries.has(signature), `${schoolName} has no duplicate break entry: ${event.name}`);
      entries.add(signature);
    }
  }
});

test("ICS parser handles valid dates, all-day exclusive end dates, and multi-day spans", () => {
  const { parseIcs } = loadParsers();
  const events = parseIcs([
    "BEGIN:VCALENDAR",
    "BEGIN:VEVENT",
    "SUMMARY:Spring Break",
    "DTSTART;VALUE=DATE:20270308",
    "DTEND;VALUE=DATE:20270313",
    "END:VEVENT",
    "BEGIN:VEVENT",
    "SUMMARY:Winter Recess",
    "DTSTART;VALUE=DATE:20261220",
    "DTEND;VALUE=DATE:20261221",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n"), "school-a");
  assert.deepEqual(JSON.parse(JSON.stringify(events)), [
    { schoolId: "school-a", name: "Spring Break", start: "2027-03-08", end: "2027-03-12" },
    { schoolId: "school-a", name: "Winter Recess", start: "2026-12-20", end: "2026-12-20" }
  ]);
});

test("ICS parser skips malformed dates and reversed spans and treats missing end as a single day", () => {
  const { parseIcs } = loadParsers();
  const text = [
    "BEGIN:VEVENT", "SUMMARY:Fall Break", "DTSTART;VALUE=DATE:20270230", "DTEND;VALUE=DATE:20270302", "END:VEVENT",
    "BEGIN:VEVENT", "SUMMARY:Winter Break", "DTSTART;VALUE=DATE:20261220", "END:VEVENT",
    "BEGIN:VEVENT", "SUMMARY:Spring Break", "DTSTART;VALUE=DATE:20270312", "DTEND;VALUE=DATE:20270310", "END:VEVENT",
    "BEGIN:VEVENT", "DTSTART;VALUE=DATE:20270308", "DTEND;VALUE=DATE:20270313", "END:VEVENT",
    "BEGIN:VEVENT", "SUMMARY:Fall Break", "DTEND;VALUE=DATE:20270313", "END:VEVENT"
  ].join("\n");
  assert.deepEqual(JSON.parse(JSON.stringify(parseIcs(text, "school-b"))), [
    { schoolId: "school-b", name: "Winter Break", start: "2026-12-20", end: "2026-12-20" }
  ]);
});

test("CSV parser handles quoted fields and multi-day spans", () => {
  const { parseCsv } = loadParsers();
  const events = parseCsv('Name,Start Date,End Date\n"Spring Break, Main Campus",2027-03-08,2027-03-12', "school-c");
  assert.deepEqual(JSON.parse(JSON.stringify(events)), [
    { schoolId: "school-c", name: "Spring Break, Main Campus", start: "2027-03-08", end: "2027-03-12" }
  ]);
});

test("CSV parser skips malformed dates, missing columns, and reversed spans", () => {
  const { parseCsv } = loadParsers();
  assert.deepEqual(JSON.parse(JSON.stringify(parseCsv("Name,Start,End\nFall Break,2027-02-30,2027-03-02", "school-d"))), []);
  assert.deepEqual(JSON.parse(JSON.stringify(parseCsv("Name,Start\nWinter Break,2026-12-20", "school-d"))), []);
  assert.deepEqual(JSON.parse(JSON.stringify(parseCsv("Name,Start,End\nSpring Break,2027-03-12,2027-03-10", "school-d"))), []);
  assert.deepEqual(JSON.parse(JSON.stringify(parseCsv("Name,Start,End", "school-d"))), []);
});
