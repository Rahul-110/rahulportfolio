import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export default function HorizontalScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    const root = document.querySelector<HTMLElement>("[data-hscroll-root]");
    const track = root?.querySelector<HTMLElement>("[data-hscroll-track]");
    if (!root || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const getScroll = () => {
        const total = track.scrollWidth - root.clientWidth;
        return Math.max(0, total);
      };

      const tween = gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top+=110",
          end: () => `+=${getScroll()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.addEventListener("refreshInit", () => gsap.set(track, { x: 0 }));
      ScrollTrigger.refresh();

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}

