// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Context + Layout
import { CartProvider } from './context/CartContext';
import NewsletterPopup from './NewsletterPopup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // <-- neu

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import B2BPage from './pages/B2BPage';
import SoftwarePage from './pages/SoftwarePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import LegalPage from './pages/LegalPage';
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/DashboardPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  const [lang, setLang] = useState('de');
  const [showPopup, setShowPopup] = useState(false);
  const [dark, setDark] = useState(false);

  // Newsletter-Popup nach kurzer Zeit anzeigen
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Darkmode initial erkennen
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = localStorage.theme;
    const activeDark = stored ? stored === 'dark' : prefersDark;
    setDark(activeDark);
  }, []);

  // Klasse auf <html> setzen und speichern
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  return (
    <CartProvider>
      <Router>
        {/* ScrollToTop sorgt bei jedem Routen-Wechsel für scroll(0,0) */}
        <ScrollToTop />

        {/* Newsletter-Popup */}
        {showPopup && (
          <NewsletterPopup lang={lang} onClose={() => setShowPopup(false)} />
        )}

        {/* Navbar */}
        <Navbar lang={lang} setLang={setLang} dark={dark} setDark={setDark} />

        {/* Hauptbereich mit dynamischer Farbe */}
        <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-neutral-900 dark:text-neutral-100">
          <main className="flex-1 pt-20">
            <Routes>
              <Route path="/" element={<Home lang={lang} />} />
              <Route path="/about" element={<AboutPage lang={lang} />} />
              <Route path="/contact" element={<ContactPage lang={lang} />} />
              <Route path="/b2b" element={<B2BPage lang={lang} />} />
              <Route path="/software" element={<SoftwarePage lang={lang} />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/legal" element={<LegalPage lang={lang} />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/bestellung-erfolgreich" element={<OrderConfirmationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
