// ============================================================
// SERVICES PAGE - Parallax & Scroll Animations
// ============================================================
//
// ANIMATIONS INCLUDED:
// 1. Page header - smooth title entrance
// 2. Service cards - staggered scale-up with bounce
// 3. Process/workflow steps - sequential reveal
// 4. Pricing section - cascade fade-in
// 5. CTA section - attention-grabbing entrance
//
// Replace all '#elementID' placeholders with your actual IDs
// from the Wix Editor Properties panel.
// ============================================================

import wixAnimationsFrontend from 'wix-animations-frontend';

$w.onReady(function () {

    // -------------------------------------------------------
    // 1. PAGE HEADER
    // -------------------------------------------------------
    // Replace '#servicesTitle' with your page title element ID
    // Replace '#servicesSubtitle' with subtitle element ID
    try {
        const headerTimeline = wixAnimationsFrontend.timeline();

        headerTimeline.add($w('#servicesTitle'), {
            opacity: 1,
            y: 0,
            duration: 700,
            easing: "easeOutQuart"
        });

        headerTimeline.add($w('#servicesSubtitle'), {
            opacity: 1,
            y: 0,
            duration: 500,
            easing: "easeOutQuad"
        }, { offset: -300 });

        headerTimeline.play();
    } catch (e) {
        console.log("Services: Update page header IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 2. SERVICE CARDS - Staggered entrance with bounce
    // -------------------------------------------------------
    // Replace '#servicesSection' with your services strip ID
    // Replace '#service1' through '#service4' with service card IDs
    try {
        const cardsTimeline = wixAnimationsFrontend.timeline();

        const serviceCards = ['#service1', '#service2', '#service3', '#service4'];
        serviceCards.forEach((cardId, index) => {
            cardsTimeline.add($w(cardId), {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 600,
                delay: index * 200,
                easing: "easeOutBack" // Gives a nice "bounce" at the end
            });
        });

        $w('#servicesSection').onViewportEnter(() => {
            cardsTimeline.play();
        });

        $w('#servicesSection').onViewportLeave(() => {
            cardsTimeline.reverse();
        });
    } catch (e) {
        console.log("Services: Update service card IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 3. PROCESS / HOW IT WORKS STEPS
    // -------------------------------------------------------
    // Replace '#processSection' with your process strip ID
    // Replace '#processTitle' with the section heading
    // Replace '#step1' through '#step4' with step element IDs
    try {
        const processTimeline = wixAnimationsFrontend.timeline();

        processTimeline.add($w('#processTitle'), {
            opacity: 1,
            y: 0,
            duration: 500,
            easing: "easeOutQuad"
        });

        // Steps appear one by one in sequence
        const steps = ['#step1', '#step2', '#step3', '#step4'];
        steps.forEach((stepId, index) => {
            processTimeline.add($w(stepId), {
                opacity: 1,
                x: 0,
                duration: 600,
                delay: index * 300, // Longer delay between steps
                easing: "easeOutCirc"
            }, { offset: -200 });
        });

        $w('#processSection').onViewportEnter(() => {
            processTimeline.play();
        });

        $w('#processSection').onViewportLeave(() => {
            processTimeline.reverse();
        });
    } catch (e) {
        console.log("Services: Update process section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 4. PRICING SECTION
    // -------------------------------------------------------
    // Replace '#pricingSection' with your pricing strip ID
    // Replace '#pricingTitle' with the section heading
    // Replace '#price1', '#price2', '#price3' with pricing card IDs
    try {
        const pricingTimeline = wixAnimationsFrontend.timeline();

        pricingTimeline.add($w('#pricingTitle'), {
            opacity: 1,
            y: 0,
            duration: 500,
            easing: "easeOutQuad"
        });

        const priceCards = ['#price1', '#price2', '#price3'];
        priceCards.forEach((priceId, index) => {
            pricingTimeline.add($w(priceId), {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 700,
                delay: index * 150,
                easing: "easeOutQuart"
            }, { offset: -400 });
        });

        $w('#pricingSection').onViewportEnter(() => {
            pricingTimeline.play();
        });

        $w('#pricingSection').onViewportLeave(() => {
            pricingTimeline.reverse();
        });
    } catch (e) {
        console.log("Services: Update pricing section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 5. BOTTOM CTA
    // -------------------------------------------------------
    // Replace '#servicesCTA' with your CTA strip ID
    // Replace '#ctaHeading', '#ctaBtn' with CTA element IDs
    try {
        const ctaTimeline = wixAnimationsFrontend.timeline();

        ctaTimeline.add($w('#ctaHeading'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutQuad"
        });

        ctaTimeline.add($w('#ctaBtn'), {
            opacity: 1,
            scale: 1,
            duration: 500,
            easing: "easeOutBack"
        }, { offset: -200 });

        $w('#servicesCTA').onViewportEnter(() => {
            ctaTimeline.play();
        });
    } catch (e) {
        console.log("Services: Update bottom CTA IDs. Error:", e.message);
    }
});
