import {
  FiFileText, FiMic, FiZap, FiSmartphone, FiShield, FiGlobe,
} from 'react-icons/fi';
import './Features.css';

const FEATURES = [
  {
    icon: FiFileText,
    badge: 'Documents',
    title: 'Tous tes courriers',
    description:
      'CAF, impôts, bail, convocations, ordonnances, Pôle Emploi… AWA reconnaît et analyse tous les types de documents administratifs français.',
  },
  {
    icon: FiMic,
    badge: 'Audio',
    title: 'Explication en audio',
    description:
      'AWA te répond en message vocal Bambara. Tu écoutes, tu comprends — même si tu ne lis pas couramment.',
  },
  {
    icon: FiZap,
    badge: 'Rapidité',
    title: 'Réponse en 30 secondes',
    description:
      'Prends ton document en photo et envoie-le. AWA analyse et répond en moins de 30 secondes, à toute heure.',
    highlighted: true,
  },
  {
    icon: FiSmartphone,
    badge: 'Accès',
    title: 'Rien à télécharger',
    description:
      "AWA vit dans WhatsApp. Pas d'application, pas de compte à créer. Tu l'utilises exactement comme tu envoies un message.",
  },
  {
    icon: FiShield,
    badge: 'Confidentialité',
    title: 'Tes données protégées',
    description:
      'Tes documents sont traités en toute confidentialité et ne sont jamais stockés. Ta vie privée est respectée.',
  },
  {
    icon: FiGlobe,
    badge: 'Langues',
    title: 'Bambara + Français',
    description:
      "AWA explique en Bambara, la langue du cœur. Il comprend aussi le français pour t'aider dans les deux sens.",
  },
];

export default function Features() {
  return (
    <section className="features section reveal" id="fonctionnalites">
      <div className="container">

        <header className="features__header">
          <span className="label-bambara">Ce qu&apos;AWA fait pour toi</span>
          <h2 className="section-title">
            Un assistant{' '}
            <span className="text-gradient-gold">vraiment complet</span>
          </h2>
          <p className="features__subtitle">
            AWA gère tout ce que l'administration française peut t'envoyer — en Bambara, instantanément.
          </p>
        </header>

        <div className="features__grid">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className={`feature-card reveal-item ${f.highlighted ? 'feature-card--highlighted' : ''}`}
              >
                <div className="feature-card__top">
                  <div className="feature-card__icon-wrap">
                    <Icon className="feature-card__icon" aria-hidden="true" />
                  </div>
                  <span className="feature-card__badge">{f.badge}</span>
                </div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
