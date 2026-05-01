// ============================================================
// MY WORK PAGE - Parallax & Scroll Animations
// ============================================================
//
// ANIMATIONS INCLUDED:
// 1. Page title - dramatic drop-in entrance
// 2. Portfolio grid - staggered card reveals with scale
// 3. Project details - slide-in panels
// 4. Categories/filters - cascading fade-in
//
// Replace all '#elementID' placeholders with your actual IDs
// from the Wix Editor Properties panel.
// ============================================================

import wixAnimationsFrontend from 'wix-animations-frontend';

$w.onReady(function () {

    // -------------------------------------------------------
    // 1. PAGE HEADER - Title entrance
    // -------------------------------------------------------
    // Replace '#workPageTitle' with your page title element ID
    // Replace '#workPageSubtitle' with subtitle/description ID
    try {
        const headerTimeline = wixAnimationsFrontend.timeline();

        headerTimeline.add($w('#workPageTitle'), {
            opacity: 1,
            y: 0,
            duration: 700,
            easing: "easeOutQuart"
        });

        headerTimeline.add($w('#workPageSubtitle'), {
            opacity: 1,
            y: 0,
            duration: 500,
            easing: "easeOutQuad"
        }, { offset: -300 });

        headerTimeline.play();
    } catch (e) {
        console.log("MyWork: Update page header IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 2. CATEGORY FILTERS - Cascading reveal
    // -------------------------------------------------------
    // Replace '#filterSection' with your filter/category strip ID
    // Replace '#filter1' through '#filter4' with filter button IDs
    try {
        const filterTimeline = wixAnimationsFrontend.timeline();

        const filters = ['#filter1', '#filter2', '#filter3', '#filter4'];
        filters.forEach((filterId, index) => {
            filterTimeline.add($w(filterId), {
                opacity: 1,
                y: 0,
                duration: 400,
                delay: index * 100,
                easing: "easeOutQuad"
            });
        });

        filterTimeline.play();
    } catch (e) {
        console.log("MyWork: Update filter IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 3. PORTFOLIO GRID - Staggered card reveals
    // -------------------------------------------------------
    // Replace '#portfolioSection' with your portfolio gallery strip ID
    // Replace '#project1' through '#project6' with project card/image IDs
    // If using a Wix Gallery or Repeater, use that element's ID instead
    try {
        const gridTimeline = wixAnimationsFrontend.timeline();

        // Each project card scales up + fades in with stagger
        const projects = ['#project1', '#project2', '#project3', '#project4', '#project5', '#project6'];
        projects.forEach((projectId, index) => {
            gridTimeline.add($w(projectId), {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 600,
                delay: index * 150,
                easing: "easeOutBack"
            });
        });

        $w('#portfolioSection').onViewportEnter(() => {
            gridTimeline.play();
        });

        $w('#portfolioSection').onViewportLeave(() => {
            gridTimeline.reverse();
        });
    } catch (e) {
        console.log("MyWork: Update portfolio grid IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 4. PROJECT DETAIL SECTIONS (if you have expanded views)
    // -------------------------------------------------------
    // Replace '#detailSection1', '#detailSection2' with detail strip IDs
    // Replace '#detailTitle1', '#detailImage1', '#detailDesc1' etc.
    try {
        const detailSections = [
            { section: '#detailSection1', title: '#detailTitle1', image: '#detailImage1', desc: '#detailDesc1' },
            { section: '#detailSection2', title: '#detailTitle2', image: '#detailImage2', desc: '#detailDesc2' }
        ];

        detailSections.forEach((detail) => {
            const detailTimeline = wixAnimationsFrontend.timeline();

            // Image slides in from right
            detailTimeline.add($w(detail.image), {
                opacity: 1,
                x: 0,
                duration: 800,
                easing: "easeOutQuint"
            });

            // Title slides in from left
            detailTimeline.add($w(detail.title), {
                opacity: 1,
                x: 0,
                duration: 600,
                easing: "easeOutQuart"
            }, { offset: -500 });

            // Description fades up
            detailTimeline.add($w(detail.desc), {
                opacity: 1,
                y: 0,
                duration: 500,
                easing: "easeOutQuad"
            }, { offset: -300 });

            $w(detail.section).onViewportEnter(() => {
                detailTimeline.play();
            });

            $w(detail.section).onViewportLeave(() => {
                detailTimeline.reverse();
            });
        });
    } catch (e) {
        console.log("MyWork: Update detail section IDs. Error:", e.message);
    }
});
