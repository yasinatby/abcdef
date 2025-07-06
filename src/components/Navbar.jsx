// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ authChanged }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem('user'));
      setUser(parsed);
      setIsAdmin(parsed?.isAdmin === true);
    } catch {
      setUser(null);
      setIsAdmin(false);
    }
  }, [authChanged]);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setIsAdmin(false);
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-primary">
          <img
            src="https://res.cloudinary.com/ddhshcdgo/image/upload/v1748177069/Bildschirmfoto_2025-03-23_um_22.36.52_sfwkl2.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <span>ATABUY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition">Startseite</Link>
          <Link to="/b2b" className="hover:text-primary transition">B2B</Link>
          <Link to="/software" className="hover:text-primary transition">Software</Link>
          <Link to="/contact" className="hover:text-primary transition">Kontakt</Link>

          <Link
            to="/shop"
            className="bg-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            Jetzt zum Shop
          </Link>

          {isAdmin && (
            <Link to="/admin" className="underline text-primary hover:no-underline">
              Admin
            </Link>
          )}

          {user ? (
            <>
              <span className="text-primary text-sm">{user.name}</span>
              <button
                onClick={handleLogout}
                className="border border-primary px-3 py-1 rounded hover:bg-primary hover:text-white transition text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="border border-primary px-3 py-1 rounded hover:bg-primary hover:text-white transition text-sm"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Menü"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white border-t">
          <Link to="/" onClick={() => setMenuOpen(false)}>Startseite</Link>
          <Link to="/b2b" onClick={() => setMenuOpen(false)}>B2B</Link>
          <Link to="/software" onClick={() => setMenuOpen(false)}>Software</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white text-center py-2 rounded-full font-semibold"
          >
            Jetzt zum Shop
          </Link>

          {isAdmin && <Link to="/admin">Admin</Link>}

          {user ? (
            <>
              <span className="text-primary text-sm">{user.name}</span>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="border border-primary px-3 py-1 rounded text-sm hover:bg-primary hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="border border-primary px-3 py-1 rounded text-sm hover:bg-primary hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
