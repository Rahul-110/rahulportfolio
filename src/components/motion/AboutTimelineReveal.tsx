import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function AboutTimelineReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const root = document.querySelector<HTMLElement>("[data-about-root]");
    if (!root) return;

    const storyBlocks = Array.from(root.querySelectorAll<HTMLElement>("[data-about-fade]"));
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-timeline-item]"));

    // Text fade-in blocks
    storyBlocks.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    // Timeline sequential reveal
    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 14 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.14,
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
        },
      }
    );

    return () => {
      // Kill triggers created by this component only (safe + avoids nuking other sections).
      ScrollTrigger.getAll()
        .filter((t) => t.vars?.trigger && (t.vars.trigger as Element).closest?.("[data-about-root]"))
        .forEach((t) => t.kill());
    };
  }, []);

  return null;
}

