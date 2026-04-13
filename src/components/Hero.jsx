import { bm } from '../i18n/bm';
import { hero } from '../i18n/fr';
import logo from '../assets/awa_logo_(png).png';
import WhatsAppButton from './WhatsAppButton';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
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

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__phone">
            <div className="hero__phone-screen">
              <div className="hero__chat">
                <div className="hero__chat-bubble hero__chat-bubble--in">
                  <span>📄 Lettre CAF.pdf</span>
                </div>
                <div className="hero__chat-bubble hero__chat-bubble--out">
                  <span>
                    <strong>AWA :</strong> I ka CAF bataki kalan ka ban. A b&apos;i fɔ ko...
                  </span>
                </div>
                <div className="hero__chat-bubble hero__chat-bubble--out hero__chat-bubble--audio">
                  <span>🔊 Kan kalan</span>
                  <div className="hero__audio-bar">
                    <span /><span /><span /><span /><span />
                    <span /><span /><span /><span /><span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
