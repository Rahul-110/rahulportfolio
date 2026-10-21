// ============================================================
// MASTER PAGE - Global Header & Navigation Animations
// ============================================================

import wixAnimationsFrontend from 'wix-animations-frontend';

$w.onReady(function () {

    // -------------------------------------------------------
    // HEADER / NAVIGATION - Smooth Entrance
    // -------------------------------------------------------
    try {
        const headerTimeline = wixAnimationsFrontend.timeline();
        headerTimeline.add($w('#header1'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutCubic"
        });

        headerTimeline.play();
    } catch (e) {
        console.log("masterPage: Update header element ID. Error:", e.message);
    }

    // -------------------------------------------------------
    // FOOTER - Entrance on Scroll
    // -------------------------------------------------------
    try {
        const footerTimeline = wixAnimationsFrontend.timeline();
        footerTimeline.add($w('#footer1'), {
            opacity: 1,
            y: 0,
            duration: 700,
            easing: "easeOutCubic"
        });

        $w('#footer1').onViewportEnter(() => {
            footerTimeline.play();
        });
    } catch (e) {
        console.log("masterPage: Update footer element ID. Error:", e.message);
    }

});
