import React from 'react';

const { useEffect, useRef } = React;

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth lerp
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate Particles
    const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 18000), 65);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      baseAlpha: number;
      color: string;
    }

    const colors = [
      'rgba(204, 120, 92, ', // Coral (Anthropic Warm Coral)
      'rgba(93, 184, 166, ', // Teal (Accent Teal)
      'rgba(232, 165, 90, ',  // Amber (Accent Amber)
    ];

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const baseAlpha = Math.random() * 0.35 + 0.15;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.8,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    let time = 0;

    const render = () => {
      time += 0.01;

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Interactive Ambient Mouse Glows
      const primaryGlow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        Math.max(width, height) * 0.35
      );
      primaryGlow.addColorStop(0, 'rgba(204, 120, 92, 0.07)'); // Coral
      primaryGlow.addColorStop(0.5, 'rgba(93, 184, 166, 0.035)'); // Teal
      primaryGlow.addColorStop(1, 'rgba(250, 249, 245, 0)'); // Canvas tint

      ctx.fillStyle = primaryGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Secondary Floating Atmosphere Glow (Autonomous gentle movement)
      const secX = width * 0.7 + Math.sin(time * 0.5) * 120;
      const secY = height * 0.3 + Math.cos(time * 0.3) * 100;
      const secGlow = ctx.createRadialGradient(secX, secY, 0, secX, secY, 450);
      secGlow.addColorStop(0, 'rgba(232, 165, 90, 0.04)'); // Amber
      secGlow.addColorStop(1, 'rgba(250, 249, 245, 0)'); // Canvas tint

      // 3. Update & Draw Particles with Interactive Cursor Reaction
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse Proximity Influence
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (dist < maxDist) {
          const factor = (1 - dist / maxDist);
          p.alpha = p.baseAlpha + factor * 0.5;

          // Gentle repelling push
          p.x -= (dx / dist) * factor * 0.6;
          p.y -= (dy / dist) * factor * 0.6;
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.02;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with delicate constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 110) {
            const lineAlpha = (1 - pdist / 110) * 0.12 * Math.min(p.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(204, 120, 92, ${lineAlpha})`; // Coral lines
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      style={{ background: 'transparent' }}
    />
  );
}
