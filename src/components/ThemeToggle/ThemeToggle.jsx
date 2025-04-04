import React from 'react';
import './ThemeToggle.css';

// Props will be added later (onClick, currentTheme)
function ThemeToggle({ onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos