// ============================================================
// CONTACT PAGE - Parallax & Scroll Animations
// ============================================================
//
// ANIMATIONS INCLUDED:
// 1. Page header - smooth entrance
// 2. Contact form - slide up with fade
// 3. Contact info cards - staggered reveal
// 4. Map section - fade in with scale
// 5. Social links - bounce-in cascade
//
// Replace all '#elementID' placeholders with your actual IDs
// from the Wix Editor Properties panel.
// ============================================================

import wixAnimationsFrontend from 'wix-animations-frontend';

$w.onReady(function () {

    // -------------------------------------------------------
    // 1. PAGE HEADER
    // -------------------------------------------------------
    // Replace '#contactTitle' with your page title element ID
    // Replace '#contactSubtitle' with subtitle element ID
    try {
        const headerTimeline = wixAnimationsFrontend.timeline();

        headerTimeline.add($w('#contactTitle'), {
            opacity: 1,
            y: 0,
            duration: 700,
            easing: "easeOutQuart"
        });

        headerTimeline.add($w('#contactSubtitle'), {
            opacity: 1,
            y: 0,
            duration: 500,
            easing: "easeOutQuad"
        }, { offset: -300 });

        headerTimeline.play();
    } catch (e) {
        console.log("Contact: Update page header IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 2. CONTACT FORM SECTION
    // -------------------------------------------------------
    // Replace '#formSection' with your form strip ID
    // Replace '#contactForm' with your form element ID
    // (or individual fields: '#nameInput', '#emailInput', '#messageInput', '#submitBtn')
    try {
        const formTimeline = wixAnimationsFrontend.timeline();

        // Entire form slides up with fade
        formTimeline.add($w('#contactForm'), {
            opacity: 1,
            y: 0,
            duration: 800,
            easing: "easeOutQuint"
        });

        $w('#formSection').onViewportEnter(() => {
            formTimeline.play();
        });

        $w('#formSection').onViewportLeave(() => {
            formTimeline.reverse();
        });
    } catch (e) {
        console.log("Contact: Update form section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 3. CONTACT INFO CARDS (Email, Phone, Location)
    // -------------------------------------------------------
    // Replace '#infoSection' with your info strip ID
    // Replace '#infoCard1', '#infoCard2', '#infoCard3' with card IDs
    try {
        const infoTimeline = wixAnimationsFrontend.timeline();

        const infoCards = ['#infoCard1', '#infoCard2', '#infoCard3'];
        infoCards.forEach((cardId, index) => {
            infoTimeline.add($w(cardId), {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 600,
                delay: index * 200,
                easing: "easeOutBack"
            });
        });

        $w('#infoSection').onViewportEnter(() => {
            infoTimeline.play();
        });

        $w('#infoSection').onViewportLeave(() => {
            infoTimeline.reverse();
        });
    } catch (e) {
        console.log("Contact: Update info card IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 4. MAP SECTION
    // -------------------------------------------------------
    // Replace '#mapSection' with your map strip ID
    // Replace '#mapElement' with your Google Maps element ID
    try {
        const mapTimeline = wixAnimationsFrontend.timeline();

        mapTimeline.add($w('#mapElement'), {
            opacity: 1,
            scale: 1,
            duration: 1000,
            easing: "easeOutQuint"
        });

        $w('#mapSection').onViewportEnter(() => {
            mapTimeline.play();
        });

        $w('#mapSection').onViewportLeave(() => {
            mapTimeline.reverse();
        });
    } catch (e) {
        console.log("Contact: Update map section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 5. SOCIAL LINKS - Bounce cascade
    // -------------------------------------------------------
    // Replace '#socialSection' with your social links strip ID
    // Replace '#social1' through '#social4' with social link element IDs
    try {
        const socialTimeline = wixAnimationsFrontend.timeline();

        const socialLinks = ['#social1', '#social2', '#social3', '#social4'];
        socialLinks.forEach((linkId, index) => {
            socialTimeline.add($w(linkId), {
                opacity: 1,
                scale: 1,
                duration: 400,
                delay: index * 120,
                easing: "easeOutBack"
            });
        });

        $w('#socialSection').onViewportEnter(() => {
            socialTimeline.play();
        });
    } catch (e) {
        console.log("Contact: Update social link IDs. Error:", e.message);
    }
});
