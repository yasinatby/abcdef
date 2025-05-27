import React, { useState } from 'react';

export default function ContactPage({ lang }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xkgrlrlg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <main className="py-16 px-4 md:px-8 lg:px-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {lang === 'de' ? 'Vielen Dank!' : 'Thank you!'}
        </h1>
        <p className="text-lg">
          {lang === 'de'
            ? 'Wir melden uns in Kürze bei Ihnen.'
            : 'We will get back to you shortly.'}
        </p>
      </main>
    );
  }

  return (
    <main className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {lang === 'de' ? 'Kontakt' : 'Contact'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              {lang === 'de' ? 'Name' : 'Name'}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
              placeholder={lang === 'de' ? 'Ihr Name' : 'Your name'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              {lang === 'de' ? 'E-Mail' : 'Email'}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
              placeholder={lang === 'de' ? 'Ihre E-Mail-Adresse' : 'Your email address'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              {lang === 'de' ? 'Nachricht' : 'Message'}
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded p-2"
              placeholder={lang === 'de' ? 'Ihre Nachricht...' : 'Your message...'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {status === 'sending'
              ? lang === 'de' ? 'Senden...' : 'Sending...'
              : lang === 'de' ? 'Absenden' : 'Send'}
          </button>

          {status === 'error' && (
            <p className="text-red-500 text-sm mt-2">
              {lang === 'de'
                ? 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
                : 'An error occurred while sending. Please try again later.'}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
