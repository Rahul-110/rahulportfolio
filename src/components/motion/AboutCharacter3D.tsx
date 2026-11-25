import React from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

const { useEffect, useRef, useState } = React;

export default function AboutCharacter3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showGreeting, setShowGreeting] = useState(false);
  const [currentPose, setCurrentPose] = useState<'standing' | 'waving'>('standing');
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Lighting (Cinematic Ambient + Point lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x6EA8FF, 5, 50);
    blueLight.position.set(5, 5, 5);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0xA970FF, 5, 50);
    purpleLight.position.set(-5, -5, 5);
    scene.add(purpleLight);

    const rimLight = new THREE.PointLight(0xFF8A3D, 3, 40);
    rimLight.position.set(0, 8, -3);
    scene.add(rimLight);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const standingTexture = textureLoader.load('/images/rahul-standing.png');
    const wavingTexture = textureLoader.load('/images/rahul-waving.png');

    // Character Plane
    const geometry = new THREE.PlaneGeometry(2.4, 3.6);
    const material = new THREE.MeshPhysicalMaterial({
      map: standingTexture,
      transparent: true,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.1,
      side: THREE.DoubleSide,
    });
    const characterMesh = new THREE.Mesh(geometry, material);
    scene.add(characterMesh);

    // Orbiting Geometric Tech Nodes (Floating 3D Elements)
    const ringGroup = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(2.2, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x6EA8FF, transparent: true, opacity: 0.3 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    ringGroup.add(ring);

    const smallRingGeo = new THREE.TorusGeometry(1.6, 0.015, 16, 100);
    const smallRingMat = new THREE.MeshBasicMaterial({ color: 0xA970FF, transparent: true, opacity: 0.4 });
    const smallRing = new THREE.Mesh(smallRingGeo, smallRingMat);
    smallRing.rotation.y = Math.PI / 4;
    ringGroup.add(smallRing);

    scene.add(ringGroup);

    // Floating Particles
    const particlesCount = 150;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 8;
      posArray[i + 1] = (Math.random() - 0.5) * 8;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x6EA8FF,
      transparent: true,
      opacity: 0.5,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // Mouse Parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // 15-Second Animation Timeline Loop Clock
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const totalTime = clock.getElapsedTime();
      const loopTime = totalTime % 15; // 15-second strict loop

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // --- 15-SECOND CHOREOGRAPHY TIMELINE ---
      if (loopTime >= 0 && loopTime < 3) {
        // Phase 1 (0s-3s): Cinematic Entrance & Materialization
        const progress = loopTime / 3;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic ease out
        characterMesh.position.z = THREE.MathUtils.lerp(-3, 0, easeProgress);
        characterMesh.scale.setScalar(THREE.MathUtils.lerp(0.8, 1, easeProgress));
        material.opacity = easeProgress;
        if (currentPose !== 'standing') {
          setCurrentPose('standing');
          material.map = standingTexture;
          material.needsUpdate = true;
        }
        setShowGreeting(false);
      } else if (loopTime >= 3 && loopTime < 7) {
        // Phase 2 (3s-7s): Hand Wave & Interactive Greeting
        if (currentPose !== 'waving') {
          setCurrentPose('waving');
          material.map = wavingTexture;
          material.needsUpdate = true;
          setShowGreeting(true);
        }
        // Subtle wave rotation
        characterMesh.rotation.y = Math.sin(totalTime * 6) * 0.08;
      } else if (loopTime >= 7 && loopTime < 11) {
        // Phase 3 (7s-11s): 3D Orbiting Perspective & Float
        if (showGreeting) setShowGreeting(false);
        if (currentPose !== 'standing') {
          setCurrentPose('standing');
          material.map = standingTexture;
          material.needsUpdate = true;
        }
        // Camera slight orbit & floating Bobbing
        camera.position.x = Math.sin((loopTime - 7) * 0.8) * 0.4 + targetX;
        camera.position.y = Math.cos((loopTime - 7) * 0.8) * 0.2 - targetY;
        camera.lookAt(0, 0, 0);

        characterMesh.position.y = Math.sin(totalTime * 2) * 0.1;
      } else {
        // Phase 4 (11s-15s): Cinematic Glow & Reset for seamless loop
        // const resetProgress = (loopTime - 11) / 4;
        camera.position.x += (0 - camera.position.x) * 0.1;
        camera.position.y += (0 - camera.position.y) * 0.1;
        camera.lookAt(0, 0, 0);

        // Gentle breathing scale
        const breath = 1 + Math.sin(totalTime * 3) * 0.02;
        characterMesh.scale.setScalar(breath);
      }

      // Continuous ambient rotation for rings and particles
      ringGroup.rotation.z = totalTime * 0.15;
      ringGroup.rotation.x = Math.PI / 3 + Math.sin(totalTime * 0.1) * 0.1;
      particlesMesh.rotation.y = totalTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      standingTexture.dispose();
      wavingTexture.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      smallRingGeo.dispose();
      smallRingMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (shouldReduceMotion) {
    return (
      <div className="relative h-[600px] w-full flex items-center justify-center">
        <img
          src="/images/rahul-standing.png"
          alt="Rahul - UI/UX Designer"
          className="h-[550px] w-auto object-contain drop-shadow-2xl"
        />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[600px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing">
      {/* Interactive 3D Greeting Bubble overlay tied to the 15s timeline */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="absolute top-12 right-4 md:-right-12 bg-[#101116]/95 border border-[#6EA8FF]/40 p-5 rounded-2xl shadow-[0_20px_50px_rgba(110,168,255,0.2)] backdrop-blur-xl z-30 min-w-[240px]"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#6EA8FF] animate-ping"></span>
              <p className="text-white font-display font-bold text-sm tracking-wide">Hey! I'm Rahul.</p>
            </div>
            <p className="text-xs text-[#B3B5C0] font-light">Designing SaaS & AI experiences.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
