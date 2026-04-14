import { bm } from '../i18n/bm';
import { hero } from '../i18n/fr';
import logo from '../assets/awa_logo_(png).png';
import WhatsAppButton from './WhatsAppButton';
import VoiceMessage from './VoiceMessage';
import './Hero.css';

export default function Hero() {
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

            {/* Header WhatsApp */}
            <div className="hero__wa-header">
              <img src={logo} alt="AWA" className="hero__wa-avatar" />
              <div className="hero__wa-info">
                <span className="hero__wa-name">AWA</span>
                <span className="hero__wa-status">en ligne</span>
              </div>
            </div>

            {/* Chat */}
            <div className="hero__phone-screen">
              <div className="hero__chat">

                {/* Timestamp */}
                <div className="hero__chat-timestamp">Aujourd&apos;hui</div>

                {/* User message — incoming */}
                <div className="hero__chat-row hero__chat-row--in">
                  <div className="hero__chat-bubble hero__chat-bubble--in">
                    <span>Bonjour, comment peux-tu m&apos;aider&nbsp;?</span>
                    <span className="hero__chat-time">14:03</span>
                  </div>
                </div>

                {/* AWA voice reply — outgoing */}
                <div className="hero__chat-row hero__chat-row--out">
                  <VoiceMessage />
                  <span className="hero__chat-time hero__chat-time--out">14:03 ✓✓</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
