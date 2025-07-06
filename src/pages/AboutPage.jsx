import React from 'react';

export default function AboutPage({ lang }) {
  return (
    <main className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Über uns */}
        <section>
          <h1 className="text-4xl font-bold mb-4">
            {lang === 'de' ? 'Über uns' : 'About Us'}
          </h1>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Wir sind ein frisch gegründetes, inhabergeführtes Unternehmen mit Sitz in Baden-Württemberg. Als Ein-Personen-Betrieb bringe ich meine ganze Leidenschaft und Fachkompetenz dafür ein, Ihnen – ob im B2B-Umfeld oder als Privatkunde – maßgeschneiderte, innovative und gleichzeitig kosteneffiziente Lösungen im Bereich elektronischer Geräte anzubieten. Jeder Auftrag ist für mich persönlich, und ich lege größten Wert auf Qualität und Kundenzufriedenheit.'
              : 'We are a newly founded, owner-operated company based in Baden-Württemberg. As a one-person business, I bring all my passion and expertise to offer tailored, innovative, and cost-effective solutions in the field of electronic devices—whether in the B2B sector or for private customers. Every order is personal to me, and I place the highest value on quality and customer satisfaction.'}
          </p>
        </section>

        {/* Unsere Mission */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            {lang === 'de' ? 'Unsere Mission' : 'Our Mission'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Als junges Unternehmen strebe ich danach, technologische Innovationen für jeden zugänglich zu machen. Mein Fokus liegt auf einem handverlesenen Sortiment, das höchste Ansprüche an Qualität, Langlebigkeit und Umweltverträglichkeit erfüllt. So erhalten meine Kunden zukunftssichere Elektronik zu fairen Konditionen und tragen gleichzeitig zu mehr Nachhaltigkeit bei.'
              : 'As a young company, I strive to make technological innovations accessible to everyone. My focus is on a carefully curated selection that meets the highest standards of quality, durability, and environmental compatibility. This way, my customers receive future-proof electronics at fair conditions while contributing to greater sustainability.'}
          </p>
        </section>

        {/* Leistungsangebot */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            {lang === 'de' ? 'Leistungsangebot' : 'Our Services'}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-medium mb-2">
                {lang === 'de' ? 'B2B-Services' : 'B2B Services'}
              </h3>
              <p className="leading-relaxed">
                {lang === 'de'
                  ? 'Ich unterstütze kleine und mittlere Unternehmen dabei, ihre Arbeitsabläufe zu optimieren – von Industriecomputern und Automatisierungskomponenten bis hin zu spezialisierten Messlösungen. Sie erhalten eine persönliche Beratung, fundierte Machbarkeitsanalysen und Begleitung bis zur erfolgreichen Inbetriebnahme. So profitieren Sie von maßgeschneiderten Systemen, die Ihren Betrieb effizienter und zukunftssicher machen.'
                  : 'I support small and medium-sized businesses in optimizing their workflows—from industrial computers and automation components to specialized measurement solutions. You receive personal consultation, comprehensive feasibility analyses, and support through successful commissioning. Benefit from tailored systems that make your operations more efficient and future-proof.'}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-2">
                {lang === 'de' ? 'B2C-Angebote' : 'B2C Offers'}
              </h3>
              <p className="leading-relaxed">
                {lang === 'de'
                  ? 'Für Endverbraucher biete ich eine sorgfältig kuratierte Auswahl an Smartphones, Tablets und smarten Home-Devices zu transparenten Preisen. Direkt und ohne Umwege erhalten Sie individuellen Support – ganz ohne endlose Warteschleifen. Ich stehe Ihnen von der Produktberatung bis zur Einrichtung mit Rat und Tat zur Seite.'
                  : 'For end consumers, I offer a carefully curated selection of smartphones, tablets, and smart home devices at transparent prices. You get direct, personalized support—no endless waiting loops. I assist you from product consultation to setup with expertise and dedication.'}
              </p>
            </div>
          </div>
        </section>

        {/* Warum mit uns arbeiten? */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            {lang === 'de' ? 'Warum mit uns arbeiten?' : 'Why Work With Us?'}
          </h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li>
              <strong>
                {lang === 'de' ? 'Persönlicher Kontakt:' : 'Personal Contact:'}
              </strong>{' '}
              {lang === 'de'
                ? 'Sie kommunizieren direkt mit mir – ohne Umwege über Callcenter oder große Vertriebsstrukturen.'
                : 'You communicate directly with me—no intermediaries through call centers or large sales structures.'}
            </li>
            <li>
              <strong>
                {lang === 'de' ? 'Flexibilität & Schnelligkeit:' : 'Flexibility & Speed:'}
              </strong>{' '}
              {lang === 'de'
                ? 'Als Single-Operator reagiere ich rasch und passe mich Ihren Anforderungen individuell an.'
                : 'As a single operator, I respond quickly and adapt to your requirements individually.'}
            </li>
            <li>
              <strong>
                {lang === 'de' ? 'Attraktive Preise:' : 'Attractive Prices:'}
              </strong>{' '}
              {lang === 'de'
                ? 'Durch direkte Beschaffung und schlanke Abläufe gebe ich Einkaufsvorteile eins zu eins weiter.'
                : 'Through direct procurement and streamlined processes, I pass on purchasing advantages one-to-one.'}
            </li>
            <li>
              <strong>
                {lang === 'de' ? 'Nachhaltigkeit:' : 'Sustainability:'}
              </strong>{' '}
              {lang === 'de'
                ? 'Schon heute setze ich auf umweltfreundliche Verpackungen und unterstütze Rücknahmeprogramme für Altgeräte.'
                : 'I already rely on eco-friendly packaging and support take-back programs for old devices.'}
            </li>
          </ul>
        </section>

        {/* Über mich */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            {lang === 'de' ? 'Über mich' : 'About Me'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Mein Name ist Yasin Atabey, Gründer und alleiniger Ansprechpartner dieses Unternehmens. Mit jahrelanger Erfahrung in der Elektronikbranche lege ich Wert auf offene Kommunikation, schnelle Entscheidungswege und ein partnerschaftliches Miteinander. Ihre Zufriedenheit steht für mich stets an erster Stelle.'
              : 'My name is Yasin Atabey, founder and sole contact of this company. With years of experience in the electronics industry, I value open communication, fast decision-making, and a partnership-based approach. Your satisfaction is always my top priority.'}
          </p>
        </section>

        {/* Blick in die Zukunft */}
        <section>
          <h2 className="text-3xl font-semibold mb-3">
            {lang === 'de' ? 'Blick in die Zukunft' : 'Looking Ahead'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Mein Ziel ist es, das Produktportfolio stetig zu erweitern und digitale Services auszubauen – immer mit dem Anspruch, höchste Qualität mit wirtschaftlicher Vernunft zu verbinden. Gemeinsam mit Ihnen möchte ich diesen Weg gestalten und innovative Elektroniklösungen realisieren.'
              : 'My goal is to continuously expand the product portfolio and develop digital services—always with the aim of combining highest quality with economic sensibility. Together with you, I want to shape this path and realize innovative electronics solutions.'}
          </p>
        </section>

        {/* Abschluss */}
        <section>
          <p className="text-lg font-medium text-center">
            {lang === 'de'
              ? 'Herzlich willkommen – ich freue mich auf Ihre Anfrage und darauf, gemeinsam effiziente Elektroniklösungen zu verwirklichen!'
              : 'Welcome – I look forward to your inquiry and to realizing efficient electronics solutions together!'}
          </p>
        </section>
      </div>
    </main>
  );
}
