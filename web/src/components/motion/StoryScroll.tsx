import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function StoryScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const root = document.querySelector<HTMLElement>("[data-story-root]");
    if (!root) return;

    const beats = Array.from(root.querySelectorAll<HTMLElement>("[data-beat]"));
    const pin = root.querySelector<HTMLElement>("[data-story-pin]");
    const visuals = Array.from(root.querySelectorAll<HTMLElement>("[data-visual]"));

    if (!beats.length || !pin || !visuals.length) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      // Pin the left column so the story reads cleanly while visuals transition.
      ScrollTrigger.create({
        trigger: root,
        start: "top top+=110",
        end: "bottom bottom-=120",
        pin,
        pinSpacing: true,
      });

      // Set initial state: only first visual is visible.
      visuals.forEach((v, i) => {
        gsap.set(v, { autoAlpha: i === 0 ? 1 : 0, y: i === 0 ? 0 : 18, scale: i === 0 ? 1 : 0.98 });
      });

      beats.forEach((beat, i) => {
        ScrollTrigger.create({
          trigger: beat,
          start: "top center+=80",
          end: "bottom center+=80",
          onEnter: () => swap(i),
          onEnterBack: () => swap(i),
        });
      });

      function swap(active: number) {
        visuals.forEach((v, i) => {
          const isActive = i === active;
          gsap.to(v, {
            autoAlpha: isActive ? 1 : 0,
            y: isActive ? 0 : 18,
            scale: isActive ? 1 : 0.985,
            duration: 0.55,
            ease: "power3.out",
          });
        });
      }

      return () => {
        // GSAP matchMedia cleanup.
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}

