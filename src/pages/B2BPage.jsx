import React from 'react';

export default function B2BPage({ lang }) {
  return (
    <main className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Seiteüberschrift */}
        <section>
          <h1 className="text-4xl font-bold mb-4">
            {lang === 'de' ? 'B2B Lösungen' : 'B2B Solutions'}
          </h1>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Unsere B2B-Lösungen richten sich an kleine und mittelständische Unternehmen, die Wert auf Effizienz, Zuverlässigkeit und maßgeschneiderte Technologie legen. Von der ersten Beratung bis zur finalen Inbetriebnahme begleiten wir Sie persönlich und halten dabei höchste Qualitätsstandards ein.'
              : 'Our B2B solutions cater to small and medium-sized businesses that value efficiency, reliability, and customized technology. From initial consultation to final deployment, we guide you personally while adhering to the highest quality standards.'}
          </p>
        </section>

        {/* Unsere Dienstleistungen */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            {lang === 'de' ? 'Unsere Dienstleistungen' : 'Our Services'}
          </h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              <strong>{lang === 'de' ? 'Beratung & Planung:' : 'Consulting & Planning:'}</strong>{' '}
              {lang === 'de'
                ? 'Analyse Ihrer Anforderungen, Machbarkeitsstudien und Konzeptentwicklung.'
                : 'Requirement analysis, feasibility studies, and concept development.'}
            </li>
            <li>
              <strong>{lang === 'de' ? 'Systemintegration:' : 'System Integration:'}</strong>{' '}
              {lang === 'de'
                ? 'Nahtlose Verbindung von Hard- und Softwarekomponenten für Ihren individuellen Workflow.'
                : 'Seamless integration of hardware and software components for your custom workflow.'}
            </li>
            <li>
              <strong>{lang === 'de' ? 'Schulung & Training:' : 'Training & Workshops:'}</strong>{' '}
              {lang === 'de'
                ? 'Praktische Workshops und Schulungen für Ihr Team vor Ort oder remote.'
                : 'Hands-on workshops and training sessions for your team on-site or remotely.'}
            </li>
            <li>
              <strong>{lang === 'de' ? 'Wartung & Support:' : 'Maintenance & Support:'}</strong>{' '}
              {lang === 'de'
                ? 'Regelmäßige Wartung, schnelle Fehlerbehebung und langfristige Betreuung.'
                : 'Regular maintenance, rapid troubleshooting, and long-term support.'}
            </li>
          </ul>
        </section>

        {/* Unser Ansatz */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            {lang === 'de' ? 'Unser Ansatz' : 'Our Approach'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Wir setzen auf transparente Prozesse, enge Abstimmung und kontinuierliche Optimierung. Ihr Feedback fließt in jede Projektphase ein, damit wir flexibel auf Änderungen reagieren und stets die beste Lösung liefern können.'
              : 'We rely on transparent processes, close coordination, and continuous optimization. Your feedback is incorporated at every project stage, enabling us to adapt to changes and consistently deliver the best solution.'}
          </p>
        </section>

        {/* Ihre Vorteile */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            {lang === 'de' ? 'Ihre Vorteile' : 'Your Benefits'}
          </h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              {lang === 'de'
                ? 'Maßgeschneiderte Technologie, die exakt Ihren Anforderungen entspricht.'
                : 'Customized technology tailored precisely to your needs.'}
            </li>
            <li>
              {lang === 'de'
                ? 'Zeit- und Kosteneinsparungen durch effiziente Prozesse.'
                : 'Time and cost savings through efficient processes.'}
            </li>
            <li>
              {lang === 'de'
                ? 'Persönlicher Ansprechpartner mit schneller Reaktionszeit.'
                : 'Personal point of contact with rapid response times.'}
            </li>
            <li>
              {lang === 'de'
                ? 'Langfristige Partnerschaft und nachhaltige Betreuung.'
                : 'Long-term partnership and sustainable support.'}
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
