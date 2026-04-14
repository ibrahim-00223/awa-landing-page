import { nav, WHATSAPP_LINK } from './i18n/fr';
import logo from './assets/awa_logo_(png).png';
import useReveal from './hooks/useReveal';

import Hero         from './components/Hero';
import SocialProof  from './components/SocialProof';
import Features     from './components/Features';
import HowItWorks   from './components/HowItWorks';
import Pricing      from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ          from './components/FAQ';
import FinalCTA     from './components/FinalCTA';
import Footer       from './components/Footer';

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="container">
        <a href="#hero" className="navbar-brand">
          <img src={logo} alt="AWA" className="navbar-logo" />
          <span className="navbar-logo-text">AWA</span>
        </a>

        <ul className="navbar-links" role="list">
          <li><a href="#fonctionnalites">{nav.features}</a></li>
          <li><a href="#comment-ca-marche">{nav.howItWorks}</a></li>
          <li><a href="#tarifs">{nav.pricing}</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          Essayer AWA →
        </a>
      </div>
    </nav>
  );
}

export default function App() {
  useReveal();

  return (
    <>
      {/* Skip link — accessibilité */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
