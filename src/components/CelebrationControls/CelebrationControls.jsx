// src/components/CelebrationControls/CelebrationControls.jsx
import React, { useRef } from 'react';
import confetti from 'canvas-confetti';
import './CelebrationControls.css';

function CelebrationControls({ isMuted }) {
  const celebrateButtonRef = useRef(null);
  const audioRef = useRef(null);

  const createFirework = (x) => {
    // ... (keep createFirework function as is)
    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    particle.style.left = `${x}%`;
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
      const burst = document.createElement('div');
      burst.className = 'firework-burst';
      burst.style.left = `${x}%`;
      burst.style.top = `${Math.random() * 70 + 15}%`;
      burst.style.background = `hsl(${Math.random() * 360}, 90%, 70%)`;
      document.body.appendChild(burst);

      setTimeout(() => burst.remove(), 800);
    }, Math.random() * 400 + 600);
  };

  const handleCelebrateClick = () => {
    if (!isMuted && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => console.error("Audio play failed:", error));
    }

    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        createFirework(Math.random() * 100);
      }, i * 150);
    }

    const buttonElem = celebrateButtonRef.current;
    if (!buttonElem) return;

    const rect = buttonElem.getBoundingClientRect();
    const originX = (rect.left + rect.right) / 2 / window.innerWidth;
    const originY = (rect.top + rect.bottom) / 2 / window.innerHeight;

    // Define colors (can be same as original or keep your updated list)
    const confettiColors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9f43'];

    // --- Match the original HTML confetti calls ---
    const count = 200; // Original particle count
    const defaults = {
        particleCount: count,
        origin: { x: originX, y: originY },
        colors: confettiColors // Use the defined colors
    };

    // First confetti burst (matches original first call)
    confetti({
        ...defaults,
        spread: 360, // KEY: Ensure full circle
        startVelocity: 45,
        scalar: 1.2, // Make them larger
        // No gravity specified uses default
        // No decay specified uses default
    });

    // Second confetti burst (matches original second call)
    confetti({
        ...defaults,
        spread: 360, // KEY: Ensure full circle
        startVelocity: 30, // Slower start
        scalar: 0.8, // Make them smaller
        decay: 0.9, // Fall faster
        // No gravity specified uses default
    });

    // --- Optional third burst (can keep or remove if you want EXACT original) ---
    // confetti({
    //   ...defaults,
    //   particleCount: count / 2, // Fewer stars maybe
    //   spread: 120, // Less spread for stars
    //   startVelocity: 55,
    //   decay: 0.92,
    //   scalar: 0.9,
    //   shapes: ['star'],
    //   colors: ['#ffe66d', '#ff9f43', '#ffffff'] // Star colors
    // });
  };

  return (
    <div className="celebration-area">
      <button
        ref={celebrateButtonRef}
        className="trigger-button"
        onClick={handleCelebrateClick}
      >
        Celebrate! 🎉
      </button>
      <audio
        ref={audioRef}
        id="celebration-sound"
        src="/celebration-sound.mp3"
        preload="auto"
      ></audio>
    </div>
  );
}

export default CelebrationControls;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos