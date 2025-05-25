// src/NewsletterPopup.jsx
import React, { useState } from 'react';

export default function NewsletterPopup({ onClose, lang }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const res = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      const data = await res.json();
      alert(data.error || (lang === 'de' ? 'Fehler beim Absenden' : 'Error submitting form'));
    }
  };

  const title =
    lang === 'de'
      ? '🚀 Jetzt bei unserem NEWSLETTER anmelden!'
      : '🚀 Subscribe to our NEWSLETTER now!';
  const description =
    lang === 'de'
      ? 'Melde dich an und erhalte exklusive B2B-Angebote. 💼📈'
      : 'Sign up to receive exclusive B2B offers. 💼📈';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg">
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-800"
          aria-label={lang === 'de' ? 'Schließen' : 'Close'}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>

        {submitted ? (
          <p className="text-green-600 text-center">
            {lang === 'de'
              ? 'Vielen Dank für deine Anmeldung!'
              : 'Thank you for subscribing!'}
          </p>
        ) : (
          <form
            action="https://formspree.io/f/myzwqjzv"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium">
                {lang === 'de' ? 'Deine E-Mail' : 'Your Email'}
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={lang === 'de' ? 'E-Mail-Adresse' : 'Email address'}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Optional: eigener Betreff */}
            <input
              type="hidden"
              name="_subject"
              value="Neue Newsletter-Anmeldung"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {lang === 'de' ? 'Anmelden' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
