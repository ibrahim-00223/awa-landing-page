import { FiMessageSquare } from 'react-icons/fi';
import { bm } from '../i18n/bm';
import { testimonials } from '../i18n/fr';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials section" id="temoignages">
      <div className="container">
        <header className="testimonials__header">
          <span className="label-bambara">{bm.testimonials}</span>
          <h2 className="section-title">{testimonials.sectionLabel}</h2>
          <hr className="section-rule" />
        </header>

        <div className="testimonials__grid">
          {testimonials.items.map((item, i) => (
            <blockquote key={i} className="testimonial-card">
              <FiMessageSquare className="testimonial-card__icon" aria-hidden="true" />
              <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
              <footer className="testimonial-card__footer">
                <span className="testimonial-card__author">{item.author}</span>
                <span className="testimonial-card__context">{item.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
