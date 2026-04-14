// ─── Configuration ───────────────────────────────────────────────────────────
export const WHATSAPP_LINK = 'https://wa.me/+1-555-144-9033';

// ─── Navigation ──────────────────────────────────────────────────────────────
export const nav = {
  features: 'Fonctionnalités',
  howItWorks: 'Comment ça marche',
  pricing: 'Tarifs',
  testimonials: 'Témoignages',
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  tagline: 'Ton assistant WhatsApp pour les documents administratifs',
  description:
    'AWA analyse tes documents administratifs et te les explique en Bambara — par WhatsApp, en quelques secondes.',
  cta: 'Essayer AWA gratuitement',
};

// ─── How It Works ─────────────────────────────────────────────────────────────
export const howItWorks = {
  sectionLabel: 'Comment ça marche',
  steps: [
    {
      number: '01',
      title: 'Envoie ton document',
      description:
        'Prends en photo ou transfère ton document directement dans WhatsApp. Lettre CAF, avis d\'imposition, convocation — tout est accepté.',
    },
    {
      number: '02',
      title: 'AWA analyse et traduit',
      description:
        'En quelques secondes, AWA lit ton document, en extrait les informations essentielles et prépare une explication claire en Bambara.',
    },
    {
      number: '03',
      title: 'Tu reçois l\'explication',
      description:
        'AWA t\'envoie l\'explication par texte et par message audio. Tu comprends tout, sans avoir besoin d\'aide extérieure.',
    },
  ],
  cta: 'Essayer maintenant',
};

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const pricing = {
  sectionLabel: 'Tarifs',
  badge: 'Bientôt disponible',
  priceSuffix: '— FCFA / mois',
  ctaLabel: 'Choisir ce pack',
  plans: [
    {
      name: 'Découverte',
      description: 'Pour tester AWA sans engagement',
      features: [
        '5 documents par mois',
        'Explication en texte',
        'Support WhatsApp',
      ],
    },
    {
      name: 'Essentiel',
      description: 'Pour une utilisation régulière',
      features: [
        '20 documents par mois',
        'Explication texte + audio',
        'Priorité de traitement',
        'Support WhatsApp',
      ],
      highlighted: true,
    },
    {
      name: 'Famille',
      description: 'Pour toute la famille',
      features: [
        'Documents illimités',
        'Explication texte + audio',
        'Jusqu\'à 4 numéros',
        'Support dédié',
      ],
    },
  ],
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = {
  sectionLabel: 'Ils l\'ont dit',
  items: [
    {
      quote:
        'Avant AWA, je devais toujours attendre mon fils pour comprendre mes courriers. Maintenant je lis tout moi-même en Bambara. A bɛ se ka kɛ !',
      author: 'Mariam',
      context: 'Lyon',
    },
    {
      quote:
        'J\'ai reçu une convocation Pôle Emploi et je paniquais. J\'ai envoyé la lettre à AWA et en 30 secondes j\'avais tout compris. Vraiment utile.',
      author: 'Boubacar',
      context: 'Paris',
    },
    {
      quote:
        'Mon avis d\'imposition, mon bail, mes courriers CAF — AWA m\'explique tout en audio. C\'est comme avoir un ami qui parle Bambara et connaît l\'administration française.',
      author: 'Fatoumata',
      context: 'Marseille',
    },
  ],
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const footer = {
  tagline: 'Ton assistant WhatsApp pour les documents administratifs.',
  links: [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'Contact', href: 'mailto:contact@awa.ml' },
  ],
  copyright: '© 2026 AWA — Tous droits réservés',
  cta: 'Démarrer sur WhatsApp',
};
