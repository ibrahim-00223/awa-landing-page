import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements.
 * Adds `.is-visible` when they enter the viewport (threshold 15%).
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
