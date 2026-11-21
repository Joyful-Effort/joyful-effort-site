import type { APIRoute } from 'astro';
import { buildIcs } from '../lib/seeds-meetings';

/** The Joyma Seeds meetings as a calendar file, for Apple Calendar, Outlook and others. Built with the site. */
export const GET: APIRoute = () =>
    new Response(buildIcs(), {
        headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
    });
