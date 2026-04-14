import { useState, useEffect } from 'react';
import { bm } from '../i18n/bm';
import { hero } from '../i18n/fr';
import logo from '../assets/awa_logo_(png).png';
import WhatsAppButton from './WhatsAppButton';
import VoiceMessage from './VoiceMessage';
import './Hero.css';

// Chat sequence steps: 0 = nothing, 1 = user msg, 2 = typing, 3 = voice reply
function useAnimationSequence() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 400);   // user msg appears
    const t2 = setTimeout(() => setStep(2), 1400);  // typing indicator
    const t3 = setTimeout(() => setStep(3), 2800);  // voice reply
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return step;
}

export default function Hero() {
  const step = useAnimationSequence();

  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">

        {/* ── Left: copy ── */}
        <div className="hero__content">
          <img src={logo} alt="AWA" className="hero__logo" />
          <p className="hero__bambara">{bm.heroHeadline}</p>
          <h1 className="hero__title">
            Tes documents{' '}
            <span className="text-gradient-gold">expliqués en Bambara</span>
            {' '}— en 30 secondes.
          </h1>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__cta">
            <WhatsAppButton label={hero.cta} size="lg" />
          </div>
          <div className="hero__proof">
            <span className="hero__proof-dot" aria-hidden="true" />
            <p className="hero__proof-text">
              <strong>Disponible maintenant</strong> — Gratuit pour commencer
            </p>
          </div>
        </div>

        {/* ── Right: WhatsApp mockup ── */}
        <div className="hero__visual">
          <div className="hero__phone">

            {/* WA top bar */}
            <div className="hero__wa-header">
              <div className="hero__wa-back">‹</div>
              <img src={logo} alt="AWA" className="hero__wa-avatar" />
              <div className="hero__wa-info">
                <span className="hero__wa-name">AWA</span>
                <span className="hero__wa-status">en ligne</span>
              </div>
              <div className="hero__wa-icons">
                <span>⋮</span>
              </div>
            </div>

            {/* Chat area */}
            <div className="hero__phone-screen">
              <div className="hero__chat-bg" aria-hidden="true" />

              <div className="hero__chat">
                <div className="hero__chat-date">Aujourd&apos;hui</div>

                {/* Step 1 — User message */}
                {step >= 1 && (
                  <div className="hero__chat-row hero__chat-row--in chat-enter">
                    <div className="hero__bubble hero__bubble--in">
                      <span>Bonjour, comment peux-tu m&apos;aider&nbsp;?</span>
                      <span className="hero__bubble-time">14:03</span>
                    </div>
                  </div>
                )}

                {/* Step 2 — Typing indicator */}
                {step === 2 && (
                  <div className="hero__chat-row hero__chat-row--out chat-enter">
                    <div className="hero__typing">
                      <span /><span /><span />
                    </div>
                  </div>
                )}

                {/* Step 3 — Voice reply */}
                {step >= 3 && (
                  <div className="hero__chat-row hero__chat-row--out chat-enter">
                    <VoiceMessage autoPlay={true} />
                    <span className="hero__voice-time">14:03 ✓✓</span>
                  </div>
                )}
              </div>
            </div>

            {/* WA bottom bar */}
            <div className="hero__wa-footer">
              <div className="hero__wa-input">
                <span className="hero__wa-placeholder">Message</span>
              </div>
              <div className="hero__wa-mic">🎙</div>
            </div>
          </div>

          {/* Ambient glow orbs behind phone */}
          <div className="hero__glow hero__glow--green" aria-hidden="true" />
          <div className="hero__glow hero__glow--gold"  aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
