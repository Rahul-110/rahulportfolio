import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function ProjectSlides() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector<HTMLElement>("[data-projects-section]");
    const projects = gsap.utils.toArray<HTMLElement>("[data-project-slide]");
    if (!section || projects.length === 0) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Set initial states: all except first are hidden to the right
      gsap.set(projects, { opacity: 0, xPercent: 100, scale: 0.96 });
      gsap.set(projects[0], { opacity: 1, xPercent: 0, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${projects.length * 150}%`,
          scrub: 1.5, // Increased scrub for weightier feel
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      projects.forEach((project, i) => {
        const isLast = i === projects.length - 1;

        // Entrance for projects 1-N (first is already visible)
        if (i > 0) {
          tl.to(project, {
            opacity: 1,
            xPercent: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out", // Premium curve approximation in GSAP
          }, i * 1.5);
        }

        // Exit for projects 0 to N-1
        if (!isLast) {
          tl.to(project, {
            opacity: 0,
            xPercent: -30, // Reduced travel distance for more cinematic "parallax" exit
            scale: 0.95,
            filter: "blur(4px)", // Cinematic depth fade
            duration: 1,
            ease: "power2.inOut",
          }, (i + 1) * 1.5 - 0.5);
        }
      });

      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}
