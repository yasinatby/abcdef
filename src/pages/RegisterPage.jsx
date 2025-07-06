import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { name, email, phone, password, confirmPassword } = form;

  const validations = {
    length: password.length >= 6,
    upper: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    match: password === confirmPassword
  };

  const isValid = Object.values(validations).every(Boolean) && name.trim() && email.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isValid) {
      setError('Bitte alle Felder korrekt ausfüllen.');
      return;
    }

    try {
      await axios.post('/api/auth/register', {
        name,
        email,
        phone,
        password
      });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registrierung fehlgeschlagen.');
    }
  };

  const Check = ({ valid, label }) => (
    <div className={`flex items-center gap-2 ${valid ? 'text-green-600' : 'text-red-600'}`}>
      <span>{valid ? '✅' : '❌'}</span>
      <span>{label}</span>
    </div>
  );

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Registrieren</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefonnummer (optional)"
          value={phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Passwort"
            value={password}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-2 text-gray-500"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Passwort wiederholen"
          value={confirmPassword}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        {/* Passwort-Validierung */}
        <div className="bg-gray-50 p-3 rounded text-sm space-y-1">
          <Check valid={validations.length} label="Mind. 6 Zeichen" />
          <Check valid={validations.upper} label="Mind. 1 Großbuchstabe (A-Z)" />
          <Check valid={validations.number} label="Mind. 1 Zahl (0–9)" />
          <Check valid={validations.special} label="Mind. 1 Sonderzeichen (!@#$...)" />
          <Check valid={validations.match} label="Passwörter stimmen überein" />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full py-2 rounded text-white ${
            isValid ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Registrieren
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Schon ein Konto?{' '}
        <Link to="/login" className="text-blue-600 underline">
          Jetzt einloggen
        </Link>
      </p>
    </div>
  );
}
