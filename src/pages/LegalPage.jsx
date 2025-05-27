import React from 'react';

export default function LegalPage({ lang }) {
  return (
    <main className="py-16 px-4 md:px-8 lg:px-16 space-y-12">
      {/* Impressum / Imprint */}
      <section>
        <h1 className="text-4xl font-bold mb-4">
          {lang === 'de' ? 'Impressum' : 'Imprint'}
        </h1>
        <p className="leading-relaxed">
          {lang === 'de'
            ? 'Atabuy GmbH\nMusterstraße 1\n12345 Musterstadt\nDeutschland'
            : 'Atabuy GmbH\nSample Street 1\n12345 Sample City\nGermany'}
        </p>
        <p className="leading-relaxed">
          {lang === 'de'
            ? 'Geschäftsführer: Max Mustermann'
            : 'Managing Director: Max Mustermann'}
        </p>
        <p className="leading-relaxed">
          {lang === 'de'
            ? 'E-Mail: info@atabuy.de'
            : 'Email: info@atabuy.de'}
        </p>
      </section>

      {/* Datenschutzerklärung / Privacy Policy */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">
          {lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h2>
        <p className="leading-relaxed">
          {lang === 'de'
            ? 'Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten werden vertraulich behandelt und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.'
            : 'We take the protection of your personal data very seriously. Your data will be treated confidentially and in accordance with legal data protection regulations and this privacy policy.'}
        </p>
        <p className="leading-relaxed">
          {lang === 'de'
            ? 'Verantwortlich für die Datenverarbeitung auf dieser Website ist Atabuy GmbH, Musterstraße 1, 12345 Musterstadt, Deutschland.'
            : 'The entity responsible for data processing on this website is Atabuy GmbH, Sample Street 1, 12345 Sample City, Germany.'}
        </p>
      </section>

      {/* Nutzungsbedingungen / Terms & Conditions */}
      <section>
        <h2 className="text-3xl font-semibold mb-3">
          {lang === 'de' ? 'Nutzungsbedingungen' : 'Terms & Conditions'}
        </h2>
        <p className="leading-relaxed">
          {lang === 'de'
            ? 'Mit der Nutzung dieser Website erklären Sie sich mit den folgenden Bedingungen einverstanden. Wir behalten uns das Recht vor, diese Bedingungen jederzeit anzupassen.'
            : 'By using this website, you agree to the following conditions. We reserve the right to modify these terms at any time.'}
        </p>
        <ul className="list-disc list-inside space-y-2 leading-relaxed">
          <li>
            {lang === 'de'
              ? 'Alle Inhalte dieser Website sind urheberrechtlich geschützt.'
              : 'All content on this website is protected by copyright.'}
          </li>
          <li>
            {lang === 'de'
              ? 'Die Nutzung erfolgt auf eigene Gefahr.'
              : 'Use is at your own risk.'}
          </li>
          <li>
            {lang === 'de'
              ? 'Für Links zu externen Websites übernehmen wir keine Haftung.'
              : 'We assume no liability for links to external websites.'}
          </li>
        </ul>
      </section>
    </main>
  );
}
