import React from 'react';

export default function LegalPage({ lang }) {
  return (
    <main className="py-16 px-4 md:px-8 lg:px-16 space-y-12 whitespace-pre-line">
      {/* Datenschutzerklärung / Privacy Policy */}
      <section>
        <h1 className="text-3xl font-semibold mb-4">
          {lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>

        {/* 1 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de'
              ? '1. Bereitstellung der Website und Server-Logfiles'
              : '1. Provision of the Website and Server Log Files'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Unsere Website wird bei IONOS gehostet und über GitHub Pages bereitgestellt. Beim Besuch der Website erhebt der Hosting-Dienstleister automatisch Zugriffsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, besuchte Seiten). Diese Daten werden in sogenannten Server-Logfiles gespeichert und dienen ausschließlich der Bereitstellung und Sicherheit des Angebots. Die Verarbeitung erfolgt auf Basis unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Die Log-Daten werden nicht mit anderen Datenquellen zusammengeführt und werden nach maximal 90 Tagen gelöscht.'
              : 'Our website is hosted by IONOS and served via GitHub Pages. When you visit the site, the hosting provider automatically collects access data (e.g. IP address, date and time of access, browser type, pages visited). These data are stored in server log files and are used solely for providing and securing the service. Processing is based on our legitimate interest (Art. 6(1)(f) GDPR). Log data are not merged with other data sources and are deleted after a maximum of 90 days.'}
          </p>
        </div>

        {/* 2 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '2. Cookies' : '2. Cookies'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Wir setzen nur technisch notwendige Cookies ein, um grundlegende Funktionen der Website zu gewährleisten (z. B. Sitzungsverwaltung). Technisch notwendige Cookies erfordern keine gesonderte Einwilligung, da sie für den Betrieb der Seite unerlässlich sind. Ohne diese Cookies ist die Funktionalität der Website eingeschränkt.'
              : 'We use only technically necessary cookies to ensure basic website functions (e.g. session management). Technically necessary cookies do not require separate consent as they are essential for site operation. Without these cookies, site functionality is limited.'}
          </p>
        </div>

        {/* 3 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '3. Kontaktformular' : '3. Contact Form'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Über das Kontaktformular können Sie uns Name (bzw. Firmenname), E-Mail-Adresse und Ihre Nachricht übermitteln. Der Formularservice wird von Formspree (Formspree Inc., USA) betrieben. Die Datenübermittlung erfolgt verschlüsselt per HTTPS. Formspree verarbeitet die Daten in unserem Auftrag und leitet sie uns per E-Mail weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vorvertrags-/Vertragsabwicklung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse), ggf. zusätzlich Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ihre Daten werden nur so lange gespeichert, wie sie zur Bearbeitung Ihrer Anfrage erforderlich sind.'
              : 'Through the contact form you can submit your name (or company name), email address, and message. The form service is operated by Formspree (Formspree Inc., USA). Data transmission is encrypted via HTTPS. Formspree processes the data on our behalf and forwards it to us by email. Legal basis is Art. 6(1)(b) GDPR (pre-contractual/contractual processing) or Art. 6(1)(f) GDPR (legitimate interest), and where you provide additional data, your consent (Art. 6(1)(a) GDPR). Data are retained only as long as necessary to process your request.'}
          </p>
        </div>

        {/* 4 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '4. Newsletter' : '4. Newsletter'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Für den Newsletterversand erheben wir Name und E-Mail-Adresse über ein Formular bei Formspree. Die Anmeldung erfolgt im Double-Opt-In-Verfahren; Sie bestätigen per E-Mail, dass Sie den Newsletter erhalten möchten. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit durch Klick auf den Abmeldelink im Newsletter oder durch Nachricht an uns widerrufen. Ihre Daten werden nach Abmeldung gelöscht.'
              : 'For our newsletter, we collect name and email address via a Formspree form. Registration follows a double opt-in process; you confirm by email that you wish to receive the newsletter. Legal basis is your consent (Art. 6(1)(a) GDPR). You can withdraw your consent at any time via the unsubscribe link in the newsletter or by contacting us. Data are deleted after unsubscribing.'}
          </p>
        </div>

        {/* 5 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '5. Keine Analyse- und Tracking-Tools / Keine Social-Media-Plugins' : '5. No Analytics or Tracking Tools / No Social Media Plugins'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Wir verwenden keine Analyse- oder Tracking-Dienste (z. B. Google Analytics) und keine Social-Media-Plugins. Es findet kein personenbezogenes Tracking statt.'
              : 'We do not use analytics or tracking services (e.g. Google Analytics) or social media plugins. No personal tracking takes place.'}
          </p>
        </div>

        {/* 6 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '6. Externe Links (eBay-Shop)' : '6. External Links (eBay Shop)'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Unsere Website enthält einen Link zu unserem externen eBay-Shop. Wenn Sie darauf klicken, verlassen Sie unsere Seite und gelangen zu eBay. Ab diesem Zeitpunkt gilt die Datenschutzerklärung von eBay. Es werden keine weiteren personenbezogenen Daten an eBay übermittelt.'
              : 'Our website contains a link to our external eBay shop. If you click it, you leave our site and go to eBay. From that point, eBay privacy policy applies. No further personal data is transmitted to eBay.'}
          </p>
        </div>

        {/* 7 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '7. Datensicherheit' : '7. Data Security'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Wir schützen Ihre Daten durch technische und organisatorische Maßnahmen. Die Übertragung sensibler Informationen erfolgt stets SSL-verschlüsselt (erkennbar an “https://” und dem Schloss-Icon im Browser). Ein vollständiger Schutz vor Zugriffen Dritter ist jedoch nicht möglich.'
              : 'We protect your data through technical and organizational measures. Transmission of sensitive information is always SSL encrypted (visible at “https://” and the lock icon in your browser). However, complete protection from third-party access is not possible.'}
          </p>
        </div>

        {/* 8 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '8. Speicherdauer' : '8. Storage Period'}
          </h2>
          <ul className="list-disc list-inside leading-relaxed">
            {lang === 'de' ? (
              <>  
                <li>Server-Logs: max. 90 Tage</li>
                <li>Kontaktanfragen: bis Abschluss der Bearbeitung, danach Löschung</li>
                <li>Newsletter-Daten: bis zum Widerruf des Abonnements, danach Löschung</li>
                <li>Länger aufbewahrte Daten unterliegen ggf. handels- oder steuerrechtlichen Aufbewahrungsfristen und werden danach gelöscht.</li>
              </>
            ) : (
              <>  
                <li>Server logs: max. 90 days</li>
                <li>Contact requests: until processing is complete, then deleted</li>
                <li>Newsletter data: until unsubscribed, then deleted</li>
                <li>Data retained longer may be subject to commercial or tax retention periods, then deleted.</li>
              </>
            )}
          </ul>
        </div>

        {/* 9 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '9. Ihre Betroffenenrechte' : '9. Your Data Subject Rights'}
          </h2>
          <ul className="list-decimal list-inside leading-relaxed">
            {lang === 'de' ? (
              <>  
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen Verarbeitung (Art. 21 DSGVO)</li>
                <li>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                <li>Beschwerde bei Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </>
            ) : (
              <>  
                <li>Right to access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
                <li>Right to withdraw consent (Art. 7(3) GDPR)</li>
                <li>Right to lodge a complaint (Art. 77 GDPR)</li>
              </>
            )}
          </ul>
          <p className="mt-2 leading-relaxed">
            {lang === 'de'
              ? 'Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter den oben genannten Kontaktdaten.'
              : 'To exercise your rights, please contact us using the contact details above.'}
          </p>
        </div>

        {/* 10 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '10. Externe Dienstleister und Auftragsverarbeitung' : '10. External Service Providers and Data Processing Agreements'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Wir haben mit allen externen Dienstleistern (IONOS, GitHub Pages, Formspree) Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO abgeschlossen. Datenübermittlungen in Drittländer (USA) basieren auf EU-Standardvertragsklauseln.'
              : 'We have concluded data processing agreements under Art. 28 GDPR with all external service providers (IONOS, GitHub Pages, Formspree). Data transfers to third countries (USA) are based on EU standard contractual clauses.'}
          </p>
        </div>

        {/* 11 */}
        <div className="mb-4">
          <h2 className="text-xl font-medium mb-2">
            {lang === 'de' ? '11. Aktualität und Änderungen' : '11. Updates and Changes'}
          </h2>
          <p className="leading-relaxed">
            {lang === 'de'
              ? 'Diese Datenschutzerklärung ist aktuell gültig (Stand: [Datum]). Bei Änderungen werden wir die neue Version auf unserer Website veröffentlichen. Bitte prüfen Sie regelmäßig den Stand der Erklärung.'
              : 'This privacy policy is current as of [Date]. In case of changes, we will publish the new version on our website. Please review the policy periodically.'}
          </p>
        </div>
      </section>

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
    </main>
  );
}
