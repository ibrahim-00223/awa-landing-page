import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK } from '../i18n/fr';
import './WhatsAppButton.css';

export default function WhatsAppButton({ label = 'Démarrer sur WhatsApp', size = 'md' }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-btn wa-btn--${size}`}
    >
      <FaWhatsapp className="wa-btn__icon" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
