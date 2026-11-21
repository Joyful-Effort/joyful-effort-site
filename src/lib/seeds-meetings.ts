/**
 * Joyma Seeds monthly meetings: the one place to update the schedule.
 * The Seeds hub (src/pages/seeds.astro) and the calendar file (src/pages/joyma-seeds.ics.ts) both read from here.
 * To add sessions, append to SESSIONS. Times are London wall-clock time, so summer time is handled.
 */

export const MEETING = {
    title: 'Joyma Seeds monthly meeting',
    joinUrl: 'https://greet.metaprovide.org/joyma-seeds',
    hubUrl: 'https://joyfuleffort.com/seeds',
    calendarPath: '/joyma-seeds.ics',
    timeZone: 'Europe/London',
    startTime: '16:00',
    durationMinutes: 60,
    description:
        'Our monthly Joyma Seeds meeting, where we demo updates and new features and go through your feedback. Every session is recorded.',
};

export const SESSIONS: { number: number; date: string }[] = [
    { number: 6, date: '2026-12-02' },
    { number: 7, date: '2027-01-06' },
    { number: 8, date: '2027-02-03' },
    { number: 9, date: '2027-03-03' },
];

/** Local times shown for each meeting. */
const PLACES = [
    { label: 'London · Lisbon', timeZone: 'Europe/London' },
    { label: 'Paris · Madrid', timeZone: 'Europe/Paris' },
    { label: 'New York', timeZone: 'America/New_York' },
    { label: 'Santa Fe', timeZone: 'America/Denver' },
    { label: 'Auckland', timeZone: 'Pacific/Auckland' },
];

/** Turn a wall-clock date and time in a time zone into the exact instant. */
function zonedTimeToUtc(date: string, time: string, timeZone: string): Date {
    const [y, m, d] = date.split('-').map(Number);
    const [hh, mm] = time.split(':').map(Number);
    const guess = Date.UTC(y, m - 1, d, hh, mm);
    const parts = Object.fromEntries(
        new Intl.DateTimeFormat('en-US', {
            timeZone,
            hourCycle: 'h23',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        })
            .formatToParts(new Date(guess))
            .map((p) => [p.type, p.value]),
    );
    const asIfUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
    return new Date(guess - (asIfUtc - guess));
}

function localDate(instant: Date, timeZone: string): string {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(instant);
}

/** Every session after `index` is on the first Wednesday of the following month. */
function isFirstWednesdaySeries(index: number): boolean {
    for (let i = index; i < SESSIONS.length; i++) {
        const [y, m, d] = SESSIONS[i].date.split('-').map(Number);
        const day = new Date(Date.UTC(y, m - 1, d));
        if (day.getUTCDay() !== 3 || d > 7) {
            return false;
        }
        if (i > index) {
            const [py, pm] = SESSIONS[i - 1].date.split('-').map(Number);
            if (y * 12 + m !== py * 12 + pm + 1) {
                return false;
            }
        }
    }
    return true;
}

const compact = (date: string, time: string) =>
    `${date.replaceAll('-', '')}T${time.replace(':', '')}00`;

function addMinutes(time: string, minutes: number): string {
    const [hh, mm] = time.split(':').map(Number);
    const total = hh * 60 + mm + minutes;
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

/** A Google Calendar link that adds this session and, where they follow the monthly pattern, the ones after it. */
function googleCalendarUrl(index: number): string {
    const s = SESSIONS[index];
    const endTime = addMinutes(MEETING.startTime, MEETING.durationMinutes);
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: MEETING.title,
        dates: `${compact(s.date, MEETING.startTime)}/${compact(s.date, endTime)}`,
        ctz: MEETING.timeZone,
        details: `${MEETING.description}\n\nJoin: ${MEETING.joinUrl}\nSeeds hub: ${MEETING.hubUrl}`,
        location: MEETING.joinUrl,
    });
    const remaining = SESSIONS.length - index;
    if (remaining > 1 && isFirstWednesdaySeries(index)) {
        params.set('recur', `RRULE:FREQ=MONTHLY;BYDAY=1WE;COUNT=${remaining}`);
    }
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export type SessionView = {
    number: number;
    start: Date;
    end: Date;
    longDate: string;
    times: { label: string; time: string; nextDay: boolean }[];
    googleUrl: string;
};

export function sessionViews(): SessionView[] {
    return SESSIONS.map((s, index) => {
        const start = zonedTimeToUtc(s.date, MEETING.startTime, MEETING.timeZone);
        const end = new Date(start.getTime() + MEETING.durationMinutes * 60_000);
        return {
            number: s.number,
            start,
            end,
            longDate: new Intl.DateTimeFormat('en-US', {
                timeZone: MEETING.timeZone,
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }).format(start),
            times: PLACES.map((p) => ({
                label: p.label,
                time: new Intl.DateTimeFormat('en-GB', {
                    timeZone: p.timeZone,
                    hour: '2-digit',
                    minute: '2-digit',
                    hourCycle: 'h23',
                }).format(start),
                nextDay: localDate(start, p.timeZone) > s.date,
            })),
            googleUrl: googleCalendarUrl(index),
        };
    });
}

/** The calendar file: one event per session, in exact UTC times so every calendar app agrees. */
export function buildIcs(now = new Date()): string {
    const utc = (d: Date) =>
        d
            .toISOString()
            .replace(/[-:]/g, '')
            .replace(/\.\d{3}/, '');
    const esc = (t: string) =>
        t.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
    const fold = (line: string) => {
        const out: string[] = [];
        let rest = line;
        while (new TextEncoder().encode(rest).length > 74) {
            let cut = 74;
            while (new TextEncoder().encode(rest.slice(0, cut)).length > 74) {
                cut--;
            }
            out.push(rest.slice(0, cut));
            rest = ` ${rest.slice(cut)}`;
        }
        out.push(rest);
        return out.join('\r\n');
    };
    const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Joyful Effort//Joyma Seeds//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        `X-WR-CALNAME:${esc('Joyma Seeds')}`,
    ];
    for (const s of sessionViews()) {
        lines.push(
            'BEGIN:VEVENT',
            `UID:joyma-seeds-session-${s.number}@joyfuleffort.com`,
            `DTSTAMP:${utc(now)}`,
            `DTSTART:${utc(s.start)}`,
            `DTEND:${utc(s.end)}`,
            `SUMMARY:${esc(`Joyma Seeds: Session ${s.number}`)}`,
            `DESCRIPTION:${esc(`${MEETING.description}\n\nJoin: ${MEETING.joinUrl}\nSeeds hub: ${MEETING.hubUrl}`)}`,
            `LOCATION:${esc(MEETING.joinUrl)}`,
            `URL:${MEETING.joinUrl}`,
            'END:VEVENT',
        );
    }
    lines.push('END:VCALENDAR');
    return `${lines.map(fold).join('\r\n')}\r\n`;
}
