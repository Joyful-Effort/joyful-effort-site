/**
 * Scroll reveal: below the hero, each section's top-level blocks rise gently into view the
 * first time they scroll into the viewport. Card grids marked `data-reveal-group` reveal
 * their cards one after another.
 *
 * Content is only hidden once this script runs, and only when the visitor has not asked to
 * reduce motion, so the page is fully readable without JavaScript.
 */
const root = document.documentElement;
const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (motionOk && 'IntersectionObserver' in window) {
    const targets: [Element, number][] = [];

    for (const wrap of document.querySelectorAll('main > section:not(:first-child) > .wrap')) {
        let index = 0;
        for (const block of wrap.children) {
            const items = block.matches('[data-reveal-group]')
                ? [...block.children]
                : block.querySelector(':scope > [data-reveal-group]')
                  ? [...block.children].flatMap((child) =>
                        child.matches('[data-reveal-group]') ? [...child.children] : [child],
                    )
                  : [block];
            for (const item of items) {
                targets.push([item, index++]);
            }
        }
    }

    // Anything already on screen shows straight away rather than fading in after load.
    const fold = window.innerHeight;
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) {
                    continue;
                }
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        },
        { rootMargin: '0px 0px -8% 0px' },
    );

    for (const [element, index] of targets) {
        if (element.getBoundingClientRect().top < fold) {
            continue;
        }
        element.setAttribute('data-reveal', '');
        (element as HTMLElement).style.setProperty(
            '--reveal-delay',
            `${Math.min(index, 4) * 90}ms`,
        );
        observer.observe(element);
    }

    root.classList.add('js-reveal');
}
