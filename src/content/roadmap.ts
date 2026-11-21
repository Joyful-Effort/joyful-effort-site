/**
 * Roadmap and feedback copy — from JE_Website_04_Roadmap_and_Feedback_Copy_v02. The feature-request
 * form has been retired (pilot feedback comes through the Joyma Seed feedback form), so its copy
 * and the hero's mention of it are no longer used.
 */

import type { ImageMetadata } from 'astro';
import chandrakirtiLogo from '@/assets/centers/chandrakirti.png';
import ivyLogo from '@/assets/centers/institut-vajra-yogini-horizontal.png';
import jamyangLogo from '@/assets/centers/jamyang-london.svg';
import shantidevaLogo from '@/assets/centers/shantideva.png';
import tnlLogo from '@/assets/centers/thubten-norbu-ling.svg';
import { routes, type SiteLink } from './site';

export const roadmap = {
    hero: {
        heading: 'Help shape the development of Joyma',
        paragraphs: [
            'We’re building Joyma with Dharma centers. This page brings together the current development priorities and what our partner centers are helping us test.',
            'The roadmap shows features ready for pilot testing and work in development, and invites you to tell us what your center needs. Plans may change, improve and adapt as we learn more from participating centers.',
        ],
    },
    pilot: {
        heading: 'Ready for pilot testing',
        intro: 'The following features are ready for participating centers to explore in our test environment.',
        items: [
            {
                heading: 'Center accounts and team access',
                text: 'Each center has its own space in Joyma, with roles and invitations for team members. Centers can register their interest through our sign-up page, and the Joyful Effort team handles setup.',
                illustration: 'volunteers',
            },
            {
                heading: 'Events and registration',
                text: 'Create individual events or recurring series, with sessions and booking options. For hybrid programs, participants can choose to attend in person or online for each session. Centers can accept registrations online, add participants manually and record attendance. Checks before publication help teams identify missing event information.',
                illustration: 'event-planning',
            },
            {
                heading: 'Finding centers and teachings',
                text: 'The discovery pages include event search and directories of centers and teachers, with filters to help people find what they are looking for. The interface supports French and English, including UK and US English.',
                illustration: 'laptop-admin',
            },
            {
                heading: 'Online courses through Moodle',
                text: 'Centers using Moodle can connect their existing learning platform to Joyma, bring their course catalog into Joyma and enroll participants. Participants can move from Joyma into Moodle without signing in again. Course access can be linked to membership benefits or granted directly by center staff.',
                illustration: 'teaching',
            },
            {
                heading: 'Membership management',
                text: 'Centers can create membership plans, define benefits and manage member records. Members can pause, resume, cancel or change their plan, and membership benefits can apply during event registration.',
                illustration: 'generosity',
            },
            {
                heading: 'Event emails',
                text: 'Registration confirmations and event-change messages are available, with templates centers can edit.',
                illustration: 'communications',
            },
        ],
    },
    participatingCenters: {
        heading: 'Centers testing Joyma',
        intro: 'These centers are exploring Joyma in our test environment and sharing what works for their communities.',
        // Logos are used with each center's permission. A center without `logo` shows a placeholder.
        centers: [
            {
                name: 'Jamyang Buddhist Center London',
                country: 'United Kingdom',
                logo: jamyangLogo,
            },
            { name: 'Shantideva Center', country: 'United States', logo: shantidevaLogo },
            {
                name: 'The Buddhist Center Thubten Norbu Ling',
                country: 'United States',
                logo: tnlLogo,
            },
            { name: 'Institut Vajra Yogini', country: 'France', logo: ivyLogo },
            {
                name: 'Chandrakirti Meditation Center',
                country: 'New Zealand',
                logo: chandrakirtiLogo,
            },
        ] as { name: string; country: string; logo?: ImageMetadata }[],
        invitation: {
            heading: 'Could your center test Joyma?',
            text: 'We’d love to hear from more centers who would like to explore Joyma and share feedback. Tell us about your center and your program.',
            link: { label: 'Inquire for your center', href: routes.centerInquiry },
        },
    },
    /**
     * The three-column block below the pilot features: each column lists items or offers a link.
     * Items are summarized from the partner (Seeds) roadmap, without dates.
     */
    nextSteps: [
        {
            id: 'in-development',
            heading: 'In development',
            text: 'What we’re building now, before it’s ready for centers to test.',
            items: [
                {
                    title: 'A redesigned admin experience',
                    text: 'Simpler screens for creating events and memberships, followed by the participant side.',
                },
                {
                    title: 'Events on your own website',
                    text: 'Registration and payment without leaving your center’s site.',
                },
                {
                    title: 'Organizing your program',
                    text: 'Event types, categories, tags and a calendar view.',
                },
                { title: 'Donations', text: 'Including an optional donation at checkout.' },
                {
                    title: 'Privacy tools',
                    text: 'Accepting terms, closing an account and getting a copy of your data.',
                },
            ],
        },
        {
            id: 'feature-requests',
            heading: 'Feature requests',
            text: 'Tell us what your team is trying to do and what would make it easier. You don’t need a technical solution in mind. Requests help guide our priorities, although we can’t promise to build every one.',
            link: { label: 'Share an idea', href: routes.inquire },
        },
        {
            id: 'recent-progress',
            heading: 'Recent progress',
            text: 'Recently completed with our partner centers.',
            items: [
                {
                    title: 'Payments',
                    text: 'Card payments through Stripe, with refunds, payment links, invoices and receipts.',
                },
                {
                    title: 'Memberships rebuilt',
                    text: 'Reworked based on feedback from our partner centers.',
                },
                {
                    title: 'Study spaces',
                    text: 'A place for students to keep their Dharma study resources and prayer materials, and track their attendance at teachings.',
                },
                {
                    title: 'Security',
                    text: 'A security review, and Cyber Essentials certification.',
                },
            ],
        },
    ] as {
        id: string;
        heading: string;
        text: string;
        items?: { title: string; text: string }[];
        link?: SiteLink;
    }[],
};
