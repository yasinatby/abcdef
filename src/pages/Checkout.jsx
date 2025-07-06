// src/pages/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, removeAllFromCart } = useCart();
  const navigate = useNavigate();

  // Formular-Status: Name, E-Mail, E-Mail bestätigen, Country, Zip, City, Street, Address, Additional, Telefon
  const [form, setForm] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    country: 'DE',       // Standardland Deutschland
    zip: '',
    city: '',
    street: '',
    address: '',
    additional: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [isFetchingCity, setIsFetchingCity] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Wenn sich PLZ (zip) ändert, holen wir beim Verlassen des Felds die Stadt
  const fetchCityByZip = async () => {
    const { country, zip } = form;
    if (!zip) return;
    setIsFetchingCity(true);
    try {
      // Zippopotam.us für PLZ → Stadt
      const response = await fetch(`https://api.zippopotam.us/${country.toLowerCase()}/${zip}`);
      if (!response.ok) {
        throw new Error('PLZ nicht gefunden');
      }
      const data = await response.json();
      const place = data.places && data.places[0];
      if (place && place['place name']) {
        setForm((prev) => ({ ...prev, city: place['place name'] }));
      }
    } catch {
      // Wenn nicht gefunden: Stadt leer lassen, Nutzer kann selbst eintragen
      setError('Stadt zur PLZ konnte nicht automatisch ermittelt werden.');
    } finally {
      setIsFetchingCity(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // 1) Validierung: Pflichtfelder und E-Mail-Abgleich
    if (
      !form.name ||
      !form.email ||
      !form.confirmEmail ||
      !form.country ||
      !form.zip ||
      !form.city ||
      !form.street ||
      !form.address
    ) {
      setError('Bitte fülle alle Pflichtfelder aus.');
      return;
    }
    if (form.email !== form.confirmEmail) {
      setError('Die E-Mail-Adressen stimmen nicht überein.');
      return;
    }
    if (cart.length === 0) {
      setError('Dein Warenkorb ist leer.');
      return;
    }

    // 2) Payload zusammenstellen
    const orderPayload = {
      customer: {
        name: form.name,
        email: form.email,
        address: {
          country: form.country,
          zip: form.zip,
          city: form.city,
          street: form.street,
          houseNumber: form.address,
          additional: form.additional,
        },
        phone: form.phone,
      },
      items: cart.map((item) => ({
        productId: item.product._id,
        name: item.product.name,
        price: parseFloat(item.product.price),
        quantity: item.quantity,
      })),
    };

    try {
      // 3) Anfrage an Backend: Checkout-Session
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      });
      if (!res.ok) {
        const { error: backendError } = await res.json();
        throw new Error(backendError || 'Fehler beim Erstellen der Checkout-Session.');
      }
      const { url } = await res.json();

      // 4) Warenkorb leeren (Frontend-Context)
      removeAllFromCart();

      // 5) Weiterleitung zu Stripe Checkout
      window.location.href = url;
    } catch (err) {
      console.error(err);
      setError(err.message || 'Ein unerwarteter Fehler ist aufgetreten.');
    }
  };

  // Wenn der Cart leer ist (z.B. bei manuellem direkten Aufruf), zurück zum Warenkorb
  if (cart.length === 0) {
    return (
      <div className="p-4 pt-24 text-center">
        <h2 className="text-xl font-semibold mb-2">Dein Warenkorb ist leer.</h2>
        <button
          onClick={() => navigate('/cart')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Zum Warenkorb
        </button>
      </div>
    );
  }

  // Berechne Gesamtpreis (nur Anzeige)
  const total = cart.reduce(
    (sum, item) => sum + item.quantity * parseFloat(item.product.price || 0),
    0
  );

  return (
    <div className="max-w-xl mx-auto p-4 pt-24">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Warenkorb-Übersicht */}
      <div className="mb-6">
        {cart.map(({ product, quantity }, idx) => (
          <div key={idx} className="flex justify-between py-2 border-b">
            <span>{product.name} × {quantity}</span>
            <span>{(quantity * product.price).toFixed(2)} €</span>
          </div>
        ))}
        <div className="flex justify-between font-semibold py-4">
          <span>Gesamt:</span>
          <span>{total.toFixed(2)} €</span>
        </div>
      </div>

      {/* Fehlernachricht */}
      {error && (
        <div className="mb-4 text-red-600 font-medium">
          {error}
        </div>
      )}

      {/* Checkout-Formular */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Vollständiger Name*"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="E-Mail-Adresse*"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="confirmEmail"
          placeholder="E-Mail erneut eingeben*"
          value={form.confirmEmail}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Telefonnummer (optional)"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Adresseingabe: Land, PLZ, Stadt, Straße, Hausnummer, Zusatz */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Land*</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            >
              <option value="DE">Deutschland</option>
              <option value="AT">Österreich</option>
              <option value="CH">Schweiz</option>
              {/* Weitere Länder bei Bedarf */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">PLZ*</label>
            <input
              type="text"
              name="zip"
              placeholder="z.B. 10115"
              value={form.zip}
              onChange={handleChange}
              onBlur={fetchCityByZip}
              required
              className="w-full border p-2 rounded"
            />
            {isFetchingCity && (
              <p className="text-xs text-gray-500 mt-1">Prüfe PLZ…</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Stadt*</label>
            <input
              type="text"
              name="city"
              placeholder="Stadt"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Straße*</label>
            <input
              type="text"
              name="street"
              placeholder="Straßenname"
              value={form.street}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Hausnummer*</label>
            <input
              type="text"
              name="address"
              placeholder="Nummer, evtl. Zusatz"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Adresszusatz (optional)</label>
            <input
              type="text"
              name="additional"
              placeholder="z.B. Etage, Wohnung"
              value={form.additional}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Zur Bezahlung mit Stripe
        </button>
      </form>
    </div>
  );
}
