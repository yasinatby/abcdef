import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NewsletterPopup from './NewsletterPopup';


// Cloudinary assets
const LOGO_SRC = 'https://res.cloudinary.com/ddhshcdgo/image/upload/v1748177069/Bildschirmfoto_2025-03-23_um_22.36.52_sfwkl2.png';
const VIDEO_URL = 'https://res.cloudinary.com/ddhshcdgo/video/upload/v1747233486/1927793486/192779-893446888_online-video-cutter.com_ye96hi.mp4';

function Navbar({ lang, setLang }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-50 bg-black text-white z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src={LOGO_SRC} alt="Atabuy Logo" className="h-8" />
        <div className="flex space-x-6">
          <Link to="/">{lang === 'de' ? 'Startseite' : 'Home'}</Link>
          <Link to="/about">{lang === 'de' ? 'Über uns' : 'About Us'}</Link>
          <Link to="/contact">{lang === 'de' ? 'Kontakt' : 'Contact'}</Link>
          <Link to="/b2b">{lang === 'de' ? 'B2B Lösungen' : 'B2B Solutions'}</Link>
          <Link to="/software">{lang === 'de' ? 'Software Lösungen' : 'Software Solutions'}</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/legal">{lang === 'de' ? 'Rechtliches' : 'Legal'}</Link>
        </div>
        <button onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className="border px-2 py-1 rounded">
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
      </div>
    </nav>
  );
}

function Home({ lang }) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src={VIDEO_URL} type="video/mp4" />
        {lang === 'de' ? 'Ihr Browser unterstützt das Video-Tag nicht.' : 'Your browser does not support the video tag.'}
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4 pt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          {lang === 'de' ? 'Willkommen bei Atabuy' : 'Welcome to Atabuy'}
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          {lang === 'de'
            ? 'Innovative B2B & B2C Lösungen für Ihre Geräte'
            : 'Innovative B2B & B2C Solutions for Your Devices'}
        </h2>
        <Link to="/shop" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
          {lang === 'de' ? 'Zum Shop' : 'Go to Shop'}
        </Link>
      </div>
    </div>
  );
}

function About({ lang }) {
  return (
    <div className="container mx-auto p-8 pt-20 space-y-8">
      <h1 className="text-4xl font-bold">{lang === 'de' ? 'Über Atabuy' : 'About Atabuy'}</h1>
      <div className="text-lg space-y-6">
        <p>
          {lang === 'de'
            ? 'Atabuy wurde von einer Gruppe leidenschaftlicher Technologie-Enthusiasten gegründet, die eine Vision teilten: den Handel mit mobilen Geräten und elektronischen Produkten grundlegend zu verändern. Wir sind ein junges, dynamisches Unternehmen, das auf Kreativität, Qualität und innovative Lösungsansätze setzt.'
            : 'Atabuy was founded by a group of passionate technology enthusiasts who shared a vision: to fundamentally transform the trading of mobile devices and electronics. We are a young, dynamic company committed to creativity, quality, and innovative solutions.'}
        </p>
        <p>
          {lang === 'de'
            ? 'Unser Angebot umfasst eine breite Palette an Smartphones, Tablets und Zubehör im B2B- und B2C-Bereich. Darüber hinaus entwickeln wir maßgeschneiderte Softwarelösungen sowie cloudbasierte Anwendungen, um Ihre Geschäftsprozesse effizienter zu gestalten.'
            : 'Our offerings include a wide range of smartphones, tablets, and accessories for both B2B and B2C customers. In addition, we develop tailored software solutions and cloud-based applications to streamline your business processes.'}
        </p>
        <p>
          {lang === 'de'
            ? 'Unsere Mission ist es, nachhaltige Partnerschaften zu schaffen, die auf Vertrauen, Transparenz und technologischem Fortschritt basieren. Mit agilen Methoden und einem leidenschaftlichen Team bleiben wir stets einen Schritt voraus und liefern Lösungen, die Ihr Unternehmen voranbringen.'
            : 'Our mission is to build sustainable partnerships based on trust, transparency, and technological advancement. With agile methodologies and a passionate team, we stay ahead of the curve and deliver solutions that drive your business forward.'}
        </p>
      </div>
    </div>
  );
}

function Contact({ lang }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(e.target.action, {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) setSubmitted(true);
  };
  return (
    <div className="container mx-auto p-8 pt-20">
      <h1 className="text-3xl font-bold mb-4">{lang === 'de' ? 'Kontakt' : 'Contact'}</h1>
      {submitted ? (
        <p className="text-green-600">{lang === 'de' ? 'Vielen Dank für Ihre Nachricht!' : 'Thank you for your message!'}</p>
      ) : (
        <form action="https://formspree.io/f/myzwqjzv" method="POST" onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <div>
            <label className="block mb-1">{lang === 'de' ? 'Name' : 'Name'}</label>
            <input type="text" name="name" required className="w-full border px-3 py-2 rounded" placeholder={lang === 'de' ? 'Ihr Name' : 'Your Name'} />
          </div>
          <div>
            <label className="block mb-1">E-Mail</label>
            <input type="email" name="email" required className="w-full border px-3 py-2 rounded" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block mb-1">{lang === 'de' ? 'Nachricht' : 'Message'}</label>
            <textarea name="message" rows="4" required className="w-full border px-3 py-2 rounded" placeholder={lang === 'de' ? 'Ihre Nachricht' : 'Your message'} />
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">{lang === 'de' ? 'Absenden' : 'Submit'}</button>
        </form>
      )}
    </div>
  );
}

function B2B({ lang }) {
  return (
    <div className="container mx-auto p-8 pt-20 space-y-8">
      <h1 className="text-4xl font-bold">{lang === 'de' ? 'B2B Lösungen' : 'B2B Solutions'}</h1>
      <div className="text-lg space-y-6">...
      </div>
    </div>
  );
}

function Software({ lang }) {
  return (
    <div className="container mx-auto p-8 pt-20 space-y-8">
      <h1 className="text-4xl font-bold">{lang === 'de' ? 'Software Lösungen' : 'Software Solutions'}</h1>
      <div className="text-lg space-y-6">...
      </div>
    </div>
  );
}

function Shop({ lang }) {
  return (
    <div className="container mx-auto p-8 pt-20 text-center space-y-6">
      <h1 className="text-4xl font-bold">{lang === 'de' ? '🛠️ Shop im Aufbau' : '🛠️ Shop Under Construction'}</h1>
      <Link to="https://www.ebay.de/usr/atabuy_de" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
        {lang === 'de' ? 'Jetzt bei eBay stöbern' : 'Browse on eBay'}
      </Link>
    </div>
  );
}

function Legal({ lang }) {
  return (
    <div className="container mx-auto p-8 pt-20 space-y-8">
      <h1 className="text-4xl font-bold">{lang === 'de' ? 'Rechtliches & AGB' : 'Legal & Terms'}</h1>
      <section className="text-lg space-y-4">...</section>
      <div className="text-sm text-gray-600">...</div>
    </div>
  );
}

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
      <Routes>
        <Route index path="/" element={<Home lang={lang} />} />
        <Route path="/about" element={<About lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
        <Route path="/b2b" element={<B2B lang={lang} />} />
        <Route path="/software" element={<Software lang={lang} />} />
        <Route path="/shop" element={<Shop lang={lang} />} />
        <Route path="/legal" element={<Legal lang={lang} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="bg-gray-100 text-center py-4 mt-auto">
        <p className="text-sm text-gray-600">{new Date().getFullYear()} Atabuy</p>
      </footer>
    </Router>
  );
}
