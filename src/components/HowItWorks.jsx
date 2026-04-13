import { FiUploadCloud, FiCpu, FiHeadphones } from 'react-icons/fi';
import { bm } from '../i18n/bm';
import { howItWorks } from '../i18n/fr';
import WhatsAppButton from './WhatsAppButton';
import './HowItWorks.css';

const ICONS = [FiUploadCloud, FiCpu, FiHeadphones];

export default function HowItWorks() {
  return (
    <section className="how section" id="comment-ca-marche">
      <div className="container">
        <header className="how__header">
          <span className="label-bambara">{bm.howItWorks}</span>
          <h2 className="section-title">{howItWorks.sectionLabel}</h2>
          <p>Simple comme envoyer un message. Puissant comme un expert à tes côtés.</p>
        </header>

        <ol className="how__steps">
          {howItWorks.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <li key={i} className="how__step">
                <div className="how__step-icon-wrap" aria-hidden="true">
                  <Icon className="how__step-icon" />
                </div>
                <span className="how__step-number">{step.number}</span>
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.description}</p>
              </li>
            );
          })}
        </ol>

        <div className="how__cta">
          <WhatsAppButton label={howItWorks.cta} />
        </div>
      </div>
    </section>
  );
}
