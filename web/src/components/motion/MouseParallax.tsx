import { useEffect, useRef } from "react";

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function isTouchLike() {
  return (
    window.matchMedia?.("(hover: none)")?.matches ||
    window.matchMedia?.("(pointer: coarse)")?.matches ||
    "ontouchstart" in window
  );
}

type Props = {
  strength?: number; // pixels at max
};

export default function MouseParallax({ strength = 14 }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion() || isTouchLike()) return;
    const mount = rootRef.current;
    if (!mount) return;

    // The layers live in the parent visual container (same layout block).
    const root = mount.parentElement as HTMLElement | null;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-mouse-layer]"));
    if (!targets.length) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tx = px * strength;
      ty = py * strength;
    };

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      targets.forEach((el) => {
        const depth = Number(el.dataset.depth ?? "1");
        el.style.transform = `translate3d(${(cx * depth).toFixed(2)}px, ${(cy * depth).toFixed(
          2
        )}px, 0)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      root.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);

  return <div ref={rootRef} data-mouse-root />;
}

