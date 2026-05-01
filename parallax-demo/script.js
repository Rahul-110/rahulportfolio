/* ============================================================
   PARALLAX PORTFOLIO DEMO - JavaScript
   Scroll-triggered animations, parallax effects, counters
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------
    // 1. CURSOR GLOW FOLLOW
    // -------------------------------------------------------
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        if (cursorGlow) {
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
        }
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // -------------------------------------------------------
    // 2. SCROLL REVEAL (Intersection Observer)
    // -------------------------------------------------------
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = parseInt(el.dataset.delay) || 0;

                setTimeout(() => {
                    el.classList.add('revealed');

                    // Trigger skill bar fill animation
                    const skillFill = el.querySelector('.skill-fill');
                    if (skillFill) {
                        const width = skillFill.dataset.width;
                        skillFill.style.setProperty('--fill-width', width + '%');
                        skillFill.style.width = width + '%';
                    }
                }, delay);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // -------------------------------------------------------
    // 3. PARALLAX SCROLLING EFFECT
    // -------------------------------------------------------
    const parallaxElements = document.querySelectorAll('.parallax-element');

    function updateParallax() {
        const scrollY = window.scrollY;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.1;
            const direction = el.dataset.direction || 'up';
            const rect = el.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const viewCenter = window.innerHeight / 2;
            const distance = elementCenter - viewCenter;

            let translateY = 0;
            if (direction === 'up') {
                translateY = distance * speed * -1;
            } else {
                translateY = distance * speed;
            }

            el.style.transform = `translateY(${translateY}px)`;
        });

        requestAnimationFrame(updateParallax);
    }
    updateParallax();

    // -------------------------------------------------------
    // 4. NAVBAR - Scroll effects (shrink + active link)
    // -------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    let lastScroll = 0;
    let navHidden = false;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Add background on scroll
        if (scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.padding = '12px 48px';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.6)';
            navbar.style.padding = '16px 48px';
        }

        // Hide/show on scroll direction
        if (scrollY > lastScroll && scrollY > 200 && !navHidden) {
            navbar.style.transform = 'translateY(-100%)';
            navHidden = true;
        } else if (scrollY < lastScroll && navHidden) {
            navbar.style.transform = 'translateY(0)';
            navHidden = false;
        }
        lastScroll = scrollY;

        // Update active nav link
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // -------------------------------------------------------
    // 5. COUNTER ANIMATION
    // -------------------------------------------------------
    const counters = document.querySelectorAll('.stat-number[data-count]');
    let countersAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }

    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const start = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);

                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * target);

                counter.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }

    // -------------------------------------------------------
    // 6. WORK CARDS - Tilt effect on hover
    // -------------------------------------------------------
    const workCards = document.querySelectorAll('.work-card');

    workCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // -------------------------------------------------------
    // 7. SERVICE CARDS - Hover glow effect
    // -------------------------------------------------------
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--glow-x', x + 'px');
            card.style.setProperty('--glow-y', y + 'px');
            card.style.background = `
                radial-gradient(circle 200px at ${x}px ${y}px, rgba(124, 58, 237, 0.08), transparent),
                var(--bg-card)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'var(--bg-card)';
        });
    });

    // -------------------------------------------------------
    // 8. SKILL CARDS - Hover glow effect
    // -------------------------------------------------------
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `
                radial-gradient(circle 200px at ${x}px ${y}px, rgba(124, 58, 237, 0.08), transparent),
                var(--bg-card)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.background = 'var(--bg-card)';
        });
    });

    // -------------------------------------------------------
    // 9. CONTACT FORM - Submit handler
    // -------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn-submit span');
            const originalText = btn.textContent;
            btn.textContent = 'Message Sent! ✓';
            contactForm.querySelector('.btn-submit').style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';

            setTimeout(() => {
                btn.textContent = originalText;
                contactForm.querySelector('.btn-submit').style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // -------------------------------------------------------
    // 10. BACKGROUND PARALLAX for sections
    // -------------------------------------------------------
    const sectionBgs = document.querySelectorAll('.section');

    function updateSectionParallax() {
        const scrollY = window.scrollY;

        sectionBgs.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const speed = 0.05;

            if (sectionTop < window.innerHeight && rect.bottom > 0) {
                const yPos = sectionTop * speed;
                section.style.backgroundPositionY = yPos + 'px';
            }
        });

        requestAnimationFrame(updateSectionParallax);
    }
    updateSectionParallax();

    // -------------------------------------------------------
    // 11. SCROLL PROGRESS BAR
    // -------------------------------------------------------
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #7c3aed, #a855f7, #c084fc);
        z-index: 10001;
        transition: width 0.1s linear;
        border-radius: 0 2px 2px 0;
        box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = scrollProgress + '%';
    });

    // -------------------------------------------------------
    // 12. MAGNETIC BUTTONS
    // -------------------------------------------------------
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-nav, .social-link');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // -------------------------------------------------------
    // 13. TYPED TEXT EFFECT FOR HERO (subtle)
    // -------------------------------------------------------
    const gradientText = document.querySelector('.hero-title .gradient-text');
    if (gradientText) {
        const words = ['Creator', 'Designer', 'Innovator', 'Visionary'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                gradientText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                gradientText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 120;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400; // Pause before next word
            }

            setTimeout(typeEffect, typeSpeed);
        }

        // Start after hero animation completes
        setTimeout(typeEffect, 3000);
    }

    // -------------------------------------------------------
    // 14. STAR FIELD CANVAS
    // -------------------------------------------------------
    const starCanvas = document.getElementById('heroStars');
    if (starCanvas) {
        const ctx = starCanvas.getContext('2d');
        let stars = [];
        const STAR_COUNT = 200;

        function resizeCanvas() {
            starCanvas.width = starCanvas.offsetWidth;
            starCanvas.height = starCanvas.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create stars
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * starCanvas.width,
                y: Math.random() * starCanvas.height,
                radius: Math.random() * 1.5 + 0.3,
                alpha: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinkleOffset: Math.random() * Math.PI * 2
            });
        }

        function drawStars(time) {
            ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
            
            stars.forEach(star => {
                const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.4 + 0.6;
                const alpha = star.alpha * twinkle;
                
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 200, 255, ${alpha})`;
                ctx.fill();
                
                // Add glow to brighter stars
                if (star.radius > 1) {
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
                    const gradient = ctx.createRadialGradient(
                        star.x, star.y, 0,
                        star.x, star.y, star.radius * 3
                    );
                    gradient.addColorStop(0, `rgba(180, 160, 255, ${alpha * 0.3})`);
                    gradient.addColorStop(1, 'transparent');
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }
            });

            requestAnimationFrame(drawStars);
        }
        requestAnimationFrame(drawStars);
    }

    console.log('✨ Parallax Portfolio Demo loaded successfully!');
});
