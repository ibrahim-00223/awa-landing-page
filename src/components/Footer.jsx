import { footer } from '../i18n/fr';
import { bm } from '../i18n/bm';
import WhatsAppButton from './WhatsAppButton';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-text">AWA</span>
          <p className="footer__tagline">{footer.tagline}</p>
          <p className="footer__baseline accent-gold">{bm.baseline}</p>
        </div>

        <div className="footer__cta-wrap">
          <WhatsAppButton label={footer.cta} size="sm" />
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">{footer.copyright}</p>
          <nav className="footer__links" aria-label="Liens légaux">
            {footer.links.map((link, i) => (
              <a key={i} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
