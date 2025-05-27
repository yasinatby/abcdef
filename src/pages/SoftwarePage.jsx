import React from 'react';
import { Link } from 'react-router-dom';

export default function SoftwarePage({ lang }) {
  return (
    <main className="py-16 px-4 md:px-8 lg:px-16">
      {/* Seitenüberschrift */}
      <section className="max-w-3xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold">
          {lang === 'de' ? 'Software Lösungen' : 'Software Solutions'}
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          {lang === 'de'
            ? 'Entdecken Sie unsere maßgeschneiderten Software-Lösungen, die Ihr Unternehmen digital voranbringen.'
            : 'Discover our tailored software solutions designed to propel your business forward.'}
        </p>
      </section>

      {/* Angebotsliste */}
      <section className="max-w-3xl mx-auto space-y-6">
        <ul className="list-disc list-inside space-y-2 leading-relaxed">
          <li>
            {lang === 'de'
              ? 'Individuelle Webanwendungen'  
              : 'Custom web applications'}
          </li>
          <li>
            {lang === 'de'
              ? 'Mobile Apps für iOS & Android'  
              : 'Mobile apps for iOS & Android'}
          </li>
          <li>
            {lang === 'de'
              ? 'IoT-Integration und Schnittstellen'  
              : 'IoT integration and interfaces'}
          </li>
          <li>
            {lang === 'de'
              ? 'Automatisierung von Geschäftsprozessen'  
              : 'Business process automation'}
          </li>
          <li>
            {lang === 'de'
              ? 'Datenanalyse & Visualisierung'  
              : 'Data analysis & visualization'}
          </li>
          <li>
            {lang === 'de'
              ? 'ERP- und CRM-Systeme'  
              : 'ERP and CRM systems'}
          </li>
          <li>
            {lang === 'de'
              ? 'Cloud-basierte Plattformen'  
              : 'Cloud-based platforms'}
          </li>
          <li>
            {lang === 'de'
              ? 'Software-Wartung & Support'  
              : 'Software maintenance & support'}
          </li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="max-w-3xl mx-auto mt-12 text-center">
        <p className="text-lg mb-4 leading-relaxed">
          {lang === 'de'
            ? 'Interessiert? Kontaktieren Sie uns für ein unverbindliches Angebot.'  
            : 'Interested? Contact us for a no-obligation quote.'}
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          {lang === 'de' ? 'Zur Kontaktseite' : 'Go to Contact'}
        </Link>
      </section>
    </main>
  );
}
