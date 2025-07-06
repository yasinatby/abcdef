import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm pt-12 pb-6">
      {/* Vier-Spalten-Grid */}
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white transition">Über uns</Link></li>
            <li><Link to="/about" className="hover:text-white transition">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/legal" className="hover:text-white transition">FAQ</Link></li>
            <li><Link to="/legal" className="hover:text-white transition">Versand</Link></li>
            <li><Link to="/legal" className="hover:text-white transition">Rückgabe</Link></li>
          </ul>
        </div>

        {/* Rechtliches */}
        <div>
          <h4 className="text-white font-semibold mb-3">Rechtliches</h4>
          <ul className="space-y-2">
            <li><Link to="/legal" className="hover:text-white transition">Impressum</Link></li>
            <li><Link to="/legal" className="hover:text-white transition">Datenschutz</Link></li>
            <li><Link to="/legal" className="hover:text-white transition">AGB</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-3">Social cooming soon </h4>
          <div className="flex gap-4 text-xl">
           {/* <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">💼</a>
            <a href="#" className="hover:text-white transition">📸</a>
            */}
          </div>
        </div>
      </div>

      {/* Copyright-Zeile */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Atabuy
      </div>
    </footer>
  );
}
