import React from 'react';

export default function LegalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      <p className="mb-4">
        Diese Datenschutzerklärung informiert Sie gemäß Artikel 13 und 14 der Datenschutz-Grundverordnung (DSGVO)
        über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten auf dieser Website. Der
        Schutz Ihrer personenbezogenen Daten hat für uns oberste Priorität.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Verantwortliche Stelle</h2>
      <p className="mb-4">
        ATABUY <br /> Ansprechpartner: Yasin Atabey <br /> E-Mail: info@atabuy.de
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Hosting und Zugriffsdaten</h2>
      <p className="mb-4">
        Unser Webangebot wird bei IONOS gehostet, das Frontend über GitHub Pages ausgeliefert, das Backend wird über
        Render bereitgestellt. Beim Aufruf der Website werden automatisch sogenannte Server-Logfiles erhoben. Dazu
        gehören: IP-Adresse, Datum/Uhrzeit des Zugriffs, besuchte Seiten, Browsertyp/-version und das
        Betriebssystem. Diese Daten sind technisch notwendig und dienen der Stabilität und Sicherheit der Website.
        Eine Zusammenführung mit anderen Daten erfolgt nicht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
      <p className="mb-4">
        Wir setzen nur technisch erforderliche Cookies ein, um grundlegende Funktionen der Website zu ermöglichen.
        Dazu gehören z. B. die Sitzungserhaltung nach Login. Die Speicherung erfolgt auf Basis von Art. 6 Abs. 1
        lit. f DSGVO.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Kontaktformular & Kommunikation</h2>
      <p className="mb-4">
        Bei Nutzung unseres Kontaktformulars übermitteln Sie personenbezogene Daten (z. B. Name, E-Mail, Nachricht).
        Diese Daten werden über den Anbieter Formspree (Formspree Inc., USA) verarbeitet. Die Verarbeitung dient der
        Bearbeitung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. b oder lit. f DSGVO. Ihre Daten werden verschlüsselt
        übermittelt und nach Abschluss der Bearbeitung gelöscht.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Newsletter</h2>
      <p className="mb-4">
        Wenn Sie unseren Newsletter abonnieren, verarbeiten wir Ihre E-Mail-Adresse und optional Ihren Namen. Die
        Anmeldung erfolgt im Double-Opt-In-Verfahren. Die Datenverarbeitung erfolgt mit Ihrer ausdrücklichen
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können sich jederzeit abmelden, Ihre Daten werden dann
        gelöscht.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Nutzerkonto, Login & Sicherheit</h2>
      <p className="mb-4">
        Zur Nutzung bestimmter Bereiche ist eine Registrierung erforderlich. Wir speichern Ihre Zugangsdaten (E-Mail
        und Passwort, verschlüsselt) und verarbeiten diese zur Nutzerverwaltung. Optional nutzen wir eine
        Zwei-Faktor-Authentifizierung per E-Mail. Ihre Authentifizierungsdaten werden niemals im Klartext
        gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Bestellungen & Zahlungen über Stripe</h2>
      <p className="mb-4">
        Wenn Sie in unserem Shop einkaufen, verarbeiten wir zur Vertragsabwicklung Ihre personenbezogenen Daten
        (z. B. Name, Lieferadresse, E-Mail). Die Zahlung erfolgt über Stripe Payments Europe Ltd. (Irland).
        Zahlungsdaten werden direkt an Stripe übermittelt. Weitere Informationen: <a className="text-blue-500 underline" href="https://stripe.com/de/privacy" target="_blank" rel="noreferrer">Stripe-Datenschutz</a>. Die Verarbeitung
        erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Keine Analyse- und Tracking-Tools</h2>
      <p className="mb-4">
        Wir setzen keinerlei Analyse- oder Trackingtools (z. B. Google Analytics) ein. Es findet kein
        personenbezogenes Nutzungsprofiling statt.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Links zu Drittanbietern</h2>
      <p className="mb-4">
        Unsere Seite verlinkt auf externe Seiten (z. B. eBay-Shop). Beim Anklicken dieser Links gelten die jeweiligen
        Datenschutzbestimmungen der Drittanbieter.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Ihre Rechte als betroffene Person</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerspruch gegen Datenverarbeitung (Art. 21 DSGVO)</li>
        <li>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
        <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">11. Auftragsverarbeitung & Datenweitergabe</h2>
      <p className="mb-4">
        Mit allen eingesetzten Dienstleistern (z. B. IONOS, Render, GitHub, Formspree, Stripe) bestehen
        Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO. Datenübermittlungen in Drittländer (z. B. USA) basieren
        auf Standardvertragsklauseln der EU-Kommission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">12. Aktualität dieser Datenschutzerklärung</h2>
      <p className="mb-4">
        Diese Datenschutzerklärung ist aktuell gültig (Stand: 5. Juli 2025). Wir behalten uns vor, sie bei Bedarf zu
        ändern. Die jeweils aktuelle Fassung finden Sie jederzeit auf dieser Seite.
      </p>
    </div>
  );
}


      {/* Impressum / Imprint at bottom */}
      <section>
        <h1 className="text-4xl font-bold mb-4">
          {lang === 'de' ? 'Impressum' : 'Imprint'}
        </h1>
        <p className="leading-relaxed whitespace-pre-line">
          {lang === 'de'
            ? `Atabuy – Yasin Atabey
Lindenstraße, 40
73333 Gingen an der FIls, Deutschland
E-Mail: info@atabuy.de`
            : `Atabuy – Yasin Atabey
Lindenstraße, 40
73333 Gingen an der Fils, Germany
Email: info@atabuy.de`}
        </p>
      </section>
    
    
