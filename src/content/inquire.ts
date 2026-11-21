/**
 * General inquiry form copy, for anyone who is not inquiring on behalf of a center.
 * Centers use the center inquiry form (center-inquiry.ts).
 */
export const inquire = {
    heading: 'Send us a message',
    paragraphs: [
        'Questions, feature requests, feedback, or just a hello and a catch-up: we’d love to hear from you. We’ll get back to you.',
    ],
    centerPointer: {
        text: 'Inquiring on behalf of a Dharma center? The center inquiry form lets you tell us more about your center.',
        label: 'Go to the center inquiry form',
    },
    fields: {
        name: { label: 'Your name' },
        email: { label: 'Email' },
        organization: {
            label: 'Center or organization',
            hint: 'If you’re writing on behalf of a center or organization, tell us which one and your role there.',
        },
        message: {
            label: 'Your message',
            hint: 'Tell us what you’d like to know or share.',
        },
    },
    submit: 'Send message',
    confirmation: 'Thank you for getting in touch. Your message has been sent.',
};
