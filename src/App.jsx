import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewsletterPopup from './NewsletterPopup';

// Cloudinary assets
const LOGO_SRC = 'https://res.cloudinary.com/ddhshcdgo/image/upload/v1748177069/Bildschirmfoto_2025-03-23_um_22.36.52_sfwkl2.png';
const VIDEO_URL = 'https://res.cloudinary.com/ddhshcdgo/video/upload/v1747233486/192779-893446888_online-video-cutter.com_ye96hi.mp4';

// Navbar component with responsive mobile menu
function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: '/',        label: lang === 'de' ? 'Startseite'       : 'Home' },
    { to: '/about',   label: lang === 'de' ? 'Über uns'         : 'About Us' },
    { to: '/contact', label: lang === 'de' ? 'Kontakt'           : 'Contact' },
    { to: '/b2b',     label: lang === 'de' ? 'B2B Lösungen'      : 'B2B Solutions' },
    { to: '/software',label: lang === 'de' ? 'Software Lösungen' : 'Software Solutions' },
    { to: '/shop',    label: 'Shop' },
    { to: '/legal',   label: lang === 'de' ? 'Rechtliches'       : 'Legal' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white z-20">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src={LOGO_SRC} alt="Atabuy Logo" className="h-8" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="hover:text-gray-300">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="border p-1 rounded"
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-between h-6"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white p-4 space-y-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="block text-lg hover:text-gray-300"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// Home page with background video
function Home({ lang }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VIDEO_URL} type="video/mp4" />
        {lang === 'de'
          ? 'Ihr Browser unterstützt das Video-Tag nicht.'
          : 'Your browser does not support the video tag.'}
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2">
          {lang === 'de' ? 'Willkommen bei Atabuy' : 'Welcome to Atabuy'}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-4">
          {lang === 'de'
            ? 'Innovative B2B & B2C Lösungen für Ihre Geräte'
            : 'Innovative B2B & B2C Solutions for Your Devices'}
        </h2>
        <Link
          to="/shop"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          {lang === 'de' ? 'Zum Shop' : 'Go to Shop'}
        </Link>
      </div>
    </div>
  );
}

// Import page components
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import B2BPage from './pages/B2BPage';
import SoftwarePage from './pages/SoftwarePage';
import ShopPage from './pages/ShopPage';
import LegalPage from './pages/LegalPage';

export default function App() {
  const [lang, setLang] = useState('de');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showPopup && <NewsletterPopup lang={lang} onClose={() => setShowPopup(false)} />}
      <Navbar lang={lang} setLang={setLang} />
      <div className="pt-20">
        <Routes>
          <Route path="/"       element={<Home lang={lang} />} />
          <Route path="/about"  element={<AboutPage lang={lang} />} />
          <Route path="/contact"element={<ContactPage lang={lang} />} />
          <Route path="/b2b"    element={<B2BPage lang={lang} />} />
          <Route path="/software"element={<SoftwarePage lang={lang} />} />
          <Route path="/shop"   element={<ShopPage lang={lang} />} />
          <Route path="/legal"  element={<LegalPage lang={lang} />} />
        </Routes>
      </div>
      <footer className="bg-gray-100 text-center py-4 mt-auto">
        <p className="text-sm text-gray-600">{new Date().getFullYear()} Atabuy</p>
      </footer>
    </Router>
  );
}
