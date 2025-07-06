// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Bei Hash-Router muss man ggf. kurz warten, bis das neue Element gerendert ist
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname, hash]);
  return null;
}
