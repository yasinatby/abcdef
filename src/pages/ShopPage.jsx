import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('Alle');

  const allCategories = ['Alle', ...new Set(products.flatMap(p => p.categories || []))];
  const filtered =
    filter === 'Alle' ? products : products.filter(p => p.categories?.includes(filter));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Shop</h1>

      {/* Externe Shops */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 text-center">
        <a
          href="https://www.ebay.de/usr/atabuy_de"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-blue-600 rounded-xl p-6 hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">🔗 ATABUY auf eBay</h2>
          <p className="text-blue-600">Jetzt zum eBay-Shop</p>
        </a>
        <a
          href="https://www.kleinanzeigen.de/s-bestandsliste.html?userId=148975628"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-green-600 rounded-xl p-6 hover:bg-green-50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">📦 ATABUY auf Kleinanzeigen</h2>
          <p className="text-green-600">Jetzt zu Kleinanzeigen</p>
        </a>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Produkte */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">Keine Produkte verfügbar.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id || p.name}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={p.image || 'https://via.placeholder.com/300x200?text=Kein+Bild'}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{p.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{p.description}</p>
                <p className="text-lg font-bold">€ {p.price}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {(p.categories || []).join(', ')}
                </p>

                <button
                  onClick={() => addToCart(p)}
                  className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                  🛒 In den Warenkorb
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
