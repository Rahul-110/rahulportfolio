// ============================================================
// HOME PAGE - Hero Section & Scroll Animations
// Polished with Emil Kowalski style motion & design principles
// ============================================================

import wixAnimationsFrontend from 'wix-animations-frontend';

$w.onReady(function () {

    // -------------------------------------------------------
    // 1. HERO SECTION - High-End Editorial Entrance
    // -------------------------------------------------------
    try {
        const heroTimeline = wixAnimationsFrontend.timeline();

        // Overline / Category reveal
        heroTimeline.add($w('#heroOverline'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutCubic"
        });

        // Main Headline staggering for dramatic impact
        heroTimeline.add($w('#heroTitle'), {
            opacity: 1,
            y: 0,
            duration: 900,
            easing: "easeOutCubic"
        }, { offset: -400 });

        // Description text
        heroTimeline.add($w('#heroDescription'), {
            opacity: 1,
            y: 0,
            duration: 700,
            easing: "easeOutCubic"
        }, { offset: -500 });

        // CTA button spring/bounce entrance
        heroTimeline.add($w('#heroCTA'), {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 600,
            easing: "easeOutBack"
        }, { offset: -400 });

        // Hero visual / image reveal
        heroTimeline.add($w('#heroImage'), {
            opacity: 1,
            scale: 1,
            duration: 1000,
            easing: "easeOutQuint"
        }, { offset: -700 });

        heroTimeline.play();
    } catch (e) {
        console.log("Home: Hero animation elements missing or unassigned.", e.message);
    }

    // -------------------------------------------------------
    // 2. ABOUT SECTION - Viewport Scroll Reveal
    // -------------------------------------------------------
    try {
        const aboutTimeline = wixAnimationsFrontend.timeline();

        aboutTimeline.add($w('#aboutTitle'), {
            opacity: 1,
            y: 0,
            duration: 700,
            easing: "easeOutCubic"
        });

        aboutTimeline.add($w('#aboutText'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutCubic"
        }, { offset: -400 });

        $w('#aboutSection').onViewportEnter(() => {
            aboutTimeline.play();
        });
    } catch (e) {
        console.log("Home: About section elements missing.", e.message);
    }

    // -------------------------------------------------------
    // 3. FEATURED WORK / PROJECTS
    // -------------------------------------------------------
    try {
        const workTimeline = wixAnimationsFrontend.timeline();

        workTimeline.add($w('#workTitle'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutCubic"
        });

        const workItems = ['#workItem1', '#workItem2', '#workItem3'];
        workItems.forEach((itemId, index) => {
            workTimeline.add($w(itemId), {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 700,
                delay: index * 120,
                easing: "easeOutBack"
            }, { offset: -400 });
        });

        $w('#workSection').onViewportEnter(() => {
            workTimeline.play();
        });
    } catch (e) {
        console.log("Home: Work section elements missing.", e.message);
    }

});
