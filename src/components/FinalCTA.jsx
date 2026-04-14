import { bm } from '../i18n/bm';
import { WHATSAPP_LINK } from '../i18n/fr';
import WhatsAppButton from './WhatsAppButton';
import { FaWhatsapp } from 'react-icons/fa';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta reveal" id="demarrer">
      {/* Orbs */}
      <div className="final-cta__orb final-cta__orb--gold"  aria-hidden="true" />
      <div className="final-cta__orb final-cta__orb--green" aria-hidden="true" />

      <div className="container final-cta__inner">
        <span className="label-bambara">{bm.baseline}</span>

        <h2 className="final-cta__title">
          Commence aujourd'hui.<br />
          <span className="text-gradient-gold">Comprends tout demain.</span>
        </h2>

        <p className="final-cta__sub">
          Rejoins les Bambara-phones en France qui ne dépendent plus de personne
          pour comprendre leurs documents administratifs.
        </p>

        <div className="final-cta__actions">
          <WhatsAppButton label="Essayer AWA gratuitement" size="lg" />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="final-cta__secondary"
          >
            <FaWhatsapp aria-hidden="true" />
            Parler à un conseiller
          </a>
        </div>

        <p className="final-cta__note">
          ✓ Sans téléchargement &nbsp;·&nbsp; ✓ Première analyse offerte &nbsp;·&nbsp; ✓ Sans engagement
        </p>
      </div>
    </section>
  );
}
