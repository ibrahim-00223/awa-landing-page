import { useState, useRef, useEffect } from 'react';
import audioSrc from '../assets/awa-voice.wav';
import logo from '../assets/awa_logo_(png).png';
import './VoiceMessage.css';

// Waveform bar heights — fixed pattern mimicking a real voice message
const BARS = [4, 8, 14, 6, 18, 10, 22, 7, 16, 12, 20, 8, 14, 5, 18, 10, 24, 6, 16, 9, 20, 7, 14, 11, 18];

export default function VoiceMessage() {
  const [playing, setPlaying]       = useState(false);
  const [progress, setProgress]     = useState(0);   // 0–1
  const [duration, setDuration]     = useState(null);
  const audioRef = useRef(null);
  const rafRef   = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const onLoaded = () => setDuration(audio.duration);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('ended', handleEnd);
    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('ended', handleEnd);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function tick() {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress(audio.currentTime / (audio.duration || 1));
    if (!audio.paused) rafRef.current = requestAnimationFrame(tick);
  }

  function handleEnd() {
    setPlaying(false);
    setProgress(0);
    cancelAnimationFrame(rafRef.current);
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setPlaying(true);
      rafRef.current = requestAnimationFrame(tick);
    } else {
      audio.pause();
      setPlaying(false);
      cancelAnimationFrame(rafRef.current);
    }
  }

  function fmt(s) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  const elapsed = duration ? duration * progress : 0;
  const playedBars = Math.round(progress * BARS.length);

  return (
    <div className={`voice-msg ${playing ? 'voice-msg--playing' : ''}`} onClick={toggle} role="button" aria-label={playing ? 'Pause' : 'Écouter la réponse d\'AWA'}>
      {/* Hidden audio */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* AWA avatar */}
      <img src={logo} alt="AWA" className="voice-msg__avatar" />

      {/* Play / Pause button */}
      <button className="voice-msg__play" aria-hidden="true" tabIndex={-1}>
        {playing
          ? <PauseIcon />
          : <PlayIcon />
        }
      </button>

      {/* Waveform */}
      <div className="voice-msg__wave">
        {BARS.map((h, i) => (
          <span
            key={i}
            className={`voice-msg__bar ${i < playedBars ? 'voice-msg__bar--played' : ''} ${playing ? 'voice-msg__bar--animating' : ''}`}
            style={{
              '--bar-h': `${h}px`,
              '--bar-delay': `${(i % 8) * 60}ms`,
            }}
          />
        ))}
      </div>

      {/* Timer */}
      <span className="voice-msg__time">
        {playing ? fmt(elapsed) : fmt(duration)}
      </span>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M3 2.5l8 4.5-8 4.5V2.5z"/>
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <rect x="2.5" y="2" width="3" height="10" rx="1"/>
      <rect x="8.5" y="2" width="3" height="10" rx="1"/>
    </svg>
  );
}
