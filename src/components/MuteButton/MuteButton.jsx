import React from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // Import icons
import './MuteButton.css';

// Props will be added later (onClick, isMuted)
function MuteButton({ onToggle, isMuted }) {
  return (
    <button className="mute-toggle" onClick={onToggle} aria-label={isMuted ? "Unmute" : "Mute"}>
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </button>
  );
}

export default MuteButton;

// Created by Ram Bapat, www.linkedin.com/in/ram-bapat-barrsum-diamos