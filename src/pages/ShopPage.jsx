import React from 'react';

export default function ShopPage({ lang }) {
  const ebayLink = 'https://www.ebay.de/usr/atabuy_de';

  return (
    <main className="py-16 px-4 md:px-8 lg:px-16 text-center space-y-6">
      {/* Unterbearbeitung Hinweis */}
      <h1 className="text-4xl font-bold">
        {lang === 'de' ? '🚧 Shop im Aufbau 🚧' : '🚧 Shop Under Construction 🚧'}
      </h1>
      <p className="text-lg leading-relaxed">
        {lang === 'de'
          ? 'Unser Shop wird gerade überarbeitet. Wir arbeiten fleißig daran, Ihnen bald ein noch besseres Einkaufserlebnis zu bieten!'
          : 'Our shop is currently being updated. We\'re working hard to bring you an even better shopping experience soon!'}
      </p>

      {/* Link zum eBay-Shop */}
      <a
        href={ebayLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        {lang === 'de'
          ? 'So lange finden Sie uns hier'
          : 'In the meantime find us here'}
      </a>
    </main>
  );
}