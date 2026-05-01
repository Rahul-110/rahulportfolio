// ============================================================
// ABOUT ME PAGE - Parallax & Scroll Animations
// ============================================================
//
// ANIMATIONS INCLUDED:
// 1. Profile section - image scale + bio text slide
// 2. Skills section - staggered bar/card reveals
// 3. Experience/Timeline - alternating left/right slides
// 4. Education section - fade up cascade
//
// Replace all '#elementID' placeholders with your actual IDs
// from the Wix Editor Properties panel.
// ============================================================

import wixAnimationsFrontend from 'wix-animations-frontend';

$w.onReady(function () {

    // -------------------------------------------------------
    // 1. PROFILE / BIO SECTION
    // -------------------------------------------------------
    // Replace '#profileSection' with your profile strip ID
    // Replace '#profileImage' with your photo element ID
    // Replace '#bioTitle' with your name/title heading ID
    // Replace '#bioText' with your bio paragraph ID
    try {
        const profileTimeline = wixAnimationsFrontend.timeline();

        // Profile image - subtle zoom in with fade
        profileTimeline.add($w('#profileImage'), {
            opacity: 1,
            scale: 1,
            duration: 900,
            easing: "easeOutQuint"
        });

        // Name/title slides in from left
        profileTimeline.add($w('#bioTitle'), {
            opacity: 1,
            x: 0,
            duration: 700,
            easing: "easeOutQuart"
        }, { offset: -500 });

        // Bio text fades up
        profileTimeline.add($w('#bioText'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutQuad"
        }, { offset: -400 });

        // Play on page load since this is usually above the fold
        profileTimeline.play();
    } catch (e) {
        console.log("About: Update profile section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 2. SKILLS SECTION - Staggered card/bar reveals
    // -------------------------------------------------------
    // Replace '#skillsSection' with your skills strip ID
    // Replace '#skillsTitle' with the section heading
    // Replace '#skill1' through '#skill6' with individual skill elements
    try {
        const skillsTimeline = wixAnimationsFrontend.timeline();

        skillsTimeline.add($w('#skillsTitle'), {
            opacity: 1,
            y: 0,
            duration: 500,
            easing: "easeOutQuad"
        });

        // Staggered skill cards - each appears 150ms after the previous
        const skills = ['#skill1', '#skill2', '#skill3', '#skill4', '#skill5', '#skill6'];
        skills.forEach((skillId, index) => {
            skillsTimeline.add($w(skillId), {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 500,
                delay: index * 150,
                easing: "easeOutBack"
            }, { offset: -300 });
        });

        $w('#skillsSection').onViewportEnter(() => {
            skillsTimeline.play();
        });

        $w('#skillsSection').onViewportLeave(() => {
            skillsTimeline.reverse();
        });
    } catch (e) {
        console.log("About: Update skills section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 3. EXPERIENCE / TIMELINE SECTION
    // -------------------------------------------------------
    // Replace '#experienceSection' with your experience strip ID
    // Replace '#expTitle' with the section heading
    // Replace '#exp1', '#exp2', '#exp3' with experience entries
    try {
        const expTimeline = wixAnimationsFrontend.timeline();

        expTimeline.add($w('#expTitle'), {
            opacity: 1,
            y: 0,
            duration: 600,
            easing: "easeOutQuad"
        });

        // Alternating slide directions for timeline items
        const expItems = ['#exp1', '#exp2', '#exp3'];
        expItems.forEach((expId, index) => {
            const fromLeft = index % 2 === 0;
            expTimeline.add($w(expId), {
                opacity: 1,
                x: 0, // slides to center from either side
                duration: 700,
                delay: index * 200,
                easing: "easeOutCirc"
            }, { offset: -400 });
        });

        $w('#experienceSection').onViewportEnter(() => {
            expTimeline.play();
        });

        $w('#experienceSection').onViewportLeave(() => {
            expTimeline.reverse();
        });
    } catch (e) {
        console.log("About: Update experience section IDs. Error:", e.message);
    }

    // -------------------------------------------------------
    // 4. EDUCATION / CERTIFICATIONS SECTION
    // -------------------------------------------------------
    // Replace '#eduSection' with your education strip ID
    // Replace '#eduTitle' with the section heading
    // Replace '#edu1', '#edu2' with education entries
    try {
        const eduTimeline = wixAnimationsFrontend.timeline();

        eduTimeline.add($w('#eduTitle'), {
            opacity: 1,
            y: 0,
            duration: 500,
            easing: "easeOutQuad"
        });

        const eduItems = ['#edu1', '#edu2'];
        eduItems.forEach((eduId, index) => {
            eduTimeline.add($w(eduId), {
                opacity: 1,
                y: 0,
                duration: 600,
                delay: index * 200,
                easing: "easeOutQuart"
            }, { offset: -300 });
        });

        $w('#eduSection').onViewportEnter(() => {
            eduTimeline.play();
        });

        $w('#eduSection').onViewportLeave(() => {
            eduTimeline.reverse();
        });
    } catch (e) {
        console.log("About: Update education section IDs. Error:", e.message);
    }
});
