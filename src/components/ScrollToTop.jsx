// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Bei jedem Wechsel von Pfad oder Hash kurz scrollen wir nach ganz oben
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname, hash]);

  return null;
}
