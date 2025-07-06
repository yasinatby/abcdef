/** @type {import('tailwindcss').Config} */
module.exports = {
  /* ────────────────────────────────────────────────
     1) Pfade, in denen Tailwind alle Klassen scannt
  ───────────────────────────────────────────────── */
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  /* ────────────────────────────────────────────────
     2) Dark-Mode via <html class="dark"> Umschalter
  ───────────────────────────────────────────────── */
  darkMode: 'class',

  theme: {
    /* ─────────────────────────────────────────────
       3) Zentrierter .container + Standard-Padding
    ─────────────────────────────────────────────── */
    container: {
      center: true,
      padding: '1.5rem',          // ≈ 24 px
    },

    /* ─────────────────────────────────────────────
       4) Design-Tokens erweitern
    ─────────────────────────────────────────────── */
    extend: {
      /* Primärfarbe = helles Logo-Blau (#6EC1E4) */
      colors: {
        primary: {
          DEFAULT: '#6EC1E4',
          50:  '#f0f8fd',
          100: '#dff0fb',
          200: '#bfe1f7',
          300: '#9ed2f3',
          400: '#7ec3ef',
          500: '#6EC1E4',
          600: '#46a9d8',
          700: '#2c93c4',
          800: '#20759e',
          900: '#1c5d7d',
        },

        /* Neutral-Grautöne für Texte / Dark-BG */
        neutral: {
          50 : '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },

      /* Schriften */
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },

      /* Große Corner-Radius-Variante (optional) */
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },

  /* ─────────────────────────────────────────────
     5) Offizielle Plugins (Forms + Prose)
  ─────────────────────────────────────────────── */
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
