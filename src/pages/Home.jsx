// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const VIDEO_URL =
  'https://res.cloudinary.com/ddhshcdgo/video/upload/v1747233486/192779-893446888_online-video-cutter.com_ye96hi.mp4';

export default function Home({ lang }) {
  /* ─────────── Text-Blöcke als Arrays (leicht wartbar) ─────────── */
  const sustainabilityText = {
    de: [
      'In einer Welt, in der Technologie unser tägliches Leben immer stärker prägt, bedeutet Nachhaltigkeit weit mehr als nur ein Modewort – sie ist ein Versprechen für die Zukunft. Als Unternehmen, das sich auf den Handel mit Handys spezialisiert hat, übernehmen wir Verantwortung für die Auswirkungen, die unsere Branche auf Umwelt und Gesellschaft hat.',
      'Nachhaltigkeit beginnt für uns bereits bei der Auswahl der Produkte: Wir setzen auf faire Lieferketten und bevorzugen Hersteller, die Rohstoffe verantwortungsbewusst beziehen. Viele Smartphones enthalten kritische Metalle wie Kobalt, Lithium und Seltene Erden, deren Abbau ökologische Schäden und soziale Konflikte verursachen kann.',
      'Ein weiterer wichtiger Aspekt ist die Verlängerung der Lebensdauer Ihrer Geräte. Statt jedes Jahr das neueste Modell zu kaufen, bieten wir zertifizierte Refurbished-Geräte an. So erhalten Sie modernste Technik zu einem attraktiven Preis – und wir reduzieren gemeinsam Elektroschrott.',
      'Auch intern minimieren wir Emissionen und Abfälle: energieeffiziente Prozesse, digitale Workflows und umweltfreundliche Verpackungen. Nicht reparable Altgeräte zerlegen wir fachgerecht und führen wertvolle Materialien in den Kreislauf zurück.',
      'Für Sie bedeutet das: faire, langlebige Geräte, Kostenersparnis und aktiver Umweltschutz. Entscheiden Sie sich für Technik, die Leistung und Verantwortung verbindet – und setzen Sie mit uns ein Zeichen für eine grünere Zukunft.'
    ],
    en: [
      'Sustainability is more than a buzzword – it is our promise for the future. As a smartphone retailer we take responsibility for the environmental and social impact of our industry.',
      'We start with product selection: fair supply chains and brands that source critical metals responsibly.',
      'By promoting certified refurbished devices we extend product lifecycles, cut e-waste and save you money without compromising on quality.',
      'Inside our company we reduce emissions through energy-efficient workflows, paperless processes and eco-friendly packaging. Non-repairable phones are recycled so valuable materials re-enter the loop.',
      'The result for you: affordable, durable devices and a tangible contribution to the planet.'
    ]
  };

  const goalText = {
    de: [
      'Unser Ziel ist klar: Eine faire Welt für jede:n Einzelne:n. Dafür setzen wir uns ein, indem wir Menschen auf vielfältige Weise unterstützen und echten Mehrwert schaffen.',
      '⚖️  Faire Chancen für alle – hochwertige Smartphones auch als preiswerte Refurbished-Geräte.',
      '🔍  Transparenz & Verantwortung – wir prüfen jede Lieferkette auf ethische Standards.',
      '🤝  Soziales Engagement – Spenden an Bildungsinitiativen und lokale Repair-Cafés.',
      '♻️  Nachhaltiges Wirtschaften – Recycling von Akkus, Gehäusen und Verpackungen.',
      '📚  Digital Empowerment – Tutorials & Workshops für mehr digitale Kompetenz.',
      'Gemeinsam gestalten wir eine Zukunft, in der Technologie Barrieren abbaut und Chancen schafft.'
    ],
    en: [
      'Our mission: a fair world for everyone. We create real value and support people in many ways.',
      '⚖️  Equal opportunities – affordable refurbished devices for broad access to technology.',
      '🔍  Transparency & responsibility – strict ethical checks along every supply chain.',
      '🤝  Social impact – donations to education projects and local repair cafés.',
      '♻️  Circular economy – recycling batteries, housings and packaging.',
      '📚  Digital empowerment – tutorials and workshops for digital skills.',
      'Let’s shape a future where tech removes barriers and creates opportunities.'
    ]
  };

  return (
    <div className="bg-white text-gray-800">
      {/* ───────────── Hero mit Video ───────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            {lang === 'de' ? 'Willkommen bei ATABUY' : 'Welcome to ATABUY'}
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            {lang === 'de'
              ? 'Innovative B2B & B2C Lösungen für Ihre Geräte'
              : 'Innovative B2B & B2C Solutions for Your Devices'}
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-primary/90 transition"
          >
            {lang === 'de' ? 'Zum Shop' : 'To the Shop'}
          </Link>
        </div>
      </section>

      {/* ───────────── Section 1: Nachhaltigkeit ───────────── */}
      <section className="container mx-auto px-6 py-20 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {lang === 'de' ? 'Wieso Nachhaltigkeit' : 'Why Sustainability'}
        </h2>

        <div className="space-y-6 leading-relaxed text-lg text-gray-700">
          {sustainabilityText[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ─────────── KPI-Strip ─────────── */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-extrabold">10+</p>
            <p className="mt-1 font-medium">
              {lang === 'de' ? 'Partnerunternehmen' : 'Partner Companies'}
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-extrabold">1&nbsp;000+</p>
            <p className="mt-1 font-medium">
              {lang === 'de' ? 'Geräte im Kreislauf' : 'Devices in Circulation'}
            </p>
          </div>

          <div>
            <p className="text-4xl md:text-5xl font-extrabold">
              100&nbsp;%<sup className="text-sm align-super">*</sup>
            </p>
            <p className="mt-1 font-medium">
              {lang === 'de' ? 'Kundenzufriedenheit' : 'Customer Satisfaction'}
            </p>
          </div>
        </div>

        {/* Fußnote */}
        <p className="mt-6 text-center text-sm text-primary/80">
          * {lang === 'de' ? '100 % auf eBay' : '100 % rating on eBay'}
        </p>
      </section>

      {/* ───────────── Section 2: Unser Ziel ───────────── */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {lang === 'de' ? 'Unser Ziel' : 'Our Goal'}
          </h2>

          <div className="space-y-6 leading-relaxed text-lg text-gray-700">
            {goalText[lang].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Section 3: Call-to-Action ───────────── */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h3 className="text-2xl font-semibold mb-6">
            {lang === 'de' ? 'Kontaktieren Sie uns jetzt' : 'Contact Us Now'}
          </h3>

          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-primary/90 transition"
          >
            {lang === 'de' ? 'Jetzt Kontakt aufnehmen' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
}
