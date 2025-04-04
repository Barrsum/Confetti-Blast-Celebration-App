// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CelebrationControls from './components/CelebrationControls/CelebrationControls';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import MuteButton from './components/MuteButton/MuteButton';
// Ensure index.css is imported in main.jsx

function App() {
  const [theme, setTheme] = useState('dark');
  const [isMuted, setIsMuted] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  return (
    <>
      <Header />

      {/* NEW: Container for fixed utility buttons */}
      <div className="utility-buttons-container">
        <MuteButton onToggle={toggleMute} isMuted={isMuted} />
        <ThemeToggle onToggle={toggleTheme} />
      </div>

      <main className="app-container">
          <CelebrationControls isMuted={isMuted} />
      </main>

      <Footer />
    </>
  );
}

export default App;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos