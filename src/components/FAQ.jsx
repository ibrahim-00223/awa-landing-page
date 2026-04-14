import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ.css';

const QUESTIONS = [
  {
    q: "Quels types de documents AWA peut-il analyser ?",
    a: "AWA analyse tous les documents administratifs français : courriers CAF, avis d'imposition, quittances de loyer, contrats de bail, convocations Pôle Emploi, ordonnances médicales, relevés bancaires, lettres d'huissier… Si c'est un document officiel, AWA peut l'expliquer.",
  },
  {
    q: "Est-ce que je dois télécharger une application ?",
    a: "Non. AWA fonctionne directement dans WhatsApp, l'application que tu utilises déjà tous les jours. Tu envoies ton document comme tu envoies une photo à un ami — c'est tout.",
  },
  {
    q: "Mes documents sont-ils en sécurité ?",
    a: "Oui. Tes documents sont analysés de façon sécurisée et ne sont jamais stockés sur nos serveurs après traitement. Nous ne partageons aucune information personnelle avec des tiers.",
  },
  {
    q: "AWA comprend-il d'autres langues que le Bambara ?",
    a: "Pour l'instant, AWA explique en Bambara et comprend les documents en français. D'autres langues africaines sont en cours de développement — Dioula, Wolof, Soninké. Tu seras informé dès qu'elles seront disponibles.",
  },
  {
    q: "Comment fonctionne la facturation ?",
    a: "AWA fonctionne avec un système de crédits. Tu achètes un pack selon tes besoins, et chaque document analysé consomme un crédit. Pas d'abonnement forcé, pas de renouvellement automatique sans ton accord. Les prix définitifs seront annoncés très bientôt.",
  },
  {
    q: "Que se passe-t-il si AWA ne comprend pas mon document ?",
    a: "Si AWA ne parvient pas à analyser un document (photo trop floue, document trop complexe), il te le signale immédiatement et te demande une meilleure version. Dans ce cas, aucun crédit n'est consommé.",
  },
  {
    q: "Puis-je utiliser AWA pour d'autres membres de ma famille ?",
    a: "Oui. Le pack \"Famille\" permet d'enregistrer jusqu'à 4 numéros de téléphone sur le même compte. Chaque membre reçoit ses propres explications directement dans son WhatsApp.",
  },
  {
    q: "Comment démarrer avec AWA ?",
    a: "C'est très simple : clique sur le bouton \"Essayer AWA\" sur cette page, et tu seras redirigé vers une conversation WhatsApp avec AWA. Envoie-lui un premier document — la première analyse est offerte.",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      <div className="faq-body" aria-hidden={!isOpen}>
        <p className="faq-answer">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq section reveal" id="faq">
      <div className="container container-narrow">

        <header className="faq__header">
          <span className="label-bambara">Questions fréquentes</span>
          <h2 className="section-title">Tout ce que tu veux savoir</h2>
          <p className="faq__subtitle">
            Une question qui manque ?{' '}
            <a href="mailto:contact@awa.ml" className="faq__contact-link">
              Écris-nous
            </a>
          </p>
        </header>

        <div className="faq__list" role="list">
          {QUESTIONS.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
