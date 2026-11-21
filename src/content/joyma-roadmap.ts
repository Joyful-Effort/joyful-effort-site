/**
 * The single source for Joyma's roadmap. Update it here and both pages follow:
 * - the partner Seeds page (src/pages/seeds.astro) shows every gate with its status and detail;
 * - the public roadmap (src/content/roadmap.ts) shows only the `public` items, with no gate
 *   names or dates. A gate without `public` items stays off the public page.
 *
 * When a gate is delivered, move it from `comingNext` to `delivered` and set its status to Done.
 * Its public items then move from "In development" to "Recent progress" on the public roadmap.
 */

/** A plain-language item for the public roadmap. */
export interface PublicRoadmapItem {
    title: string;
    text: string;
}

export interface RoadmapGate {
    /** Gate label on the Seeds page, e.g. 'Gate F'. */
    gate: string;
    /** Status badge on the Seeds page, e.g. 'Done' or 'December'. */
    status: string;
    /** Badge style on the Seeds page. */
    badge: 'soft' | 'solid' | 'plain';
    /** Bold title on the Seeds page; omitted for rows that are only a list. */
    title?: string;
    /** Seeds page detail. Trusted HTML (entities such as &amp; and &rsquo; are allowed). */
    detail: string;
    /** What the public roadmap shows for this gate. */
    public?: PublicRoadmapItem[];
}

export const delivered: RoadmapGate[] = [
    {
        gate: 'Gate A',
        status: 'Done',
        badge: 'soft',
        title: 'Events &amp; registration',
        detail: 'events, sessions, recurring events, registration and check-in.',
    },
    {
        gate: 'Gate B',
        status: 'Done',
        badge: 'soft',
        title: 'Courses &amp; members',
        detail: 'Moodle with single sign-in, and the membership foundation.',
    },
    {
        gate: 'Gate C',
        status: 'Done',
        badge: 'soft',
        title: 'Memberships &amp; more',
        detail: 'email, search, directories, self-service and the public pages.',
    },
    {
        gate: 'Gate D',
        status: 'Done',
        badge: 'soft',
        title: 'Payments &amp; security',
        detail: 'the first version of payments and the security review.',
        public: [
            {
                title: 'Payments',
                text: 'Card payments through Stripe, with refunds, payment links, invoices and receipts.',
            },
            { title: 'Security', text: 'A security review, and Cyber Essentials certification.' },
        ],
    },
    {
        gate: 'Gate E',
        status: 'Done',
        badge: 'soft',
        title: 'Payments closed',
        detail: 'refunds, payment links, invoices and receipts; memberships rebuilt from your feedback; Study spaces.',
        public: [
            {
                title: 'Memberships rebuilt',
                text: 'Reworked based on feedback from our partner centers.',
            },
            {
                title: 'Study spaces',
                text: 'A place for students to keep their Dharma study resources and prayer materials, and track their attendance at teachings.',
            },
        ],
    },
];

/** Public-only work in development that isn't tied to a gate (not shown on the Seeds page). */
export const alsoInDevelopment: PublicRoadmapItem[] = [
    {
        title: 'A redesigned admin experience',
        text: 'Simpler screens for creating events and memberships, followed by the participant side.',
    },
];

export const comingNext: RoadmapGate[] = [
    {
        gate: 'Gate F',
        status: 'December',
        badge: 'solid',
        title: 'Your website, and how your teaching is organized',
        detail: 'events on your own website, with registration and payment without leaving it; event types, categories, tags and a calendar view, shaped with Maile&rsquo;s design input.',
        public: [
            {
                title: 'Events on your own website',
                text: 'Registration and payment without leaving your center’s site.',
            },
            {
                title: 'Organizing your program',
                text: 'Event types, categories, tags and a calendar view.',
            },
        ],
    },
    {
        gate: 'Gate G',
        status: 'End of December',
        badge: 'plain',
        title: 'Donations and privacy',
        detail: 'donations, including an optional donation at checkout, and GDPR features: accepting terms, closing an account, getting a copy of your data.',
        public: [
            { title: 'Donations', text: 'Including an optional donation at checkout.' },
            {
                title: 'Privacy tools',
                text: 'Accepting terms, closing an account and getting a copy of your data.',
            },
        ],
    },
    {
        gate: 'Later',
        status: 'On the list',
        badge: 'plain',
        detail: 'Study programs, duplicating events and templates, importing existing data, network-wide search, and a mobile app.',
    },
];

/** Public roadmap: "In development". */
export const publicInDevelopment: PublicRoadmapItem[] = [
    ...alsoInDevelopment,
    ...comingNext.flatMap((gate) => gate.public ?? []),
];

/** Public roadmap: "Recent progress", most recent first. */
export const publicRecentProgress: PublicRoadmapItem[] = [...delivered]
    .reverse()
    .flatMap((gate) => gate.public ?? []);
