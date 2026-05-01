// ============================================================
// MASTER PAGE - Global Parallax & Scroll Animations
// ============================================================
// These animations apply ACROSS ALL PAGES on your site.
// 
// HOW TO USE:
// 1. Open the Wix Editor
// 2. Click on each element you want to animate
// 3. In the Properties panel, find the element ID (e.g., "header1")
// 4. Replace the placeholder IDs below with your actual element IDs
//
// ELEMENT ID FORMAT: Use '#elementID' (with the hash #)
// ============================================================

import wixAnimationsFrontend from 'wix-animations-frontend';

$w.onReady(function () {

    // -------------------------------------------------------
    // HEADER / NAVIGATION - Fade in on page load
    // -------------------------------------------------------
    // Replace '#header1' with your actual header element ID
    try {
        const headerTimeline = wixAnimationsFrontend.timeline();
        headerTimeline.add($w('#header1'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutQuad"
        });

        // Set initial state (hidden & slightly above)
        $w('#header1').style.opacity = 0;
        headerTimeline.play();
    } catch (e) {
        // Element not found - update the ID above
        console.log("masterPage: Update header element ID. Error:", e.message);
    }

    // -------------------------------------------------------
    // FOOTER - Slide up + fade when scrolled into view
    // -------------------------------------------------------
    // Replace '#footer1' with your actual footer element ID
    try {
        const footerTimeline = wixAnimationsFrontend.timeline();
        footerTimeline.add($w('#footer1'), {
            opacity: 1,
            y: 0,
            duration: 800,
            easing: "easeOutCirc"
        });

        $w('#footer1').onViewportEnter(() => {
            footerTimeline.play();
        });

        $w('#footer1').onViewportLeave(() => {
            footerTimeline.reverse();
        });
    } catch (e) {
        console.log("masterPage: Update footer element ID. Error:", e.message);
    }

    // -------------------------------------------------------
    // SOCIAL ICONS - Staggered entrance animation
    // -------------------------------------------------------
    // Replace these with your actual social icon element IDs
    // If you have a container with social icons, use that ID instead
    try {
        const socialIcons = ['#socialIcon1', '#socialIcon2', '#socialIcon3', '#socialIcon4'];
        const socialTimeline = wixAnimationsFrontend.timeline();

        socialIcons.forEach((iconId, index) => {
            socialTimeline.add($w(iconId), {
                opacity: 1,
                scale: 1,
                duration: 400,
                delay: index * 150,
                easing: "easeOutBack"
            });
        });

        // Trigger when footer/social section enters viewport
        $w('#footer1').onViewportEnter(() => {
            socialTimeline.play();
        });
    } catch (e) {
        console.log("masterPage: Update social icon IDs. Error:", e.message);
    }
});
