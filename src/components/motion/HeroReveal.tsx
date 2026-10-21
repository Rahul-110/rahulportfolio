import { useEffect } from "react";
import gsap from "gsap";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function HeroReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const root = document.querySelector<HTMLElement>("[data-hero-root]");
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-hero-item]"));
    const visual = root.querySelector<HTMLElement>("[data-hero-visual]");

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    if (items.length) {
      tl.fromTo(
        items,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.12,
          clearProps: "all",
        }
      );
    }

    if (visual) {
      tl.fromTo(
        visual,
        { autoAlpha: 0, y: 32, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          clearProps: "transform,opacity",
        },
        "-=0.6"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return null;
}
