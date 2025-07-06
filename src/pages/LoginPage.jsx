import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage({ lang = 'de' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('/api/auth/login', { email, password });
      if (res.data.twoFA) {
        setStep(2);
      } else {
        completeLogin(res.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login fehlgeschlagen.');
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('/api/auth/verify-2fa', { email, code });
      completeLogin(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Code ungültig oder abgelaufen.');
    }
  };

  const completeLogin = ({ token, user }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAdmin', user.isAdmin);
    navigate(user.isAdmin ? '/admin' : '/dashboard');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-md bg-white dark:bg-neutral-800 text-gray-800 dark:text-neutral-100">
      <h1 className="text-2xl font-bold mb-4">
        {lang === 'de' ? 'Login' : 'Login'}
      </h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {step === 1 ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {lang === 'de' ? 'Einloggen' : 'Login'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyCode} className="space-y-4">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {lang === 'de'
              ? 'Ein Sicherheitscode wurde an deine E-Mail gesendet.'
              : 'A security code was sent to your email.'}
          </p>
          <input
            type="text"
            placeholder={lang === 'de' ? 'Bestätigungscode' : 'Verification Code'}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {lang === 'de' ? 'Code bestätigen' : 'Verify Code'}
          </button>
        </form>
      )}

      <p className="text-sm text-center mt-4">
        {lang === 'de' ? (
          <>
            Noch keinen Account?{' '}
            <Link to="/register" className="text-blue-500 underline">
              Jetzt registrieren
            </Link>
          </>
        ) : (
          <>
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-500 underline">
              Sign up now
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
