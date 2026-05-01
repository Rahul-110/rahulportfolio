// ============================================================
// HOME PAGE - Parallax & Scroll Animations
// ============================================================
// 
// ANIMATIONS INCLUDED:
// 1. Hero section - dramatic entrance with scaling + fade
// 2. Sections - slide up + fade as they enter viewport
// 3. CTA buttons - bounce-in effect
// 4. Images - scale from center with fade
// 5. Text elements - slide in from left/right
//
// Replace all '#elementID' placeholders with your actual IDs
// from the Wix Editor Properties panel.
// ============================================================

import wixAnimationsFrontend from 'wix-animations-frontend';

$w.onReady(function () {

    // -------------------------------------------------------
    // 1. HERO SECTION - Dramatic entrance
    // -------------------------------------------------------
    // Replace '#heroSection' with your hero strip/section ID
    // Replace '#heroTitle' with your main heading ID
    // Replace '#heroSubtitle' with your subtitle text ID
    // Replace '#heroCTA' with your call-to-action button ID
    // Replace '#heroImage' with your hero image ID
    try {
        const heroTimeline = wixAnimationsFrontend.timeline();

        // Title slides down + fades in
        heroTimeline.add($w('#heroTitle'), {
            opacity: 1,
            y: 0,
            duration: 800,
            easing: "easeOutQuart"
        });

        // Subtitle follows with slight delay
        heroTimeline.add($w('#heroSubtitle'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutQuart"
        }, { offset: -400 }); // Overlap by 400ms for smooth flow

        // CTA button bounces in
        heroTimeline.add($w('#heroCTA'), {
            opacity: 1,
            scale: 1,
            duration: 500,
            easing: "easeOutBack"
        }, { offset: -300 });

        // Hero image scales up from slightly smaller
        heroTimeline.add($w('#heroImage'), {
            opacity: 1,
            scale: 1,
            duration: 1000,
            easing: "easeOutQuint"
        }, { offset: -400 });

        // Play immediately on page load
        heroTimeline.play();
    } catch (e) {
        console.log("Home: Update hero element IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 2. ABOUT/INTRO SECTION - Slide up on scroll
    // -------------------------------------------------------
    // Replace '#aboutSection' with your about strip ID
    // Replace '#aboutTitle' with the section's title ID
    // Replace '#aboutText' with the section's body text ID
    // Replace '#aboutImage' with the section's image ID
    try {
        const aboutTimeline = wixAnimationsFrontend.timeline();

        aboutTimeline.add($w('#aboutTitle'), {
            opacity: 1,
            y: 0,
            duration: 700,
            easing: "easeOutCirc"
        });

        aboutTimeline.add($w('#aboutText'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutCirc"
        }, { offset: -300 });

        aboutTimeline.add($w('#aboutImage'), {
            opacity: 1,
            x: 0,
            duration: 800,
            easing: "easeOutQuint"
        }, { offset: -400 });

        $w('#aboutSection').onViewportEnter(() => {
            aboutTimeline.play();
        });

        $w('#aboutSection').onViewportLeave(() => {
            aboutTimeline.reverse();
        });
    } catch (e) {
        console.log("Home: Update about section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 3. FEATURED WORK / PORTFOLIO PREVIEW
    // -------------------------------------------------------
    // Replace '#workSection' with your work showcase strip ID
    // Replace '#workTitle' with the section title
    // Replace '#workItem1', '#workItem2', '#workItem3' with portfolio items
    try {
        const workTimeline = wixAnimationsFrontend.timeline();

        workTimeline.add($w('#workTitle'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutQuad"
        });

        // Staggered reveal of portfolio items
        const workItems = ['#workItem1', '#workItem2', '#workItem3'];
        workItems.forEach((itemId, index) => {
            workTimeline.add($w(itemId), {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 700,
                delay: index * 200,
                easing: "easeOutBack"
            }, { offset: -400 });
        });

        $w('#workSection').onViewportEnter(() => {
            workTimeline.play();
        });

        $w('#workSection').onViewportLeave(() => {
            workTimeline.reverse();
        });
    } catch (e) {
        console.log("Home: Update work section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 4. TESTIMONIALS / STATS SECTION
    // -------------------------------------------------------
    // Replace '#statsSection' with your stats/testimonials strip ID
    // Replace '#stat1', '#stat2', '#stat3' with individual stat elements
    try {
        const statsTimeline = wixAnimationsFrontend.timeline();

        const stats = ['#stat1', '#stat2', '#stat3'];
        stats.forEach((statId, index) => {
            statsTimeline.add($w(statId), {
                opacity: 1,
                y: 0,
                duration: 500,
                delay: index * 250,
                easing: "easeOutCirc"
            });
        });

        $w('#statsSection').onViewportEnter(() => {
            statsTimeline.play();
        });

        $w('#statsSection').onViewportLeave(() => {
            statsTimeline.reverse();
        });
    } catch (e) {
        console.log("Home: Update stats section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 5. CONTACT CTA SECTION - Bottom of page
    // -------------------------------------------------------
    // Replace '#ctaSection' with your bottom CTA strip ID
    // Replace '#ctaTitle', '#ctaButton' with the CTA elements
    try {
        const ctaTimeline = wixAnimationsFrontend.timeline();

        ctaTimeline.add($w('#ctaTitle'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutQuad"
        });

        ctaTimeline.add($w('#ctaButton'), {
            opacity: 1,
            scale: 1,
            duration: 500,
            easing: "easeOutBack"
        }, { offset: -200 });

        $w('#ctaSection').onViewportEnter(() => {
            ctaTimeline.play();
        });
    } catch (e) {
        console.log("Home: Update CTA section IDs. Error:", e.message);
    }
});
