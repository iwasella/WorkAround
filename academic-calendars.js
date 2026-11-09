"use strict";

window.ACADEMIC_CALENDARS = {
  "2026-2027": {
    schools: {
      "Arizona State University": {
        status: "partial",
        sourceUrl: "https://registrar.asu.edu/academic-calendar",
        checkedAt: "2026-11-08",
        note: "The Winter entry is the gap between fall final exams and spring classes; course-session dates can vary, including some ASU Online/iCourse end dates.",
        events: [
          { name: "Fall Break · Classes excused", start: "2026-10-10", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving · Classes excused", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between terms", start: "2026-12-13", end: "2027-01-10", term: "Winter" },
          { name: "Holiday Break · Classes excused", start: "2026-12-24", end: "2026-12-25", term: "Winter" },
          { name: "Martin Luther King Jr. Day · Classes excused", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Break · Classes excused", start: "2027-03-07", end: "2027-03-14", term: "Spring" },
          { name: "Memorial Day · Classes excused", start: "2027-05-31", end: "2027-05-31", term: "Spring" }
        ]
      },
      "Boston College": {
        status: "partial",
        sourceUrl: "https://www.bc.edu/bc-web/offices/student-services/registrar/academic-calendar.html",
        checkedAt: "2026-11-09",
        note: "EventsBC confirms the listed dates. Fall Break excludes the Law School; Thanksgiving is listed as a holiday but the event does not explicitly say classes are canceled. A winter gap could not be bounded from accessible official class/exam dates.",
        events: [
          { name: "No Classes · Fall Break (except Law School)", start: "2026-10-12", end: "2026-10-12", term: "Fall" },
          { name: "Thanksgiving Holidays · official event", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Spring Vacation", start: "2027-03-08", end: "2027-03-13", term: "Spring" }
        ]
      },
      "Boston University": {
        status: "partial",
        sourceUrl: "https://www.bu.edu/reg/calendars/",
        checkedAt: "2026-11-08",
        note: "The Winter entry is bounded by the standard semester calendar's final-exam end and Spring class start; separate 7-week sessions may vary.",
        events: [
          { name: "Labor Day · Classes suspended", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Indigenous People’s Day · Classes suspended", start: "2026-10-12", end: "2026-10-12", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-19", end: "2027-01-18", term: "Winter" },
          { name: "MLK Jr. Day · Classes suspended", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Presidents’ Day · Classes suspended", start: "2027-02-15", end: "2027-02-15", term: "Spring" },
          { name: "Spring Recess", start: "2027-03-06", end: "2027-03-14", term: "Spring" },
          { name: "Patriots’ Day · Classes suspended", start: "2027-04-19", end: "2027-04-19", term: "Spring" }
        ]
      },
      "Brown University": {
        status: "partial",
        sourceUrl: "https://registrar.brown.edu/academic-calendar/2026-2027-academic-calendar",
        checkedAt: "2026-11-08",
        note: "Dates were transcribed from the official calendar's embedded LiveWhale event feeds. The winter break range is for students not enrolled in optional Wintersession courses, which run Dec 22–Jan 22.",
        events: [
          { name: "Indigenous Peoples’ Day · No University exercises", start: "2026-10-12", end: "2026-10-12", term: "Fall" },
          { name: "United States Election Day · No University exercises", start: "2026-11-03", end: "2026-11-03", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Students not enrolled in Wintersession", start: "2026-12-22", end: "2027-01-26", term: "Winter" },
          { name: "Martin Luther King, Jr. Holiday · No University exercises", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Long weekend · No University exercises", start: "2027-02-13", end: "2027-02-16", term: "Spring" },
          { name: "Spring Recess", start: "2027-03-27", end: "2027-04-04", term: "Spring" }
        ]
      },
      "California Institute of Technology": {
        status: "partial",
        sourceUrl: "https://catalog.caltech.edu/current/academic-calendar/",
        checkedAt: "2026-11-08",
        note: "No separate Fall Break is listed; the catalog labels Thanksgiving as an Institute holiday but does not state that classes are canceled.",
        events: [
          { name: "Thanksgiving · Institute holiday", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Recess", start: "2026-12-12", end: "2027-01-03", term: "Winter" },
          { name: "Spring Recess", start: "2027-03-20", end: "2027-03-28", term: "Spring" }
        ]
      },
      "Carnegie Mellon University": {
        status: "partial",
        sourceUrl: "https://www.cmu.edu/hub/calendar/docs/2627-academic-calendar.pdf",
        checkedAt: "2026-11-08",
        note: "Winter dates are the interval after the fall final/make-up exam period and before Spring classes; the calendar includes mini-course dates and has a separate CMU-Q calendar.",
        events: [
          { name: "Labor Day · University closed", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break · No classes", start: "2026-10-12", end: "2026-10-16", term: "Fall" },
          { name: "Democracy Day · No classes (evening classes after 5 p.m. meet)", start: "2026-11-03", end: "2026-11-03", term: "Fall" },
          { name: "Thanksgiving Break", start: "2026-11-25", end: "2026-11-28", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-16", end: "2027-01-18", term: "Winter" },
          { name: "Martin Luther King Jr. Day · University closed", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Spring Break · No classes", start: "2027-03-08", end: "2027-03-12", term: "Spring" }
        ]
      },
      "Case Western Reserve University": {
        status: "partial",
        sourceUrl: "https://case.edu/registrar/dates-deadlines/academic-calendar",
        checkedAt: "2026-11-08",
        note: "The inter-semester gap is bounded by final exams ending and Spring classes beginning. Calendar formula may not apply to every school, program, course, and teaching format; Thanksgiving dates are listed as holidays but not explicitly as no-class days.",
        events: [
          { name: "Fall Break", start: "2026-10-19", end: "2026-10-20", term: "Fall" },
          { name: "Thanksgiving Holidays", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-17", end: "2027-01-10", term: "Winter" },
          { name: "Spring Break", start: "2027-03-08", end: "2027-03-12", term: "Spring" }
        ]
      },
      "Columbia University": {
        status: "partial",
        sourceUrl: "https://registrar.columbia.edu/content/academic-calendar",
        checkedAt: "2026-11-09",
        note: "Dates are for Columbia College undergraduates selected in the official University Registrar calendar; other Columbia schools may have different dates. Winter Break follows Fall exams and ends before Spring classes.",
        events: [
          { name: "Labor Day", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Thanksgiving Recess · No classes", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · After Fall exams", start: "2026-12-24", end: "2027-01-18", term: "Winter" },
          { name: "Spring Recess", start: "2027-03-15", end: "2027-03-19", term: "Spring" }
        ]
      },
      "Cornell University": {
        status: "partial",
        sourceUrl: "https://registrar.cornell.edu/calendars-exams/academic-calendar/2026-2027",
        checkedAt: "2026-11-08",
        note: "Winter dates distinguish the regular-instruction gap from the active January Winter Session; session calendars can differ by school.",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break · No classes", start: "2026-10-10", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving Break · No classes", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Regular-Instruction Winter Gap · After finals; Winter Session courses vary", start: "2026-12-20", end: "2027-01-03", term: "Winter" },
          { name: "New Year’s Day · No classes", start: "2027-01-01", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Holiday · No classes", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "February Break · No classes", start: "2027-02-13", end: "2027-02-16", term: "Spring" },
          { name: "Spring Break · No classes", start: "2027-03-27", end: "2027-04-04", term: "Spring" }
        ]
      },
      "Dartmouth College": {
        status: "partial",
        sourceUrl: "https://registrar.dartmouth.edu/calendars/academic-institutional-calendars/2026-2027-key-dates",
        checkedAt: "2026-11-08",
        note: "Dartmouth uses terms. The inter-term ranges are bounded by official examination end and next-term instruction dates; Winter term is active Jan 5–Mar 9. MLK Day may have classes or rescheduled X hours.",
        events: [
          { name: "Fall-to-Winter Inter-Term Break · After Fall exams", start: "2026-11-26", end: "2027-01-04", term: "Winter" },
          { name: "Winter-to-Spring Inter-Term Gap · After Winter exams", start: "2027-03-17", end: "2027-03-28", term: "Spring" },
          { name: "Memorial Day · College Holiday (no classes held)", start: "2027-05-31", end: "2027-05-31", term: "Spring" }
        ]
      },
      "Duke University": {
        status: "partial",
        sourceUrl: "https://registrar.duke.edu/2026-2027-academic-calendar/",
        checkedAt: "2026-11-08",
        note: "Calendar covers Trinity, Pratt, Nicholas, Graduate, Sanford, and Nursing; Divinity, Fuqua, Law, Medicine, and Duke Kunshan use separate calendars. Break ranges begin the day after a stated evening start and end the day before classes resume.",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break", start: "2026-10-10", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-15", end: "2027-01-05", term: "Winter" },
          { name: "Martin Luther King Jr. Day · No classes", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Recess", start: "2027-03-06", end: "2027-03-14", term: "Spring" }
        ]
      },
      "Emory University": {
        status: "partial",
        sourceUrl: "https://registrar.emory.edu/_includes/documents/sections/academic-calendar/2026-2027-academic-calendar-dates-050525.pdf",
        checkedAt: "2026-11-08",
        note: "Multi-school calendar: Fall Break is listed for Emory College and Graduate Nursing; Thanksgiving and Winter dates vary by school. Winter break is for the regular undergraduate session; some programs hold January mini-sessions Jan 4–10.",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break", start: "2026-10-12", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving Recess · Emory College and Oxford", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Thanksgiving Recess · Several other schools", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Regular Session (mini-sessions vary)", start: "2026-12-20", end: "2027-01-10", term: "Winter" },
          { name: "Martin Luther King Holiday · No classes", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Break", start: "2027-03-08", end: "2027-03-12", term: "Spring" }
        ]
      },
      "Florida State University": {
        status: "partial",
        sourceUrl: "https://registrar.fsu.edu/fall-2026-academic-calendar",
        checkedAt: "2026-11-08",
        note: "The inter-semester gap is bounded by Fall Term end and Spring Term start. College of Law and College of Medicine use separate calendars.",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Veterans’ Day Observed · No classes", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Homecoming · No classes after noon", start: "2026-11-20", end: "2026-11-20", term: "Fall" },
          { name: "Thanksgiving Holiday · No classes", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between terms", start: "2026-12-12", end: "2027-01-05", term: "Winter" },
          { name: "Martin Luther King Jr. Day · No classes", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Break · No classes", start: "2027-03-15", end: "2027-03-19", term: "Spring" }
        ]
      },
      "Georgetown University": {
        status: "partial",
        sourceUrl: "https://registrar.georgetown.edu/main-campus-multi-year-academic-calendar/",
        checkedAt: "2026-11-08",
        note: "Main-campus undergraduate and graduate programs. Winter and spring recess ranges use published final-exam/class-return boundaries.",
        events: [
          { name: "Mid-Semester Holiday · No classes, University closed", start: "2026-10-12", end: "2026-10-12", term: "Fall" },
          { name: "Fall Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between terms", start: "2026-12-20", end: "2027-01-12", term: "Winter" },
          { name: "Spring Break", start: "2027-02-27", end: "2027-03-07", term: "Spring" },
          { name: "Easter Break", start: "2027-03-25", end: "2027-03-29", term: "Spring" }
        ]
      },
      "Georgia Institute of Technology": {
        status: "partial",
        sourceUrl: "https://registrar.gatech.edu/future-academic-calendar",
        checkedAt: "2026-11-08",
        note: "Dates are from the Registrar's 2026–27 future calendar. The Nov 26–27 Thanksgiving entries are labeled institute holidays but do not explicitly state classes are canceled; the bounded winter gap follows final exams.",
        events: [
          { name: "Fall Break · No classes", start: "2026-10-05", end: "2026-10-06", term: "Fall" },
          { name: "Student Recess · No classes", start: "2026-11-25", end: "2026-11-25", term: "Fall" },
          { name: "Thanksgiving · Official institute holiday", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-18", end: "2027-01-10", term: "Winter" },
          { name: "Winter Break · Official institute holiday", start: "2026-12-25", end: "2027-01-01", term: "Winter" },
          { name: "Spring Break", start: "2027-03-08", end: "2027-03-12", term: "Spring" }
        ]
      },
      "Harvard University": {
        status: "partial",
        sourceUrl: "https://registrar.fas.harvard.edu/calendars",
        checkedAt: "2026-11-08",
        note: "Dates are from the Harvard College calendar feed linked by the FAS Registrar. Wintersession runs Jan 15–24 during the published Winter Recess; GSAS and TAP calendars are separate.",
        events: [
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Recess · Wintersession overlaps", start: "2026-12-20", end: "2027-01-24", term: "Winter" },
          { name: "Spring Recess", start: "2027-03-13", end: "2027-03-21", term: "Spring" }
        ]
      },
      "Johns Hopkins University": {
        status: "partial",
        sourceUrl: "https://registrar.jhu.edu/academic-calendar/",
        checkedAt: "2026-11-08",
        note: "Calendar is division-specific. Fall Recess dates shown for the main undergraduate divisions (KSAS and Whiting); Fall Break is marked division-specific, and Winter Intersession is active Jan 4–22. Verify the student's division.",
        events: [
          { name: "Fall Recess · Main undergraduate divisions", start: "2026-11-23", end: "2026-11-27", term: "Fall" },
          { name: "Spring Break · University Standard calendar", start: "2027-03-22", end: "2027-03-26", term: "Spring" }
        ]
      },
      "Louisiana State University": {
        status: "partial",
        sourceUrl: "https://www.lsu.edu/registrar/academics/academic-calendars/2026-2027/2026-2027-academic-calendar.php",
        checkedAt: "2026-11-09",
        note: "Main-campus academic calendar. Thanksgiving begins at 12:30 p.m. Nov 25, and Mardi Gras classes resume at 12:30 p.m. Feb 10; the calendar grid marks those dates as full days. Winter intersession classes run Dec 14–Jan 6, with a holiday closure Dec 24–Jan 3.",
        events: [
          { name: "Labor Day Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Holiday", start: "2026-10-08", end: "2026-10-09", term: "Fall" },
          { name: "Thanksgiving Holiday · Begins 12:30 p.m. Nov 25", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Holiday · Intersession courses resume Jan 4", start: "2026-12-24", end: "2027-01-03", term: "Winter" },
          { name: "Winter Break · After intersession exams", start: "2027-01-07", end: "2027-01-10", term: "Winter" },
          { name: "Martin Luther King Jr. Day Holiday", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Mardi Gras Holiday · Classes resume 12:30 p.m. Feb 10", start: "2027-02-08", end: "2027-02-10", term: "Spring" },
          { name: "Spring Break", start: "2027-03-08", end: "2027-03-12", term: "Spring" },
          { name: "Good Friday Holiday", start: "2027-03-26", end: "2027-03-26", term: "Spring" }
        ]
      },
      "Loyola University New Orleans": {
        status: "partial",
        sourceUrl: "https://academicaffairs.loyno.edu/registrars-office/academic-calendars",
        checkedAt: "2026-11-09",
        note: "Undergraduate/graduate full-semester calendars. Separate 8-week and online sessions may follow different dates; winter break is between Fall exams and Spring classes.",
        events: [
          { name: "Labor Day Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break Holidays", start: "2026-10-12", end: "2026-10-13", term: "Fall" },
          { name: "Election Day · No classes", start: "2026-11-03", end: "2026-11-03", term: "Fall" },
          { name: "Thanksgiving Holidays", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · After Fall exams", start: "2026-12-12", end: "2027-01-18", term: "Winter" },
          { name: "Martin Luther King Jr.'s Birthday Holiday", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Mardi Gras Holiday", start: "2027-02-08", end: "2027-02-12", term: "Spring" },
          { name: "Easter Holidays", start: "2027-03-25", end: "2027-03-29", term: "Spring" }
        ]
      },
      "Massachusetts Institute of Technology": {
        status: "partial",
        sourceUrl: "https://registrar.mit.edu/calendar",
        checkedAt: "2026-11-08",
        note: "The calendar labels Fall holidays but does not state that classes are canceled. The winter gap is after Fall exams and before January IAP; IAP runs Jan 4–29 and is active academic programming.",
        events: [
          { name: "Indigenous Peoples’ Day · Calendar holiday", start: "2026-10-12", end: "2026-10-12", term: "Fall" },
          { name: "Veterans Day · Calendar holiday", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving · Calendar holiday", start: "2026-11-26", end: "2026-11-26", term: "Fall" },
          { name: "Institute Holiday", start: "2026-11-27", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between Fall exams and IAP", start: "2026-12-19", end: "2027-01-03", term: "Winter" },
          { name: "Spring Break", start: "2027-03-22", end: "2027-03-26", term: "Spring" }
        ]
      },
      "New York University": {
        status: "partial",
        sourceUrl: "https://www.nyu.edu/students/student-information-and-resources/registration-records-and-graduation/academic-calendar.html",
        checkedAt: "2026-11-08",
        note: "The central University calendar lists Fall, January Term, and Spring dates. January Term classes run Jan 4–15, so the gap to Spring classes is separate from the December/January Winter Recess.",
        events: [
          { name: "Fall Break", start: "2026-10-12", end: "2026-10-12", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Recess for Students", start: "2026-12-23", end: "2027-01-01", term: "Winter" },
          { name: "Winter Break · Between January Term and Spring", start: "2027-01-16", end: "2027-01-24", term: "Winter" },
          { name: "Spring Break", start: "2027-03-15", end: "2027-03-19", term: "Spring" }
        ]
      },
      "Northwestern University": {
        status: "partial",
        sourceUrl: "https://www.registrar.northwestern.edu/calendars/academic-calendars/",
        checkedAt: "2026-11-08",
        note: "Thanksgiving vacation starts Nov 25 at 6 p.m.; Spring classes resume Mar 30. The winter gap follows Fall exams and ends before Winter Quarter classes begin; University office closure dates alone are not treated as student breaks.",
        events: [
          { name: "Thanksgiving Vacation · No classes (from 6 p.m. Nov 25)", start: "2026-11-26", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between quarters", start: "2026-12-13", end: "2027-01-03", term: "Winter" },
          { name: "Spring Break · published begins/ends", start: "2027-03-20", end: "2027-03-29", term: "Spring" }
        ]
      },
      "Ohio State University": {
        status: "partial",
        sourceUrl: "https://registrar.osu.edu/academic-calendar/academic-calendar-5-year-view-2023-2028/",
        checkedAt: "2026-11-08",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Autumn Break · No classes", start: "2026-10-15", end: "2026-10-16", term: "Fall" },
          { name: "Veterans Day observed · No classes", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Break begins · No classes", start: "2026-11-25", end: "2026-11-25", term: "Fall" },
          { name: "Thanksgiving Day · No classes", start: "2026-11-26", end: "2026-11-26", term: "Fall" },
          { name: "Thanksgiving Holiday · No classes", start: "2026-11-27", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-18", end: "2027-01-10", term: "Winter" },
          { name: "Academic Winter Recess", start: "2026-12-28", end: "2026-12-31", term: "Winter" },
          { name: "Martin Luther King Jr. Day · No classes", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Break", start: "2027-03-15", end: "2027-03-19", term: "Spring" }
        ]
      },
      "Princeton University": {
        status: "partial",
        sourceUrl: "https://registrar.princeton.edu/academic-calendar-and-deadlines",
        checkedAt: "2026-11-09",
        note: "Winter gap is bounded by the official fall final-assessment end and Spring class start. A Spring Recess date was not exposed in the accessible Registrar calendar.",
        events: [
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-23", end: "2027-01-24", term: "Winter" }
        ]
      },
      "Purdue University": {
        status: "partial",
        sourceUrl: "https://www.purdue.edu/registrar/calendars/academic/",
        checkedAt: "2026-11-08",
        note: "Main Registrar calendar includes an active Winter Term Dec 21–Jan 8; the Dec 28–30 entry is a University closure, not a term-wide student break.",
        events: [
          { name: "Fall Break", start: "2026-10-12", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving Break", start: "2026-11-25", end: "2026-11-28", term: "Fall" },
          { name: "Winter Recess · University closed", start: "2026-12-28", end: "2026-12-30", term: "Winter" },
          { name: "Spring Break", start: "2027-03-15", end: "2027-03-20", term: "Spring" }
        ]
      },
      "Rice University": {
        status: "partial",
        sourceUrl: "https://registrar.rice.edu/calendars/fall-semester-2026",
        checkedAt: "2026-11-08",
        note: "Winter gap is the interval between the published Fall Semester end and Spring classes. Spring dates are from the Registrar's Spring 2027 calendar.",
        events: [
          { name: "Labor Day · Holiday, no scheduled classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Midterm Recess · No scheduled classes", start: "2026-10-12", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving Recess · No scheduled classes", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-16", end: "2027-01-10", term: "Winter" },
          { name: "Martin Luther King Jr. Day · Holiday, no scheduled classes", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Recess · No scheduled classes", start: "2027-02-11", end: "2027-02-12", term: "Spring" },
          { name: "Spring Break · No scheduled classes", start: "2027-03-13", end: "2027-03-21", term: "Spring" }
        ]
      },
      "Stanford University": {
        status: "partial",
        sourceUrl: "https://studentservices.stanford.edu/calendar-events/academic-calendars/stanford-academic-calendar-2026-2027",
        checkedAt: "2026-11-08",
        note: "Quarter calendar. Autumn events are labeled Fall for consistency. Spring dates between Winter final exams and Spring instruction are a bounded interquarter gap, not a source-labeled Spring Break; Law, GSB, and MD have stated exceptions.",
        events: [
          { name: "Yom Kippur · No classes", start: "2026-09-21", end: "2026-09-21", term: "Fall" },
          { name: "Thanksgiving Recess · No classes", start: "2026-11-23", end: "2026-11-27", term: "Fall" },
          { name: "Winter Closure", start: "2026-12-19", end: "2027-01-03", term: "Winter" },
          { name: "Winter Break · Between quarters", start: "2026-12-12", end: "2027-01-03", term: "Winter" },
          { name: "Martin Luther King Jr. Day · Holiday, no classes", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Presidents’ Day · No classes (Law holds classes)", start: "2027-02-15", end: "2027-02-15", term: "Winter" },
          { name: "Winter-to-Spring Inter-Quarter Gap · After finals", start: "2027-03-20", end: "2027-03-28", term: "Spring" }
        ]
      },
      "Tufts University": {
        status: "partial",
        sourceUrl: "https://students.tufts.edu/registrar/courses-and-calendars/academic-calendar",
        checkedAt: "2026-11-09",
        note: "Arts and Sciences, Engineering, and SMFA calendar. Dates were read from the official embedded Trumba feed; no separate Fall Break is listed. Winter gap follows Fall final exams and ends before Spring classes.",
        events: [
          { name: "Veterans’ Day · University Holiday, no classes", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Recess · No classes", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · After final exams", start: "2026-12-24", end: "2027-01-19", term: "Winter" },
          { name: "Presidents’ Day · No classes", start: "2027-02-15", end: "2027-02-15", term: "Spring" },
          { name: "Spring Recess", start: "2027-03-20", end: "2027-03-28", term: "Spring" }
        ]
      },
      "Tulane University": {
        status: "partial",
        sourceUrl: "https://registrar.tulane.edu/academic-calendars/undergraduate",
        checkedAt: "2026-11-08",
        note: "Undergraduate calendar covers Newcomb-Tulane College, Nursing, and SoPA; Law and Graduate Business use separate calendars. Winter gap follows Fall exams and ends before Spring classes.",
        events: [
          { name: "Labor Day Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break", start: "2026-10-01", end: "2026-10-04", term: "Fall" },
          { name: "Thanksgiving Break", start: "2026-11-23", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · After Fall exams", start: "2026-12-13", end: "2027-01-10", term: "Winter" },
          { name: "Martin Luther King Jr. Holiday", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Mardi Gras Holiday", start: "2027-02-08", end: "2027-02-09", term: "Winter" },
          { name: "Spring Break", start: "2027-03-20", end: "2027-03-28", term: "Spring" }
        ]
      },
      "University of California, Berkeley": {
        status: "partial",
        sourceUrl: "https://registrar.berkeley.edu/wp-content/uploads/UCB_AcademicCalendar_2026-27_a11y.pdf",
        checkedAt: "2026-11-08",
        note: "Traditional campus calendar. Winter gap is the post-exam, pre-instruction period; Spring Semester begins Jan 12 but Spring instruction starts Jan 19. Dec 24–25 and Dec 31–Jan 1 holidays are marked pending approval in the PDF.",
        events: [
          { name: "Labor Day · Academic and Administrative Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Veterans Day · Academic and Administrative Holiday", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Non-Instructional Day", start: "2026-11-25", end: "2026-11-25", term: "Fall" },
          { name: "Academic and Administrative Holiday", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between terms", start: "2026-12-19", end: "2027-01-18", term: "Winter" },
          { name: "Winter Holiday · Pending approval", start: "2026-12-24", end: "2026-12-25", term: "Winter" },
          { name: "New Year Holiday · Pending approval", start: "2026-12-31", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Day · Academic and Administrative Holiday", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Presidents’ Day · Academic and Administrative Holiday", start: "2027-02-15", end: "2027-02-15", term: "Spring" },
          { name: "Spring Recess", start: "2027-03-22", end: "2027-03-25", term: "Spring" },
          { name: "Spring Holiday · Academic and Administrative Holiday", start: "2027-03-26", end: "2027-03-26", term: "Spring" }
        ]
      },
      "University of California, Davis": {
        status: "partial",
        sourceUrl: "https://registrar.ucdavis.edu/calendar/academic-calendar",
        checkedAt: "2026-11-08",
        note: "Official quarter calendar. Winter and Spring inter-quarter gaps are bounded by published finals and instruction dates; there is no separate in-quarter Winter Break or named Spring Break.",
        events: [
          { name: "Veterans Day Holiday", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Holiday", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between quarters", start: "2026-12-12", end: "2027-01-03", term: "Winter" },
          { name: "Winter Holiday", start: "2026-12-24", end: "2026-12-25", term: "Winter" },
          { name: "New Year’s Holiday", start: "2026-12-31", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Holiday", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "President’s Day Holiday", start: "2027-02-15", end: "2027-02-15", term: "Winter" },
          { name: "Winter-to-Spring Inter-Quarter Gap · After finals", start: "2027-03-20", end: "2027-03-28", term: "Spring" },
          { name: "Farmworkers Day", start: "2027-03-26", end: "2027-03-26", term: "Spring" },
          { name: "Memorial Day Holiday", start: "2027-05-31", end: "2027-05-31", term: "Spring" },
          { name: "Juneteenth Holiday", start: "2027-06-18", end: "2027-06-18", term: "Spring" }
        ]
      },
      "University of California, Irvine": {
        status: "partial",
        sourceUrl: "https://reg.uci.edu/calendars/quarterly/2026-2027/calendar26-27.pdf",
        checkedAt: "2026-11-08",
        note: "General quarterly calendar revised Oct 29, 2026; the School of Law has a separate calendar. Winter quarter is active Jan 4–Mar 12.",
        events: [
          { name: "Veterans Day", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Holiday", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break", start: "2026-12-14", end: "2027-01-01", term: "Winter" },
          { name: "Winter Administrative Recess · Campus offices closed", start: "2026-12-24", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Holiday", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Presidents’ Day", start: "2027-02-15", end: "2027-02-15", term: "Winter" },
          { name: "Spring Break", start: "2027-03-22", end: "2027-03-26", term: "Spring" },
          { name: "Farmworkers Day", start: "2027-03-26", end: "2027-03-26", term: "Spring" }
        ]
      },
      "University of California, Los Angeles": {
        status: "partial",
        sourceUrl: "https://registrar.ucla.edu/portals/50/documents/calendar/academiccalendar26-27.pdf",
        checkedAt: "2026-11-08",
        note: "The annual calendar lists holidays and quarter dates but no named Fall or Spring Break. Inter-quarter gaps use published final-exam end and next instruction dates; Winter campus closure is listed as December TBD.",
        events: [
          { name: "Veterans Day Holiday", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Holiday", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between quarters", start: "2026-12-12", end: "2027-01-03", term: "Winter" },
          { name: "Christmas Holiday", start: "2026-12-24", end: "2026-12-25", term: "Winter" },
          { name: "New Year Holiday", start: "2026-12-31", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Holiday", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Presidents’ Day Holiday", start: "2027-02-15", end: "2027-02-15", term: "Winter" },
          { name: "Winter-to-Spring Inter-Quarter Gap · After finals", start: "2027-03-20", end: "2027-03-28", term: "Spring" },
          { name: "Farmworkers Day Holiday", start: "2027-03-26", end: "2027-03-26", term: "Spring" },
          { name: "Memorial Day Holiday", start: "2027-05-31", end: "2027-05-31", term: "Spring" }
        ]
      },
      "University of California, San Diego": {
        status: "partial",
        sourceUrl: "https://blink.ucsd.edu/instructors/resources/academic/calendars/2026.html",
        checkedAt: "2026-11-08",
        note: "Academic and Administrative Calendar: Winter Quarter is active Jan 4–Mar 12; Spring inter-quarter dates are after Winter Quarter ends and before Spring instruction begins.",
        events: [
          { name: "Veterans Day Holiday", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Holiday", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between quarters", start: "2026-12-13", end: "2027-01-03", term: "Winter" },
          { name: "Winter Break", start: "2026-12-24", end: "2026-12-25", term: "Winter" },
          { name: "New Year Holiday", start: "2026-12-31", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Holiday", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Presidents’ Day Holiday", start: "2027-02-15", end: "2027-02-15", term: "Winter" },
          { name: "Winter-to-Spring Inter-Quarter Gap · After finals", start: "2027-03-21", end: "2027-03-28", term: "Spring" },
          { name: "Farmworkers Day Holiday", start: "2027-03-26", end: "2027-03-26", term: "Spring" },
          { name: "Memorial Day observance", start: "2027-05-31", end: "2027-05-31", term: "Spring" }
        ]
      },
      "University of California, Santa Barbara": {
        status: "partial",
        sourceUrl: "https://registrar.sa.ucsb.edu/calendars/academic-calendars",
        checkedAt: "2026-11-08",
        note: "Dates are from the Registrar's official embedded academic-calendar report. Winter and Spring Break are explicitly labeled in the report.",
        events: [
          { name: "Veterans Day", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between quarters", start: "2026-12-12", end: "2027-01-03", term: "Winter" },
          { name: "Christmas", start: "2026-12-24", end: "2026-12-25", term: "Winter" },
          { name: "New Year’s Holiday", start: "2026-12-31", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Day", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Spring Break", start: "2027-03-20", end: "2027-03-28", term: "Spring" },
          { name: "Memorial Day", start: "2027-05-31", end: "2027-05-31", term: "Spring" }
        ]
      },
      "University of Chicago": {
        status: "partial",
        sourceUrl: "https://www.uchicago.edu/academics/academic-calendar",
        checkedAt: "2026-11-08",
        note: "Quarter dates are from the official academic-year calendar; reading periods and final-exam dates are specifically labeled College. Winter and Spring inter-quarter gaps are bounded by quarter dates.",
        events: [
          { name: "Thanksgiving Break", start: "2026-11-23", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between quarters", start: "2026-12-13", end: "2027-01-03", term: "Winter" },
          { name: "Winter-to-Spring Inter-Quarter Gap", start: "2027-03-14", end: "2027-03-21", term: "Spring" }
        ]
      },
      "University of Florida": {
        status: "partial",
        sourceUrl: "https://catalog.ufl.edu/UGRD/dates-deadlines/2026-2027/",
        checkedAt: "2026-11-08",
        note: "Undergraduate Catalog. Winter gap is bounded by the Fall final-exam end and Spring class start; Dec 25–Jan 1 is an official University closure.",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Homecoming · No classes", start: "2026-10-09", end: "2026-10-10", term: "Fall" },
          { name: "Veterans Day · No classes", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Break", start: "2026-11-23", end: "2026-11-28", term: "Fall" },
          { name: "Reading Days · No classes", start: "2026-12-03", end: "2026-12-04", term: "Fall" },
          { name: "Winter Break · After Fall finals", start: "2026-12-12", end: "2027-01-10", term: "Winter" },
          { name: "Winter Holiday · University closed", start: "2026-12-25", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Day · No classes", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Break", start: "2027-03-13", end: "2027-03-20", term: "Spring" },
          { name: "Reading Days · No classes", start: "2027-04-22", end: "2027-04-23", term: "Spring" }
        ]
      },
      "University of Illinois Urbana-Champaign": {
        status: "partial",
        sourceUrl: "https://www.registrar.illinois.edu/fall-2026-academic-calendar/",
        checkedAt: "2026-11-08",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break · No instruction", start: "2026-11-21", end: "2026-11-29", term: "Fall" },
          { name: "Christmas Day · No classes", start: "2026-12-25", end: "2026-12-25", term: "Winter" },
          { name: "New Year’s Day · No classes", start: "2027-01-01", end: "2027-01-01", term: "Winter" },
          { name: "Martin Luther King Jr. Day · No classes", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Spring Break · No instruction", start: "2027-03-13", end: "2027-03-21", term: "Spring" }
        ]
      },
      "University of Massachusetts Amherst": {
        status: "partial",
        sourceUrl: "https://www.umass.edu/registrar/academic-calendar",
        checkedAt: "2026-11-09",
        note: "Faculty Senate academic calendar. Students are considered on break between Fall and Spring semesters, but the optional Winter term runs Dec 24–Feb 1; students enrolled in Winter courses are not off for the entire interval. Thanksgiving recess begins after the last class on Nov 24; Spring recess ends when classes resume Mar 22.",
        events: [
          { name: "Indigenous Peoples’ Day", start: "2026-10-12", end: "2026-10-12", term: "Fall" },
          { name: "Election Day · No classes", start: "2026-11-03", end: "2026-11-03", term: "Fall" },
          { name: "Veterans’ Day", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Optional Winter term courses run Dec 24–Feb 1", start: "2026-12-24", end: "2027-02-01", term: "Winter" },
          { name: "Presidents’ Day", start: "2027-02-15", end: "2027-02-15", term: "Spring" },
          { name: "Spring Recess", start: "2027-03-14", end: "2027-03-21", term: "Spring" },
          { name: "Patriots’ Day", start: "2027-04-19", end: "2027-04-19", term: "Spring" }
        ]
      },
      "University of Michigan": {
        status: "partial",
        sourceUrl: "https://docs.google.com/document/d/1_5eAEDt7FyR1sB4kUM1h5o5D_nIONjledS2HttHLq0o/edit",
        checkedAt: "2026-11-08",
        note: "Ann Arbor Campus calendar; professional schools listed by the Registrar use separate school calendars. Winter gap is between Fall exams and Winter Term classes; March vacation begins at noon Mar 6.",
        events: [
          { name: "Labor Day · Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Study Break", start: "2026-10-19", end: "2026-10-20", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between terms", start: "2026-12-22", end: "2027-01-12", term: "Winter" },
          { name: "Martin Luther King Jr. Day · No regular classes", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Winter Term Vacation · Begins at noon Mar 6", start: "2027-03-06", end: "2027-03-14", term: "Spring" }
        ]
      },
      "University of New Orleans": {
        status: "partial",
        sourceUrl: "https://www.lsuneworleans.edu/registrar/academic-calendar",
        checkedAt: "2026-11-09",
        note: "Full-term dates only. Winter Intersession classes run Dec 14–Jan 4, so Winter Break is the gap after intersession exams and before Spring classes begin Jan 11; separate sessions may vary.",
        events: [
          { name: "Labor Day Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Holiday", start: "2026-10-12", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving Break", start: "2026-11-26", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · After Winter Intersession", start: "2027-01-05", end: "2027-01-10", term: "Winter" },
          { name: "Martin Luther King’s Birthday Holiday", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Mardi Gras Holiday", start: "2027-02-08", end: "2027-02-13", term: "Spring" },
          { name: "Good Friday Holiday", start: "2027-03-26", end: "2027-03-26", term: "Spring" }
        ]
      },
      "University of North Carolina at Chapel Hill": {
        status: "partial",
        sourceUrl: "https://catalog.unc.edu/academic-calendar/",
        checkedAt: "2026-11-08",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Well-being day · No classes", start: "2026-09-21", end: "2026-09-21", term: "Fall" },
          { name: "Well-being day · No classes", start: "2026-10-06", end: "2026-10-06", term: "Fall" },
          { name: "Fall Break · No classes", start: "2026-10-15", end: "2026-10-16", term: "Fall" },
          { name: "Thanksgiving Recess · No classes", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-12", end: "2027-01-05", term: "Winter" },
          { name: "Spring Break", start: "2027-03-06", end: "2027-03-14", term: "Spring" },
          { name: "Well-Being Day · No classes", start: "2027-02-08", end: "2027-02-08", term: "Spring" },
          { name: "Spring Holiday · No classes", start: "2027-03-26", end: "2027-03-26", term: "Spring" }
        ]
      },
      "University of Notre Dame": {
        status: "partial",
        sourceUrl: "https://registrar.nd.edu/calendars/",
        checkedAt: "2026-11-08",
        note: "The inter-semester interval is bounded by the published final-exam end date and Spring class start; Labor Day is listed as an in-session day.",
        events: [
          { name: "Mid-Term Break", start: "2026-10-17", end: "2026-10-25", term: "Fall" },
          { name: "Thanksgiving Holiday", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · After final exams", start: "2026-12-18", end: "2027-01-10", term: "Winter" },
          { name: "Mid-Term Break", start: "2027-03-06", end: "2027-03-14", term: "Spring" },
          { name: "Easter Holiday for students", start: "2027-03-26", end: "2027-03-29", term: "Spring" }
        ]
      },
      "University of Pennsylvania": {
        status: "partial",
        sourceUrl: "https://almanac.upenn.edu/penn-academic-calendar",
        checkedAt: "2026-11-09",
        note: "University-wide Almanac dates; graduate and professional programs may follow separate calendars. The winter gap is bounded by the Fall Term end and Spring classes start.",
        events: [
          { name: "Fall Term Break · No classes", start: "2026-10-01", end: "2026-10-04", term: "Fall" },
          { name: "Thanksgiving Break", start: "2026-11-26", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between terms", start: "2026-12-18", end: "2027-01-19", term: "Winter" },
          { name: "Spring Term Break", start: "2027-03-06", end: "2027-03-14", term: "Spring" }
        ]
      },
      "University of Rochester": {
        status: "partial",
        sourceUrl: "https://www.rochester.edu/provost/academic-resources/academic-calendar/",
        checkedAt: "2026-11-09",
        note: "The winter gap is bounded by final exams ending Dec 23 and Spring classes beginning Jan 19.",
        events: [
          { name: "Labor Day · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break", start: "2026-10-12", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · After final exams", start: "2026-12-24", end: "2027-01-18", term: "Winter" },
          { name: "Spring Break", start: "2027-03-06", end: "2027-03-14", term: "Spring" }
        ]
      },
      "University of Southern California": {
        status: "partial",
        sourceUrl: "https://www.usc.edu/academic-calendar/",
        checkedAt: "2026-11-08",
        events: [
          { name: "Labor Day Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Recess", start: "2026-10-08", end: "2026-10-09", term: "Fall" },
          { name: "Veterans Day Holiday", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving Holiday", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Recess", start: "2026-12-17", end: "2027-01-10", term: "Winter" },
          { name: "Martin Luther King Jr. Day Holiday", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Presidents’ Day Holiday", start: "2027-02-15", end: "2027-02-15", term: "Spring" },
          { name: "Spring Recess", start: "2027-03-14", end: "2027-03-21", term: "Spring" }
        ]
      },
      "University of Texas at Austin": {
        status: "partial",
        sourceUrl: "https://registrar.utexas.edu/calendars/26-27",
        checkedAt: "2026-11-08",
        note: "The official calendar lists an active Winter Term from Dec 15, 2026 through Jan 9, 2027, so no winter break is listed for that period.",
        events: [
          { name: "Fall Break / Thanksgiving · No classes", start: "2026-11-23", end: "2026-11-28", term: "Fall" },
          { name: "Martin Luther King Jr. Day · No classes", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Break", start: "2027-03-15", end: "2027-03-20", term: "Spring" }
        ]
      },
      "University of Virginia": {
        status: "partial",
        sourceUrl: "https://registrar.virginia.edu/calendar/academic/2026-2027",
        checkedAt: "2026-11-09",
        note: "University Registrar Academic Division calendar; January courses run Jan 4–15, so Winter Break is split around that active session.",
        events: [
          { name: "Fall Reading Days · No classes", start: "2026-10-03", end: "2026-10-06", term: "Fall" },
          { name: "Election Day · No classes", start: "2026-11-03", end: "2026-11-03", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Before January courses", start: "2026-12-19", end: "2027-01-03", term: "Winter" },
          { name: "Winter Break · After January courses", start: "2027-01-16", end: "2027-01-19", term: "Winter" },
          { name: "Spring Recess", start: "2027-03-06", end: "2027-03-14", term: "Spring" },
          { name: "Reading Day · No classes", start: "2027-05-09", end: "2027-05-09", term: "Spring" },
          { name: "Reading Day · No classes", start: "2027-05-12", end: "2027-05-12", term: "Spring" }
        ]
      },
      "University of Washington": {
        status: "partial",
        sourceUrl: "https://www.washington.edu/students/reg/2627cal.html",
        checkedAt: "2026-11-08",
        note: "Quarter calendar: no separate Fall Recess is listed; holiday rows below mark dates classes are not in session.",
        events: [
          { name: "Veterans Day · Classes not in session", start: "2026-11-11", end: "2026-11-11", term: "Fall" },
          { name: "Thanksgiving · Classes not in session", start: "2026-11-26", end: "2026-11-26", term: "Fall" },
          { name: "Native American Heritage Day · Classes not in session", start: "2026-11-27", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break", start: "2026-12-19", end: "2027-01-03", term: "Winter" },
          { name: "Martin Luther King Jr. Day · Classes not in session", start: "2027-01-18", end: "2027-01-18", term: "Winter" },
          { name: "Presidents’ Day · Classes not in session", start: "2027-02-15", end: "2027-02-15", term: "Winter" },
          { name: "Spring Break", start: "2027-03-20", end: "2027-03-28", term: "Spring" }
        ]
      },
      "University of Wisconsin-Madison": {
        status: "partial",
        sourceUrl: "https://secfac.wisc.edu/academic-calendar/",
        checkedAt: "2026-11-09",
        note: "Faculty-approved university academic calendar. Winter Break is the interval after Fall exams end and before Spring instruction begins; the calendar lists no separate Fall Break.",
        events: [
          { name: "Labor Day · No instruction", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-26", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between terms", start: "2026-12-18", end: "2027-01-18", term: "Winter" },
          { name: "Spring Recess", start: "2027-03-20", end: "2027-03-28", term: "Spring" }
        ]
      },
      "Vanderbilt University": {
        status: "partial",
        sourceUrl: "https://registrar.vanderbilt.edu/calendars/2026-27-academic/",
        checkedAt: "2026-11-08",
        note: "Dates are from the undergraduate academic calendar; Thanksgiving holidays apply to most schools, and other programs may differ. Winter break is between the published undergraduate exam end and Spring class start; calendars are subject to change.",
        events: [
          { name: "Fall Break · Undergraduate students", start: "2026-10-22", end: "2026-10-23", term: "Fall" },
          { name: "Thanksgiving Holidays · Most schools", start: "2026-11-21", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between semesters", start: "2026-12-20", end: "2027-01-10", term: "Winter" },
          { name: "Martin Luther King, Jr. Holiday · Classes do not meet", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Break", start: "2027-03-13", end: "2027-03-21", term: "Spring" }
        ]
      },
      "Wake Forest University": {
        status: "partial",
        sourceUrl: "https://registrar.wfu.edu/calendars/",
        checkedAt: "2026-11-09",
        note: "Published dates are for Wake Forest College and School of Business undergraduates. Winter Break follows Fall final exams and ends before Spring classes begin.",
        events: [
          { name: "Labor Day Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break", start: "2026-10-10", end: "2026-10-13", term: "Fall" },
          { name: "Thanksgiving Holiday", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · After final exams", start: "2026-12-16", end: "2027-01-10", term: "Winter" },
          { name: "Spring Break", start: "2027-03-06", end: "2027-03-14", term: "Spring" }
        ]
      },
      "Washington University in St. Louis": {
        status: "partial",
        sourceUrl: "https://registrar.washu.edu/calendars-exams/academic-calendar/",
        checkedAt: "2026-11-08",
        note: "Calendar has exceptions for Graduate Law and Online Law programs. Winter break dates are the interval after the published exam end and before Spring classes begin.",
        events: [
          { name: "Labor Day Holiday · No classes", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Fall Break · No classes", start: "2026-10-03", end: "2026-10-06", term: "Fall" },
          { name: "Thanksgiving Break · No classes", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Between terms", start: "2026-12-17", end: "2027-01-18", term: "Winter" },
          { name: "Martin Luther King Jr. Holiday · No classes", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Break · No classes", start: "2027-03-14", end: "2027-03-21", term: "Spring" }
        ]
      },
      "Wesleyan University": {
        status: "partial",
        sourceUrl: "https://webapps.wesleyan.edu/new_academic_calendar/next",
        checkedAt: "2026-11-09",
        note: "Undergraduate academic calendar. Winter Session runs Jan 5–18; Winter Break is the standard-term interval after Fall exams and before Winter Session. Jan 19 is a reading day and Jan 20 is an exam day, so neither is counted as a break before Spring classes begin Jan 21.",
        events: [
          { name: "Fall Break", start: "2026-10-26", end: "2026-10-27", term: "Fall" },
          { name: "Thanksgiving Recess", start: "2026-11-25", end: "2026-11-29", term: "Fall" },
          { name: "Winter Break · Before Winter Session", start: "2026-12-20", end: "2027-01-04", term: "Winter" },
          { name: "Spring Break", start: "2027-03-06", end: "2027-03-21", term: "Spring" }
        ]
      },
      "Xavier University of Louisiana": {
        status: "partial",
        sourceUrl: "https://www.xula.edu/academics/academiccalendar/index.html",
        checkedAt: "2026-11-09",
        note: "The Winter Break dates are an inferred class-free interval, not a named break: Fall final exams end Dec 9 and Spring classes begin Jan 11. The interval includes Faculty/Staff Institute and continued-registration dates; Oct 12–13 are contingency days, not Fall Break.",
        events: [
          { name: "Labor Day Holiday", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "Thanksgiving Holidays", start: "2026-11-25", end: "2026-11-27", term: "Fall" },
          { name: "Winter Break · Inferred between terms", start: "2026-12-10", end: "2027-01-10", term: "Winter" },
          { name: "Martin Luther King Jr. Holiday", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Mardi Gras Holidays", start: "2027-02-08", end: "2027-02-10", term: "Spring" },
          { name: "Easter Holidays", start: "2027-03-22", end: "2027-03-26", term: "Spring" }
        ]
      },
      "Yale University": {
        status: "partial",
        sourceUrl: "https://college.yale.edu/academics/academic-calendar",
        checkedAt: "2026-11-08",
        note: "Dates are for Yale College, not every Yale school. Recess end dates use the published Spring class start; Winter Recess begins after final exams end at 5:30 p.m. on Dec 22.",
        events: [
          { name: "Labor Day · Classes do not meet", start: "2026-09-07", end: "2026-09-07", term: "Fall" },
          { name: "October Recess", start: "2026-10-21", end: "2026-10-25", term: "Fall" },
          { name: "November Recess", start: "2026-11-21", end: "2026-11-29", term: "Fall" },
          { name: "Winter Recess", start: "2026-12-22", end: "2027-01-18", term: "Winter" },
          { name: "Martin Luther King Jr. Day · Classes do not meet", start: "2027-01-18", end: "2027-01-18", term: "Spring" },
          { name: "Spring Recess", start: "2027-03-06", end: "2027-03-21", term: "Spring" }
        ]
      }
    }
  }
};
