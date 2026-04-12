import { bm } from '../i18n/bm';
import { hero } from '../i18n/fr';
import WhatsAppButton from './WhatsAppButton';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__bambara">{bm.heroHeadline}</p>
          <h1 className="hero__title">
            <span className="accent-gold">AWA</span> comprend tes documents.{' '}
            <span className="accent-gold">Tu comprends tout.</span>
          </h1>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__cta">
            <WhatsAppButton label={hero.cta} size="lg" />
          </div>
          <p className="hero__baseline">
            <span className="accent-gold">{bm.baseline}</span>
            {' '}— C&apos;est possible.
          </p>
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
                    <strong>AWA :</strong> I ka CAF bataki kalan ka ban. A b&apos; i fɔ ko...
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
