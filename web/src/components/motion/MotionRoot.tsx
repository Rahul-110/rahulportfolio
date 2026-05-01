import { useEffect } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function isTouchLike() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(hover: none)")?.matches ||
    window.matchMedia?.("(pointer: coarse)")?.matches ||
    "ontouchstart" in window
  );
}

export default function MotionRoot() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let destroyed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ default: Lenis }, { default: gsap }, { default: ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (destroyed) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1.4,
      });

      let rafId = 0;
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Keep ScrollTrigger in sync with Lenis.
      lenis.on("scroll", ScrollTrigger.update);

      // Basic parallax for any element with data-parallax.
      const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      parallaxEls.forEach((el) => {
        const speed = Number(el.dataset.speed ?? "0.12");
        const axis = (el.dataset.axis ?? "y") as "x" | "y";
        const dir = (el.dataset.dir ?? "up") as "up" | "down";
        const sign = dir === "up" ? -1 : 1;

        gsap.to(el, {
          [axis === "y" ? "y" : "x"]: () => sign * 160 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Micro-interactions: tilt (desktop only).
      const tiltEnabled = !isTouchLike();
      const tiltTargets = tiltEnabled
        ? Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"))
        : [];

      const tiltCleanups: Array<() => void> = [];
      tiltTargets.forEach((el) => {
        let pending = false;
        let lx = 0;
        let ly = 0;

        const onMove = (e: PointerEvent) => {
          lx = e.clientX;
          ly = e.clientY;
          if (pending) return;
          pending = true;
          requestAnimationFrame(() => {
            pending = false;
            const rect = el.getBoundingClientRect();
            const px = (lx - rect.left) / rect.width;
            const py = (ly - rect.top) / rect.height;
            const rx = (py - 0.5) * -8;
            const ry = (px - 0.5) * 10;
            el.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
            el.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
            el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(
              2
            )}deg) translateY(-2px)`;
          });
        };

        const onLeave = () => {
          el.style.transform = "";
        };

        el.addEventListener("pointermove", onMove, { passive: true });
        el.addEventListener("pointerleave", onLeave, { passive: true });
        tiltCleanups.push(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        });
      });

      cleanup = () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
        tiltCleanups.forEach((fn) => fn());
      };
    })();

    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, []);

  return null;
}

