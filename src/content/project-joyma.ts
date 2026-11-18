/**
 * Joyma page copy — originally from JE_Website_02_Project_Lotus_Copy_v01,
 * with the expanded FAQ from JE_Website_08_FAQ_Copy_v01 replacing the short
 * "Questions from centers" list (as the FAQ document instructs).
 */
import { joymaSite, routes } from './site';

export const projectJoyma = {
    hero: {
        heading: 'Built around the work of Dharma centers',
        paragraphs: [
            'Joyma is our first project: a platform that brings center administration together with a shared network for discovering teachings and events.',
            'We’re developing it with Dharma centers to make everyday administration easier, support continuity across teams and help more people find what centers offer.',
            'We’re currently working with our ‘Joyma Seed’ partners; centers who are helping us develop the project based on their communities’ needs. If you and your center are interested in becoming a Joyma development partner, we’d love to hear from you.',
        ],
        links: [
            { label: 'Inquire about Joyma', href: routes.centerInquiry },
            { label: 'View the roadmap', href: routes.roadmap },
            { label: 'Visit joyma.co', href: joymaSite },
        ],
    },
    onePlatform: {
        heading: 'One platform for your program',
        paragraphs: [
            'A center’s activities rarely fit neatly into a standard booking system. A retreat may involve accommodation and meals. A program may include memberships, donations and requests for prayers or pujas.',
            'Joyma is being developed around these connected needs, with an administration system designed to be straightforward for center teams to use.',
        ],
        features: [
            {
                heading: 'Events and registrations',
                text: 'Bring the organization of teachings, courses and retreats together with the way people register to attend.',
                illustration: 'event-planning',
            },
            {
                heading: 'Donations and memberships',
                text: 'Support the ways your community contributes to the center, with tools for donations and memberships.',
                illustration: 'generosity',
            },
            {
                heading: 'Meals and accommodation',
                text: 'Include the practical arrangements that help people participate in retreats and residential programs.',
                illustration: 'hospitality',
            },
            {
                heading: 'Prayer and puja requests',
                text: 'Make space for the requests that are part of the life of a Dharma center.',
                illustration: 'prayer-book',
            },
        ],
    },
    discoveryLabel: 'Discovery and adoption',
    discovery: {
        heading: 'Help people discover your center',
        paragraphs: [
            'Alongside the tools for center teams, we’re building a shared discovery network. People will be able to explore and filter offerings across participating centers to find teachings, events and communities that support their practice.',
            'For your center, this creates another route for people to discover your program and take part.',
        ],
    },
    teamwork: {
        heading: 'Make teamwork easier',
        paragraphs: [
            'Center teams change, and knowledge needs to carry across those changes. Joyma is being designed with an intuitive administration experience and easy access to data, helping staff and volunteers share the work.',
        ],
    },
    websiteLabel: 'Website integration',
    website: {
        heading: 'Works with your existing website',
        paragraphs: [
            'You don’t need to replace your website. You manage your events once in Joyma, and they appear on your center’s own site, always up to date.',
            'There will be two ways to do this. A simple widget you paste into a page lists your upcoming events in your center’s colors. For centers with a web developer, a read-only connection lets your site show events in its own design.',
            'When someone registers, pays or signs in, they continue on Joyma. Their bookings, payments and course history stay together in one account, and no personal or payment details are entered on your website, which keeps things simpler and safer for your center and your participants.',
            'Website integration is being built now with our first partner center.',
        ],
    },
    inPractice: {
        heading: 'See Joyma in practice',
        paragraphs: [
            'Take a look at how Joyma is being developed for center teams and the people exploring their programs.',
        ],
        comingSoon: 'Coming soon!',
    },
    gettingStarted: {
        heading: 'Getting started',
        paragraphs: [
            'Tell us about your center, your program and the systems you use. This gives us a starting point for discussing how Joyma can fit your needs.',
        ],
        links: [{ label: 'Inquire about Joyma', href: routes.centerInquiry }],
    },
    costsLabel: 'Costs and center questions',
    costs: {
        heading: 'Affordable for centers and sustainable for the future',
        paragraphs: [
            'Private individuals currently fund the development of Joyma. Our aim is fair, sustainable pricing that centers can afford and that supports the ongoing work of maintaining and improving the platform.',
            'We know choosing software is a long-term decision. Centers need to understand both the costs involved and how the service will be supported over time.',
        ],
    },
    faq: {
        heading: 'Questions from centers',
        intro: 'Find answers to common questions about Joyma, getting started and the ongoing support your center may need.',
        groups: [
            {
                label: null,
                items: [
                    {
                        question: 'Who is Joyma for?',
                        answer: [
                            'Joyma is being developed for Dharma centers and related organizations that hold teachings, courses, retreats and communities together. It combines tools for center teams with a shared network for discovering what centers offer.',
                        ],
                        links: [],
                    },
                    {
                        question: 'Can our center start using it now?',
                        answer: [
                            'Joyma is currently in the build and development phase, we’re due to launch in early 2027 and the software will be ready to use from day one.',
                        ],
                        links: [{ label: 'Inquire about Joyma', href: routes.centerInquiry }],
                    },
                    {
                        question: 'What does Joyma cost and what is included?',
                        answer: [
                            'Our aim is fair, sustainable pricing that centers can afford and that supports the work of maintaining and improving Joyma.',
                        ],
                        links: [],
                    },
                    {
                        question: 'How is Joyma funded and supported long term?',
                        answer: [
                            'Private individuals currently fund the project. Their support is helping us develop Joyma around the needs of Dharma centers. Long-term sustainability is part of our approach to pricing and ongoing development.',
                        ],
                        links: [{ label: 'Funding and costs', href: routes.fundingAndCosts }],
                    },
                    {
                        question: 'Can we keep our existing website and tools?',
                        answer: [
                            'Yes. Your events can appear on your current website, through a simple widget or a connection your web developer sets up, while registration and payment happen on Joyma. As for your existing tools, Joyma is designed as an all-in-one platform and should meet the needs of your current tech stack in one piece of software – anything we haven’t covered? Drop us a line, let us know and we can add features and ideas to our roadmap.',
                        ],
                        links: [],
                    },
                    {
                        question: 'How do we move our information across?',
                        answer: [
                            'Our data import service seamlessly allows for uploads of data. If you need to take things a bit slower and prefer a step-by-step approach, we can provide support during your center on-boarding with Joyma.',
                        ],
                        links: [],
                    },
                ],
            },
            {
                label: 'Support donations and data',
                items: [
                    {
                        question: 'What training and ongoing support will we receive?',
                        answer: [
                            'We’re creating a full supported onboarding service for all centers that work with Joyma, dedicated time, bespoke to your center’s needs and human focused. If you need us for bug fixes, feature suggestions, support or anything else, simply drop us an email – we’d love to hear from you.',
                        ],
                        links: [],
                    },
                    {
                        question: 'How are donations handled and who receives the money?',
                        answer: [
                            'Joyma is designed for centers offering teachings and events on a donation basis. Donations support the receiving center or organization. Full details can be found on the Joyful Effort Trust center page.',
                        ],
                        links: [{ label: 'Donations and transparency', href: routes.trustCenter }],
                    },
                    {
                        question: 'Who controls our data and can we export it?',
                        answer: [
                            'Easy access to center data is a core part of the design of Joyma. Data sovereignty and compliance is at the heart of our design, we know how much this means to centers and students alike – full details of how data is managed, shared and processed can be found at our trust center.',
                        ],
                        links: [{ label: 'Privacy and data', href: routes.trustCenter }],
                    },
                    {
                        question: 'How can we request a feature?',
                        answer: [
                            'Tell us what your team is trying to do, how you manage it today and what would make it easier. You don’t need a technical solution in mind. Requests help us understand center needs and inform development priorities, although submitting a request does not guarantee it will be developed.',
                        ],
                        links: [
                            { label: 'Share an idea', href: routes.inquire },
                            { label: 'View the roadmap', href: routes.roadmap },
                        ],
                    },
                ],
            },
        ],
        stillHaveAQuestion: {
            heading: 'Still have a question?',
            text: 'Tell us about your center and what you would like to understand. We’d be glad to hear from you.',
            link: { label: 'Inquire about Joyma', href: routes.centerInquiry },
        },
    },
};
