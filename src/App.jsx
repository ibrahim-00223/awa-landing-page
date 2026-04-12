import { nav } from './i18n/fr';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="container">
        <span className="navbar-logo-text">AWA</span>
        <ul className="navbar-links" role="list">
          <li><a href="#comment-ca-marche">{nav.howItWorks}</a></li>
          <li><a href="#tarifs">{nav.pricing}</a></li>
          <li><a href="#temoignages">{nav.testimonials}</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
