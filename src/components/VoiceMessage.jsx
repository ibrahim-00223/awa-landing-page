import { useState, useRef, useEffect } from 'react';
import audioSrc from '../assets/awa-voice.wav';
import logo from '../assets/awa_logo_(png).png';
import './VoiceMessage.css';

// 36 bars — richer waveform pattern
const BARS = [
  6, 12, 20, 8, 28, 14, 32, 10, 24, 18, 30, 8, 22, 6, 26, 16,
  34, 10, 20, 14, 28, 8, 18, 12, 26, 10, 22, 16, 30, 8, 20, 12,
  24, 6, 18, 10
];

export default function VoiceMessage({ autoPlay = false }) {
  const [playing, setPlaying]   = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(null);
  const audioRef = useRef(null);
  const rafRef   = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const onMeta = () => setDuration(audio.duration);
    const onEnd  = () => { setPlaying(false); setProgress(0); cancelAnimationFrame(rafRef.current); };
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);

    // Autoplay attempt after metadata loads
    if (autoPlay) {
      const tryPlay = () => {
        audio.play().then(() => {
          setPlaying(true);
          rafRef.current = requestAnimationFrame(tick);
        }).catch(() => {
          // Browser blocked — visual animation still runs
        });
      };
      audio.addEventListener('loadedmetadata', tryPlay, { once: true });
    }

    return () => {
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
      cancelAnimationFrame(rafRef.current);
    };
  }, [autoPlay]);

  function tick() {
    const audio = audioRef.current;
    if (!audio) return;
    setProgress(audio.currentTime / (audio.duration || 1));
    if (!audio.paused) rafRef.current = requestAnimationFrame(tick);
  }

  function toggle(e) {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => {
        setPlaying(true);
        rafRef.current = requestAnimationFrame(tick);
      });
    } else {
      audio.pause();
      setPlaying(false);
      cancelAnimationFrame(rafRef.current);
    }
  }

  function fmt(s) {
    if (!s || isNaN(s)) return '0:00';
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`;
  }

  const playedBars = Math.round(progress * BARS.length);
  const elapsed    = (duration || 0) * progress;

  return (
    <div
      className={`voice-msg ${playing ? 'voice-msg--playing' : ''}`}
      onClick={toggle}
      role="button"
      aria-label={playing ? 'Pause' : "Écouter la réponse d'AWA"}
    >
      <audio ref={audioRef} src={audioSrc} preload="auto" />

      {/* Glow ring — pulsing when playing */}
      {playing && <span className="voice-msg__ring" aria-hidden="true" />}

      {/* Avatar */}
      <img src={logo} alt="AWA" className="voice-msg__avatar" />

      {/* Play/Pause */}
      <button className="voice-msg__play" aria-hidden="true" tabIndex={-1}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>

      {/* Waveform */}
      <div className="voice-msg__wave" aria-hidden="true">
        {BARS.map((h, i) => (
          <span
            key={i}
            className={[
              'voice-msg__bar',
              i < playedBars ? 'voice-msg__bar--played' : '',
              // Always animate — gives life even before audio starts
              'voice-msg__bar--animating',
            ].join(' ')}
            style={{ '--bar-h': `${h}px`, '--bar-delay': `${(i % 10) * 55}ms` }}
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M4 3l10 5-10 5V3z" />
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="3" y="2" width="3.5" height="12" rx="1.2" />
      <rect x="9.5" y="2" width="3.5" height="12" rx="1.2" />
    </svg>
  );
}
