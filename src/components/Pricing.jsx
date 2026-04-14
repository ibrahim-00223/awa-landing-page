import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { bm } from '../i18n/bm';
import { pricing } from '../i18n/fr';
import './Pricing.css';

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing section reveal" id="tarifs">
      <div className="container">

        <header className="pricing__header">
          <span className="label-bambara">{bm.pricing}</span>
          <h2 className="section-title">{pricing.sectionLabel}</h2>
          <p className="pricing__subtitle">
            Des crédits simples, sans abonnement caché.{' '}
            <span className="accent-gold">Paie ce que tu utilises.</span>
          </p>
        </header>

        {/* Toggle mensuel / annuel */}
        <div className="pricing__toggle" role="group" aria-label="Fréquence de facturation">
          <button
            className={`pricing__toggle-btn ${!annual ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setAnnual(false)}
          >
            Mensuel
          </button>
          <button
            className={`pricing__toggle-btn ${annual ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setAnnual(true)}
          >
            Annuel
            <span className="pricing__toggle-badge">−20%</span>
          </button>
        </div>

        <div className="pricing__cards">
          {pricing.plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing__card${plan.highlighted ? ' pricing__card--highlighted' : ''}`}
            >
              {plan.highlighted && (
                <div className="pricing__badge-popular">Populaire</div>
              )}
              <h3 className="pricing__plan-name">{plan.name}</h3>
              <p className="pricing__plan-desc">{plan.description}</p>

              <div className="pricing__price">
                <span className="pricing__price-amount">{pricing.priceSuffix}</span>
                <span className="pricing__price-badge">{pricing.badge}</span>
              </div>

              <ul className="pricing__features">
                {plan.features.map((f, j) => (
                  <li key={j} className="pricing__feature">
                    <FiCheck className="pricing__check" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="pricing__cta" disabled>
                {pricing.ctaLabel}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
