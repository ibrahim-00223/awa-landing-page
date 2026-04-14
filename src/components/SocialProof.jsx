import './SocialProof.css';

const STATS = [
  { value: '500+', label: 'Documents analysés / mois' },
  { value: '30s',  label: 'Délai de réponse moyen' },
  { value: '24/7', label: 'Disponibilité' },
];

const BADGES = [
  { icon: '🔒', label: 'Données sécurisées' },
  { icon: '🇫🇷', label: 'Utilisateurs en France' },
  { icon: '🎙️', label: 'Réponse texte + audio' },
  { icon: '📱', label: 'Sans téléchargement' },
];

export default function SocialProof() {
  return (
    <div className="social-proof">
      <div className="container">

        {/* Stats */}
        <div className="social-proof__stats">
          {STATS.map((s, i) => (
            <div key={i} className="social-proof__stat">
              <span className="social-proof__stat-value">{s.value}</span>
              <span className="social-proof__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="social-proof__divider" aria-hidden="true" />

        {/* Trust badges */}
        <div className="social-proof__badges">
          {BADGES.map((b, i) => (
            <span key={i} className="social-proof__badge">
              <span aria-hidden="true">{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
